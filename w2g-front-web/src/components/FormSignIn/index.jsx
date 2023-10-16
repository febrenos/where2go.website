import React from "react";
import { Link } from 'react-router-dom';
import {Input, Button, TitleCard} from "../index";
import Logo from "../../img/where2GoTxt.png";
import * as Styled from './style';
import { BackgroundCard, Gap } from "../../style";

export function FormSignIn(){
    return(
        <Styled.All>
        <TitleCard text={'Login'}/>
        <BackgroundCard mobile>
            <Styled.Img src={Logo}/>
            <Input text="Usuário" type="text"/>
            <Input text="Senha" type="password"/>
            <div>
                <Styled.Text>Ainda nao tem uma conta?</Styled.Text>
                <Styled.TextBold><Link to="/Signup">Cadastre-se</Link></Styled.TextBold>
            </div>
            <Gap>
                <Link to="/Profile">
                    <Button text="Login" size="md" solid/>
                </Link>
            </Gap>
        </BackgroundCard>
        </Styled.All>
    )
}