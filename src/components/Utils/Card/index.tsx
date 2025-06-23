import Image from "../Image";
import styles from "./Card.module.css";
import Icon from "../Icon";

type CardProps = {
  src: string;
  title: string;
  text: string;
  href: string;
  icon1?: string;
  icon2?: string;
  icon3?: string;
  icon4?: string;
  alt?: string;
  className?: string;
};

const Card = (props: CardProps) => {
  const { href, src, title, text, alt, className, icon1, icon2, icon3, icon4 } = props;

  return (
    <div className={`card ${styles.container} ${className}`}>
      <Image src={src} className={`card-img-top ${styles.imagen}`} alt={alt} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <div className="d-flex">
          <a href={href} className="btn btn-primary">
            Visita el repositorio
          </a>
          <div className="ms-auto">
            {icon1 && <Icon width={30} height={30} src={icon1} />}
            {icon2 && <Icon width={30} height={30} src={icon2} />}
            {icon3 && <Icon width={30} height={30} src={icon3} />}
            {icon4 && <Icon width={30} height={30} src={icon4} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
