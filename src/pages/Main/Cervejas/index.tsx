import  { useState, useEffect } from 'react'
import { Head } from '../../../components/Head'
import { SnackTitle } from '../../../components/SnackTitle'
import { Snacks } from '../../../components/Snacks'
import { getCervejas } from '../../../services/api'

export default function Cervejas() {
  const [cervejas, setCervejas] = useState([])
    useEffect(() => {
      ;(async () => {
        const cervejasRequest = await getCervejas()
        setCervejas(cervejasRequest.data)
      })()
  }, [])

  return (
    <>
      <Head title='Cervejas' description='Nossas melhores cervejas artesanais' />
      <SnackTitle>Cervejas</SnackTitle>
      <Snacks snacks={cervejas}></Snacks>

    </>
  )
}
