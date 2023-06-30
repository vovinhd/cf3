import React from 'react';
import { api } from '../utils/api';
import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  const useQuery = api.hello.personalizedGreeting.useQuery(name) 

  return (
    <div id="container">
      {useQuery.data}
    </div>
  );
};

export default ExploreContainer;
