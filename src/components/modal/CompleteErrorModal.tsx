import React from 'react';

import { ModalProps } from '@/types/IModal';
import IconError from '@public/images/icons/icon-modal-error.svg';
import IconComplete from '@public/images/icons/icon-modal-complete.svg';

import styled from '@/components/modal/CompleteErrorModal.module.scss';
import { Blur, CloseButton } from './ModalStyles';

const CompleteErrorModal = ({ title, body, onClose, closeModal, customData }: ModalProps) => {
  const handleCallback = (callback: any) => {
    closeModal();
    callback?.();
  };
  return (
    <Blur className={`${styled.wrapper} ${customData?.type === 'error' ? styled.error : styled.complete}`}>
      <div className={styled.header}>
        <div className={styled.title}>
          {customData.type === 'error' ? (
            <IconError className={styled.icon} />
          ) : (
            <IconComplete className={styled.icon} />
          )}
          <div className={styled.text}>{title}</div>
        </div>
        <CloseButton onClick={() => handleCallback(onClose)} />
      </div>
      <div className={styled.contents}>{body}</div>
    </Blur>
  );
};

export default CompleteErrorModal;
