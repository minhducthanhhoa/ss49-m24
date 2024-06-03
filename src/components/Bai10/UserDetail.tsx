import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const users = [
    { id: 1, name: 'Nguyễn Văn A', email: 'nva@gmail.com', address: 'Hà Nội' },
    { id: 2, name: 'Nguyễn Văn B', email: 'nvb@gmail.com', address: 'Hà Nam' },
    { id: 3, name: 'Nguyễn Văn C', email: 'nvc@gmail.com', address: 'Ninh Bình' }
  ];

  const user = users.find(user => user.id.toString() === id);

  return (
    <div>
      <h2>Thông tin chi tiết</h2>
      {user ? (
        <div>
          <p>Id: {user.id}</p>
          <p>UserName: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Address: {user.address}</p>
        </div>
      ) : (
        <p>User not found</p>
      )}
    </div>
  );
};

export default UserDetail;
