import Image from "../Image";
import styles from './Card.module.css'

type CardProps = {
    src: string;
    title: string;
    text: string;
    href: string;
    alt?: string;
    className?: string;
}

const Card = (props: CardProps) => {
    const { href, src, title, text, alt, className } = props;
    
    return (
        <div className={`card ${styles.container} ${className}`}>
            <Image src={src} className="card-img-top" alt={alt}/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
                <a href={href} className="btn btn-primary">Visita el repositorio</a>
            </div>
        </div>
    );
}

export default Card;