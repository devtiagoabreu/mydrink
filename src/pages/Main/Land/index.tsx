import { Head } from '../../../components/Head'
import { SnackTitle } from '../../../components/SnackTitle'
import { Pannel } from '../../../components/Pannel'

export default function Land() {
  const data = [
    {
      id: 1,
      pannel: 'land',
      name: 'Qua - Dia do Burguer',
      description: 'Quarta é Dia do Burguer na Sancta Cervejaria! Venha saborear os melhores hambúrgueres da cidade.',
      important: '',
      image: 'https://files.menudino.com/cardapios/8164/762.jpg',
    },
    {
      id: 2,
      pannel: 'land',
      name: 'Qui - karaokê',
      description: 'Outro pilar que sustenta a Sancta é a arte, através principalmente da música ao vivo de ótima qualidade.',
      important: '',
      image: 'https://mydrink.com.br/images/karaoke.jpg',
    },
    {
      id: 3,
      pannel: 'land',
      name: 'Sex - Banda Fly End',
      description: 'Banda de pop-rock, nacional e internacional com influencias do rock dos anos 80 e 90',
      important: '',
      image: 'https://mydrink.com.br/images/bandaflyend.jpg',
    },
    {
      id: 4,
      pannel: 'land',
      name: 'Sáb - Juarez Angelini',
      description: 'Estilo pop rock nacional e internacional: U2, Oasis, Legião Urbana, Lulu Santos, sucessos dos anos 80 e 90.',
      important: '',
      image: 'https://mydrink.com.br/images/juarezangelini.jpg',
    },

]
  return (
    <>
      <Head title='Land' description='A melhor Cervejaria artesanal da Região' />
      <SnackTitle>Sancta Cervejaria</SnackTitle>
      <Pannel pannel={data}></Pannel>

    </>
  )
}
