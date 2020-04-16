import styled from '@emotion/styled'

const Button = styled.button`
  color: ${props =>
    props.primary ? props.theme.colors.primary : props.theme.colors.secondary};
  font-size: 1em;
  border: 2px solid transparent;
  &:hover {
    border-color: blue;
  }
  &:active {
    border-style: inset;
  }
`

export default Button
