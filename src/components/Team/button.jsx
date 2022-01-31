import React from 'react'
import avatar from '../../images/avatar.jpg'
function button(props) {
    return (
            <img src={avatar} alt="" className={props.className} onClick={props.click}/>
    )
}

export default button
