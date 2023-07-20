import React from 'react';
import { useRoutes } from 'react-router-dom';
import App from './App';
import ProjectCharacter from './ProjectCharacter';
import ProjectEnvironments from './ProjectEnvironments';
import ProjectVisualEffects from './ProjectVisualEffects';
import ProjectModels from './ProjectModels';

const routes = [
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/characters',
    element: <ProjectCharacter />,
  },
  {
    path: '/environments',
    element: <ProjectEnvironments />,
  },
  {
    path: '/visual-effects',
    element: <ProjectVisualEffects />,
  },
  {
    path: '/3d-models',
    element: <ProjectModels />,
  },
  
];

function Routes() {
  return useRoutes(routes);
}

export default Routes;
