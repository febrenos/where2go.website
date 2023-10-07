import React from "react";
import { Link } from 'react-router-dom';
import Logo from "../../img/where2GoTxt.png";
import {Btn, Input} from '../index';
import * as Styled from '../FormSignIn/style';

export function FormSignUp(){
    return(
        <Styled.All>
            <Styled.Title>Registro</Styled.Title>
            <Styled.Content>
                <Styled.Img src={Logo}/>
                <div>
                    <Input text="Nome usuário" type="text"/>
                    <Input text="Nome" type="text"/>
                    <Input text="Cpf" type="text"/>
                    <Input text="Email" type="text"/>
                    <Input text="Senha" type="password"/>
                    <Input text="Confirme a senha" type="password"/>
                    <Input text="Data Nascimento" type="date"/>
                </div>
                <div>
                    <p>Ao se registrar, você aceita nossos
                    <Styled.A target="_blank" rel="noopener noreferrer" href="https://google.com.br/terms"> termos de uso </Styled.A>
                        e a nossa 
                        <Styled.A target="_blank" rel="noopener noreferrer" href="https://google.com.br/terms"> política de privacidade</Styled.A>
                    .</p>
                </div>
                <div>
                    <Styled.Text>Já tem um conta?</Styled.Text>
                    <Styled.TextBold><Link to="/SignIn">Login</Link></Styled.TextBold>
                </div>
                <Btn text="Cadastrar" size="md" solid/>
            </Styled.Content>
        </Styled.All>
    )
}