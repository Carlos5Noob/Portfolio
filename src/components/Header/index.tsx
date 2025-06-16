import styles from "./Header.module.css";
import List from "../List";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const [scroll, setScroll] = useState<boolean>(false);

  const items = [
    "Sobre mí",
    "Proyectos",
    "Lenguajes y Herramientas",
    "Experiencia laboral",
  ];

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    const tl = gsap.timeline({
      scrollTrigger: { scrub: 1 },
    });

    tl.to("#header", { opacity: 0.9, duration: 1 });
  }, []);

  return (
    <div
      id="header"
      className={scroll ? styles.containerScroll : styles.container}
    >
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand text-light" href="#">
            Carlos Chacón - Full Stack Developer
          </a>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <List items={items} gap={5} className={styles.item} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
