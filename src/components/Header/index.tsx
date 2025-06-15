import styles from "./Header.module.css";
import List from "../List";

const Header = () => {
  const items = [
    "Sobre mí",
    "Proyectos",
    "Lenguajes y Herramientas",
    "Experiencia laboral",
  ];

  return (
    <div className={styles.container}>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Carlos Chacón - Full Stack Developer
          </a>
         
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <List items={items} gap={5} className={styles.item}/>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
