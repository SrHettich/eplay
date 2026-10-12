import { Link } from 'react-router-dom'
import { HeaderBar, Item, LinkCart, Links } from './styles'
import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

const Header = () => (
  <HeaderBar>
    <div>
      <Link to="/">
        <img src={logo} alt="EPLAY" />
      </Link>
      <nav>
        <Links>
          <Item>
            <Link to="/categorias">Categorias</Link>
          </Item>
          <Item>
            <Link to="#">Novidades</Link>
          </Item>
          <Item>
            <Link to="#">Promoções</Link>
          </Item>
        </Links>
      </nav>
    </div>
    <LinkCart href="#">
      0 - Produto(s)
      <img src={carrinho} alt="Carrinho" />
    </LinkCart>
  </HeaderBar>
)

export default Header
