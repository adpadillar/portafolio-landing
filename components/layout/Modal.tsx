import { AnimatePresence, motion } from "framer-motion";
import React from "react";

interface ModalProps {
  state: boolean;
  toggleState: () => void;
}

const Modal: React.FC<ModalProps> = ({ state, toggleState, children }) => {
  return (
    <AnimatePresence>
      {state && (
        <motion.div
          onClick={toggleState}
          style={{ margin: 0 }} // This is needed to make the modal work
          className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center bg-black bg-opacity-50 m-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
