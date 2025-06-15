import styles from './Button.module.css'

type ButtonProps = {
    href?: string;
    className?: string;
    children: React.ReactNode;
}

const Button = (props: ButtonProps) => {
    const { href, className, children } = props;

    return (
        <div className={className}>
            <a href={href}><button className={styles.button}>{children}</button></a>
        </div>
    );
};

export default Button;