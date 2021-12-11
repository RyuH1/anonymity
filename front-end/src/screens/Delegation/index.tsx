// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { web3Accounts, web3Enable } from '@polkadot/extension-dapp'
import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types'
import styled from '@xstyled/styled-components'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Divider, Grid } from 'semantic-ui-react'

import ExtensionNotDetected from '../../components/ExtensionNotDetected'
import { APPNAME } from '../../global/appName'
import { Form } from '../../ui-components/Form'
import Addresses from './addresses'
import Manage from './manage'

interface Props {
  className?: string
}

const Delegation = ({ className }: Props) => {
  const [accounts, setAccounts] = useState<InjectedAccountWithMeta[]>([])
  const [accountToBeManaged, setAccountToBeManaged] = useState<InjectedAccountWithMeta | null>(null)
  const [isManage, setIsManage] = useState<boolean>(false)
  const [extensionNotAvailable, setExtensionNotAvailable] = useState(false)

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

  const onManageAddress = (account: InjectedAccountWithMeta) => {
    setAccountToBeManaged(account)
    setIsManage(true)
  }

  const onCancelManage = () => {
    setIsManage(false)
  }

  const onDelegationSaved = () => {
    setIsManage(false)
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
    <Grid>
      <Grid.Column
        className={className}
        mobile={16}
        tablet={12}
        computer={12}
        largeScreen={10}
        widescreen={10}
      >
        <h2>Manage Delegation</h2>
        <Divider />
        {!isManage ? (
          <Addresses accounts={accounts} onManageAddress={onManageAddress} />
        ) : (
          <Manage
            account={accountToBeManaged}
            onCancelManage={onCancelManage}
            onDelegationSaved={onDelegationSaved}
          />
        )}
      </Grid.Column>
      <Grid.Column only="computer" computer={4} largeScreen={6} widescreen={6} />
    </Grid>
  )
}

export default styled(Delegation)`
  background-color: white;
  padding: 2rem 3rem 3rem 3rem !important;
  border-radius: 0.3rem;
  box-shadow: ${({ theme }) => theme.colors.box_shadow_card};

  .ui.divider,
  .ui.divider:not(.vertical):not(.horizontal) {
    margin: 3rem 0 2rem 0;
    border-top-style: solid;
    border-top-width: 1px;
    border-top-color: ${({ theme }) => theme.colors.grey_light};
    border-bottom: none;
  }

  .button {
    margin-top: 0.2rem;
  }

  .ui.form:not(.unstackable) .fields:not(.unstackable) > .ten.wide.field {
    @media only screen and (max-width: 767px) {
      width: 70% !important;
    }

    @media only screen and (max-width: 576px) {
      width: 60% !important;
    }
  }

  .ui.form:not(.unstackable) .fields:not(.unstackable) > .six.wide.field {
    @media only screen and (max-width: 767px) {
      width: 30% !important;
    }

    @media only screen and (max-width: 576px) {
      width: 40% !important;
    }
  }

  @media only screen and (max-width: 576px) {
    padding: 2rem !important;

    .ui.form {
      margin-top: 0;
      padding: 0;
    }

    button {
      padding: 0.8rem 1rem;
      border-radius: 0.5rem;
    }
  }
`
