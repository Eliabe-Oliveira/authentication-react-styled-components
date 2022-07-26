import React, { useState } from "react";
import Input from "../../components/Input"
import Button from "../../components/Button"
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth"
import * as C from "./styles";

const Singin = () => {

    const {signin} = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        if (!email | !senha) {
            setError("Fill in all fields");
            return;
        }

        const res = signin(email, senha);

        if (res) {
            setError(res);
            return
        }

        navigate("/home")
    };

    return (
        <C.Container>
            <C.Label>AUTHENTICATION</C.Label>
            <C.Container>
                <Input 
                    type="email"
                    placeholder="type your e-mail"
                    value={email}
                    onChange={(e) => [setEmail(e.target.value), setError("")]}
                />
                <Input 
                    type="password"
                    placeholder="type your password"
                    value={senha}
                    onChange={(e) => [setSenha(e.target.value), setError("")]}
                />
                <C.labelError>{error}</C.labelError>
                <Button Text="log in" onClick={handleLogin}/>
                <C.LabelSignup>
                    don't have an account?
                    <C.Strong>
                        <Link to="/signup">&nbsp;Register</Link> 
                    </C.Strong>
                </C.LabelSignup>
            </C.Container>
        </C.Container>
    )
}

export default Singin