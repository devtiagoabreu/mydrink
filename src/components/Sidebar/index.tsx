import { Container } from "./styles"
import menuImg from '../../assets/menu.svg'
import { ReactComponent as CervejaIcon } from '../../assets/cerveja.svg'
import { ReactComponent as WhiskeyIcon } from '../../assets/whiskey.svg'
import { ReactComponent as VinhoIcon } from '../../assets/vinho.svg'
import { ReactComponent as EnergyDrinkIcon } from '../../assets/energy-drink.svg'
import { ReactComponent as RefrigeranteIcon } from '../../assets/refrigerante.svg'


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
        <li>
          <a href='#' >
            <WhiskeyIcon />
            <span>Destilados</span>
          </a>
        </li>
        <li>
          <a href='#' >
            <VinhoIcon />
            <span>Vinhos</span>
          </a>
        </li>
        <li>
          <a href='#' >
            <EnergyDrinkIcon />
            <span>Energéticos</span>
          </a>
        </li>
        <li>
          <a href='#' >
            <RefrigeranteIcon />
            <span>Refrigerantes</span>
          </a>
        </li>
      </ul>
    </nav>
  </Container>
}
