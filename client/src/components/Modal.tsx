import { GrFormClose } from 'react-icons/gr';
import { useModal } from './ModalContext';

const styling =
  'fixed z-50 min-h-max min-w-max rounded-lg pb-8 text-base rounded-lg text-base pb-2 rounded-t-xl bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2';

export function Modal() {
  const { isModalOpen, modalContent, closeModal, header } = useModal();

  if (!isModalOpen) return null;

  return (
    <div className="absolute">
      <div
        onClick={closeModal}
        className="fixed inset-0 bg-black bg-opacity-80 z-40"></div>
      <div className={styling}>
        <div className="flex justify-between bg-blue-700 rounded-t-lg py-2 px-4 border-blue-700-2">
          <div>
            <p className="text-white text-lg ml-8 text-center">{header}</p>
          </div>
          <GrFormClose color="white" size={24} onClick={closeModal} />
        </div>
        <div className="flex justify-center items-center">{modalContent}</div>
      </div>
    </div>
  );
}
