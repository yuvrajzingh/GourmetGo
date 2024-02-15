import { useState } from "react";

const User =({name, location})=>{

    const [count, setCount] = useState(0);
    const [count2] = useState(2);
        return (
            <div className="user-card">
                <h3>count - {count}</h3>
                <h3>count - {count2}</h3>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: @Yuvrajzingh</h4>
            </div>
        )
    
}

export default User;