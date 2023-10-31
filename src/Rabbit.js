import React, {useState} from "react";
import "./style.css";

export function Rabbit(props) {
    const {min=0, max=1000, step=5} = props;
    let [count, setCount] = useState(0);
     let onLeft = () =>{
        if (count-step >= min) {
            let elem = document.getElementById('rabbit');
            setCount(count - step);
            elem.style.left = (parseFloat(getComputedStyle(document.getElementById('rabbit')).left) - step) +'px';
            elem.style.transform= 'rotateY(180deg)';
        }
    }
    let onRight = () =>{
        if (count+step <= max) {
            let elem = document.getElementById('rabbit');
            setCount(count + step);
            elem.style.left = (parseFloat(getComputedStyle(document.getElementById('rabbit')).left) + step) +'px';
            elem.style.transform = 'rotateY(0deg)';
        }
    }
    return (
        <div className="rabbit">
            <img src="/rabbit-icon.png" alt="Rabbit" id="rabbit"/>
            <div>
                <button onClick={onLeft}>-</button>
                <button onClick={onRight}>+</button>
            </div>
        </div>
    );
}