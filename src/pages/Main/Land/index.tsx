import  { useState, useEffect } from 'react'
import { Head } from '../../../components/Head'
import { SnackTitle } from '../../../components/SnackTitle'
import { Pannel } from '../../../components/Pannel'
import { getLand } from '../../../services/api'

export default function Land() {
  const [land, setLand] = useState([])
    useEffect(() => {
      ;(async () => {
        const landRequest = await getLand()
        setLand(landRequest.data)
      })()
  }, [])

  return (
    <>
      <Head title='Land' description='A melhor Cervejaria artesanal da Região' />
      <SnackTitle>Sancta Cervejaria</SnackTitle>
      <Pannel pannel={land}></Pannel>

    </>
  )
}
