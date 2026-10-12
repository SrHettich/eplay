import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  background-color: ${(props) =>
    props.variant === 'primary' ? cores.verde : 'transparent'};
  color: ${cores.branco};
  padding: 8px 16px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 8px;
  border: 2px solid
    ${(props) => (props.variant === 'primary' ? cores.verde : cores.branco)};
`

export const ButtonLink = styled(Link)`
  background-color: transparent;
  color: ${cores.branco};
  padding: 8px 16px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  border: 2px solid ${cores.branco};
  text-decoration: none;
  cursor: pointer;
`
