import "./About.css";

const About = () => {
  return (
    <>
      <section id="about-section" className="about-me-section">
        <img className="about-img" src="./public/developer.png" alt="" />
        <p className="paragraph-about-me">
          Soy un{" "}
          <strong>
            desarrollador full-stack trainee.
            <br />
            <br />
          </strong>{" "}
          con una firme devoción por la tecnología y su potencial ilimitado. En
          mi camino hacia el mundo de la programación, he tomado la decisión de{" "}
          <strong>invertir</strong>
          todo mi tiempo y energía en estudiar y crear software, centrándome
          especialmente en el <strong>campo del desarrollo web</strong>. Estudié
          una diplomatura en la UTN (Universidad Tecnológica Nacional) gracias a
          una beca otorgada por la <strong>Fundación Empujar</strong>.
        </p>
      </section>
    </>
  );
};

export default About;
