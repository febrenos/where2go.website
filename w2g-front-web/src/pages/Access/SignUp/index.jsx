import React from "react";
import {TitleApresentation, Planet, FormSignUp} from "../../../components/index";
import * as Styled from '../style'

export default function SignUp(){
    return(
        <Styled.Content>
            <Styled.Apresentation>
                <div>
                    <Planet width={200}/>
                    <TitleApresentation/>
                </div>
            </Styled.Apresentation>
            <FormSignUp/>
        </Styled.Content>
    )
}