import React, { useState } from "react";

const Footer = () => {

    const [count, setCount] = useState(0);

    return (
        <>
            <div className="card">
                <h4>Type in above box and Click on the button below</h4>
                <h5>This is the simple test of useState!!</h5>
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>
        </>
    );

}

export default Footer;