// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { web3FromSource } from '@polkadot/extension-dapp'
import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types'
import { Keyring } from '@polkadot/keyring'
import { Conviction, VotingDelegating, VotingDirect } from '@polkadot/types/interfaces'
import { stringToHex, u8aToHex } from '@polkadot/util'
import styled from '@xstyled/styled-components'
import BN from 'bn.js'
import isEmpty from 'lodash/isEmpty'
import React, { useContext, useEffect, useMemo, useState } from 'react'
import { Checkbox, DropdownProps, Select } from 'semantic-ui-react'
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon'
import { ApiContext } from 'src/context/ApiContext'
import { NotificationContext } from 'src/context/NotificationContext'
import { Delegatee, GeodeResponse, LoadingStatusType, NotificationStatus } from 'src/types'
import BalanceInput from 'src/ui-components/BalanceInput'
import Button from 'src/ui-components/Button'
import Card from 'src/ui-components/Card'
import { Form } from 'src/ui-components/Form'
import HelperTooltip from 'src/ui-components/HelperTooltip'
import Loader from 'src/ui-components/Loader'

import { DELEGATEES } from '../../../../global/delegatees'
import AccountSelectionForm from '../../../../ui-components/AccountSelectionForm'
import AyeNayButtons from '../../../../ui-components/AyeNayButtons'
import DelegateeSelectionForm from '../../../../ui-components/DelegateeSelectionForm'

interface AccountDelegationMap {
  [accountId: string]: DelegationStatus
}

interface DelegationStatus {
  isDelegating: boolean
  delegating?: VotingDelegating
  direct?: VotingDirect
}

interface Props {
  className?: string
  referendumId?: number | null | undefined
  address: string
  accounts: InjectedAccountWithMeta[]
  onAccountChange: (event: React.SyntheticEvent<HTMLElement, Event>, data: DropdownProps) => void
  getAccounts: () => Promise<undefined>
}

const parseConvictionValue = (conviction: Conviction) => {
  const _conviction = conviction.toString()
  if (_conviction.includes('0.1x')) {
    return 0
  }

  return Number(_conviction.replaceAll(/locked|x/gi, ''))
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
  const [useDelegation, setUseDelegation] = useState<boolean>(false)
  const [delegated, setDelegated] = useState<boolean>(false)
  const [accountsDelegations, setAccountsDelegations] = useState<AccountDelegationMap>({})

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

  // Generate delegation status map for each account ID
  useEffect(() => {
    if (!api || !apiReady || accounts.length === 0) {
      return
    }

    ;(async () => {
      setLoadingStatus({ isLoading: true, message: 'Get delegation status' })

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

  // Update form when address change
  useEffect(() => {
    if (isEmpty(accountsDelegations)) return

    const { isDelegating, delegating } = accountsDelegations[address]
    setUseDelegation(isDelegating)

    if (isDelegating && delegating) {
      const { conviction, target } = delegating

      // console.log(conviction)
      // console.log(parseConvictionValue(conviction))

      // setLockedBalance(new BN(balance))
      setConviction(parseConvictionValue(conviction))
      setSelectedDelegatee(DELEGATEES.filter((d) => d.address === target.toString())[0])

      setDelegated(true)
    }
  }, [accountsDelegations, address])

  const onConvictionChange = (
    event: React.SyntheticEvent<HTMLElement, Event>,
    data: DropdownProps
  ) => {
    const conviction = Number(data.value)
    setConviction(conviction)

    const { isDelegating, delegating } = accountsDelegations[address]
    if (isDelegating && delegating) {
      const _conviction = delegating.conviction
      // console.log(conviction, parseConvictionValue(_conviction))
      if (conviction !== parseConvictionValue(_conviction)) {
        setDelegated(false)
      } else {
        setDelegated(true)
      }
    }
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

    const delegateTx = api.tx.democracy.delegate(
      selectedDelegatee.address,
      conviction,
      lockedBalance
    )

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

    const keyring = new Keyring()
    const pair = keyring.addFromAddress(address)
    const sender = u8aToHex(pair.publicKey)

    if (signRaw) {
      const voteMessage = {
        approve: aye,
        index: referendumId,
        sender
      }
      // console.log(JSON.stringify(voteMessage))
      // console.log(stringToHex(JSON.stringify(voteMessage)))

      const rawVoteMessage = stringToHex(JSON.stringify(voteMessage))

      try {
        const { signature } = await signRaw({
          address: address,
          data: rawVoteMessage,
          type: 'bytes'
        })

        const jsonRpcRequest = {
          id: 1,
          jsonrpc: '2.0',
          method: 'submit_vote',
          params: {
            msg: rawVoteMessage,
            signature
          }
        }

        console.log(jsonRpcRequest)

        const requestOptions = {
          body: JSON.stringify(jsonRpcRequest),
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST'
        }

        const response = await fetch(selectedDelegatee.url, requestOptions)
        const { result } = await response.json()

        if (result === GeodeResponse.SUCCESS) {
          queueNotification({
            header: 'Success!',
            message: `Vote using delegation on referendum #${referendumId} successful.`,
            status: NotificationStatus.SUCCESS
          })
        } else {
          if (result === GeodeResponse.INVALID_SENDER) {
            throw new Error('Sender account is invalid.')
          } else if (result === GeodeResponse.INVALID_SIGNATURE) {
            throw new Error('Transaction cannot be verified due to invalid signature.')
          } else if (result === GeodeResponse.INVALID_INDEX) {
            throw new Error('Transaction cannot be processed due to invalid referendum index.')
          } else if (result === GeodeResponse.INVALID_MESSAGE) {
            throw new Error('Transaction cannot be processed due to malformed message.')
          } else if (result === GeodeResponse.REFERENDUM_FINISHED) {
            // eslint-disable-next-line max-len, prettier/prettier
            throw new Error(`Transaction cannot be processed because referendum #${referendumId} is finished`)
          } else if (result === GeodeResponse.DEADLINE_EXCEEDED) {
            throw new Error('Transaction cannot be processed due to exceeded deadline')
          } else if (result === GeodeResponse.NOT_DELEGATED) {
            // eslint-disable-next-line max-len, prettier/prettier
            throw new Error('Transaction cannot be processed due to delegated account is not available at this moment')
          }

          throw new Error('Transaction failed. Geode is facing a trouble now :(, try again later.')
        }
      } catch (error) {
        console.error('Geode Error', error)
        queueNotification({
          header: 'Failed!',
          message: error.message,
          status: NotificationStatus.ERROR
        })
      } finally {
        setLoadingStatus({ isLoading: false, message: '' })
      }
    }
  }

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

  // const VoteLock = () => (
  //   <Form.Field>
  //     <label>
  //       Vote lock
  //       {/*eslint-disable-next-line max-len*/}
  // eslint-disable-next-line max-len
  //       <HelperTooltip content="You can multiply your votes by locking your tokens for longer periods of time." />
  //     </label>
  //     <Select
  //       onChange={onConvictionChange}
  //       options={convictionOpts}
  //       pointing={'top'}
  //       value={conviction}
  //     />
  //   </Form.Field>
  // )

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
