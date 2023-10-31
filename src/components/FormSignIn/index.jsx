import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';  // Importe useNavigate
import { Input, Button, TitleCard } from "../index";
import Logo from "../../img/where2GoTxt.png";
import * as Styled from './style';
import { BackgroundCard } from "../../style";
import api from '../../services/javaApi'
import { setCookie } from "../../utils/utils";

export function FormSignIn() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();  // Obtenha a função de navegação com useNavigate()

    const signInApplication = async () => {
        try {
            const requestData = {
                "login": login,
                "password": password
            };
    
            const response = await api.post("/login", requestData);
            // console.log(response.data)
    
            // Verifique se a resposta contém o token
            // console.log(response.data)
            
            if (response.data) {
                console.log("OK")
                setCookie("authToken", response.data, 7);
            }
            

    
            if (response.status === 200) {
                // Navegue para a página de perfil se o status da resposta for 200
                navigate('/profile');
            }
        } catch (error) {
            console.error("Error making the API request:", error);
        }
    };    

    return (
        <Styled.All>
            <TitleCard text={'Login'} />
            <BackgroundCard mobile>
                <Styled.Img src={Logo} />
                <Input text="Email" type="text" value={login} onChange={(e) => setLogin(e.target.value)} />
                <Input text="Senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <div>
                    <Styled.Text>Ainda não tem uma conta?</Styled.Text>
                    <Styled.TextBold><Link to="/sign-up">Cadastre-se</Link></Styled.TextBold>
                </div>
                    <Button text="Login" size="md" solid onClick={signInApplication} />
            </BackgroundCard>
        </Styled.All>
    );
}
