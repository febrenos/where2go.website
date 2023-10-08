import React from "react";
import { Link } from 'react-router-dom';
import {Input, Button} from "../index";
import Logo from "../../img/where2GoTxt.png";
import * as Styled from './style';

export function FormSignIn(){
    return(
        <Styled.All>
        <Styled.Title>Login</Styled.Title>
        <Styled.Content>
            <Styled.Img src={Logo}/>
            <div>
                <Input text="Usuário" type="text"/>
                <Input text="Senha" type="password"/>
            </div>
            <div>
                <Styled.Text>Ainda nao tem uma conta?</Styled.Text>
                <Styled.TextBold><Link to="/Signup">Cadastre-se</Link></Styled.TextBold>
            </div>
            <Link to="/Profile">
                <Button text="Login" size="md" solid/>
            </Link>
        </Styled.Content>
        </Styled.All>
    )
}