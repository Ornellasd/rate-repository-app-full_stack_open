import { useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (queryVariables) => {
  const { data, loading, refetch } = useQuery(GET_REPOSITORIES, {
    // variables: queryVariables,
    fetchPolicy: 'cache-and-network',
  });

  return { repositories: data, loading, refetch };
};

export default useRepositories;