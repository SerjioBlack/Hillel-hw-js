import React, { Component } from 'react';

class PostCatalog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            loading: true,
        };
    }

    async componentDidMount() {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            const posts = await res.json();
            this.setState({ posts, loading: false });
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    }

    render() {
        const { posts, loading } = this.state;

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
    }
}

export default PostCatalog;