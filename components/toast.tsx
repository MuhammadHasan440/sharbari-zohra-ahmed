import { useEffect } from 'react';
import { X } from 'lucide-react';

interface ToastProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
}

export const Toast = ({ message, type, onClose }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-4 right-4 z-50 animate-in slide-in-from-bottom-2">
      <div className={`px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 ${
        type === 'success' ? 'bg-[#B7C83E] text-[#2E2F1F]' : 'bg-red-500 text-white'
      }`}>
        <span className="text-sm">{message}</span>
        <button onClick={onClose} className="hover:opacity-70">
          <X size={16} />
        </button>
      </div>
    </div>
  );
};