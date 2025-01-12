import React from 'react';

import { ModalProps } from '@/types/IModal';

import { CloseButton, Common } from './ModalStyles';
import styled from './CommonModal.module.scss';

type Props = ModalProps & { type: 'alert' | 'confirm' };

const CommonModal = ({
  type = 'alert',
  title,
  body,
  closeButtonVisible,
  customData,
  closeModal,
  onClose,
  onCancel,
  onConfirm,
}: Props) => {
  const { cancelText, confirmText } = customData || {};

  const handleCallback = (callback: any) => {
    closeModal();
    callback?.();
  };

  return (
    <Common className={customData?.type}>
      {/* {closeButtonVisible && <CloseButton onClick={() => handleCallback(onClose)} />} */}
      <div className={styled.header}>
        <div className={styled.title}>
          {customData?.iconClass && <div className={`${styled.icon} ${styled[customData.iconClass]}`} />}
          <div className={styled.text}>{title}</div>
        </div>
        {closeButtonVisible && <div className={styled.btnClose} onClick={() => handleCallback(onClose)} />}
      </div>
      <div className={styled.body}>{body}</div>
      {type === 'confirm' && (
        <ul className={styled.btnList}>
          <li>
            <button type='button' className={styled.cancel} onClick={() => handleCallback(onCancel)}>
              {cancelText || '취소'}
            </button>
          </li>
          <li>
            <button
              type='button'
              onClick={() => handleCallback(onConfirm)}
              className={customData?.type && styled[customData?.type]}
            >
              {confirmText || '확인'}
            </button>
          </li>
        </ul>
      )}
    </Common>
  );
};

export default CommonModal;
