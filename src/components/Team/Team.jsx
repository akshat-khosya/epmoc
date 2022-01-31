import React ,{useEffect} from 'react'
import Testimonial from './Testimonial'
import './Team.css'
import Button from './button'
import data from './data'
function Team() {

    const [classn, setclassn] = React.useState(0);
    const clicked=(i)=>{
        setclassn(i);
        console.log(classn);
        let a=i*100;
        document.querySelector('.row').style.transform=`translateX(-${a}vw)`;
        for(let i=0;i<5;i++){
            const newclass=document.querySelectorAll('.button')[i];
            console.log(newclass.className);
        }

//         const list= document.querySelectorAll('.button')[i];
//         list.style.width="60px";
//         list.style.height="60px";
//       const  css=document.querySelectorAll('.detail')[i];
//       var cssAnimation = document.createElement('style');
// cssAnimation.type = 'text/css';
//       var rules = document.createTextNode('@-webkit-keyframes slider {'+
// 'from { top: -200px;}'+
// 'to { top: 0;}'+
// '}');
// cssAnimation.appendChild('rules');
// document.querySelectorAll('.detail')[i].appendChild(cssAnimation);
//         css.insertRule(`
// @keyframes myAnimation {
//     0% {top: -200px;
//         opacity: 0;}
//         100% {top: 0;
//         opacity: 1;}
// }`, css.cssRules.length);
// css.style.animation=  "myAnimation 2s ease-in-out";
    }
    useEffect(() => {
    }, [classn])
    return (
        <div className='container'>
        <div className='row'>
            {data.map((item,index)=> <Testimonial key={index} classNameHeading={classn===index&&"heading-active"} classNameSpan={classn===index&&"span-active"}  classNamePara={classn===index&&"para-active"} classNameImg={`img ${classn===index&&"img-active"}`} name={item.name} />)}
          
        </div>
        <div className='slide-button'>
           {data.map((item,index)=><Button className={`button ${classn===index&&"active"}`} key={index} click={()=>clicked(index)}/>)}
      
        </div>
        </div>
    )
}

export default Team
