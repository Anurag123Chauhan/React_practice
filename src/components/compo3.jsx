import React,{useState,useContext} from "react";
import './compo1.css';
import Compo4 from "./compo4";
export default function Compo3() {
    return (
        <div className="box">
            <h1>Hello</h1>
            <Compo4/>
        </div>
    );
}