import React, { useState } from 'react';

const WHATSAPP_NUMBER = '27670962825';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

export const WhatsAppChatPopup: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating WhatsApp Button */}
      <button
        className="fixed bottom-6 right-6 z-50 shadow-lg rounded-full animate-bounce bg-white p-2 border border-white hover:scale-110 transition-transform"
        style={{ background: 'none' }}
        aria-label="Chat on WhatsApp"
        onClick={() => setOpen((v) => !v)}
      >
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="30" r="30" fill="#25D366"/>
          <path d="M44.5 30c0-8.008-6.492-14.5-14.5-14.5S15.5 21.992 15.5 30c0 2.522.668 4.97 1.936 7.13L15 45l8.13-2.436A14.44 14.44 0 0 0 30 44.5c8.008 0 14.5-6.492 14.5-14.5Z" fill="#fff"/>
          <path d="M30 19.5c5.799 0 10.5 4.701 10.5 10.5 0 5.799-4.701 10.5-10.5 10.5a10.44 10.44 0 0 1-5.32-1.47l-.38-.22-4.87 1.46 1.3-4.75-.24-.39A10.44 10.44 0 0 1 19.5 30c0-5.799 4.701-10.5 10.5-10.5Zm5.13 13.13c-.27-.13-1.6-.79-1.85-.88-.25-.09-.43-.13-.61.13-.18.26-.7.85-.86 1.03-.16.18-.31.2-.58.07-.27-.13-1.13-.42-2.15-1.25-.79-.7-1.32-1.57-1.48-1.84-.16-.26-.02-.41.12-.54.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.6-1.44-.82-1.97-.22-.52-.44-.45-.6-.46-.16-.01-.34-.01-.52-.01-.18 0-.47.07-.72.33-.25.26-.95.91-.95 2.23 0 1.32.97 2.6 1.1 2.78.13.18 1.9 2.89 4.6 3.94.64.27 1.14.44 1.53.56.64.2 1.22.17 1.68.1.51-.08 1.58-.65 1.8-1.28.22-.63.22-1.16.16-1.28-.06-.12-.24-.18-.5-.32Z" fill="#25D366"/>
        </svg>
        {/* Red dot notification */}
        <span className="absolute bottom-3 right-3 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
      </button>

      {/* WhatsApp Chat Popup */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 max-w-[90vw] bg-white rounded-xl shadow-2xl border border-gray-200 animate-fade-in">
          <div className="flex items-center gap-3 p-4 border-b border-gray-100 bg-green-500 rounded-t-xl">
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="30" cy="30" r="30" fill="#25D366"/>
                <path d="M44.5 30c0-8.008-6.492-14.5-14.5-14.5S15.5 21.992 15.5 30c0 2.522.668 4.97 1.936 7.13L15 45l8.13-2.436A14.44 14.44 0 0 0 30 44.5c8.008 0 14.5-6.492 14.5-14.5Z" fill="#fff"/>
                <path d="M30 19.5c5.799 0 10.5 4.701 10.5 10.5 0 5.799-4.701 10.5-10.5 10.5a10.44 10.44 0 0 1-5.32-1.47l-.38-.22-4.87 1.46 1.3-4.75-.24-.39A10.44 10.44 0 0 1 19.5 30c0-5.799 4.701-10.5 10.5-10.5Zm5.13 13.13c-.27-.13-1.6-.79-1.85-.88-.25-.09-.43-.13-.61.13-.18.26-.7.85-.86 1.03-.16.18-.31.2-.58.07-.27-.13-1.13-.42-2.15-1.25-.79-.7-1.32-1.57-1.48-1.84-.16-.26-.02-.41.12-.54.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.6-1.44-.82-1.97-.22-.52-.44-.45-.6-.46-.16-.01-.34-.01-.52-.01-.18 0-.47.07-.72.33-.25.26-.95.91-.95 2.23 0 1.32.97 2.6 1.1 2.78.13.18 1.9 2.89 4.6 3.94.64.27 1.14.44 1.53.56.64.2 1.22.17 1.68.1.51-.08 1.58-.65 1.8-1.28.22-.63.22-1.16.16-1.28-.06-.12-.24-.18-.5-.32Z" fill="#25D366"/>
              </svg>
            </div>
            <div className="flex-1">
              <div className="font-bold text-white text-base leading-tight">Tshikamisava Holdings</div>
              <div className="text-xs text-white/80">Typically replies within a day</div>
            </div>
            <button className="text-white/80 hover:text-white text-xl" onClick={() => setOpen(false)}>&times;</button>
          </div>
          <div className="p-4 bg-gray-50">
            <div className="mb-3">
              <div className="bg-white rounded-lg p-3 shadow text-sm w-fit">
                <span className="block font-semibold text-gray-700 mb-1">Tshikamisava Holdings</span>
                <span>Hi there 👋<br/>How can I help you?</span>
              </div>
            </div>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg text-center text-lg transition-colors mt-2"
            >
              <svg className="inline-block mr-2 align-middle" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.151-.174.2-.298.3-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.363.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.617h-.001a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.991c-.003 5.45-4.437 9.884-9.88 9.884" fill="#fff"/></svg>
              Start Chat
            </a>
          </div>
        </div>
      )}
    </>
  );
};
