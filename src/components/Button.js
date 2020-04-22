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
  @media (min-width: 768px) {
    font-size: 1.25em;
  }
  @media (min-width: 1024px) {
    font-size: 1.5em;
  }
  @media (min-width: 1280px) {
    font-size: 2em;
  }
`

export default Button
