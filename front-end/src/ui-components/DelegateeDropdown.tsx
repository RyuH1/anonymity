// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components'
import React, { useState } from 'react'
import { Dropdown, DropdownItemProps, DropdownProps } from 'semantic-ui-react'
import Address from 'src/ui-components/Address'

import { Delegatee } from '../types'

interface Props {
  delegatees: Delegatee[]
  className?: string
  defaultDelegatee: Delegatee
  filterAccounts?: string[]
  onDelegateeChange: (event: React.SyntheticEvent<HTMLElement, Event>, data: DropdownProps) => void
}

const DelegateeDropdown = ({
  delegatees,
  className,
  defaultDelegatee,
  // filterAccounts,
  onDelegateeChange
}: Props) => {
  const [selectedDelegatee, setSelectedDelegatee] = useState(defaultDelegatee)
  // const filteredAccounts = !filterAccounts
  //   ? accounts
  //   : accounts.filter((elem) => filterAccounts.includes(elem.address))

  const dropdownList: { [index: string]: string } = {}
  const delegateeOptions: DropdownItemProps[] = []

  delegatees.forEach((delegatee) => {
    delegateeOptions.push({
      children: <Address extensionName={delegatee.name} address={delegatee.url} />,
      value: delegatee.url
    })

    if (delegatee.url && delegatee.name) {
      dropdownList[delegatee.url] = delegatee.name
    }
  })

  const _onDelegateeChange = (
    event: React.SyntheticEvent<HTMLElement, Event>,
    data: DropdownProps
  ) => {
    const delegateeValues = Object.values(delegatees)
    let selectedDelegateeIndex = 0
    for (const key of Object.keys(delegateeValues)) {
      if (delegateeValues[Number(key)].url === data.value) {
        selectedDelegateeIndex = Number(key)
        break
      }
    }
    setSelectedDelegatee(delegatees[selectedDelegateeIndex])
    onDelegateeChange(event, data)
  }

  return (
    <Dropdown
      className={className}
      pointing="top"
      onChange={_onDelegateeChange}
      options={delegateeOptions}
      trigger={
        <div className="address-wrapper">
          <Address
            extensionName={dropdownList[selectedDelegatee.url]}
            address={selectedDelegatee.url}
          />
        </div>
      }
      value={selectedDelegatee.url}
    />
  )
}

export default styled(DelegateeDropdown)`
  width: 100%;
  padding: 1.4rem 0.4rem 0.8rem 1.2rem;

  .address-wrapper {
    display: inline-block;
  }

  .visible.menu.transition {
    width: 100%;
    border-radius: 0;
    max-height: 20rem;
    overflow: auto;
  }

  .dropdown.icon {
    position: absolute;
    right: 0;
    top: -0.5rem;
    padding: 1.6rem 0.8rem;
    float: right;
  }
`
