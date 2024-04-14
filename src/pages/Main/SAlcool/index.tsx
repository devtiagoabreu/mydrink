import  { useState, useEffect } from 'react'
import { Head } from '../../../components/Head'
import { SnackTitle } from '../../../components/SnackTitle'
import { Snacks } from '../../../components/Snacks'
import { getSAlcool } from '../../../services/api'

export default function SAlcool() {
  const [salcool, setSAlcool] = useState([])
    useEffect(() => {
      ;(async () => {
        const salcoolRequest = await getSAlcool()
        setSAlcool(salcoolRequest.data)
      })()
  }, [])

  return (
    <>
      <Head title='SAlcool' description='Bebidas não alcoólicas' />
      <SnackTitle>Sem Álcool</SnackTitle>
      <Snacks snacks={salcool}></Snacks>

    </>
  )
}
