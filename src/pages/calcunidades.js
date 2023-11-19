import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { useState } from "react"
import "../components/calcunidades.css"


const cambios = {
  a: {n:1,v:2},
  longitud: {
    metros: {
      abv: "m",
      val: 1,
      def: "aaaa",
    },
    centímetros: {
      abv: "cm",
      val: 0.01,
      def: "",
    },
    kilómetros: {
      abv: "km",
      val: 100,
      def: "",
    },
    micrómetros: {
      abv: "µm",
      val: 0.000001,
      def: "",
    },
    nanómetros: {
      abv: "µm",
      val: 0.000000001,
      def: "",
    },
    pulgadas: {
      abv: "in",
      val: 0.00254,
      def: "",
    },
    pies: {
      abv: "ft",
      val: 0.03048,
      def: "",
    },
    picómetros: {
      abv: "pm",
      val: 0.000000000001,
      def: "",
    },
  },
  masa: {
    kilogramos: {
      abv: "kg",
      val: 1,
      def: "",
    },
    gramos: {
      abv: "g",
      val: 0.001,
      def: "",
    },
    libras: {
      abv: "lb",
      val: 0.454,
      def: "",
    },
    onzas: {
      abv: "oz",
      val: 0.02835,
      def: ""
    },
    slug: {
      abv: "sl",
      val: 14.59,
      def: "",
    },
  },
  fuerza: {
    newtons: {
      abv: "N",
      val: 1,
      def: "",
    },
    "kilogramo-fuerza": {
      abv: "kg-f",
      val: 9.81,
      def: "",
    },
    "libra-fuerza": {
      abv: "lbf",
      val: 4.448,
      def: "",
    },
    dina: {
      abv: "dyn",
      val: 0.0000001,
      def: "",
    },
  },
  energia: {
    joules: {
      abv: "J",
      val: 1,
      def: "",
    },
    calorías: {
      abv: "cal",
      val: 4.184,
      def: "",
    },
    kilográmetros: {
      abv: "kgm",
      val: 9.81,
      def: "",
    },
    ergios: {
      abv: "erg",
      val: 0.0000001,
      def: "",
    },
  },
  potencia: {
    watts: {
      abv: "W",
      val: 1,
      def: "",
    },
    "caballos de fuerza": {
      abv: "HP",
      val: 745.7,
      def: "",
    },
    "caballos de vapor": {
      abv: "CV",
      val: 735.7,
      def: "",
    },
    "kilocalorías/hora": {
      abv: "kcal/h",
      val: 1.163,
      def: "",
    },
  },
  volumen: {
    litro: {
      abv: "L",
      val: 1,
      def: "",
    },
    "centímetro cúbico": {
      abv: "cm³",
      val: 0.001,
      def: "",
    },
    "metro cúbico": {
      abv: "m³",
      val: 1000,
      def: "",
    },
    "galón": {
      abv: "gal",
      val: 4.546,
      def: "",
    },
    "barril": {
      abv: "barril",
      val: 159,
      def: "",
    },
    "onza líquida": {
      abv: "oz",
      val: 0.02957,
      def: "",
    },
  },
}
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
    fuerza: ["newtons", "kilogramos-fuerza","libras-fuerza", "dinas"],
    energia: ["joules", "calorías", "kilográmetros","ergios"],
    potencia: ["watts", "caballos de fuerza","caballos de vapor","kilocalorías/hora"],

    volumen: ["litros", "centímetros cúbico", "metros cúbico", "galones", "barriles"],
    masa: [
      "gramos",
      "kilogramos",
      "libras",
      "onzas",
      "slug"
    ],
  }
  return (
    <div>
      <label htmlFor="tipoMedida">Seleccione el tipo de medida:</label>
      <select
        id="tipoMedida"
        value={tipo}
        onChange={(e) => {
          setTipo(e.target.value);
          setUIn(unidades[e.target.value][0]);
            setUDest(unidades[e.target.value][0]);
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
      <input type="number" id="valor" value={valor}
        onChange={e => setValor(e.target.value)}/>

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
        {unidades[tipo].map(un => {
          return <option value={un}>{un}</option>
        })}
      </select>

      <div id="resultado">El resultado es {valor*cambios[tipo][uDest].val/cambios[tipo][uIn].val}</div>
      {console.log(cambios[tipo][uIn].val)}
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
