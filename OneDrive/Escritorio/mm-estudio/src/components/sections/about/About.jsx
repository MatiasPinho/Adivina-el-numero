import { LogoDesign } from "../../../assets/icons/LogoDesign";
import { LogoStructure } from "../../../assets/icons/LogoStructure";
import { LogoCalc } from "../../../assets/icons/LogoCalc";
import "./About.css";
export const About = () => {
  return (
    <section className="about__container">
      <div className="about">
        <div className="row__about__left">
          <article className="article__about__left">
            <h2 className="title__about">
              Nuestro estudio es producto y evolución de la empresa familiar
              Marano Construcciones, empresa con más de 40 años en el rubro de
              la construcción y con más de cien obras ejecutadas exitosamente.
            </h2>
            <div className="info__about__left">
              <p className="paragraph__about">
                En esta nueva generación, sumamos especialistas en el diseño y
                cálculo de estructuras, tanto de hormigón armado (H°A°) como de
                Steel Frame. También incorporamos el cálculo de instalaciones
                MEP, la realización de sistemas de domótica, comenzamos a
                brindar servicios de peritaje, y nos enfocamos en adoptar nuevas
                tecnologías ecológicas y sustentables.
              </p>
              <p className="paragraph__about">
                Somos un estudio comprometido a ofrecer resultados
                extraordinarios, basados en la calidad y la innovación, pero
                sobre todo dedicados a la satisfacción del cliente. Brindamos un
                servicio completo de inicio a fin, enfocados en cada detalle,
                desde el anteproyecto hasta la ejecución de la obra. De esta
                manera, nos aseguramos de convertir cada idea en realidad,
                comprometidos en construir un futuro más sólido y sustentable.
              </p>
            </div>
          </article>
          <article className="article__about__socials">
            <p className="article__about__socials__title">
              Nuestras especialidades
            </p>
            <ul className="list__about__specialties">
              <li className="item__about__specialty">
                <LogoDesign />
                <p className="item__paragraph">DISEÑO</p>
              </li>
              <li className="item__about__specialty">
                <LogoStructure />
                <p className="item__paragraph">ESTRUCTURA</p>
              </li>
              <li className="item__about__specialty">
                <LogoCalc />
                <p className="item__paragraph">CÁLCULO</p>
              </li>
            </ul>
          </article>
        </div>
        <div className="row__about__right">
          <img
            className="image__about"
            src="/images/about__image.avif"
            alt=""
          />
          <aside className="info__about__right">
            <p>
              Entendemos las obras como un proceso complejo, es por ello que
              acompañamos a nuestros clientes no solo en las etapas de diseño
              sino también en las etapas de obra y fabricación.
            </p>
            <p>
              Priorizamos la formación profesional y permanente del equipo, lo
              que nos permite proponernos como una excelente alternativa en
              ingeniería estructural.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
};
