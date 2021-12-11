// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components'
import React from 'react'
import { Form as SUIForm, FormInputProps as SUIFormInputProps } from 'semantic-ui-react'

type Props = SUIFormInputProps & {
  invalid?: boolean
}

function Input({ className, invalid = false, ...props }: Props) {
  return <SUIForm.Input className={invalid ? className : `${className} invalid`} {...props} />
}

export default styled(Input)`
  .ui.input > input {
    font-family: ${({ theme }) => theme.fonts.font_default};
    font-size: ${({ theme }) => theme.fontSizes.input_text_size};
    border-width: 1px;
    border-color: ${({ theme }) => theme.colors.grey_light};
    border-radius: ${({ theme }) => theme.colors.input_border_radius};
    text-indent: 0;
    padding: 1rem;
    margin-bottom: 1.2rem;
    &:focus {
      font-family: ${({ theme }) => theme.fonts.font_default};
      font-size: ${({ theme }) => theme.fontSizes.input_text_size};
      color: ${({ theme }) => theme.colors.black_text};
      border-color: ${({ theme }) => theme.colors.grey_primary};
      border-radius: ${({ theme }) => theme.radii.input_border_radius};
    }
    &:hover {
      border-color: ${({ theme }) => theme.colors.grey_secondary};
    }
  }

  &.invalid > .ui.input > input {
    color: ${({ theme }) => `${theme.colors.red_primary} !important`};
    border-color: ${({ theme }) => `${theme.colors.red_primary} !important`};
  }
`
