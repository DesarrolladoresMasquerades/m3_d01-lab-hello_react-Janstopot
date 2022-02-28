import "./body.css"
import img1 from "../../images/icon1.png"
import img2 from "../../images/icon2.png"
import img3 from "../../images/icon3.png"
import img4 from "../../images/icon4.png"

export default function body(){
    return(
        <div className="body">

        <div>
            <img src={img1} alt="im 1"/>
            <br></br>
            <h2>Declarative</h2>
            <br></br>
                React makes it painless to create interactive UIs.
            
        </div>

        <div>
            <img src={img2} alt="im 2"/>
            <br></br>
            <h2>Components</h2>
            <br></br>
                Built encapsulated components that manage their state.
        </div>

        <div>
            <img src={img3} alt="im 3"/>
            <br></br>
            <h2>Single-way</h2>
            <br></br>
                A set of inmutable values are passed to the components.
        </div>

        <div>
            <img src={img4} alt="im4"/>
            <br></br>
            <h2>JSX</h2>
            <br></br>
                Statically-typed, desginated to run on modern browsers.
        </div>
        
        
        
        
        
        </div>
    )
}