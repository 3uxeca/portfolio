'use client';

import React, { useEffect } from 'react';

import useCommonStore from '@/store/commonStore';
import { ModalProps } from '@/types/IModal';

import styled from '../modal/ModalStyles.module.scss';
import modals from '../modal/modals';

const Component = ({
  component,
  ...rest
}: {
  component: (props: ModalProps) => React.JSX.Element;
  closeModal: () => void;
}) => component({ ...rest });

const ModalProvider = () => {
  const modalState = useCommonStore((state) => state.modals);
  const isOpen = modalState.length > 0;

  useEffect(() => {
    if (isOpen) {
      const scrollbarVisibility = document.documentElement.scrollHeight > window.innerHeight;
      document.body.style.cssText = `
        position: fixed;
        top: -${window.scrollY}px;
        width: 100%;
        overflow-y: ${scrollbarVisibility ? 'scroll' : 'hidden'};
      `;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && <div className={styled.modalOverlay} />}
      {modalState.map(({ id, modalKey, ...rest }) => (
        <Component key={id} component={modals[modalKey]} {...rest} />
      ))}
    </>
  );
};

export default ModalProvider;
