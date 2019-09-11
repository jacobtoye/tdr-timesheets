import * as React from 'react';
import { ListButton } from './ListButton';
import { FaPen } from 'react-icons/fa';

interface EditButtonProps {
  color: string;
}

export const EditButton: React.FC<EditButtonProps> = ({ color }: EditButtonProps) => {
  // TODO: boxshadow should use the theme but theme is in hex colour
  return (
    <ListButton color={color} boxShadow={`0 0 5px 1px ${color}4d`}>
      <FaPen />
    </ListButton>
  );
};
