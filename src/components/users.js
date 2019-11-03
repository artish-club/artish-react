import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const ALL_USERS = gql`
  {
    users {
        name
        id
    }
  }
`;

function Users() {
  const { loading, error, data } = useQuery(ALL_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.users.map(({ name, id }) => (
    <div key={name}>
      <p>
        {name}: {id}
      </p>
    </div>
  ));
}

export default Users;