import React, {useEffect, useState} from 'react'
import axios from "axios";
import Post from "../../components/posts/post/Post";
import "./posts.css"
const Posts = () => {

    const [posts, setPosts] = useState([])
    useEffect(() => {
        console.log("Fetch data")
        getPosts();
    }, [])
    //
    const BASE_URL = "https://dummyapi.io/data/api/post?limit=10";
    const APP_ID = '60bdf5c0bf7e71efad0b25d8'


    const getPosts = async () => {
        axios.get(`${BASE_URL}/user`, {headers: {'app-id': APP_ID}})
            .then(({data}) => {
                setPosts(data.data)
                console.log(data)
            }).catch(console.error)
    }


    return (
        <div className="post-container">
            {posts.map(post => <Post post={post} key={post.id}/>)}
        </div>
    )

}

export default Posts
