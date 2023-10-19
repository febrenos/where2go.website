import React from "react";
import {TitleApresentation, Planet, FormSignIn} from "../../../components/index";
import * as Styled from '../style'

export default function SignIn(){
    return(
        <Styled.Content>
            <Styled.Apresentation>
                <div>
                    <Planet width={200}/>
                    <TitleApresentation/>
                </div>
            </Styled.Apresentation>
            <FormSignIn/>
        </Styled.Content>
    )
}