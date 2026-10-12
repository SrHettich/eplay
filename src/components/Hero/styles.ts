import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Banner = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 480px;
  padding-top: 16px;

  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;

  ${TagContainer} {
    margin-right: 8px;
  }

  &::after {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 56%;
    content: '';
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    z-index: 1;
    position: relative;
  }
`

export const Infos = styled.div`
  padding: 16px;
  width: 290px;
  background-color: ${cores.preto};
  font-weight: bold;

  h2 {
    font-size: 32px;
  }

  p {
    font-size: 18px;
    margin: 16px 0;

    span {
      display: block;
      text-decoration: line-through;
    }
  }
`
