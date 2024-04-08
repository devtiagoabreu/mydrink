import { Head } from '../../../components/Head'
import { SnackTitle } from '../../../components/SnackTitle'
import { Pannel } from '../../../components/Pannel'

export default function Land() {
  const data = [
    {
      id: 1,
      pannel: 'land',
      name: 'Programação da Semana',
      description: '• Quarta - Dia do Burguer • Quinta - karaokê • Sexta - Banda Fly End • Sábado - Juarez Angelini •',
      important: 'Resumão',
      image: 'https://liberal.com.br/wp-content/uploads/2022/07/Espa%C3%A7o-re%C3%BAne-boa-cerveja-de-produ%C3%A7%C3%A3o-pr%C3%B3pria-gastronomia-um-ambiente-descontra%C3%ADdo-m%C3%BAsica-e-arte__Divulga%C3%A7%C3%A3o.jpg',
    },
    {
      id: 2,
      pannel: 'land',
      name: 'Quarta - Dia do Burguer',
      description: 'Igor Guimarães.',
      important: 'stand-up comedy!',
      image: 'https://ohoje.com/public/imagens/fotos/amp/2022/11/13-MATERIA-CAPA-22-1024x576.jpg',
    },
    {
      id: 3,
      pannel: 'land',
      name: 'Quinta - karaokê',
      description: 'Igor Guimarães.',
      important: 'stand-up comedy!',
      image: 'https://ohoje.com/public/imagens/fotos/amp/2022/11/13-MATERIA-CAPA-22-1024x576.jpg',
    },
    {
      id: 4,
      pannel: 'land',
      name: 'Sexta - Banda Fly End',
      description: 'Igor Guimarães.',
      important: 'stand-up comedy!',
      image: 'https://ohoje.com/public/imagens/fotos/amp/2022/11/13-MATERIA-CAPA-22-1024x576.jpg',
    },
    {
      id: 5,
      pannel: 'land',
      name: 'Sábado - Juarez Angelini',
      description: 'Músico há mais de dez anos. Focado no estilo pop rock nacional e internacional como referência artistas como U2, Oasis, Legião Urbana, Lulu Santos, grandes sucessos da anos 80 e 90.',
      important: 'Acesse uma palhinha.',
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
