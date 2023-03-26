import { useState } from "react"
import { Container } from "./styles"
import menuImg from '../../assets/menu.svg'
import { ReactComponent as CervejaIcon } from '../../assets/cerveja.svg'
import { ReactComponent as WhiskeyIcon } from '../../assets/whiskey.svg'
import { ReactComponent as VinhoIcon } from '../../assets/vinho.svg'
import { ReactComponent as EnergyDrinkIcon } from '../../assets/energy-drink.svg'
import { ReactComponent as RefrigeranteIcon } from '../../assets/refrigerante.svg'


export function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <Container isMenuOpen={menuOpen}>
      <button type='button' onClick={handleToggleMenu}>
        <img src={menuImg} alt='Abrie e fechar o menu' />
      </button>
      <nav>
        <ul>
          <li>
            <a href='#' className='active'>
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
  )
}
