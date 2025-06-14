import type React from "react";
import Header from "../Header";
import Footer from "../Footer";

type LayoutProps = {
    children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
    const { children } = props;

    return (
        <>
            <Header />
                {children}
            <Footer />
        
        </>
    );
}

export default Layout;