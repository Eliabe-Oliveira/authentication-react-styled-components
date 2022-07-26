import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [emailConf, setEmailConf] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const {signup} = useAuth();

    const handleSignup = () => {
        if (!email | !emailConf | !senha) {
            setError("fill in all fields");
            return;
        } else if (email !== emailConf) {
            setError("emails are not the same");
            return;
        }

        const res = signup(email, senha);

        if (res) {
            setError(res);
            return;
        }

        alert("user registered successfully");
        navigate("/");
    }



    return (
        <C.Container>
            <C.Label>AUTHENTICATION</C.Label>
            <C.Content>
                <Input
                    type="email"
                    placeholder="type your email"
                    value={email}
                    onChange={(e) => [setEmail(e.target.value), setError("")]}
                />
                <Input
                type="email"
                placeholder="confirm your email"
                value={emailConf}
                onChange={(e) => [setEmailConf(e.target.value), setError("")]}
                />
                <Input 
                    type="password"
                    placeholder="type your password"
                    value={senha}
                    onChange={(e) => [setSenha(e.target.value), setError("")]}
                />
                <C.labelError>{error}</C.labelError>
                <Button Text="Register" onClick={handleSignup} />
                <C.LabelSignin>
                already have an account?
                <C.Strong>
                    <Link to="/">&nbsp;signin</Link>
                </C.Strong>
                </C.LabelSignin>
            </C.Content>
        </C.Container>
    );
};

export default Signup;