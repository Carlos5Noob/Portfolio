import styles from './Projects.module.css'
import Card from '../Card';
import critikon from '../../assets/critikon.png';
import tierramedia from '../../assets/tierramedia.png';

const Projects = () => {
    return (
        <>
            <h1 className={`text-center ${styles.title}`}>Mis proyectos</h1>
            <div className={styles.container}>
                <Card src={critikon} href="https://github.com/Carlos5Noob/Critikon-project.git" title='Critikon' text='Aplicación web pensada para gamers, quienes pueden discutir entre diversos videojuegos. Desarrollado con Python + Django.'/>
                <Card src={tierramedia} href='https://github.com/Carlos5Noob/TierraMedia-Django.git' title='Tierra Media' text='Videojuego basado en las tierras intermedias del Señor de los Anillos. Desarrollado con Python + Django.'/>
            </div>
        </>
    );
};

export default Projects;