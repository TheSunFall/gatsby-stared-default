import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../components/calcunidades.css"
import { useState } from "react"

const Form = () => {
  const [tipo, setTipo] = useState("longitud")
  const [uIn, setUIn] = useState("metros")
  const [uDest, setUDest] = useState("centímetros")
  const unidades = {
    longitud: [
      "metros",
      "micrómetro",
      "nanómetro",
      "picometro",
    ],
    energia: ["julios", "calorías"],
    densidad: ["g/cm³", "kg/m³", "kg/L", "g/ml"],
    volumen: ["litro", "milímetro cúbico", "cm³", "m³"],
    masa: [
      "gramo",
      "kilogramo",
      "miligramo",
      "centigramo",
      "decagramo",
      "hectogramo",
    ],
  }
  return (
    <div>
      <label htmlFor="tipoMedida">Seleccione el tipo de medida:</label>
      <select
        id="tipoMedida"
        value={tipo}
        onChange={e => setTipo(e.target.value)}
      >
        <option value="longitud">Longitud</option>
        <option value="energia">Energía</option>
        <option value="densidad">Densidad</option>
        <option value="volumen">Volumen</option>
        <option value="masa">Masa</option>
        <option value="temperatura">Temperatura</option>
        <option value="presion">Presión</option>
        <option value="tiempo">Tiempo</option>
      </select>

      <label htmlFor="valor">Ingrese el valor:</label>
      <input type="number" id="valor" />

      <label htmlFor="unidadOrigen">Unidad de origen:</label>
      <select id="unidadOrigen" value={uIn}
        onChange={e => setUIn(e.target.value)}>
        {unidades[tipo].map(u => {
          return <option value={u}>{u}</option>
        })}
      </select>

      <label htmlFor="unidadDestino">Unidad de destino:</label>
      <select id="unidadDestino" value={uDest}
        onChange={e => setUDest(e.target.value)}>
        {unidades[tipo].map(u => {
          return <option value={u}>{u}</option>
        })}
      </select>
      <button>Convertir</button>
    </div>
  )
}

const SecondPage = () => (
  <Layout>
    <h1>Convertidor de Medidas</h1>
    <Form></Form>

    <div id="resultado"></div>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default SecondPage
