import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUsers } from '../../api/users';
import { getPosts } from '../../api/posts';
import './Post.css';

const User = () => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await getUsers();
      setUser(...res.data.filter(user => user.id === Number(id)));
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await getPosts(id);
      setPosts(res.data);
    };

    fetchPosts();
  }, []);

  return (
    <div className='userContainer'>
      <h2>{user?.name}</h2>
      <p>{user?.email}</p>
      <p>UserID {id}</p>

      <h2>Posts</h2>
      {posts?.map(post => (
        <div key={post.id} className='postCard'>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default User;
