import React from 'react'
import "./subscribe.scss"
import { useState } from "react";
export default function Subscribe() {
    const [value, setValue] = useState("")
    const inpValue = (e) => {
        setValue(e.target.value)

    }
    const handleSubscribe = async () => {
        if (!value) {
            alert("Please enter your email");
            return;
        }
        try {
            const response = await fetch(`${REACT_APP_BACKEND_URL}/subscribe`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ Email: value.toLowerCase() })
            }); 
                  if (!response.ok) throw new Error(`Ошибка сервера: ${response.status}`);
            const data = await response.json();
            setValue("")
            console.log("Ответ сервера:", data);
            alert("You have successfully subscribed")
        } catch (err) {
            console.error("Ошибка fetch:", err);
        }
    };
    return (
        <div className='sub'>
            <h2>Subscribe</h2>
            <p>To get special offers and VIP treatment:</p>
            <input type="email" placeholder='Enter-Email' value={value} onChange={inpValue} />
            <button onClick={handleSubscribe}>Subscribe</button>
        </div>
    )
}
