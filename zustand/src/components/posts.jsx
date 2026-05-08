import {useEffect} from 'react'

import {usePostStore} from '../store/postStore.js'

function posts(){

    const {posts , loading , error , fetchPosts} = usePostStore();

    useEffect(() => {
        fetchPosts();
    },[fetchPosts])

    if(loading) return <p>Loading...</p>
    if(error) return <p>{error}</p>

    return (
        <ul>
            {posts.map((post, index) => (
                <div>
                    <li key={index}>{post.title}</li>
                    <li>{post.body}</li>
                </div>
            ))}
        </ul>
    )

}

export default posts;