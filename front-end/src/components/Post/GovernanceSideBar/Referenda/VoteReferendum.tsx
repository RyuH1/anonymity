// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { web3FromSource } from '@polkadot/extension-dapp'
import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types'
import { stringToHex } from '@polkadot/util'
import styled from '@xstyled/styled-components'
import BN from 'bn.js'
import React, { useContext, useMemo, useState } from 'react'
import { Checkbox, DropdownProps, Select } from 'semantic-ui-react'
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon'
import { ApiContext } from 'src/context/ApiContext'
import { NotificationContext } from 'src/context/NotificationContext'
import { Delegatee, LoadingStatusType, NotificationStatus } from 'src/types'
import BalanceInput from 'src/ui-components/BalanceInput'
import Button from 'src/ui-components/Button'
import Card from 'src/ui-components/Card'
import { Form } from 'src/ui-components/Form'
import HelperTooltip from 'src/ui-components/HelperTooltip'
import Loader from 'src/ui-components/Loader'

import AccountSelectionForm from '../../../../ui-components/AccountSelectionForm'
import AyeNayButtons from '../../../../ui-components/AyeNayButtons'
import DelegateeSelectionForm from '../../../../ui-components/DelegateeSelectionForm'

const DELEGATEES: Delegatee[] = [
  {
    name: 'Geode Endpoint (EVE)',
    url: '5HGjWAeFDfFCWPsjFQdVV2Msvz2XtMktvgocEZcCj68kUMaw'
  },
  {
    name: 'Geode Endpoint (FERDIE)',
    url: '5CiPPseXPECbkjWCa6MnjNokrgYjMqmKndv2rSnekmSK2DjL'
  }
]

interface Props {
  className?: string
  referendumId?: number | null | undefined
  address: string
  accounts: InjectedAccountWithMeta[]
  onAccountChange: (event: React.SyntheticEvent<HTMLElement, Event>, data: DropdownProps) => void
  getAccounts: () => Promise<undefined>
}

const VoteRefrendum = ({
  className,
  referendumId,
  address,
  accounts,
  onAccountChange,
  getAccounts
}: Props) => {
  const { queueNotification } = useContext(NotificationContext)
  const [lockedBalance, setLockedBalance] = useState<BN | undefined>(undefined)
  const { api, apiReady } = useContext(ApiContext)
  const [loadingStatus, setLoadingStatus] = useState<LoadingStatusType>({
    isLoading: false,
    message: ''
  })
  const [selectedDelegatee, setSelectedDelegatee] = useState<Delegatee>(DELEGATEES[0])
  const [delegated, setDelegated] = useState<boolean>(false)

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

  const onBalanceChange = (balance: BN) => setLockedBalance(balance)

  const voteRefrendum = async (aye: boolean) => {
    if (!referendumId && referendumId !== 0) {
      console.error('referendumId not set')
      return
    }

    if (!api) {
      return
    }

    if (!apiReady) {
      return
    }

    setLoadingStatus({ isLoading: true, message: 'Waiting for signature' })

    const voteTx = api.tx.democracy.vote(referendumId, {
      Standard: { balance: lockedBalance, vote: { aye, conviction } }
    })

    voteTx
      .signAndSend(address, ({ status }) => {
        if (status.isInBlock) {
          setLoadingStatus({ isLoading: false, message: '' })
          queueNotification({
            header: 'Success!',
            message: `Vote on referendum #${referendumId} successful.`,
            status: NotificationStatus.SUCCESS
          })
          console.log(`Completed at block hash #${status.asInBlock.toString()}`)
        } else {
          if (status.isBroadcast) {
            setLoadingStatus({ isLoading: true, message: 'Broadcasting the vote' })
          }
          console.log(`Current status: ${status.type}`)
        }
      })
      .catch((error) => {
        setLoadingStatus({ isLoading: false, message: '' })
        console.log(':( transaction failed')
        console.error('ERROR:', error)
        queueNotification({
          header: 'Failed!',
          message: error.message,
          status: NotificationStatus.ERROR
        })
      })
  }

  const onClickDelegateVote = () => {
    if (!api || !apiReady || !lockedBalance) return

    setLoadingStatus({ isLoading: true, message: 'Waiting for signature' })

    const delegateTx = api.tx.democracy.delegate(selectedDelegatee.url, conviction, lockedBalance)

    delegateTx
      .signAndSend(address, ({ status }) => {
        if (status.isInBlock) {
          setDelegated(true)
          setLoadingStatus({ isLoading: false, message: '' })
          queueNotification({
            header: 'Success!',
            message: `Vote on referendum #${referendumId} will be delegated to ${selectedDelegatee.name}.`, // eslint-disable-line max-len
            status: NotificationStatus.SUCCESS
          })
          console.log(`Completed at block hash #${status.asInBlock.toString()}`)
        } else {
          if (status.isBroadcast) {
            setLoadingStatus({ isLoading: true, message: 'Broadcasting the delegation' })
          }
          console.log(`Current status: ${status.type}`)
        }
      })
      .catch((error) => {
        setDelegated(false)
        setLoadingStatus({ isLoading: false, message: '' })
        console.log(':( transaction failed')
        console.error('ERROR:', error)
        queueNotification({
          header: 'Failed!',
          message: error.message,
          status: NotificationStatus.ERROR
        })
      })
  }

  // TODO Finalize this function when Geode RPC endpoint has been ready to implement
  const voteReferendumUsingDelegation = async (aye: boolean) => {
    if (!referendumId && referendumId !== 0) {
      console.error('referendumId not set')
      return
    }

    if (!api || !apiReady) {
      return
    }

    setLoadingStatus({ isLoading: true, message: 'Waiting for signature' })

    const connectedAccountWithMeta = accounts.filter((account) => account.address === address)[0]
    const {
      meta: { source }
    } = connectedAccountWithMeta

    const injector = await web3FromSource(source)
    const { signRaw } = injector.signer

    if (signRaw) {
      const voteMessage = {
        approve: aye,
        index: referendumId,
        sender: address
      }
      console.log(JSON.stringify(voteMessage))

      const { signature } = await signRaw({
        address: address,
        data: stringToHex(JSON.stringify(voteMessage)),
        type: 'bytes'
      })

      const requestOptions = {
        body: JSON.stringify({
          msg: { ...voteMessage },
          signature
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }

      try {
        const response = await fetch(process.env.REACT_APP_GEODE_ENDPOINT!, requestOptions)
        console.log('Geode Response', await response.json())
      } catch (e) {
        console.error('Geode Error', e)
      } finally {
        setLoadingStatus({ isLoading: false, message: '' })
      }
    }
  }

  const onDelegateeChange = (
    event: React.SyntheticEvent<HTMLElement, Event>,
    data: DropdownProps
  ) => {
    const delegateeValues = Object.values(DELEGATEES)
    let selectedDelegateeIndex = 0
    for (const key of Object.keys(delegateeValues)) {
      if (delegateeValues[Number(key)].url === data.value) {
        selectedDelegateeIndex = Number(key)
        break
      }
    }

    setSelectedDelegatee(DELEGATEES[selectedDelegateeIndex])
    setDelegated(false)
  }

  const GetAccountsButton = () => (
    <Form.Group>
      <Form.Field className="button-container">
        <Button primary onClick={getAccounts} size={'large'}>
          Vote
        </Button>
      </Form.Field>
    </Form.Group>
  )

  const noAccount = accounts.length === 0

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

  const [useDelegation, setUseDelegation] = useState<boolean>(false)

  const DelegationSwitch = () => (
    <Form.Field>
      <label>Vote using anonymous delegation</label>
      <Checkbox
        label="Use delegation"
        disabled={false}
        checked={useDelegation}
        toggle
        onChange={() => {
          setUseDelegation(!useDelegation)

          if (!useDelegation) {
            setDelegated(false)
          }
        }}
      />
    </Form.Field>
  )

  return (
    <div className={className}>
      {noAccount ? (
        <GetAccountsButton />
      ) : loadingStatus.isLoading ? (
        <Card className={'LoaderWrapper'}>
          <Loader text={loadingStatus.message} />
        </Card>
      ) : (
        <Card>
          <AccountSelectionForm
            title="Vote with account"
            accounts={accounts}
            address={address}
            withBalance
            onAccountChange={onAccountChange}
          />
          <BalanceInput
            label={'Lock balance'}
            helpText={'Amount of you are willing to lock for this vote.'}
            placeholder={'123'}
            onChange={onBalanceChange}
          />
          <VoteLock />
          <DelegationSwitch />
          {useDelegation && (
            <DelegateeSelectionForm
              delegatees={DELEGATEES}
              defaultDelegatee={selectedDelegatee}
              onDelegateeChange={onDelegateeChange}
            />
          )}
          {useDelegation ? (
            !delegated ? (
              <Form.Field className={'button-container'}>
                <Button
                  fluid
                  basic
                  className="primary"
                  disabled={!apiReady}
                  onClick={() => onClickDelegateVote()}
                >
                  <Icon name="user secret" />
                  Delegate Anonymous Vote
                </Button>
              </Form.Field>
            ) : (
              <AyeNayButtons
                disabled={!apiReady}
                onClickAye={() => voteReferendumUsingDelegation(true)}
                onClickNay={() => voteReferendumUsingDelegation(false)}
              />
            )
          ) : (
            <AyeNayButtons
              disabled={!apiReady}
              onClickAye={() => voteRefrendum(true)}
              onClickNay={() => voteRefrendum(false)}
            />
          )}
        </Card>
      )}
    </div>
  )
}

export default styled(VoteRefrendum)`
  .LoaderWrapper {
    height: 40rem;
    position: absolute;
    width: 100%;
  }
`
