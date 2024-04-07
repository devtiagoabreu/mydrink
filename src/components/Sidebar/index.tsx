import { useState } from "react"
import { NavLink } from "react-router-dom"
import { Container } from "./styles"
import menuImg from '../../assets/menu.svg'
import { ReactComponent as LupuloIcon } from '../../assets/lupulo.svg'
import { ReactComponent as CervejaIcon } from '../../assets/cerveja.svg'
import { ReactComponent as BurgerIcon } from '../../assets/burger.svg'
import { ReactComponent as PizzaIcon } from '../../assets/pizza.svg'
import { ReactComponent as EnergyDrinkIcon } from '../../assets/energy-drink.svg'


export function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <Container isMenuOpen={menuOpen}>
      <button type='button' onClick={handleToggleMenu}>
        <img src={menuImg} alt='Abrir e fechar o menu' />
      </button>
      <nav>
        <ul>
        <li>
            <NavLink to='Land'>
              <LupuloIcon />
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='cervejas'>
              <CervejaIcon />
              <span>Cervejas</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='burgers'>
              <BurgerIcon />
              <span>Burgers</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='porcoes'>
              <PizzaIcon />
              <span>Porções</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='SAlcool'>
              <EnergyDrinkIcon />
              <span>S/Alcool</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </Container>
  )
}
