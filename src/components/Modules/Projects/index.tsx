import Card from "../../Utils/Card";
import critikon from "../../../assets/critikon.png";
import tierramedia from "../../../assets/tierramedia.png";
import todo from '../../../assets/todo.png'
import styles from './Projects.module.css'

const Projects = () => {
  return (
    <>
      <h1 id="Proyectos" className={`text-center my-4 mt-5 ${styles.title}`}>&lt; Mis Proyectos /&gt;</h1>
      <div className="container d-flex justify-content-center gap-5 mb-5">
        <Card
          className={styles.card}
          src={critikon}
          href="https://github.com/Carlos5Noob/Critikon-project"
          title="Critikon"
          text="Aplicación web pensada para gamers, quienes pueden discutir entre diversos videojuegos. Desarrollado con Python + Django."
        />
        <Card
          className={styles.card}
          src={tierramedia}
          href="https://github.com/Carlos5Noob/TierraMedia-Django"
          title="Tierra Media"
          text="Videojuego basado en las tierras intermedias del Señor de los Anillos. Desarrollado con Python + Django."
        />
        <Card
          className={styles.card}
          src={todo}
          href="https://github.com/Carlos5Noob/to-do"
          title="TO-DONOOB"
          text="Aplicación web para la gestión de tareas. Desarrollado con React + Tailwind."
        />
      </div>
    </>
  );
};

export default Projects;
