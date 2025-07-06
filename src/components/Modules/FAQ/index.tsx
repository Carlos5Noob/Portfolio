import styles from "./FAQ.module.css";
import { useState } from "react";

const FAQ = () => {
  const [respuesta1, setRespuesta1] = useState(false);
  const [respuesta2, setRespuesta2] = useState(false);
  const [respuesta3, setRespuesta3] = useState(false);
  const [respuesta4, setRespuesta4] = useState(false);
  const [respuesta5, setRespuesta5] = useState(false);

    const handleClick = (index: number) => {
      switch (index) {
        case 1:
          setRespuesta1(!respuesta1);
          break;
        case 2:
          setRespuesta2(!respuesta2);
          break;
        case 3:
          setRespuesta3(!respuesta3);
          break;
        case 4:
          setRespuesta4(!respuesta4);
          break;
        case 5:
          setRespuesta5(!respuesta5);
          break;
        default:
          break;
      }
    }

  return (
    <div className={styles.container}>
      <h1 id="FAQ" className={`text-center my-4 mt-2 ${styles.title}`}>
        &lt; FAQ /&gt;
      </h1>
      <div className="d-flex flex-column gap-3">
        <div className={styles.boton} onClick={() => handleClick(1)}>
          ¿En qué me especializo, desarrollo Front-End o Back-End?
        </div>
        {respuesta1 && <div className={styles.respuesta}>Me especializo tanto en desarrollo Front-End como Back-End por igual. Disfruto trabajando en ambas áreas y siempre estoy motivado por seguir aprendiendo y perfeccionando mis habilidades en cada una.</div>}
        <div className={styles.boton} onClick={() => handleClick(2)}>
          ¿Me gusta trabajar en equipo o en solitario?
        </div>
        {respuesta2 && <div className={styles.respuesta}>Prefiero trabajar en equipo, especialmente cuando se trata de un equipo bien organizado y con una estructura clara. Creo firmemente en la colaboración como una forma de lograr mejores resultados y enriquecer el proceso de desarrollo.</div>}
        <div className={styles.boton} onClick={() => handleClick(3)}>
          ¿Qué tipo de proyectos acepto?
        </div>
        {respuesta3 && <div className={styles.respuesta}>Estoy abierto a todo tipo de proyectos, siempre y cuando exista una visión clara y ambición por alcanzar un resultado de calidad. Me motiva trabajar en iniciativas que busquen un impacto real y que valoren el compromiso con la excelencia.</div>}
        <div className={styles.boton} onClick={() => handleClick(4)}>
          ¿Cuáles son las tecnologías con las que trabajo?
        </div>
        {respuesta4 && <div className={styles.respuesta}>Trabajo con frameworks de Back-End como Django y de Front-End como Next.js. También tengo experiencia con librerías como Tailwind CSS, bases de datos como PostgreSQL, y herramientas de desarrollo como Git y Docker.</div>}
        <div className={styles.boton} onClick={() => handleClick(5)}>
          ¿Por qué deberías trabajar conmigo?
        </div>
        {respuesta5 && <div className={styles.respuesta}>Soy una persona entusiasta, apasionada por el desarrollo y profundamente interesada en el mundo tecnológico. Siempre estoy buscando aprender, mejorar y participar en la creación de proyectos innovadores que generen valor.</div>}
      </div>
    </div>
  );
};

export default FAQ;
