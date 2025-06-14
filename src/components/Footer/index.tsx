import styles from './Footer.module.css'
import List from '../List';

const Footer = () => {
    const items = ['¡Espero que te haya gustado!', 'Desarrollado con React + Bootstrap', '© 2025 - Carlos Chacón'];
    
    return (
        <div className={styles.container}>
            <List items={items} />
        </div>
    );
}

export default Footer;