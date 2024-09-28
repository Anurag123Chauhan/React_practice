import { useState } from "react";

export default function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    function handleSubmit(e) {
        e.preventDefault();
        console.log({ name, email, password });
    }
    
    return (
        <form onSubmit={handleSubmit}>
        <label>
            Name:
            <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
        </label>
        <label>
            Email:
            <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
        </label>
        <label>
            Password:
            <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
        </label>
        <button type="submit">Submit</button>
        </form>
    );
}