import styles from './About.module.css';
import Image from '../Image';
import foto from '../../assets/foto-perfil.png'

const About = () => {
    return (
        <>
            <h1 className={`text-center ${styles.title}`}>Sobre mí</h1>
            <div className={styles.container}>
                <Image src={foto} width={300} height={300} className={styles.image}/>
                <p className={`fs-3 ${styles.text}`}>Hola, me llamo Carlos Chacón Atienza y soy desarrollador Full-Stack. Me gusta aprender cosas nuevas y trabajar en equipo. Apasionado de la tecnología y de la programación.</p>
            </div>
        </>
    );
}

export default About;