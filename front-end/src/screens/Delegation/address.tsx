// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
/* eslint-disable indent,prettier/prettier,@typescript-eslint/no-unused-vars */

import { web3Accounts, web3Enable, web3FromAddress, web3FromSource } from '@polkadot/extension-dapp'
import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types'
import { Keyring } from '@polkadot/keyring'
import { VotingDelegating, VotingDirect } from '@polkadot/types/interfaces'
import { AnyJson } from '@polkadot/types/types'
import { stringToHex } from '@polkadot/util'
import styled from '@xstyled/styled-components'
import BN from 'bn.js'
import isEmpty from 'lodash/isEmpty'
import React, { useContext, useEffect, useMemo, useState } from 'react'
import { DropdownProps, Grid, Icon, Popup, Select } from 'semantic-ui-react'
import { APPNAME } from 'src/global/appName'
import getNetwork from 'src/util/getNetwork'

import ExtensionNotDetected from '../../components/ExtensionNotDetected'
import { ApiContext } from '../../context/ApiContext'
import { NotificationContext } from '../../context/NotificationContext'
import { UserDetailsContext } from '../../context/UserDetailsContext'
import {
  useAddressLinkConfirmMutation,
  useAddressLinkStartMutation,
  useAddressUnlinkMutation,
  useSetDefaultAddressMutation
} from '../../generated/graphql'
import { DELEGATEES } from '../../global/delegatees'
import { handleTokenChange } from '../../services/auth.service'
import { Delegatee, NotificationStatus } from '../../types'
import AddressComponent from '../../ui-components/Address'
import BalanceInput from '../../ui-components/BalanceInput'
import Button from '../../ui-components/Button'
import DelegateeSelectionForm from '../../ui-components/DelegateeSelectionForm'
import { Form } from '../../ui-components/Form'
import HelperTooltip from '../../ui-components/HelperTooltip'
import cleanError from '../../util/cleanError'
import getEncodedAddress from '../../util/getEncodedAddress'
import getExtensionUrl from '../../util/getExtensionUrl'

interface Props {
  className?: string
}

interface AccountDelegationMap {
  [accountId: string]: DelegationStatus
}

interface DelegationStatus {
  isDelegating: boolean
  delegating?: VotingDelegating
  direct?: VotingDirect
}

interface EditDetails {
  isEdit: boolean
  voterAccount: InjectedAccountWithMeta | null
}

// const NETWORK = getNetwork()

const INIT_EDIT_DATA = {
  isEdit: false,
  voterAccount: null
}

const Address = ({ className }: Props): JSX.Element => {
  const currentUser = useContext(UserDetailsContext)
  const [accounts, setAccounts] = useState<InjectedAccountWithMeta[]>([])
  const [accountsDelegations, setAccountsDelegations] = useState<AccountDelegationMap>({})
  const [{ isEdit, voterAccount }, setEditDetails] = useState<EditDetails>(INIT_EDIT_DATA)
  const [extensionNotAvailable, setExtensionNotAvailable] = useState(false)
  // const [addressLinkStartMutation] = useAddressLinkStartMutation()
  // const [addressLinkConfirmMutation] = useAddressLinkConfirmMutation()
  // const [addressUnlinkMutation] = useAddressUnlinkMutation()
  // const [setDefaultAddressMutation] = useSetDefaultAddressMutation()
  // const { queueNotification } = useContext(NotificationContext)
  const { api, apiReady } = useContext(ApiContext)
  const [lockedBalance, setLockedBalance] = useState<BN | undefined>(undefined)
  const onBalanceChange = (balance: BN) => setLockedBalance(balance)

  const handleDetect = async () => {
    const extensions = await web3Enable(APPNAME)

    if (extensions.length === 0) {
      setExtensionNotAvailable(true)
      return
    } else {
      setExtensionNotAvailable(false)
    }

    const allAccounts = await web3Accounts()

    setAccounts(allAccounts)
  }

  // Get all accounts if extension was installed
  useEffect(() => {
    ;(async () => {
      const extensions = await web3Enable(APPNAME)

      if (extensions.length === 0) {
        setExtensionNotAvailable(true)
        return
      } else {
        setExtensionNotAvailable(false)
      }

      const allAccounts = await web3Accounts()

      setAccounts(allAccounts)
    })()
  }, [])

  // Generate delegation status map for each account ID
  useEffect(() => {
    if (!api || !apiReady || accounts.length === 0) return
    ;(async () => {
      const votingOfCalls = accounts.reduce<Promise<any>[]>((memo, account) => {
        memo.push(api.query.democracy.votingOf(account.address))
        return memo
      }, [])

      const votingOfResults = await Promise.all(votingOfCalls)
      const votingOf = await votingOfResults.reduce<AccountDelegationMap>((memo, result, i) => {
        const resultJson = result.toJSON()
        const isDelegating = !!resultJson.delegating
        return {
          ...memo,
          [accounts[i].address]: { isDelegating, ...result.toJSON() }
        }
      }, {})

      setAccountsDelegations(votingOf)
    })()
  }, [accounts, api, apiReady])

  // const handleDefault = async (address: InjectedAccountWithMeta['address']) => {
  //   try {
  //     const addressDefaultResult = await setDefaultAddressMutation({
  //       variables: {
  //         address
  //       }
  //     })
  //
  //     if (addressDefaultResult.data?.setDefaultAddress?.token) {
  //       handleTokenChange(addressDefaultResult.data?.setDefaultAddress?.token, currentUser)
  //     }
  //
  //     queueNotification({
  //       header: 'Success!',
  //       message: addressDefaultResult.data?.setDefaultAddress?.message || '',
  //       status: NotificationStatus.SUCCESS
  //     })
  //   } catch (error) {
  //     console.error(error)
  //     queueNotification({
  //       header: 'Failed!',
  //       message: cleanError(error.message),
  //       status: NotificationStatus.ERROR
  //     })
  //   }
  // }
  //
  // const handleLink = async (
  //   address: InjectedAccountWithMeta['address'],
  //   account: InjectedAccountWithMeta
  // ) => {
  //   try {
  //     const injected = await web3FromSource(account.meta.source)
  //     const signRaw = injected && injected.signer && injected.signer.signRaw
  //
  //     if (!signRaw) {
  //       return console.error('Signer not available')
  //     }
  //
  //     const addressLinkStartResult = await addressLinkStartMutation({
  //       variables: {
  //         address,
  //         network: NETWORK
  //       }
  //     })
  //
  //     if (!addressLinkStartResult?.data?.addressLinkStart) {
  //       return console.error('Address link start mutaion failed')
  //     }
  //
  //     const { signature } = await signRaw({
  //       address,
  //       data: stringToHex(addressLinkStartResult.data.addressLinkStart.sign_message || ''),
  //       type: 'bytes'
  //     })
  //
  //     const addressLinkConfirmResult = await addressLinkConfirmMutation({
  //       variables: {
  //         address_id: addressLinkStartResult.data.addressLinkStart.address_id || 0,
  //         signature
  //       }
  //     })
  //
  //     if (addressLinkConfirmResult.data?.addressLinkConfirm?.token) {
  //       handleTokenChange(addressLinkConfirmResult.data?.addressLinkConfirm?.token, currentUser)
  //     }
  //
  //     queueNotification({
  //       header: 'Success!',
  //       message: addressLinkConfirmResult?.data?.addressLinkConfirm?.message || '',
  //       status: NotificationStatus.SUCCESS
  //     })
  //   } catch (error) {
  //     console.error(error)
  //     queueNotification({
  //       header: 'Failed!',
  //       message: cleanError(error.message),
  //       status: NotificationStatus.ERROR
  //     })
  //   }
  // }
  //
  // const handleUnlink = async (address: InjectedAccountWithMeta['address']) => {
  //   try {
  //     const addressUnlinkConfirmResult = await addressUnlinkMutation({
  //       variables: {
  //         address
  //       }
  //     })
  //
  //     if (addressUnlinkConfirmResult.data?.addressUnlink?.token) {
  //       handleTokenChange(addressUnlinkConfirmResult.data?.addressUnlink?.token, currentUser)
  //     }
  //
  //     queueNotification({
  //       header: 'Success!',
  //       message: addressUnlinkConfirmResult?.data?.addressUnlink?.message || '',
  //       status: NotificationStatus.SUCCESS
  //     })
  //   } catch (error) {
  //     console.error(error)
  //     queueNotification({
  //       header: 'Failed!',
  //       message: cleanError(error.message),
  //       status: NotificationStatus.ERROR
  //     })
  //   }
  // }

  // const linkIcon = (
  //   <>
  //     <Icon name="chain" />
  //     Link
  //   </>
  // )
  // const unlinkIcon = (
  //   <>
  //     <Icon name="broken chain" />
  //     Unlink
  //   </>
  // )

  const [selectedDelegatee, setSelectedDelegatee] = useState<Delegatee>(DELEGATEES[0])

  const onDelegateeChange = (
    event: React.SyntheticEvent<HTMLElement, Event>,
    data: DropdownProps
  ) => {
    const { value } = data
    const delegateeValues = Object.values(DELEGATEES)
    let selectedDelegateeIndex = 0
    for (const key of Object.keys(delegateeValues)) {
      if (delegateeValues[Number(key)].address === value) {
        selectedDelegateeIndex = Number(key)
        break
      }
    }

    setSelectedDelegatee(DELEGATEES[selectedDelegateeIndex])
    // setDelegated(false)
  }

  const handleSaveDelegateClick = async () => {
    if (!api || !apiReady || !lockedBalance) return

    // setLoadingStatus({ isLoading: true, message: 'Waiting for signature' })

    const address = (voterAccount as InjectedAccountWithMeta).address
    const injector = await web3FromAddress(address)
    const { signer } = injector

    const delegateTx = api.tx.democracy.delegate(
      selectedDelegatee.address,
      conviction,
      lockedBalance
    )

    delegateTx
      .signAndSend(address, { signer }, ({ status }) => {
        if (status.isInBlock) {
          api.query.democracy.votingOf(address).then((result) => {
            const resultJson = result.toJSON()
            const isDelegating = !!(resultJson as any).delegating

            setAccountsDelegations((prevState) => {
              return {
                ...prevState,
                [address]: {
                  isDelegating,
                  ...(resultJson as any)
                }
              }
            })

            setEditDetails({ isEdit: false, voterAccount: null })
          })
          // setDelegated(true)
          // setLoadingStatus({ isLoading: false, message: '' })
          // queueNotification({
          //   header: 'Success!',
          //   message: `Vote will be delegated to ${selectedDelegatee.name}.`,
          //   status: NotificationStatus.SUCCESS
          // })
          console.log(`Completed at block hash #${status.asInBlock.toString()}`)
        } else {
          if (status.isBroadcast) {
            // setLoadingStatus({ isLoading: true, message: 'Broadcasting the delegation' })
          }
          console.log(`Current status: ${status.type}`)
        }
      })
      .catch((error) => {
        // setDelegated(false)
        // setLoadingStatus({ isLoading: false, message: '' })
        console.log(':( transaction failed')
        console.error('ERROR:', error)
        // queueNotification({
        //   header: 'Failed!',
        //   message: error.message,
        //   status: NotificationStatus.ERROR
        // })
      })
  }

  const handleUndelegateClick = async (address: string) => {
    if (!api || !apiReady) return

    console.log(address)

    const injector = await web3FromAddress(address)
    const { signer } = injector

    const undelegateTx = api.tx.democracy.undelegate()

    undelegateTx
      .signAndSend(address, { signer }, ({ status }) => {
        if (status.isInBlock) {
          api.query.democracy.votingOf(address).then((result) => {
            const resultJson = result.toJSON()
            const isDelegating = !!(resultJson as any).delegating

            setAccountsDelegations((prevState) => {
              return {
                ...prevState,
                [address]: {
                  isDelegating,
                  ...(resultJson as any)
                }
              }
            })

            setEditDetails({ isEdit: false, voterAccount: null })
          })
        } else if (status.isBroadcast) {
          //
        }
      })
      .catch((error) => {
        console.log(':( transaction failed')
        console.error('ERROR:', error)
      })
  }

  const handleSetDelegationClick = async (address: string) => {
    const voterAccount = accounts.filter((a) => a.address === address)[0]

    setEditDetails({
      isEdit: true,
      voterAccount
    })
  }

  // const UnlinkButton = ({ address }: { address: string }) => {
  // eslint-disable-next-line max-len
  //   const StyledUnlinkButton = ({ withClickHandler = false }: { withClickHandler?: boolean }) => (
  //     <Button
  //       className={'social'}
  //       disabled={withClickHandler ? false : true}
  //       negative
  //       onClick={() => (withClickHandler ? handleUnlink(address) : null)}
  //     >
  //       {unlinkIcon}
  //     </Button>
  //   )
  //
  //   return currentUser.defaultAddress === address ? (
  //     <Popup
  //       trigger={
  //         <span>
  //           <StyledUnlinkButton />
  //         </span>
  //       }
  //       content={"You can't unlink your default address"}
  //       hoverable={true}
  //       position="top center"
  //     />
  //   ) : (
  //     <StyledUnlinkButton withClickHandler />
  //   )
  // }
  //
  // const SetDefaultAddress = ({ address }: { address: string }) => {
  //   return currentUser.defaultAddress !== address ? (
  //     <div className="button-container default-button">
  //       <Button className={'social'} onClick={() => handleDefault(address)}>
  //         Set default
  //       </Button>
  //     </div>
  //   ) : (
  //     <div className="default-label">
  //       <Icon name="check" /> Default address
  //     </div>
  //   )
  // }

  interface AccountsDetails {
    accounts: InjectedAccountWithMeta[]
    showAccounts: boolean
    title: string
  }

  const addressList = ({ accounts, showAccounts, title }: AccountsDetails) => {
    return (
      <>
        <Form.Group>
          <Form.Field width={16}>
            <Grid>
              <Grid.Column width={5}>
                <label className="header">{title}</label>
              </Grid.Column>
              <Grid.Column width={2} />
              <Grid.Column width={5}>
                <label className="header">Delegating to</label>
              </Grid.Column>
            </Grid>

            <div className="ui list">
              {accounts.map((account) => {
                const address = account.address
                if (!address) return <></>

                // const isLinked = address && currentUser.addresses?.includes(address)
                const delegationStatus = accountsDelegations[account.address]
                const { isDelegating } = delegationStatus
                const delegatee = isDelegating
                  ? DELEGATEES.filter(
                      (d) => d.url === delegationStatus?.delegating?.target.toString()
                    )[0]
                  : null

                return (
                  address && (
                    <Grid key={address}>
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
                              address={(delegatee as Delegatee).url}
                              extensionName={(delegatee as Delegatee).name}
                            />
                            {/*<DelegateeSelectionForm*/}
                            {/*  className={'no-inner-gap'}*/}
                            {/*  delegatees={DELEGATEES}*/}
                            {/*  defaultDelegatee={DELEGATEES.filter(*/}
                            {/* eslint-disable-next-line max-len */}
                            {/*    (d) => d.url === delegationStatus?.delegating?.target.toString()*/}
                            {/*  )[0]}*/}
                            {/*  onDelegateeChange={onDelegateeChange}*/}
                            {/*/>*/}
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
                      {/*<Grid.Column width={3}>*/}
                      {/*  <div className="button-container">*/}
                      {/*    {isLinked ? (*/}
                      {/*      <UnlinkButton address={address} />*/}
                      {/*    ) : (*/}
                      {/*      <Button*/}
                      {/*        className={'social'}*/}
                      {/*        onClick={() => handleLink(address, account)}*/}
                      {/*      >*/}
                      {/*        {linkIcon}*/}
                      {/*      </Button>*/}
                      {/*    )}*/}
                      {/*  </div>*/}
                      {/*</Grid.Column>*/}
                      {/*<Grid.Column width={6}>*/}
                      {/*  {isLinked && <SetDefaultAddress address={address} />}*/}
                      {/*</Grid.Column>*/}
                    </Grid>
                  )
                )
              })}
            </div>
          </Form.Field>
        </Form.Group>
        {showAccounts && (
          <Form.Group>
            <Form.Field width={16}>
              <div className="text-muted">
                Associate your account with an on-chain address using the{' '}
                <a href={getExtensionUrl()}>Polkadot-js extension</a>.
              </div>
              <div className="link-button-container">
                <Button primary onClick={handleDetect}>
                  Show available accounts
                </Button>
              </div>
            </Form.Field>
          </Form.Group>
        )}
      </>
    )
  }

  const CONVICTIONS: [number, number][] = [1, 2, 4, 8, 16, 32].map((lock, index) => [
    index + 1,
    lock
  ])

  const convictionOpts = useMemo(
    () => [
      { text: '0.1x voting balance, no lockup period', value: 0 },
      ...CONVICTIONS.map(([value, lock]): { text: string; value: number } => ({
        text: `${value}x voting balance, locked for ${lock} enactment period(s)`,
        value
      }))
    ],
    [CONVICTIONS]
  )
  const [conviction, setConviction] = useState<number>(convictionOpts[1].value)

  const onConvictionChange = (
    event: React.SyntheticEvent<HTMLElement, Event>,
    data: DropdownProps
  ) => {
    setConviction(Number(data.value))
  }

  const VoteLock = () => (
    <Form.Field>
      <label>
        Vote lock
        {/*eslint-disable-next-line max-len*/}
        <HelperTooltip content="You can multiply your votes by locking your tokens for longer periods of time." />
      </label>
      <Select
        onChange={onConvictionChange}
        options={convictionOpts}
        pointing={'top'}
        value={conviction}
      />
    </Form.Field>
  )

  const handleCancelEditClick = () => {
    setEditDetails({
      isEdit: false,
      voterAccount: null
    })
  }

  if (extensionNotAvailable) {
    return (
      <Form className={className} standalone={false}>
        <Form.Group>
          <Form.Field width={16}>
            <ExtensionNotDetected />
          </Form.Field>
        </Form.Group>
      </Form>
    )
  }

  return (
    <Form className={className} standalone={false}>
      {!isEdit ? (
        <>
          {accounts.length &&
            !isEmpty(accountsDelegations) &&
            addressList({
              accounts,
              showAccounts: false,
              title: 'Available addresses'
            })}
        </>
      ) : (
        <>
          <Form.Field width={6}>
            <label className="header">Voter account</label>
            <AddressComponent
              className="item"
              address={(voterAccount as InjectedAccountWithMeta).address}
              extensionName={(voterAccount as InjectedAccountWithMeta).meta.name}
            />
          </Form.Field>
          <Form.Field width={8}>
            <BalanceInput
              label={'Lock balance'}
              helpText={'Amount of you are willing to lock for the vote.'}
              placeholder={'123'}
              onChange={onBalanceChange}
            />
          </Form.Field>
          <Form.Field width={8}>
            <VoteLock />
          </Form.Field>
          <Form.Field width={8}>
            <label className="header">Delegatee account</label>
            <DelegateeSelectionForm
              delegatees={DELEGATEES}
              defaultDelegatee={selectedDelegatee}
              onDelegateeChange={onDelegateeChange}
            />
          </Form.Field>
          <Form.Group>
            <Form.Field width={4}>
              <Button fluid className="secondary" disabled={false} onClick={handleCancelEditClick}>
                Cancel
              </Button>
            </Form.Field>
            <Form.Field width={4}>
              <Button
                fluid
                basic
                className="primary positive"
                disabled={false}
                onClick={handleSaveDelegateClick}
              >
                <Icon name="check" />
                Save
              </Button>
            </Form.Field>
          </Form.Group>
        </>
      )}
    </Form>
  )
}

export default styled(Address)`
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
