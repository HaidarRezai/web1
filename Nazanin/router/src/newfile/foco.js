// import { forwardRef,useRef } from "react";

// const Myinput=forwardRef((props,ref)=>(
//     <input ref={ref}
// ))
import { useState } from "react";




function Focos() {
    const [show, setShow] = useState(false)
    return (
        <div>

            <button onClick={() => setShow(!show)}   > {show ? "hidden img" : "opne imag"}KAJSK </button>
            {
                show && <img src="./Profil.png" />
            }


        </div>
    );
}
export default Focos;