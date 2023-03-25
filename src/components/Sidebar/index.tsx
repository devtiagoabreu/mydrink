import { Container } from "./styles"
import menuImg from '../../assets/menu.svg'
import { ReactComponent as CervejaIcon } from '../../assets/cerveja.svg'

export function Sidebar() {
  return <Container>
    <button type='button'>
      <img src={menuImg} alt='Abrie e fechar o menu' />
    </button>
    <nav>
      <ul>
        <li>
          <a href='#' >
            <CervejaIcon />
            <span>Cervejas</span>
          </a>
        </li>
      </ul>
    </nav>
  </Container>
}
