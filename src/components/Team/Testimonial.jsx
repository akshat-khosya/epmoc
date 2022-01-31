import React from 'react'
import avatar from '../../images/avatar.jpg'
const testimonial = (props) => {
    return (
       
                <div className='col'>
                    <div className="detail" >
                         <h1 className={props.classNameHeading}>{props.name}</h1>
                         <div >
                    <span className={props.classNameSpan}>Head of content-team</span>
                    <p className={props.classNamePara}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    </div>
                    <div className={props.classNameImg}>
                        <img src={avatar} alt="" />
                        
                   </div>
             
        </div>
    )
}

export default testimonial
