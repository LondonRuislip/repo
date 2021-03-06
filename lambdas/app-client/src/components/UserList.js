import React from 'react';
import { gql, graphql } from 'react-apollo';
import PropTypes from 'prop-types';
import User from './User';

const UserList = ({ data: { loading, error, getTwitterFeed } }) => {
  if (loading) {
    return <p>Loading ...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
      <User key={getTwitterFeed.name} user={getTwitterFeed} />
    </div>
  );
};

UserList.propTypes = {
  data: PropTypes.any.isRequired, // eslint-disable-line
};

export const UserQuery = gql`
  query UserQuery(
    $handle: String!
    $consumer_key: String!
    $consumer_secret: String!
  ) {
    getTwitterFeed(
      handle: $handle
      consumer_key: $consumer_key
      consumer_secret: $consumer_secret
    ) {
      name
      location
      screen_name
      favourites_count
      description
      followers_count
      friends_count
      posts {
        tweet
      }
    }
  }
`;

export default graphql(UserQuery, {
  options: () => ({
    variables: {
      handle: process.env.REACT_APP_HANDLE || 'LeoDiCaprio',
      consumer_key: process.env.REACT_APP_CONSUMER_KEY || 'N7vFfwCK4nM3DmzYZH4sTFKbS',
      consumer_secret: process.env.REACT_APP_SECRET_KEY || 'HsrhKwC29Wtv6sJZEsU9UOtjnGpSn0a1PdjidvOQGKkNffJW7h',
    },
  }),
})(UserList);
