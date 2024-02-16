import { useState } from "react";

function Authenticate({token, setToken}) {
    const [successMessage, setSuccessMessage] = useState(null)
    const [username, setUsername] = useState(null)
    async function handleClick(event) {
        console.log("Authenticate:");
        event.preventDefault();


        try { 
            const response = await fetch('https://fsa-jwt-practice.herokuapp.com/authenticate', {
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}`},
            });  
            const result = await response.json();
            setSuccessMessage(result.message);
            setUsername(result.data.username)
            console.log(result);


            
        } catch (error) {
            setError(error.message);
            
        }

        console.log("Handle Submit Function performed");

    }
    
    return ( 
        <>
        <h2>Authentication</h2>
        <button onClick={handleClick}>Authenticate Token</button>
        {successMessage &&
        <>
        <div>{successMessage}</div>
        <div>{username} !</div>
        </>}
        </>
     );
}

export default Authenticate;