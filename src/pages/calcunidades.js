import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { useState } from "react"
import * as calcstyles from "../components/calcunidades.module.css"
import cambios from "../components/lib/unidades"

const Form = () => {
  const [tipo, setTipo] = useState("longitud")
  const [uIn, setUIn] = useState("metros")
  const [uDest, setUDest] = useState("centímetros")
  const [valor, setValor] = useState(0)
  const unidades = {
    longitud: [
      "metros",
      "centímetros",
      "kilómetros",
      "pulgadas",
      "pies",
      "micrómetros",
      "nanómetros",
      "picometros",
    ],
    fuerza: ["newtons", "kilogramos-fuerza", "libras-fuerza", "dinas"],
    energia: ["joules", "calorías", "kilográmetros", "ergios"],
    potencia: [
      "watts",
      "caballos de fuerza",
      "caballos de vapor",
      "kilocalorías/hora",
    ],

    volumen: [
      "litros",
      "centímetros cúbicos",
      "metros cúbicos",
      "galones",
      "barriles",
      "onzas líquidas"
    ],
    masa: ["gramos", "kilogramos", "libras", "onzas", "slugs"],
  }
  return (
    <div className={calcstyles.mainForm}>
      <label htmlFor="tipoMedida">Seleccione el tipo de medida:</label>
      <select
        id="tipoMedida"
        value={tipo}
        onChange={e => {
          setTipo(e.target.value)
          setUIn(unidades[e.target.value][0])
          setUDest(unidades[e.target.value][0])
        }}
      >
        <option value="longitud">Longitud</option>
        <option value="masa">Masa</option>
        <option value="fuerza">Fuerza</option>
        <option value="energia">Energía</option>
        <option value="potencia">Potencia</option>
        <option value="volumen">Volumen</option>
      </select>

      <label htmlFor="valor">Ingrese el valor:</label>
      <input
        type="number"
        id="valor"
        value={valor}
        onChange={e => setValor(e.target.value)}
      />

      <label htmlFor="unidadOrigen">Unidad de origen:</label>
      <select
        id="unidadOrigen"
        value={uIn}
        onChange={e => setUIn(e.target.value)}
      >
        {unidades[tipo].map(u => {
          return <option value={u}>{u}</option>
        })}
      </select>
      <label htmlFor="unidadDestino">Unidad de destino:</label>
      <select
        id="unidadDestino"
        value={uDest}
        onChange={e => setUDest(e.target.value)}
      >
        {unidades[tipo].map(un => {
          return <option value={un}>{un}</option>
        })}
      </select>
      <div className={calcstyles.descUIn}>{cambios[tipo][uIn].def}</div>
      <div className={calcstyles.descUDest}>{cambios[tipo][uDest].def}</div>
      <div className={calcstyles.conversion}>{valor + cambios[tipo][uIn].abv}={((valor * cambios[tipo][uDest].val) / cambios[tipo][uIn].val).toFixed(4) + cambios[tipo][uDest].abv}</div>
    </div>
  )
}

const SecondPage = () => (
  <Layout>
    <h1>Convertidor de Medidas</h1>
    <Form></Form>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default SecondPage
