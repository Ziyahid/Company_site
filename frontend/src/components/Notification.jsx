import { motion } from 'framer-motion';
import { FiInfo, FiCheckCircle, FiAlertCircle, FiXCircle, FiX } from 'react-icons/fi';

const typeStyles = {
  info: {
    icon: <FiInfo className="text-blue-500" />,
    bg: 'bg-blue-50 border-blue-200',
  },
  success: {
    icon: <FiCheckCircle className="text-green-500" />,
    bg: 'bg-green-50 border-green-200',
  },
  error: {
    icon: <FiXCircle className="text-red-500" />,
    bg: 'bg-red-50 border-red-200',
  },
  warning: {
    icon: <FiAlertCircle className="text-yellow-500" />,
    bg: 'bg-yellow-50 border-yellow-200',
  },
};

const Notification = ({ type = 'info', title, onClose }) => {
  const style = typeStyles[type] || typeStyles.info;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: 50 }}
      layout
      className={`max-w-sm w-full shadow-md rounded-xl px-4 py-3 border ${style.bg} flex items-start gap-3 relative`}
    >
      <div className="text-xl">{style.icon}</div>
      <div className="flex-1">
        <h4 className="text-sm font-semibold text-gray-800">{title}</h4>
      </div>
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-500 hover:text-black transition"
      >
        <FiX size={18} />
      </button>
    </motion.div>
  );
};

export default Notification;
