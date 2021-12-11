// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { web3FromAddress } from '@polkadot/extension-dapp'
import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types'
import BN from 'bn.js'
import React, { useContext, useState } from 'react'
import { DropdownProps, Icon } from 'semantic-ui-react'

import { ApiContext } from '../../context/ApiContext'
import { NotificationContext } from '../../context/NotificationContext'
import { DELEGATEES } from '../../global/delegatees'
import { Delegatee, LoadingStatusType, NotificationStatus } from '../../types'
import AddressComponent from '../../ui-components/Address'
import BalanceInput from '../../ui-components/BalanceInput'
import Button from '../../ui-components/Button'
import Card from '../../ui-components/Card'
import DelegateeSelectionForm from '../../ui-components/DelegateeSelectionForm'
import { Form } from '../../ui-components/Form'
import Loader from '../../ui-components/Loader'
import VoteLock from '../../ui-components/VoteLock'

interface Props {
  account: InjectedAccountWithMeta | null
  className?: string
  onCancelManage: () => void
  onDelegationSaved: () => void
}

const Manage = ({ account, className, onCancelManage, onDelegationSaved }: Props) => {
  const { api, apiReady } = useContext(ApiContext)
  const { queueNotification } = useContext(NotificationContext)

  const [lockedBalance, setLockedBalance] = useState<BN | undefined>(undefined)
  const [selectedDelegatee, setSelectedDelegatee] = useState<Delegatee>(DELEGATEES[0])
  const [conviction, setConviction] = useState<number>(1)
  const [loadingStatus, setLoadingStatus] = useState<LoadingStatusType>({
    isLoading: false,
    message: ''
  })

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
  }

  const onBalanceChange = (balance: BN) => setLockedBalance(balance)

  const onConvictionChange = (conviction: number) => {
    setConviction(conviction)
  }

  const onSaveClick = async () => {
    if (!api || !apiReady || !account || !lockedBalance) return

    setLoadingStatus({ isLoading: true, message: 'Waiting for signature' })

    const address = account.address
    const injector = await web3FromAddress(address)
    const { signer } = injector

    const delegateTx = api.tx.democracy.delegate(
      selectedDelegatee.address,
      conviction,
      lockedBalance
    )
    console.log(selectedDelegatee.address, conviction, lockedBalance.toString())

    delegateTx
      .signAndSend(address, { signer }, ({ status }) => {
        if (status.isInBlock) {
          console.log(`Completed at block hash #${status.asInBlock.toString()}`)

          queueNotification({
            header: 'Success!',
            message: `Vote will be delegated to ${selectedDelegatee.name}.`,
            status: NotificationStatus.SUCCESS
          })

          onDelegationSaved()
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

  return (
    <Form className={className} standalone={false}>
      {loadingStatus.isLoading ? (
        <Form.Group>
          <Form.Field width={16}>
            <Card className={'LoaderWrapper'}>
              <Loader text={loadingStatus.message} />
            </Card>
          </Form.Field>
        </Form.Group>
      ) : (
        <>
          {account && (
            <>
              <Form.Field width={6}>
                <label className="header">Voter account</label>
                <AddressComponent
                  className="item"
                  address={account.address}
                  extensionName={account.meta.name}
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
                <VoteLock onConvictionChange={onConvictionChange} />
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
                  <Button fluid className="secondary" disabled={false} onClick={onCancelManage}>
                    Cancel
                  </Button>
                </Form.Field>

                <Form.Field width={4}>
                  <Button
                    fluid
                    basic
                    className="primary positive"
                    disabled={false}
                    onClick={onSaveClick}
                  >
                    <Icon name="check" />
                    Save
                  </Button>
                </Form.Field>
              </Form.Group>
            </>
          )}
        </>
      )}
    </Form>
  )
}

export default Manage
