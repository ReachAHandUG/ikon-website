import * as React from "react"
import styled, { css } from "styled-components"

const Box = styled.div`
  display: flex;
  flex-wrap: nowrap;

  ${props =>
    props.inline &&
    css`
      display: inline-flex;
    `}

  ${props =>
    props.spaceBetween &&
    css`
      justify-content: space-between;
    `}

  ${props =>
    props.rowReverse &&
    css`
      flex-direction: row-reverse;
    `}

  ${props =>
    props.flexEnd &&
    css`
      justify-content: flex-end;
    `}

    ${props =>
    props.column &&
    css`
      flex-direction: column;
    `}

  ${props =>
    props.center &&
    css`
      align-items: center;
    `}

    ${props =>
    props.middle &&
    css`
      justify-content: center;
    `}

    ${props =>
    props.relative &&
    css`
      position: relative;
      z-index: 1;
    `}
`

const Ele = ({
  children,
  spaceBetween,
  center,
  middle,
  column,
  relative,
  flexEnd,
  className,
  rowReverse,
  inline,
}) => {
  return (
    <Box
      column={column}
      spaceBetween={spaceBetween}
      center={center}
      middle={middle}
      relative={relative}
      flexEnd={flexEnd}
      className={className}
      rowReverse={rowReverse}
      inline={inline}
    >
      {children}
    </Box>
  )
}
export default Ele
