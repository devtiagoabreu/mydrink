import { Head } from '../../../components/Head'
import { SnackTitle } from '../../../components/SnackTitle'
import { Snacks } from '../../../components/Snacks'

export default function Burgers() {
  const data = [
    {
      id: 1,
      snack: 'burger',
      name: 'Burger das Americas',
      description: 'O artesanal tamanho família, hambúrguer artesanal no pão australiano com cheddar, cebola caramelizada, bacon crocante e molho barbecue.',
      price: 40.50,
      image: 'https://files.menudino.com/cardapios/8164/758.jpg',
    },
    {
      id: 2,
      snack: 'burger',
      name: 'Burger Sancto',
      description: 'Criado para os amantes de bacon, hamburguer artesanal, bacon, queijo prato, cebola, alface e tomate no pão de brioche. Impecável!',
      price: 37.5,
      image: 'https://files.menudino.com/cardapios/8164/762.jpg',
    },
    {
      id: 3,
      snack: 'burger',
      name: 'Burger do Caribe',
      description: 'Hambúrguer artesanal , bacon crocante , queijo prato , pasta de amendoim e uma deliciosa geleia de pimenta preparada pela nossa chef , no pão brioche.',
      price: 37.5,
      image: 'https://files.menudino.com/cardapios/8164/760.jpg',
    },
    {
      id: 4,
      snack: 'burger',
      name: 'Cara Burger',
      description: 'Hamburguer artesanal, queijo cheddar, cebola caramelizada no pão australiano. Uma deliciosa combinação de sabores, o tornam incomparável!',
      price: 32.80,
      image: 'https://files.menudino.com/cardapios/8164/763.jpg',
    },
    {
      id: 5,
      snack: 'burger',
      name: 'Sanduiche de Frango',
      description: 'Peito de Frango empanado, cream cheese, rúcula, alface e tomate no pão de ciabatta. Uma maravilhosa entrada ou acompamhamento.',
      price: 30.5,
      image: 'https://files.menudino.com/cardapios/8164/766.jpg',
    },
    {
      id: 6,
      snack: 'burger',
      name: 'Sanduiche de Linguiça',
      description: 'Linguiça tradicional, queijo prato, rúcula, vinagrete no pão de ciabatta. Completíssimo para acompanhar todas as nossas cervejas.',
      price: 37.5,
      image: 'https://files.menudino.com/cardapios/8164/767.jpg',
    },
]

 //console.log('data', data);

  return (
    <>
      <Head title='Hamburgueres' description='Nossos melhores burguers' />
      <SnackTitle>Hambúrgueres</SnackTitle>
      <Snacks snacks={data}></Snacks>
    </>
  )
}
