import { ModalProps } from '@/types/IModal';

import CommonModal from './CommonModal';
import SkillsModal from './SkillsModal';
import CompleteErrorModal from './CompleteErrorModal';

const modals = {
  alert: (props: ModalProps) => <CommonModal type='alert' {...props} />,
  confirm: (props: ModalProps) => <CommonModal type='confirm' {...props} />,
  skills: (props: ModalProps) => <SkillsModal {...props} />,
  completeError: (props: ModalProps) => <CompleteErrorModal {...props} />,
};

export default modals;
