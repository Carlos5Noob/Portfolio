import styles from './Skills.module.css'
import Icon from '../../Utils/Icon';
import bootstrap from '../../../assets/bootstrap.png';
import docker from '../../../assets/docker.png';
import django from '../../../assets/django.png';
import git from '../../../assets/git.png';
import html from '../../../assets/html.png';
import react from '../../../assets/react.png';
import tailwind from '../../../assets/tailwind.png'

const Skills = () => {
  const lenguajes = [
    "Python + Django",
    "React + Next.js",
    "HTML, CSS, JS, TS, SASS",
    "Tailwind",
    "Bootstrap",
    "GIT y Github",
    "Docker"
  ];

  return (
    <>
        <h1 id='Skills' className={`text-center my-4 ${styles.title}`}>&lt; Skills /&gt;</h1>
        <div className="text-center text-light d-block">
          <p>{lenguajes[0]}<Icon src={django} width={40} height={50} /></p>
          <p>{lenguajes[1]}<Icon src={react} width={40} height={35} /></p>
          <p>{lenguajes[2]}<Icon src={html} width={100} height={40} /></p>
          <p>{lenguajes[3]}<Icon src={tailwind} width={40} height={30} /></p>
          <p>{lenguajes[4]}<Icon src={bootstrap} width={40} height={40} /></p>
          <p>{lenguajes[5]}<Icon src={git} width={40} height={40} /></p>
          <p>{lenguajes[6]}<Icon src={docker} width={40} height={40} /></p>
        </div>
    </>
  );
};

export default Skills;
