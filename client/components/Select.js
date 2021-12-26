import React from 'react'
import styled from 'styled-components'
import { layout, space, typography } from 'styled-system'
import css from '@styled-system/css'
import { ChevronDown } from '@styled-icons/boxicons-regular'
import Box from './Box'
import { WrapLabel } from './Input'

const StyledSelect = styled.select(
  () =>
    css({
      appearance: 'none',
      display: 'block',
      bg: 'offWhite',
      border: '2px solid',
      borderColor: 'offWhite',
      borderRadius: 1,
      fontFamily: 'body',
      fontSize: 2,
      pl: 4,
      pr: 6,
      py: 3,
      '&:focus': {
        borderColor: 'primary',
        outline: 0,
      },
    }),
  layout,
  space,
  typography
)

const Select = ({ label, rows, ...rest }) => {
  return (
    <WrapLabel label={label}>
      <Box position="relative" display="inline-block">
        <StyledSelect {...rest} />
        <Box
          position="absolute"
          top="7px"
          right={4}
          color="grey"
          css={{ pointerEvents: 'none' }}
        >
          <ChevronDown size={22} />
        </Box>
      </Box>
    </WrapLabel>
  )
}

export default Select