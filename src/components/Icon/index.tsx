import Image from "../Image";

type IconProps = {
    src: string,
    width?: number,
    height?: number
}

const Icon = ({ src, width, height }: IconProps) => {
    return (
        <span className="ms-3"><Image src={src} width={width} height={height} /></span>
    );
}

export default Icon;