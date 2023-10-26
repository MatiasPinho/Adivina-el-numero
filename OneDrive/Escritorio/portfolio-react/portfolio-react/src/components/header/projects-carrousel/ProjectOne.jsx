import "./ProjectsCarrousel.css";

const ProjectOne = ({ previous, next }) => {
  return (
    <section className="project-show-container">
      <div className="space-tecnology"></div>

      <img className="image-project" src="./public/coffe.jpg" alt="" />

      <div className="tecnologys-projects-show">
        <span className="tecnology-show">Html</span>
        <span className="tecnology-show">Css</span>
        <span className="tecnology-show">JavaScript</span>
        <span className="tecnology-show">React</span>
        <span className="tecnology-show">Git</span>
        <span className="tecnology-show">Figma</span>
      </div>
      <p className="description-project-show">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
        expedita, praesentium similique, quae odio excepturi voluptatum
        repellendus quasi illo, itaque ex qui deleniti a sequi doloribus!
        Delectus et sequi dignissimos!
      </p>
      <div className="buttons-project-show">
        <button className="button-project-web-show">Quieres verlo?</button>
        <button className="button-project-github-show">Github</button>
        <div className="space-tecnology"></div>
      </div>
    </section>
  );
};

export default ProjectOne;
