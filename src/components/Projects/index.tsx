import Card from "../Card";
import critikon from "../../assets/critikon.png";
import tierramedia from "../../assets/tierramedia.png";

const Projects = () => {
  return (
    <>
      <h1 className="text-center my-4">Mis Proyectos</h1>
      <div className="container d-flex justify-content-center gap-5 mb-5">
        <Card
          src={critikon}
          href="https://github.com/Carlos5Noob/Critikon-project.git"
          title="Critikon"
          text="Aplicación web pensada para gamers, quienes pueden discutir entre diversos videojuegos. Desarrollado con Python + Django."
        />
        <Card
          src={tierramedia}
          href="https://github.com/Carlos5Noob/TierraMedia-Django.git"
          title="Tierra Media"
          text="Videojuego basado en las tierras intermedias del Señor de los Anillos. Desarrollado con Python + Django."
        />
      </div>
    </>
  );
};

export default Projects;
