import Image from "../../Utils/Image";
import foto from "../../../assets/foto-perfil.png";
import styles from "./About.module.css";
import Button from "../../Utils/Button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const linkGithub = "https://github.com/Carlos5Noob";
  const linkContactame = "mailto:carlosjr5noob5@gmail.com";

  useEffect(() => {
    const tl = gsap.timeline({ 
      scrollTrigger: { scrub: 1 }
    });

    tl
      .to("#About", { opacity: 0, scale: 0.5, duration: 0.1 });
  }, []);

  return (
    <div id="About" className={styles.main}>
      <h1 className={`text-center ${styles.title}`}>Hey, soy Carlos5Noob</h1>
      <div
        className={`container d-flex align-items-center gap-4 mb-5 ${styles.container}`}
      >
        <Image src={foto} width={300} height={300} className="rounded-circle" />
        <div className="d-flex flex-column">
          <p className="fs-3 text-white">
            Hola, me llamo Carlos Chacón Atienza y soy desarrollador Full-Stack.
            Me gusta aprender cosas nuevas y trabajar en equipo. Apasionado de
            la tecnología y de la programación.
          </p>
          <div className="d-flex gap-4 justify-content-end">
            <Button href={linkContactame}>
              Contáctame
            </Button>
            <Button href={linkGithub}>
              Visita mi GitHub
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
