import * as React from 'react';
import { ListButton } from './ListButton';
import { FaTrashAlt } from 'react-icons/fa';
import { theme } from 'utils/theme';

export const DeleteButton: React.FC<{}> = () => {
  // TODO: boxshadow should use the theme but theme is in hex colour
  return (
    <ListButton color={theme.palette.ERROR} boxShadow={`0 0 5px 1px ${theme.palette.ERROR}4d`}>
      <FaTrashAlt />
    </ListButton>
  );
};
