import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import * as styles from "../components/index.module.css"

const links = [
  {
    text: "Convertir unidades",
    url: "calcunidades",
    description:
      "Convierte unidades del Sistema Internacional y del sistema inglés y aprende sus orígenes.",
  },
]

const samplePageLinks = [
  {
    text: "Page 2",
    url: "calcunidades",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <StaticImage
        src="../images/example.png"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <h1>
        Calculadora de <b>Unidades</b>
      </h1>
      <p className={styles.intro}>
        En la actualidad, resulta inconcebible imaginar la vida sin la presencia
        omnipresente de las unidades de medida. Estas se han convertido en
        elementos fundamentales en nuestras actividades diarias, ya sea al
        comprar un kilo de arroz, un litro de leche o medir la longitud de una
        soga en metros. <br/>
        El establecimiento de estas medidas tuvo su origen en la
        "I Conferencia General de Pesas y Medidas" celebrada en Francia en 1960,
        donde se definieron las unidades fundamentales y derivadas. En este
        evento histórico se fijaron estándares para la distancia de un metro, la
        duración de un segundo y el peso de un kilogramo.
        <br />
      </p>
    </div>
    <ul className={styles.list}>
      {links.map(link => (
        <li key={link.url} className={styles.listItem}>
          <a
            className={styles.listItemLink}
            href={`${link.url}${utmParameters}`}
          >
            {link.text} ↗
          </a>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */

export default IndexPage
