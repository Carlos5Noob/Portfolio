import Card from "../../Utils/Card";
import critikon from "../../../assets/critikon.png";
import tierramedia from "../../../assets/tierramedia.png";
import todo from "../../../assets/todo.png";
import calculadora from "../../../assets/calculadora.png";
import styles from "./Projects.module.css";
import django from '../../../assets/django.png';
import bootstrap from '../../../assets/bootstrap.png';
import tailwind from '../../../assets/tailwind.png';

const Projects = () => {
  return (
    <>
      <h1 id="Proyectos" className={`text-center my-4 mt-5 ${styles.title}`}>
        &lt; Mis Proyectos /&gt;
      </h1>
      <div className="container d-flex justify-content-center gap-5">
        <Card
          className={styles.card}
          src={critikon}
          href="https://github.com/Carlos5Noob/Critikon-project"
          title="Critikon"
          text="Aplicación web pensada para gamers, quienes pueden discutir entre diversos videojuegos."
          icon1="https://cdn-icons-png.flaticon.com/512/5968/5968350.png"
          icon2={django}
          icon3={bootstrap}
          icon4="https://cdn-icons-png.flaticon.com/512/5968/5968342.png"
        />
        <Card
          className={styles.card}
          src={tierramedia}
          href="https://github.com/Carlos5Noob/TierraMedia-Django"
          title="Tierra Media"
          text="Videojuego basado en las tierras intermedias del Señor de los Anillos."
          icon1="https://cdn-icons-png.flaticon.com/512/5968/5968350.png"
          icon2={django}
          icon3={bootstrap}
          icon4="https://cdn-icons-png.flaticon.com/512/5968/5968342.png"
        />
      </div>
      <div className="container d-flex justify-content-center gap-5 mb-5">
        <Card
          className={styles.card}
          src={todo}
          href="https://github.com/Carlos5Noob/to-do"
          title="TO-DONOOB"
          text="Aplicación web para la gestión de tareas."
          icon1="https://cdn-icons-png.flaticon.com/512/5968/5968381.png"
          icon2="https://cdn-icons-png.flaticon.com/512/1126/1126012.png"
          icon3={tailwind}
        />
        <Card
          className={styles.card}
          src={calculadora}
          href="https://github.com/Carlos5Noob/calculadora"
          title="CALC-U-NOOB"
          text="Aplicación web que simula una calculadora de iOS."
          icon1="https://cdn-icons-png.flaticon.com/512/5968/5968381.png"
          icon2="https://cdn-icons-png.flaticon.com/512/1126/1126012.png"
          icon3={tailwind}
        />
      </div>
    </>
  );
};

export default Projects;
