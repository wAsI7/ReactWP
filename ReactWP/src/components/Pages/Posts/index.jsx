import React, { useEffect, useState } from "react";
import axios from 'axios';


const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        let url = 'https://reactwp.brandyourwork.co.in/wp-json/wp/v2/posts';
        axios.get(url).then((res) => {
            setPosts(res.data);
        });
        
    }, []);
    console.log('Posts Out', posts);
    return (
        <>
            {
                posts && posts.map((post) => {
                    console.log('Posts In', posts);
                    return (
                        <p key={post.id} >{post.title.rendered}</p>
                    );
                })
            }
        </>
    );
}



export default Posts