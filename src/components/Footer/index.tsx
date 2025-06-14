import styles from './Footer.module.css'
import List from '../List';

const Footer = () => {
    const items = ['¡Espero que te haya gustado!', 'Desarrollado con React + Bootstrap', '© 2025 - Carlos Chacón'];
    
    return (
        <footer className={`text-center ${styles.container}`}>
            <List items={items} />
        </footer>
    );
}

export default Footer;