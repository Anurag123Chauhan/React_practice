import React,{useState,useContext} from "react";
import './compo1.css';

import {UserContext} from "./compo1";

export default function Compo4() {
    const user = useContext(UserContext);
    return (
        <div className="box">
            <h1>Hello {user}</h1>
        </div>
    );
}