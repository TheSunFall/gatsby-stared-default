const cambios = {
  longitud: {
    metros: {
      abv: "m",
      val: 1,
      def: "El metro es la unidad básica de longitud en el Sistema Internacional. Se define como la distancia que recorre la luz en el vacío durante un intervalo de 1/299,792,458 segundos.",
    },
    centímetros: {
      abv: "cm",
      val: 100,
      def: "El centímetro es igual a 0.01 metros. Es una unidad común para mediciones más detalladas, como la longitud de un objeto pequeño o la altura de una persona. Es la unidad de longitud en el Sistema Cegesimal de Unidades",
    },
    kilómetros: {
      abv: "km",
      val: 0.001,
      def: "El kilómetro es igual a 1,000 metros. Es una unidad comúnmente utilizada para medir distancias más extensas, como la longitud de carreteras, distancias entre ciudades y dimensiones geográficas.",
    },
    micrómetros: {
      abv: "µm",
      val: 1000000,
      def: "El micrómetro, también conocido como el micrón, es igual a una millonésima parte de un metro (10^(-6) metros). Esta unidad se utiliza en diversas disciplinas, como la microbiología, la ingeniería y la tecnología de semiconductores.",
    },
    nanómetros: {
      abv: "µm",
      val: 1000000000,
      def: "El nanómetro es igual a una milmillonésima parte de un metro (10^(-9) metros). Es una unidad de medida comúnmente utilizada en la investigación y desarrollo en campos como la nanotecnología, la biología celular y la óptica.",
    },
    pulgadas: {
      abv: "in",
      val: 0.00254,
      def: "La pulgada es una unidad de longitud del sistema imperial y estadounidense. Una pulgada equivale a 1/12 de pie o aproximadamente 2.54 centímetros. Se utiliza para mediciones más precisas, como en la fabricación y diseño de objetos pequeños.",
    },
    pies: {
      abv: "ft",
      val: 0.03048,
      def: "El pie es una unidad de longitud común en el sistema de medidas imperiales y estadounidenses. Equivale a 12 pulgadas o 0.3048 metros. Se utiliza para medir distancias cortas, como la altura de una persona o la longitud de una habitación.",
    },
    picómetros: {
      abv: "pm",
      val: 1000000000000,
      def: "El picómetro es una unidad de longitud en el sistema métrico, y equivale a una billonésima parte de un metro (10^(-12) metros). Esta escala de medida se utiliza principalmente en el ámbito de la física cuántica y la nanotecnología.",
    },
  },
  masa: {
    kilogramos: {
      abv: "kg",
      val: 1,
      def: " El kilogramo es la unidad básica de masa en el SI. Se define mediante el prototipo internacional del kilogramo, un cilindro de platino-iridio almacenado en la Oficina Internacional de Pesas y Medidas en Francia.",
    },
    gramos: {
      abv: "g",
      val: 1000,
      def: "El gramo es la unidad básica de masa en el Sistema Cegesimal de Unidades. Un gramo es equivalente a una milésima parte de un kilogramo. Se utiliza comúnmente para expresar masas de objetos de tamaño moderado, alimentos y productos en general.",
    },
    libras: {
      abv: "lb",
      val: 0.454,
      def: "La libra es una unidad de masa utilizada en sistemas de medida como el sistema imperial y el sistema estadounidense. Una libra equivale a aproximadamente 0.4536 kilogramos. Es una medida común en los Estados Unidos y otros países que utilizan el sistema imperial para expresar el peso corporal, la masa de productos en el comercio y en el hogar.",
    },
    onzas: {
      abv: "oz",
      val: 0.02835,
      def: "La onza es una unidad de medida de masa utilizada en diversos sistemas de unidades, el más común siendo el sistema avoirdupois (común en los Estados Unidos y otros lugares). En el sistema avoirdupois, una onza equivale a aproximadamente 28.3495 gramos",
    },
    slugs: {
      abv: "sl",
      val: 14.59,
      def: "El slug es una unidad de masa en el sistema de unidades británicas de ingeniería. Un slug es aproximadamente igual a 14.59 kilogramos. A diferencia de la libra, que se utiliza comúnmente en situaciones diarias, el slug es una medida más técnica y se emplea en cálculos de ingeniería, especialmente en la dinámica de cuerpos en movimiento.",
    },
  },
  fuerza: {
    newtons: {
      abv: "N",
      val: 1,
      def: "El newton es la unidad de medida de la fuerza en el Sistema Internacional de Unidades (SI). Un newton es la fuerza necesaria para impartir una aceleración de 1 metro por segundo cuadrado a una masa de 1 kilogramo.",
    },
    "kilogramos-fuerza": {
      abv: "kg-f",
      val: 1 / 9.81,
      def: "El kilogramo fuerza es una unidad de fuerza que se define como la fuerza gravitatoria ejercida sobre un kilogramo de masa. Es utilizada en algunos sistemas de unidades no estándar, y su valor es aproximadamente 9.8 newtons, que es la aceleración debida a la gravedad en la Tierra.",
    },
    "libras-fuerza": {
      abv: "lbf",
      val: 4.448,
      def: "La libra fuerza es una unidad de fuerza en el sistema imperial y estadounidense. Representa la fuerza gravitatoria ejercida sobre una libra de masa y es aproximadamente igual a 4.448 newtons.",
    },
    dinas: {
      abv: "dyn",
      val: 10000000,
      def: "La dina es la unidad de medida de la fuerza en el sistema cegesimal, que se basa en centímetros, gramos y segundos. Un dina es la fuerza necesaria para impartir una aceleración de 1 centímetro por segundo cuadrado a una masa de 1 gramo.",
    },
  },
  energia: {
    joules: {
      abv: "J",
      val: 1,
      def: "El joule es la unidad de medida de la energía en el Sistema Internacional. Un joule es igual a un newton en una distancia de un metro y se utiliza para medir tanto la energía como el trabajo.",
    },
    calorías: {
      abv: "cal",
      val: 4.184,
      def: "La caloría es una unidad de energía utilizada en el campo de la nutrición y la termodinámica. Una caloría grande (cal o kcal) es la cantidad de energía requerida para elevar la temperatura de 1 gramo de agua a una temperatura de 1°C.",
    },
    kilográmetros: {
      abv: "kgm",
      val: 1 / 9.81,
      def: "El kilográmetro es la unidad de trabajo en el Sistema Técnico de Unidades. Un kilográmetro se define como el trabajo que hace una fuerza de 1 kilogramo-fuerza con un desplazamiento de 1 metro. Por lo tanto, el kilográmetro es igual a 9,81 J",
    },
    ergios: {
      abv: "erg",
      val: 10000000,
      def: "El ergio es una unidad de energía en el sistema cegesimal y se utiliza en el ámbito de la física. Un ergio es la cantidad de energía necesaria para realizar un trabajo de 1 dina sobre una distancia de 1 centímetro.",
    },
  },
  potencia: {
    watts: {
      abv: "W",
      val: 1,
      def: "El watt es la unidad de potencia en el Sistema Internacional. Un watt es igual a un joule por segundo y se utiliza para medir la tasa de cambio de energía o trabajo.",
    },
    "caballos de fuerza": {
      abv: "HP",
      val: 1 / 745.7,
      def: "El caballo de fuerza es una unidad de potencia utilizada en el sistema imperial y estadounidense. Un caballo de fuerza se define como 550 pies-libras por segundo o aproximadamente 745.7 watts.",
    },
    "caballos de vapor": {
      abv: "CV",
      val: 1 / 735.7,
      def: "El caballo de vapor es una unidad de potencia utilizada en algunos sistemas de medida europeos. Un caballo de vapor se define como 75 kilogramos metro por segundo o aproximadamente 735.5 watts.",
    },
    "kilocalorías/hora": {
      abv: "kcal/h",
      val: 1 / 1.163,
      def: "La kilocaloría por hora es una unidad de medida de la tasa de transferencia de energía térmica. Se utiliza comúnmente en sistemas de calefacción y refrigeración para expresar la capacidad de estos sistemas para transferir calor. Una kilocaloría por hora es la cantidad de energía necesaria para elevar la temperatura de 1 kilogramo de agua en 1 grado Celsius durante una hora.",
    },
  },
  volumen: {
    litros: {
      abv: "L",
      val: 1,
      def: "El litro es una unidad de medida de volumen en el Sistema Internacional de Unidades (SI). Equivale a un decímetro cúbico (1 dm³) o 1,000 centímetros cúbicos. El litro se utiliza comúnmente para expresar volúmenes de líquidos y también puede aplicarse a sólidos granulares, como arena o tierra.",
    },
    "centímetros cúbicos": {
      abv: "cm³",
      val: 1000,
      def: "El centímetro cúbico es la unidad de volumen que representa el volumen de un cubo con lados de un centímetro de longitud. Es equivalente a un mililitro (1 cm³ = 1 mL). Se utiliza principalmente en contextos científicos, médicos e ingenieriles para describir volúmenes pequeños y precisos.",
    },
    "metros cúbicos": {
      abv: "m³",
      val: 0.001,
      def: "El metro cúbico es la unidad principal de volumen en el Sistema Internacional de Unidades (SI). Un metro cúbico es el volumen de un cubo con lados de un metro de longitud. Es una medida estándar para describir grandes volúmenes, como el volumen de un recipiente, un espacio o una cantidad significativa de material.",
    },
    galones: {
      abv: "gal",
      val: 4.546,
      def: "El galón es una unidad de medida de volumen utilizada en varios sistemas de unidades, siendo más común el galón británico que equivale a aproximadamente 4.546 litros. El galón se utiliza comúnmente para medir volúmenes de líquidos, especialmente en contextos como el abastecimiento de combustible, la venta de líquidos a granel y el consumo doméstico.",
    },
    barriles: {
      abv: "bbl",
      val: 159,
      def: "El barril es una unidad de volumen utilizada principalmente en la industria del petróleo. Su tamaño puede variar según el contexto geográfico y el tipo de barril. El barril estándar de petróleo, también conocido como barril de petróleo crudo, se define en aproximadamente 42 galones estadounidenses o 159 litros.",
    },
    "onzas líquidas": {
      abv: "fl.oz",
      val: 0.02957,
      def: "La onza líquida es una unidad de volumen utilizada para medir líquidos. En el sistema estadounidense, una onza líquida es igual a aproximadamente 29.5735 mililitros, mientras que en el sistema imperial, una onza líquida equivale a aproximadamente 28.4131 mililitros.",
    },
  },
}
export default cambios
