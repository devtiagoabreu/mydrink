import { Head } from '../../../components/Head'
import { SnackTitle } from '../../../components/SnackTitle'
import { Snacks } from '../../../components/Snacks'

export default function Land() {
  const data = [
    {
      id: 1,
      snack: 'burger',
      name: 'Mega',
      description: 'O artesanal tamanho família, recheado com três carnes suculentas, queijo e bacon.',
      price: 25.5,
      image: 'https://liberal.com.br/wp-content/uploads/2022/07/Espa%C3%A7o-re%C3%BAne-boa-cerveja-de-produ%C3%A7%C3%A3o-pr%C3%B3pria-gastronomia-um-ambiente-descontra%C3%ADdo-m%C3%BAsica-e-arte__Divulga%C3%A7%C3%A3o.jpg',
    },
    {
      id: 2,
      snack: 'burger',
      name: 'Extra Bacon',
      description: 'Criado para os amantes de bacon, possui em todas as suas camadas bacon bem assado, e ainda queijo e carne.',
      price: 23.5,
      image: 'https://i.imgur.com/B4J04AJ.jpg',
    },
]
  return (
    <>
      <Head title='Land' description='A melhor Cervejaria artesanal da Região' />
      <SnackTitle>Sancta Cervejaria</SnackTitle>
      <Snacks snacks={data}></Snacks>

    </>
  )
}
