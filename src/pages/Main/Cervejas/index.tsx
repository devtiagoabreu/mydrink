import { Head } from '../../../components/Head'
import { SnackTitle } from '../../../components/SnackTitle'
import { Snacks } from '../../../components/Snacks'

export default function Cervejas() {
  const data = [
    {
      id: 1,
      snack: 'Cervejas',
      name: 'Sancta Stout',
      description: 'A Sancta Stout: cerveja de alta fermentação, 6% ABV e 35 IBU. Feita com malte e cevada torrada, apresenta sabor tostado e cor escura característica. A adição de aveia proporciona um paladar "aveludado". Corpo médio e amargor equilibrado, representante clássica do estilo irlandês em Barbarense.',
      price: 22.5,
      image: 'https://files.menudino.com/cardapios/8164/324.jpg',
    },
    {
      id: 2,
      snack: 'Cervejas',
      name: 'Bárbara',
      description: 'Cerveja com 4,9% ABV e 14 IBU. Feita com malte tipo Pilsner, lúpulo Saaz e água de baixa mineralidade. Apresenta aroma e sabor tradicionais da cerveja brasileira, sendo o estilo mais consumido no país e popular globalmente. Corpo leve, amargor sutil e leve dulçor do malte Pilsen, com baixo teor alcoólico.',
      price: 22.5,
      image: 'https://cervejariaantuerpia.com.br/wp-content/uploads/2020/09/hist%C3%B3ria-origem-cerveja-pilsen-1536x1051.jpg',
    },
    {
      id: 3,
      snack: 'Cervejas',
      name: 'BrontoSour',
      description: 'Catharina Sour com 4,5% ABV e 8 IBU. Feita de trigo, com acidez pronunciada e adição de goiaba e amora. Amargor mínimo, corpo leve, baixo teor alcoólico e alta carbonatação. A goiaba traz explosão de aroma e sabor, enquanto a amora complementa em segundo plano. Refrescante e azedinha.',
      price: 26.5,
      image: 'https://mydrink.com.br/images/cerva001.jpg',
    },
    {
      id: 4,
      snack: 'Cervejas',
      name: 'Margarida',
      description: 'ABV: 3.8% | IBU:18 Nossa versão da Summer Ale tem como base uma blond ale belga. Nós adicionamos o lúpulo Citra no final da fervura, criando uma refrescante e interessante combinação do frutado cítrico da levedura com o toque cítrico do lúpulo. Muito atrativa para dias quentes de verão.',
      price: 19.5,
      image: 'https://filescms.s3.sa-east-1.amazonaws.com/2021/05/Blonde-Ale2.jpg',
    },
    {
      id: 5,
      snack: 'Cervejas',
      name: 'Pérola',
      description: 'Cerveja belga de trigo com 4.5% ABV e 14 IBU. Condimentada com sementes de coentro, cascas de laranja e camomila, oferece alta drinkability e extrema refrescância. O trigo não maltado proporciona um paladar aveludado, combinando-se com o sabor das especiarias, Muito atrativa para.',
      price: 22.5,
      image: 'https://filescms.s3.sa-east-1.amazonaws.com/2021/05/witbier.jpg',
    },
    {
      id: 6,
      snack: 'Cervejas',
      name: 'Sapezeiro',
      description: 'Session IPA com 4,4% ABV e 26 IBU. Versão menos alcoólica, mantendo características lupuladas. Desenvolvida para equilibrar quantidade e qualidade, priorizando aroma sobre amargor. Utiliza levedura kweik, de origem norueguesa. Corpo leve e extremamente refrescanteMuito atrativa para.',
      price: 22.5,
      image: 'https://cervejar.com/wp-content/webp-express/webp-images/uploads/2023/06/cerveja-ipa.jpg.webp',
    },
    {
      id: 7,
      snack: 'Cervejas',
      name: 'SBO',
      description: 'ABV: 4% | IBU: 18 Cerveja de coloração dourada, com baixo teor alcoólico, baixo amargor e delicioso aroma e sabor de lúpulo. Nossa Hop Lager é uma cerveja leve de baixa fermentação com dryhop de lúpulo citra. Corpo leve e extremamente refrescanteMuito atrativa para dias de verão.',
      price: 22.5,
      image: 'https://cervejariaantuerpia.com.br/wp-content/uploads/2020/09/como-surgiu-a-cerveja-artesanal.jpg',
    },
]
  return (
    <>
      <Head title='Cervejas' description='Nossas melhores cervejas artesanais' />
      <SnackTitle>Cervejas</SnackTitle>
      <Snacks snacks={data}></Snacks>

    </>
  )
}
