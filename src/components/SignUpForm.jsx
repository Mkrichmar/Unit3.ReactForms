import { useState } from "react";

function SignUpForm({setToken}) {
    const [username, setUsername] = useState("");
    console.log(username);
    const [password, setPassword] = useState("");
    console.log(password);
    const [error, setError] = useState(null);

    async function handleSubmitEvent(event) {
        event.preventDefault();

        try { 
            const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({username:username, password:password})})  
            const result = await response.json();
            setToken(result.token)
            console.log(result);


            
        } catch (error) {
            setError(error.message);
            
        }

        console.log("Handle Submit Function performed");

    }

    

    return ( 
        <>
        <h2>Sign Up</h2>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmitEvent}>
            <label htmlFor="username">Username: <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/></label>
            <label htmlFor="password">Password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/></label>
            <button>Submit</button>
        </form>
        </>
     );
}

export default SignUpForm;