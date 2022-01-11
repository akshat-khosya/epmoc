import React, { useState } from 'react'
import './scroll.css';
const ScrollToTop = ({ startAfter = 200, takeTo = 0 }) => {
    const [showScrollButton, setshowScrollButton] = useState(false);
    window.onscroll = () => {
        if (document.documentElement.scrollTop > startAfter) setshowScrollButton(true);
        else setshowScrollButton(false);
    }
    function topFunction() {
        document.body.scrollTop = takeTo;
        document.documentElement.scrollTop = takeTo;
    }
    return (
        <>
            {
                showScrollButton && (
                    <button className="scroll-to-top" onClick={topFunction}>
                        <span className="material-icons">
                            <i class="fas fa-arrow-up fa-2x"></i>
                            {/* <i class="fas fa-arrow-alt-circle-up"></i> */}
                        </span>
                    </button>
                )
            }
        </>
    )
}

export default ScrollToTop