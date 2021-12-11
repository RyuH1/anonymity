// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React, { useCallback, useState } from 'react'
import { DropdownProps, Select } from 'semantic-ui-react'

import { Form } from './Form'
import HelperTooltip from './HelperTooltip'

const CONVICTIONS: [number, number][] = [1, 2, 4, 8, 16, 32].map((lock, index) => [index + 1, lock])

const convictionOpts = [
  { text: '0.1x voting balance, no lockup period', value: 0 },
  ...CONVICTIONS.map(([value, lock]): { text: string; value: number } => ({
    text: `${value}x voting balance, locked for ${lock} enactment period(s)`,
    value
  }))
]

interface Props {
  onConvictionChange: (convition: number) => void
}

const VoteLock = ({ onConvictionChange }: Props) => {
  const [conviction, setConviction] = useState<number>(convictionOpts[1].value)

  const _onConvictionChange = useCallback(
    (event: React.SyntheticEvent<HTMLElement, Event>, data: DropdownProps) => {
      const convictionValue = Number(data.value)

      setConviction(convictionValue)
      onConvictionChange(convictionValue)
    },
    [onConvictionChange]
  )

  return (
    <Form.Field>
      <label>
        Vote lock
        {/* eslint-disable-next-line max-len */}
        <HelperTooltip content="You can multiply your votes by locking your tokens for longer periods of time." />
      </label>
      <Select
        onChange={_onConvictionChange}
        options={convictionOpts}
        pointing={'top'}
        value={conviction}
      />
    </Form.Field>
  )
}

export default VoteLock
