import React from 'react';

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 70 70" fill="none" aria-hidden="true">
    <path d="M19.625 6.75747L24.4675 5.29747C26.0657 4.81639 27.7843 4.93311 29.3028 5.62587C30.8212 6.31864 32.0358 7.54012 32.72 9.06247L36.115 16.6125C36.7043 17.9223 36.8685 19.3837 36.5847 20.7917C36.3008 22.1996 35.5832 23.4833 34.5325 24.4625L29.365 29.2775C28.6725 29.935 29.1975 32.4975 31.7275 36.8825C34.26 41.27 36.2175 43.005 37.12 42.735L43.89 40.665C45.2623 40.2452 46.7315 40.2654 48.0917 40.7227C49.452 41.18 50.635 42.0515 51.475 43.215L56.3 49.9025C57.2746 51.2529 57.7258 52.9112 57.57 54.5692C57.4141 56.2272 56.6617 57.7723 55.4525 58.9175L51.7225 62.45C50.5184 63.5903 49.0333 64.3908 47.4189 64.7698C45.8044 65.1488 44.1183 65.0928 42.5325 64.6075C34.7175 62.215 27.48 55.115 20.7225 43.4075C13.95 31.6825 11.3925 21.7925 13.175 13.7125C13.5345 12.0844 14.3217 10.5816 15.4555 9.35904C16.5893 8.13651 18.0286 7.23846 19.625 6.75747Z" fill="black"/>
  </svg>
);

const WhatsappIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 70 70" fill="none" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M35 3.64581C52.3162 3.64581 66.3542 17.6837 66.3542 35C66.3542 52.3162 52.3162 66.3541 35 66.3541C29.575 66.3541 24.4708 64.9746 20.0171 62.5479L6.19208 64.8666C5.85132 64.9235 5.50194 64.8989 5.17255 64.7947C4.84316 64.6906 4.54312 64.5099 4.29699 64.2674C4.05087 64.025 3.86566 63.7277 3.75653 63.4C3.64741 63.0722 3.61747 62.7232 3.66916 62.3816L6.00249 46.9525C4.43938 43.1618 3.63857 39.1003 3.64583 35C3.64583 17.6837 17.6837 3.64581 35 3.64581ZM23.1671 19.5416C21.0233 19.5416 19.2471 21.35 19.5796 23.5841C20.2096 27.7725 22.0704 35.49 27.6062 41.0666C33.3929 46.8971 41.6733 49.3908 46.1562 50.3737C48.4779 50.8841 50.4583 49.0466 50.4583 46.7804V41.4604C50.4584 41.2836 50.4049 41.111 50.305 40.9652C50.205 40.8194 50.0632 40.7074 49.8983 40.6437L44.1817 38.4475C44.0274 38.3884 43.8595 38.3743 43.6975 38.4066L37.9312 39.5325C34.2125 37.6075 31.9608 35.4491 30.6104 32.1971L31.6954 26.32C31.7245 26.1636 31.7103 26.0023 31.6546 25.8533L29.5108 20.1104C29.4486 19.9439 29.3371 19.8002 29.1912 19.6986C29.0453 19.597 28.8719 19.5423 28.6942 19.5416H23.1671Z" fill="black"/>
  </svg>
);

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#f0d8e3] bg-[#f8e8ef] pb-8 pt-12 text-[#4b313d]">
      <div className="mx-auto max-w-7xl px-5 text-center md:px-10">
        <div className="mb-8 flex flex-col items-center gap-4">
          <p className="text-sm uppercase tracking-[0.3em] text-[#8e5a72]">فاطمة بوعلام</p>
          <p className="text-sm text-[#6d4d5f] md:text-base">فاطمة بوعلام © 2025 — كل الحقوق محفوظة</p>
          <p className="text-sm text-[#866075]/90">صُنع بالحب من البيت 🧵</p>
        </div>

        <div className="mx-auto flex w-fit flex-col items-center gap-3">
          <a href="https://wa.me/212600000000" target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-2xl bg-white px-4 py-2 text-[#8e5a72] shadow-sm transition-colors hover:bg-[#fff1f6]">
            <WhatsappIcon />
            <span className="text-xs font-sans">واتساب</span>
          </a>
          <a href="tel:+212600000000" className="flex items-center gap-2 rounded-2xl bg-white px-4 py-2 text-[#8e5a72] shadow-sm transition-colors hover:bg-[#fff1f6]">
            <PhoneIcon />
            <span className="text-xs font-sans">الهاتف</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
