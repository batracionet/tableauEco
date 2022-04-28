import { useState } from 'react'
import Script from 'next/script'

export default function TableauEmbed() {
  const [stripe, setStripe] = useState(null)

  return (
    <>
      <Script
        id="stripe-js"
        src="https://public.tableau.com/views/EmergenciaVialAtencionHistoria/TotalEmergenciasporCondicin"
        onLoad={() => {
          setStripe({ stripe: window.stripe('pk_test_12345') })
        }}
      />

    </>
  )
}
