import React from 'react';
import { useSelector } from 'react-redux';

function SinglePostPage({ match }) {
  const { postId } = match.params;
  const post = useSelector(state => state.posts.find(post => post.id === postId))
  
  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }

  return (
    <div>
      <article>
        <h2>This is post {post.id}</h2>
      </article>
    </div>
  );
}

export default SinglePostPage;