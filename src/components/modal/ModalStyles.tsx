import React, { ReactNode } from 'react';

import styled from './ModalStyles.module.scss';

export const Common = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div className={`${styled.modal} ${styled.common} ${className && styled[className]}`}>{children}</div>
);

export const Blur = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div className={`${styled.modal} ${styled.blur} ${className}`}>{children}</div>
);

export const Config = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div className={`${styled.modal} ${styled.config} ${className && styled[className]}`}>{children}</div>
);

export const CloseButton = ({ onClick }: { onClick: () => void }) => (
  <button type='button' className={styled.closeBtn} onClick={onClick} />
);
