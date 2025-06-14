import type React from "react";
import Header from "../Header";
import Footer from "../Footer";
import styles from './Layout.module.css'

type LayoutProps = {
    children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
    const { children } = props;

    return (
        <>
            <Header />
                <main className={styles.main}>
                    {children}
                </main>
            <Footer />
        
        </>
    );
}

export default Layout;