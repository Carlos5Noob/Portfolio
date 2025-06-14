import styles from './Tools.module.css'

const Tools = () => {
  const lenguajes = [
    "Python + Django",
    "React + Next.js",
    "HTML, CSS, JS, TS, SASS",
    "Bootstrap",
    "GIT y Github",
    "Docker"
  ];

  return (
    <>
        <h1 className="text-center my-4">Lenguajes y Herramientas</h1>
        <div className="text-center">
            {lenguajes.map((lenguaje) => (
                <p className={styles.item} key={lenguaje}>{lenguaje}</p>
            ))}
        </div>
    </>
  );
};

export default Tools;
