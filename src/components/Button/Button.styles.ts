import styled, { css } from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary'
interface ButtonContainerProps {
  variant: ButtonVariant
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  background-color: ${(props) => props.theme['gray-400']};
`
