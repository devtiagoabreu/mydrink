import { useState } from "react"
import { NavLink } from "react-router-dom"
import { Container } from "./styles"
import menuImg from '../../assets/menu.svg'
import { ReactComponent as CervejaIcon } from '../../assets/cerveja.svg'
import { ReactComponent as DestiladoIcon } from '../../assets/whiskey.svg'
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
            <NavLink to='/'>
              <CervejaIcon />
              <span>Cervejas</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='destilados'>
              <DestiladoIcon />
              <span>Destilados</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='vinhos'>
              <VinhoIcon />
              <span>Vinhos</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='energeticos'>
              <EnergyDrinkIcon />
              <span>Energéticos</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='refrigerantes'>
              <RefrigeranteIcon />
              <span>Refrigerantes</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </Container>
  )
}
