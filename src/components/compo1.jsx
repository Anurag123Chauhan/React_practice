import React,{useState,createContext} from "react";
import './compo1.css';
import Compo2 from "./compo2";

export const UserContext = createContext();
export default function Compo1() {
    const [user,setUser] = useState('Anurag');
    return (
        <div className="box">
            <h1>Hello {user}</h1>
            <UserContext.Provider value={user}>
                <Compo2/>
            </UserContext.Provider>
        </div>
    );
}