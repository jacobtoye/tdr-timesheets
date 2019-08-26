import * as React from 'react';
import styled from '@emotion/styled';
import { FaTrashAlt } from 'react-icons/fa';
import IconBorder from './IconBorder';
import IconSizingContainer from './IconSizingContainer';

const DeleteIconBorder = styled(IconBorder)`
  border: 2px solid #ea3f45;
  border-radius: 20px;
  width: 40px;
  height: 40px;
`;

const DeleteIcon = styled(FaTrashAlt)`
  color: #ea3f45;
  font-size: 14px;
`;

const DeleteButton: React.FC<{}> = () => {
  return (
    <IconSizingContainer>
      <DeleteIconBorder>
        <DeleteIcon />
      </DeleteIconBorder>
    </IconSizingContainer>
  );
};

export default DeleteButton;
