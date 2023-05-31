import {Outlet, ScrollRestoration} from "react-router-dom";
import NavBar from "../shared/NavBar/NavBar";
import Footer from "../shared/Footer/Footer";

const Main = () => {
    return (
        <div>
            <NavBar />
            <div className="pt-28 pb-20">
                <Outlet />
            </div>
            <Footer />
            <ScrollRestoration />
        </div>
    );
};

export default Main;