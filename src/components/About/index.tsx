import Image from "../Image";
import foto from "../../assets/foto-perfil.png";
import styles from './About.module.css'

const About = () => {
  return (
    <div>
      <h1 className={`text-center ${styles.title}`}>Hey, soy Carlos5Noob</h1>
      <div className={`container d-flex align-items-center gap-4 mb-5 ${styles.container}`}>
        <Image src={foto} width={300} height={300} className="rounded-circle" />
        <p className="fs-3">Hola, me llamo Carlos Chacón Atienza y soy desarrollador Full-Stack. Me gusta aprender cosas nuevas y trabajar en equipo. Apasionado de la tecnología y de la programación.</p>
      </div>
    </div>
  );
};

export default About;
