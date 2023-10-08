import React from "react";
import * as Styled from './style.jsx';
import {Button} from '../../index.jsx'


export function CardApresentation({text}){
  return (
    <>
      <Styled.Card>
      <Styled.Align>
          <Styled.CardHeaderLeft/>
          <Styled.CardHeader>
            {text}
          </Styled.CardHeader>
          <Styled.CardHeaderRight/>
      </Styled.Align>
      {/* <Styled.Content> */}
        <p>Stop guessing about your digital experience with LogRocket</p>
        <Button text="Get Started for free" borderColor={"#0c899f"}/>
      {/* </Styled.Content> */}
      </Styled.Card>
      
    </>
  )
}
