
import Head from "./components/Head";

const Layout = ({children, onChangePage}) => {

    return (
        <>
        <Head
        onChangePage={onChangePage}
        />
        {children}
        </>
    )
};

export default Layout