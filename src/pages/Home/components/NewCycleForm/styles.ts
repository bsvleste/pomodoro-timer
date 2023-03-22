import styled, { css } from 'styled-components'

export const FormContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    color: ${theme['gray-100']};
    font-size: 1.125rem;
    font-weight: bold;
    flex-wrap: wrap;
  `}
`

const BaseInput = styled.input`
  ${({ theme }) => css`
    background-color: transparent;
    height: 2.5rem;
    border: 0;
    border-bottom: 2px solid ${theme['gray-500']};
    font-weight: bold;
    font-size: 1.125rem;
    padding: 0 0.5rem;
    color: ${theme['gray-100']};

    &:focus {
      ${({ theme }) => css`
        box-shadow: none;
        border-color: $ ${theme['green-500']};
      `}
    }

    ::placeholder {
      ${({ theme }) => css`
        color: ${theme['gray-500']};
      `}
    }
  `}
`
export const TaskInput = styled(BaseInput)`
  flex: 1;
  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`
export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`
