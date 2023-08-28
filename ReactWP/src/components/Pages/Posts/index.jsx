import React, { useEffect, useState } from "react";
import axios from 'axios';


const Posts = () => {

    //const [posts, setPosts] = useState([]);

    useEffect(() => {
        let url = 'https://reactwp.brandyourwork.co.in/wp-json/wp/v2/posts';
        axios.get(url).then((res) => {
            console.log(res);
        });
        
    }, []);

    return (
        <>   
        </>
    );
}



export default Posts