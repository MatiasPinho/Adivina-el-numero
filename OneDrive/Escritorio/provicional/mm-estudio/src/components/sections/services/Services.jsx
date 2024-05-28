import "./Services.css";
import { useState } from "react";
import { ExpandleCard } from "../../expandableCard/ExpandleCard";
export const Services = () => {
  const [cardStates, setCardStates] = useState({
    card1: false,
    card2: false,
    card3: false,
    card4: false,
    card5: false,
    card6: false,
  });

  const handleCardClick = (cardName) => {
    setCardStates((prevState) => ({
      card1: false,
      card2: false,
      card3: false,
      card4: false,
      card5: false,
      card6: false,
      [cardName]: !prevState[cardName],
    }));
  };

  return (
    <section className="services__container" id="services-id">
      <div className="services">
        <div className="cards__container">
          <ExpandleCard
            onClick={() => handleCardClick("card1")}
            title="Cálculo estructural
            de hormigón armado
            y steel frame"
            isClicked={cardStates.card1}
            image="/backgrounds/01_calculoestructural.avif"
            titleRight="Creamos estructuras eficientes y duraderas"
            opacityTitle="cálculo estructural"
            paragraph={[
              "Proyectos en hormigón armado y steelframe, colaborando estrechamente con arquitectos y constructores para garantizar el éxito de cada proyecto. En MM estudio, convertimos tus ideas en realidad.",
            ]}
          />
          <ExpandleCard
            title="Diseño MEP
            y domótica"
            onClick={() => handleCardClick("card2")}
            isClicked={cardStates.card2}
            image={"/images/02_diseñomep.png"}
            titleRight="Ofrecemos servicios
            completos de ingeniería MEP"
            opacityTitle="diseño mep y domótica"
            paragraph={[
              "desde el diseño, el cálculo y la planificación hasta la ejecución de instalaciones de electricidad, sanitarias y de gas. Nuestro equipo experto garantiza resultados excepcionales en proyectos de cualquier tamaño y complejidad. Además, lo hacemos en sintonía con la aplicación de soluciones innovadoras en domótica; transformando hogares y edificios en entornos inteligentes y sustentables",
            ]}
          />
          <ExpandleCard
            title="Armado de cómputos,
            presupuestos y planes
            de trabajo"
            onClick={() => handleCardClick("card3")}
            isClicked={cardStates.card3}
            image={"/images/03_armadodecomputos.png"}
            titleRight="A través del análisis de los recursos y los costos de cada proyecto, proporcionamos el armado de cómputos y presupuestos, creando también planes de trabajo detallados y eficientes."
            opacityTitle="cómputos prepuestos y planes de trabajo"
            paragraph={[
              "De esta manera, garantizamos una ejecución ordenada y dentro de los plazos establecidos, con una mayor productividad y efectividad.",
            ]}
          />
        </div>
        <div className="cards__container">
          <ExpandleCard
            onClick={() => handleCardClick("card4")}
            title="Armado en anteproyectos, proyectos y licitaciones"
            isClicked={cardStates.card4}
            image="/images/05_armadoenanteproyectos.png"
            titleRight="Nuestro equipo altamente calificado
            colabora estrechamente con cada cliente
            para transformar sus ideas en diseños
            innovadores y funcionales. "
            opacityTitle="anteproyec
            proyectos y
            licitaciones"
            paragraph={[
              "Formamos parte de todo el proceso, desde el anteproyecto hasta la presentación de documentos detallados para la ejecución del proyecto. Nuestras soluciones son creativas, técnicas y cumplen con las expectativas de los proyectos arquitectónicos más ambiciosos.",
            ]}
          />
          <ExpandleCard
            title="Dirección, ejecución
            y coordinación integral
            de obra"
            onClick={() => handleCardClick("card5")}
            isClicked={cardStates.card5}
            image={"/images/04_direcciónejecución.png"}
            titleRight="Ofrecemos servicios de ejecución y
            coordinación integral, asegurando calidad y
            eficiencia en todas las etapas"
            opacityTitle="dirección
            ejecución
            coordinación"
            paragraph={[
              "desde la planificación inicial hasta la entrega final del proyecto. Además,proporcionamos dirección de obra, asesorando y garantizando que cada detalle cumpla con los estándares más elevados. Garantizamos claridad, precisión,confianza y eficacia.",
            ]}
          />
          <ExpandleCard
            title="Servicio de
            peritaje"
            onClick={() => handleCardClick("card6")}
            isClicked={cardStates.card6}
            image={"/images/06_serviciodeperitaje.png"}
            titleRight="Nuestro perito cuenta con una amplia 
            experiencia y conocimientos en diversas
            áreas de la ingeniería y la construcción."
            opacityTitle="servicio
            de peritaje"
            paragraph={[
              "Lo que les permite evaluar de manera precisa y objetiva cualquier situación o problema relacionado con la estructura y las instalaciones. Nuestro servicio de peritaje incluye",
              "-Informe pericial: preparamos informes periciales detallados y bien fundamentados, para que puedan ser utilizados como evidenciaen procesos legales, reclamos de seguros, transacciones inmobiliarias u otras situaciones que lo requieran.",
              "-Evaluación de daños estructurales, eléctricos o de otro tipo que puedan afectar la integridad de una edificación.",
              "-Análisis de patologías: investigamos y analizamos las causas de cualquier problema o defecto en la construcción (como grietas,filtraciones, humedad, entre otros) para determinar su origen y proponer soluciones efectivas.",
            ]}
          />
        </div>
      </div>
    </section>
  );
};
