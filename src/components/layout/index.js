import { Routes,Route } from "react-router-dom"

import Header from "../Header";
import Home from "../Home";
import Footer from "../Footer";
import Detail from "../Detail";



const Layout = () => {
    return (
        <>
            <div className='container-layout'>
            <Header />
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/detail/:id" element={<Detail />} />
            </Routes>
            <Footer />
        </>
    )
}   

export default Layout