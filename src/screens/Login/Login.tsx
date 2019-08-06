import * as React from 'react';
import styled from 'styled-components';

const Page = styled.div.attrs(() => ({
  className: 'h-screen flex flex-col justify-center'
}))`
  background-color: #A6003A;
`;

const CenteredContainer = styled.div.attrs(() => ({
  className: 'container mx-auto px-4 py-4'
}))`
  background-color: white;
`;

const Title = styled.h1.attrs(() => ({
  className: 'text-6xl'
}))`
  color: white;
`;

const LoginInput = styled.input.attrs(() => ({
  className: 'border-b-2 border-gray-300 w-full py-2 px-4 appearance-none leading-tight focus:outline-none focus:bg-white focus:border-pink-800'
}))`

`;

const Login : React.FC = (props: any) => {
  return (
    <Page>
      <Title>Hello y'all</Title>
      <CenteredContainer>
        <LoginInput />
        <LoginInput />
      </CenteredContainer>
    </Page>
  );
};

export default Login;
