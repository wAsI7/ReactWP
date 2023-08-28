import React, { useState } from "react";

const Footer = () => {

    const [count, setCount] = useState(0);

    return (
        <>
            <div className="card">
                <h5>This is the simple test of useState & useEffect!!</h5>
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>
        </>
    );

}

export default Footer;