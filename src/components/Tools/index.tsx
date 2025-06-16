import styles from './Tools.module.css'
import Icon from '../Icon';
import bootstrap from '../../assets/bootstrap.png';
import docker from '../../assets/docker.png';
import django from '../../assets/django.png';
import git from '../../assets/git.png';
import html from '../../assets/html.png';
import react from '../../assets/react.png';

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
        <h1 id='Lenguajes y Herramientas' className={`text-center my-4 ${styles.title}`}>&lt; Lenguajes y Herramientas /&gt;</h1>
        <div className="text-center text-light d-block">
          <p>{lenguajes[0]}<Icon src={django} width={40} height={40} /></p>
          <p>{lenguajes[1]}<Icon src={react} width={40} height={40} /></p>
          <p>{lenguajes[2]}<Icon src={html} width={100} height={40} /></p>
          <p>{lenguajes[3]}<Icon src={bootstrap} width={40} height={40} /></p>
          <p>{lenguajes[4]}<Icon src={git} width={40} height={40} /></p>
          <p>{lenguajes[5]}<Icon src={docker} width={40} height={40} /></p>
        </div>
    </>
  );
};

export default Tools;
