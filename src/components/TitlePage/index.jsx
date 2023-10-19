import React from "react";
import * as Styled from './style';

export function TitlePage({text}){
    return(
        <Styled.All>
            <Styled.Title>{text}</Styled.Title>
        </Styled.All>
    )
}