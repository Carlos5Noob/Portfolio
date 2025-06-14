type ImageProps = {
    src: string;
    width: number;
    height: number;
    alt?: string;
    className?: string;
}  

const Image = ({ src, width, height, alt, className }: ImageProps) => {
    return <img width={width} height={height} src={src} alt={alt} className={className} />;
};

export default Image;