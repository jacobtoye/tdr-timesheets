import * as React from 'react';

import styled from '@emotion/styled';

const Heading = styled.h1`
  color: white
`;

const Login : React.FC = (props: any) => {
  return (
    <div className="h-screen bg-pink-900">
      <Heading>Hello y'all</Heading>
    </div>
  );
};

export default Login;
