import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Singin from "../pages/Signin";
import useAuth from "../hooks/useAuth";


const Private = ({Item}) => {
    const {signed} = useAuth();

    return signed > 0 ? <Item /> : <Singin />;
};

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route exact path="/home" element={<Private Item={Home} />} />
                    <Route path="/" element={<Singin/>} />
                    <Route exact path="/signup" element={<Signup />} />
                    <Route path="*" element={<Singin/>}/>
                </Routes>
            </Fragment>
        </BrowserRouter>
    );
};

export default RoutesApp;