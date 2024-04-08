import { Head } from '../../../components/Head'
import { SnackTitle } from '../../../components/SnackTitle'
import { Snacks } from '../../../components/Snacks'


export default function SAlcool() {
  const data = [
    {
      id: 1,
      snack: 'salcool',
      name: 'Água com gás',
      description: 'Água carbonatada, consiste em água na qual se dissolve dióxido de carbono sob pressão.',
      price: 6.5,
      image: 'https://ampost.com.br/wp-content/uploads/2023/11/agua-com-gas-faz-mal.jpg',
    },
    {
      id: 2,
      snack: 'salcool',
      name: 'Red Bull',
      description: 'Bebida energética, taurina, glucuronolactona, cafeína e vitaminas do complexo B.',
      price: 14.5,
      image: 'https://media.warriortrading.com/2022/04/04131227/shutterstock_1536802289.jpg',
    },
]
  return (
    <>
      <Head title='SAlcool' description='Bebidas não alcoólicas' />
      <SnackTitle>Sem Álcool</SnackTitle>
      <Snacks snacks={data}></Snacks>

    </>
  )
}
