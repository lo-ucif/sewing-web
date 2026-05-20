import React from 'react';
import { MessageSquare } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappNumber = '15550199821';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('مرحباً، أود طرح استفسار بخصوص حياطة الملابس.')}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-40 bg-[#25D366] hover:bg-[#20ba56] text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center group animate-bounce"
      aria-label="Contact on WhatsApp"
      style={{ animationDuration: '3s' }}
    >
      {/* Icon */}
      <MessageSquare className="w-6 h-6 fill-current" />
      
      {/* Dynamic text badge popping out on hover */}
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:mr-2 transition-all duration-500 ease-in-out whitespace-nowrap font-sans text-xs font-semibold">
        تحدثي معي
      </span>
    </a>
  );
};
export default FloatingWhatsApp;
