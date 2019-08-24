import * as React from 'react';
import styled from '@emotion/styled';
import AppBarButton from './AppBarButton';

const AppBarWrapper = styled('div')`
  background: linear-gradient(0.5turn, #7f4875, #704270);
  border-bottom: 1px solid #e3d8e3;
  display: grid;
  grid-gap: 0;
  grid-template-columns: 64px auto 64px;
  grid-template-rows: 64px;
`;

const ButtonContainer = styled('div')``;

const TitleContainer = styled('div')`
  padding-bottom: 8px;
  padding-top: 8px;
`;

const Title = styled('h1')`
  align-items: end;
  color: #ffffff;
  display: flex;
  font-size: 18px;
  height: 24px;
  margin: 0;
`;

const SubTitle = styled(Title)`
  color: rgba(255, 255, 255, 0.33);
  font-size: 14px;
  height: 24px;
  margin: 0;
`;

// TODO: I think we can use a router Switch to set the header content here depending on the route
// First ButtonContainer is the Navigation icon (button)
const AppBar: React.FC<{}> = () => {
  return (
    <AppBarWrapper>
      <ButtonContainer>
        <AppBarButton />
      </ButtonContainer>
      <TitleContainer>
        <Title>Saturday 9:34 AM</Title>
        <SubTitle>24th August</SubTitle>
      </TitleContainer>
      <ButtonContainer></ButtonContainer>
    </AppBarWrapper>
  );
};

export default AppBar;
