import NavMenu from "../layout/NavMenu"
import Main from "../layout/Main"
import Footer from "../layout/Footer"

export default function AppLayout ({children}) {

    return(
        <>
        <NavMenu/>
        <Main/>
        {children}
        <Footer/>
        </>
    )
}