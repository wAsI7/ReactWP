import React, { useEffect, useState } from "react";


const Posts = (propsVarName) => {

    const [name, setName] = useState('');

    useEffect(() => {
        console.log('Hello');
    }, [name]);

    return (
        <>
            <div>
                <img src={reactLogo} className="logo react" alt="React logo" />
                <img src={wpLogo} className="logo react" alt="WP logo" />
            </div>

            <h2>{propsVarName.name} Posts are fetched here using API</h2>
            <h3>{name}</h3>
            <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
        </>
    );

}

export default Posts