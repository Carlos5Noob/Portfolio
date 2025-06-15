import Image from '../Image';
import styles from './Information.module.css';
import avatar from '../../assets/avatar.avif';

const Information = () => {
    return (
        <div>
            <h1 id='Sobre mí' className={`text-center my-4 mt-5 ${styles.title}`}>Sobre mí</h1>
            <div className={`text-center ${styles.container}`}>
                <p className={styles.text}>Soy un <strong>desarrollador web</strong> entusiasta y curioso, con habilidades tanto en <strong>backend</strong> como en <strong>frontend</strong>. Mi camino en el mundo de la programación comenzó cuando era tan solo un niño, movido por la curiosidad y la pasión que siempre he sentido hacia los ordenadores. Ese interés me llevó a dar mis primeros pasos en el desarrollo y, con el paso del tiempo, a convertir aquel <strong>hobby</strong> en mi <strong>profesión</strong>. Actualmente sigo <strong>aprendiendo</strong> y <strong>creciendo</strong> cada día, dispuesto a enfrentar nuevos retos, adaptarme a las últimas tecnologías y <strong>dar lo mejor de mí</strong> en cada proyecto.</p>
                <Image src={avatar} width={300} height={300} className={styles.imagen}/>
            </div>
        </div>
    );
}

export default Information;