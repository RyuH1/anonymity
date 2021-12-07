// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components'
import React from 'react'
import { DropdownProps } from 'semantic-ui-react/dist/commonjs/modules/Dropdown'
import { Form } from 'src/ui-components/Form'

import { Delegatee } from '../types'
import DelegateeDropdown from './DelegateeDropdown'
import HelperTooltip from './HelperTooltip'

interface Props {
  delegatees: Delegatee[]
  defaultDelegatee: Delegatee
  className?: string
  onDelegateeChange: (event: React.SyntheticEvent<HTMLElement, Event>, data: DropdownProps) => void
  title?: string
  tooltipMessage?: string
}

const DelegateeSelectionForm = ({
  delegatees,
  defaultDelegatee,
  className,
  onDelegateeChange,
  title,
  tooltipMessage
}: Props) => (
  <Form.Field className={className} width={16}>
    {title && (
      <label>
        {title}
        {tooltipMessage && (
          <HelperTooltip content="You can choose an account from the polkadot-js extension." />
        )}
      </label>
    )}
    <DelegateeDropdown
      delegatees={delegatees}
      defaultDelegatee={defaultDelegatee}
      onDelegateeChange={onDelegateeChange}
    />
  </Form.Field>
)

export default styled(DelegateeSelectionForm)`
  .ui.selection.dropdown {
    border-radius: 0;
  }

  .ui.dropdown .menu .active.item {
    font-weight: 500;
  }

  .ui.dropdown .menu > .item:hover {
    background-color: ${({ theme }) => theme.colors.grey_light};
  }

  .ui.selection.dropdown:focus,
  .ui.selection.active.dropdown,
  .ui.selection.active.dropdown:hover,
  .ui.selection.active.dropdown .menu {
    border-color: ${({ theme }) => theme.colors.grey_light};
  }

  .balance {
    text-align: right;
  }
`
