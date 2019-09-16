import React from 'react';
import { Modal, ModalHeader } from 'components';
import { EditTimeRecord } from './EditTimeRecord';

interface EditTimeRecordModalProps {
  isShowing: boolean;
  toggle: () => void;
  timeRecordId: number;
}

export const EditTimeRecordModal: React.FC<EditTimeRecordModalProps> = ({ isShowing, toggle, timeRecordId }) => {
  if (!isShowing) {
    return null;
  }

  const onSaveClicked = () => {
    console.log(timeRecordId);
  };

  // TODO: split up EditTimeRecord

  return (
    <Modal>
      <ModalHeader text="Edit time" onClose={toggle} onSave={onSaveClicked} />
      <EditTimeRecord />
    </Modal>
  );
};
