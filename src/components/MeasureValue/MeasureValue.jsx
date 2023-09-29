import React, { useState } from 'react';

import './MeasureValue.css'

export default function MeasureValue(props){
    return(
        <>
            <div className='ValueContainer'>
                <div className='ValueTitle'>{props.title}</div>
                <div className='ValueValue'>{props.value} cm</div>
            </div>
        </>
    )
}
