import Image from "../Image";

type CardProps = {
    src: string;
    title: string;
    text: string;
    href: string;
    alt?: string;
}

const Card = (props: CardProps) => {
    const { href, src, title, text, alt } = props;
    
    return (
        <div className="card" style={{width: "50rem"}}>
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