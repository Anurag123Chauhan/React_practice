import React,{useState,useContext} from "react";
import './compo1.css';
import Compo3 from "./compo3";
export default function Compo2() {
    return (
        <div className="box">
            <h1>Hello</h1>
            <Compo3/>
        </div>
    );
}