// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

/* eslint-disable indent */

import { web3FromAddress } from '@polkadot/extension-dapp'
import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types'
import { VotingDelegating, VotingDirect } from '@polkadot/types/interfaces'
import styled from '@xstyled/styled-components'
import isEmpty from 'lodash/isEmpty'
import React, { useContext, useEffect, useState } from 'react'
import { Grid, Icon } from 'semantic-ui-react'

import { ApiContext } from '../../context/ApiContext'
import { NotificationContext } from '../../context/NotificationContext'
import { DELEGATEES } from '../../global/delegatees'
import { Delegatee, LoadingStatusType, NotificationStatus } from '../../types'
import AddressComponent from '../../ui-components/Address'
import Button from '../../ui-components/Button'
import Card from '../../ui-components/Card'
import { Form } from '../../ui-components/Form'
import Loader from '../../ui-components/Loader'

interface AccountDelegationMap {
  [accountId: string]: DelegationStatus
}

interface AccountsDetails {
  accounts: InjectedAccountWithMeta[]
}

interface DelegationStatus {
  isDelegating: boolean
  delegating?: VotingDelegating
  direct?: VotingDirect
}

interface Props {
  accounts: InjectedAccountWithMeta[]
  className?: string
  onManageAddress: (account: InjectedAccountWithMeta) => void
}

const Addresses = ({ accounts, className, onManageAddress }: Props): JSX.Element => {
  const { queueNotification } = useContext(NotificationContext)
  const { api, apiReady } = useContext(ApiContext)

  const [accountsDelegations, setAccountsDelegations] = useState<AccountDelegationMap>({})
  const [loadingStatus, setLoadingStatus] = useState<LoadingStatusType>({
    isLoading: true,
    message: 'Fetching accounts from extension'
  })

  // Generate delegation status map for each account ID
  useEffect(() => {
    if (!api || !apiReady || accounts.length === 0) {
      return
    }

    ;(async () => {
      const votingOfCalls = accounts.reduce<Promise<any>[]>((memo, account) => {
        memo.push(api.query.democracy.votingOf(account.address))
        return memo
      }, [])

      const votingOfResults = await Promise.all(votingOfCalls)
      const votingOf = votingOfResults.reduce<AccountDelegationMap>((memo, result, i) => {
        const resultJson = result.toJSON()
        const isDelegating = !!resultJson.delegating
        return {
          ...memo,
          [accounts[i].address]: { isDelegating, ...result.toJSON() }
        }
      }, {})

      setAccountsDelegations(votingOf)

      setLoadingStatus({ isLoading: false, message: '' })
    })()
  }, [accounts, api, apiReady])

  const handleUndelegateClick = async (address: string) => {
    if (!api || !apiReady) return

    setLoadingStatus({ isLoading: true, message: 'Waiting for signature' })

    const injector = await web3FromAddress(address)
    const { signer } = injector

    const undelegateTx = api.tx.democracy.undelegate()

    undelegateTx
      .signAndSend(address, { signer }, async ({ status }) => {
        if (status.isInBlock) {
          console.log(`Completed at block hash #${status.asInBlock.toString()}`)

          const votingOfResponse = await api.query.democracy.votingOf(address)
          const votingOf = votingOfResponse.toJSON()

          const isDelegating = !!(votingOf as any).delegating

          setAccountsDelegations((prevState) => {
            return {
              ...prevState,
              [address]: {
                isDelegating,
                ...(votingOf as any)
              }
            }
          })

          queueNotification({
            header: 'Success!',
            message: 'Account has been successfully undelegated.',
            status: NotificationStatus.SUCCESS
          })

          setLoadingStatus({ isLoading: false, message: '' })
        } else {
          console.log(`Current status: ${status.type}`)

          if (status.isBroadcast) {
            setLoadingStatus({ isLoading: true, message: 'Broadcasting the delegation' })
          }
        }
      })
      .catch((error) => {
        console.log(':( transaction failed')
        console.error('ERROR:', error)

        setLoadingStatus({ isLoading: false, message: '' })
        queueNotification({
          header: 'Failed!',
          message: error.message,
          status: NotificationStatus.ERROR
        })
      })
  }

  const handleSetDelegationClick = async (address: string) => {
    const account = accounts.filter((a) => a.address === address)[0]
    onManageAddress(account)
  }

  const addressList = ({ accounts }: AccountsDetails) => {
    return (
      <>
        <Form.Group>
          <Form.Field width={16}>
            <Grid>
              <Grid.Column width={5}>
                <label className="header">Available addresses</label>
              </Grid.Column>
              <Grid.Column width={2} />
              <Grid.Column width={5}>
                <label className="header">Delegating to</label>
              </Grid.Column>
            </Grid>

            {loadingStatus.isLoading ? (
              <Card className={'LoaderWrapper'}>
                <Loader text={loadingStatus.message} />
              </Card>
            ) : (
              <div className="ui list">
                {!isEmpty(accountsDelegations) &&
                  accounts.map((account) => {
                    const address = account.address
                    if (!address) return <></>

                    const delegationStatus = accountsDelegations[account.address]
                    const { isDelegating } = delegationStatus
                    const delegatee = isDelegating
                      ? DELEGATEES.filter(
                          (d) => d.address === delegationStatus?.delegating?.target.toString()
                        )[0]
                      : null

                    return (
                      address && (
                        <Grid
                          key={address}
                          style={{
                            alignItems: 'center'
                          }}
                        >
                          <Grid.Column width={5}>
                            <div className="item">
                              <AddressComponent
                                className="item"
                                address={address}
                                extensionName={account.meta.name}
                              />
                            </div>
                          </Grid.Column>
                          <Grid.Column width={2}>
                            <Icon name={'arrow right'} />
                          </Grid.Column>
                          <Grid.Column width={5}>
                            {isDelegating ? (
                              <>
                                <AddressComponent
                                  className="item"
                                  address={(delegatee as Delegatee).address}
                                  extensionName={(delegatee as Delegatee).name}
                                />
                              </>
                            ) : (
                              <Button
                                className={'primary'}
                                onClick={() => handleSetDelegationClick(address)}
                              >
                                <Icon name="chain" />
                                Set Delegation
                              </Button>
                            )}
                          </Grid.Column>
                          <Grid.Column width={4}>
                            {isDelegating && (
                              <Button
                                className={'secondary'}
                                onClick={() => handleUndelegateClick(address)}
                              >
                                <Icon name="broken chain" />
                                Undelegate
                              </Button>
                            )}
                          </Grid.Column>
                        </Grid>
                      )
                    )
                  })}
              </div>
            )}
          </Form.Field>
        </Form.Group>
      </>
    )
  }

  return (
    <Form className={className} standalone={false}>
      {addressList({
        accounts
      })}
    </Form>
  )
}

export default styled(Addresses)`
  .button-container {
    display: flex;
    align-items: center;
    height: 100%;
  }

  .default-label {
    display: flex;
    align-items: center;
    height: 100%;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.green_primary};
    padding: 0.7rem;
    line-height: 1.6rem;
  }
`
