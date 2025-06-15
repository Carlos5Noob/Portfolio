import styles from './Experience.module.css'

const Experience = () => {
    return (
        <>
            <h1 id='Experiencia laboral' className={`text-center my-4 ${styles.title}`}>Experiencia</h1>
            <div className="text-center">
                <section>
                    <h3>1. DAW - Curso de Desarrollo de aplicaciones Web</h3>
                    <p>2023 - 2025</p>
                </section>
                <hr />
                <section>
                    <h3>2. Prácticas en Sofgesa S.L.</h3>
                    <p>2025 - Grandes conocimientos aprendidos de Front-End</p>
                </section>
            </div>
        </>
    );
};

export default Experience;