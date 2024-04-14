import  { useState, useEffect } from 'react'
import { Head } from '../../../components/Head'
import { SnackTitle } from '../../../components/SnackTitle'
import { Snacks } from '../../../components/Snacks'
import { getPorcoes } from '../../../services/api'


export default function Porcoes() {
  const [porcoes, setPorcoes] = useState([])
    useEffect(() => {
      ;(async () => {
        const porcoesRequest = await getPorcoes()
        setPorcoes(porcoesRequest.data)
      })()
  }, [])

  return (
    <>
      <Head title='Porcoes' description='Porções diferenciadas' />
      <SnackTitle>Porções</SnackTitle>
      <Snacks snacks={porcoes}></Snacks>

    </>
  )
}
