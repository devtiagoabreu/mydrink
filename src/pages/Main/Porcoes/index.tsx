import { Head } from '../../../components/Head'
import { SnackTitle } from '../../../components/SnackTitle'
import { Snacks } from '../../../components/Snacks'

export default function Porcoes() {
  const data = [
    {
      id: 1,
      snack: 'porcoes',
      name: 'Anéis de Cebola ',
      description: 'Acompanha maionese da casa.',
      price: 28.5,
      image: 'https://www.culinariadavovo.com.br/wp-content/uploads/2021/03/anel-de-cebola-na-AirFryer.jpg',
    },
    {
      id: 2,
      snack: 'porcoes',
      name: 'Mandioca Frita',
      description: 'Acompanha maionese da casa.',
      price: 27.5,
      image: 'https://artedochef.com.br/wp-content/uploads/2023/05/como-fazer-mandioca-frita.jpg',
    },
]
  return (
    <>
      <Head title='Porcoes' description='Porções diferenciadas' />
      <SnackTitle>Porções</SnackTitle>
      <Snacks snacks={data}></Snacks>

    </>
  )
}
