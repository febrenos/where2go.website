import React from 'react'
import * as Styled from './style'

export function BackgroundCard({size, text=''}){
    return(
        <Styled.BackgroundCard size={size}>
            {text !== '' && 
                <Styled.Title>{text}</Styled.Title>
            }
        </Styled.BackgroundCard>
    )
}