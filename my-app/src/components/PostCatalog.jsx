import React, { useState, useEffect } from 'react';

const PostCatalog = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/posts');
                const postsData = await res.json();
                setPosts(postsData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching posts:', error);
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div className="posts">
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul className="posts__list">
                    {posts.map(post => (
                        <li key={post.id} className="posts_single-post"
                            data-post-id={post.id}>
                            <h3 className="posts__post-title">{post.title}</h3>
                            <p className="posts__post-description">{post.body}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default PostCatalog;