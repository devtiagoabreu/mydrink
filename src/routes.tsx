import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/Main'
import BurgersPage from './pages/Main/Burgers'
import PizzasPage from './pages/Main/Pizzas'
import CervejasPage from './pages/Main/Cervejas'
import DestiladosPage from './pages/Main/Destilados'
import VinhosPage from './pages/Main/Vinhos'
import EnergeticosPage from './pages/Main/Energeticos'
import RefrigerantesPage from './pages/Main/Refrigerantes'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />}>
        <Route path='/' element={<CervejasPage />} />
        <Route path='destilados' element={<DestiladosPage />} />
        <Route path='vinhos' element={<VinhosPage />} />
        <Route path='energeticos' element={<EnergeticosPage />} />
        <Route path='refrigerantes' element={<RefrigerantesPage />} />
        <Route path='burgers' element={<BurgersPage />} />
        <Route path='pizzas' element={<PizzasPage />} />
      </Route>
    </Routes>
  )
}
