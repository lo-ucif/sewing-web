import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { projects as galleryProjects } from "../data/projects";
import img01 from "../assets/what-is-sewing-0.webp";

const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 70 70"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M19.625 6.75747L24.4675 5.29747C26.0657 4.81639 27.7843 4.93311 29.3028 5.62587C30.8212 6.31864 32.0358 7.54012 32.72 9.06247L36.115 16.6125C36.7043 17.9223 36.8685 19.3837 36.5847 20.7917C36.3008 22.1996 35.5832 23.4833 34.5325 24.4625L29.365 29.2775C28.6725 29.935 29.1975 32.4975 31.7275 36.8825C34.26 41.27 36.2175 43.005 37.12 42.735L43.89 40.665C45.2623 40.2452 46.7315 40.2654 48.0917 40.7227C49.452 41.18 50.635 42.0515 51.475 43.215L56.3 49.9025C57.2746 51.2529 57.7258 52.9112 57.57 54.5692C57.4141 56.2272 56.6617 57.7723 55.4525 58.9175L51.7225 62.45C50.5184 63.5903 49.0333 64.3908 47.4189 64.7698C45.8044 65.1488 44.1183 65.0928 42.5325 64.6075C34.7175 62.215 27.48 55.115 20.7225 43.4075C13.95 31.6825 11.3925 21.7925 13.175 13.7125C13.5345 12.0844 14.3217 10.5816 15.4555 9.35904C16.5893 8.13651 18.0286 7.23846 19.625 6.75747Z"
      fill="black"
    />
  </svg>
);

const WhatsappIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 70 70"
    fill="none"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M35 3.64581C52.3162 3.64581 66.3542 17.6837 66.3542 35C66.3542 52.3162 52.3162 66.3541 35 66.3541C29.575 66.3541 24.4708 64.9746 20.0171 62.5479L6.19208 64.8666C5.85132 64.9235 5.50194 64.8989 5.17255 64.7947C4.84316 64.6906 4.54312 64.5099 4.29699 64.2674C4.05087 64.025 3.86566 63.7277 3.75653 63.4C3.64741 63.0722 3.61747 62.7232 3.66916 62.3816L6.00249 46.9525C4.43938 43.1618 3.63857 39.1003 3.64583 35C3.64583 17.6837 17.6837 3.64581 35 3.64581ZM23.1671 19.5416C21.0233 19.5416 19.2471 21.35 19.5796 23.5841C20.2096 27.7725 22.0704 35.49 27.6062 41.0666C33.3929 46.8971 41.6733 49.3908 46.1562 50.3737C48.4779 50.8841 50.4583 49.0466 50.4583 46.7804V41.4604C50.4584 41.2836 50.4049 41.111 50.305 40.9652C50.205 40.8194 50.0632 40.7074 49.8983 40.6437L44.1817 38.4475C44.0274 38.3884 43.8595 38.3743 43.6975 38.4066L37.9312 39.5325C34.2125 37.6075 31.9608 35.4491 30.6104 32.1971L31.6954 26.32C31.7245 26.1636 31.7103 26.0023 31.6546 25.8533L29.5108 20.1104C29.4486 19.9439 29.3371 19.8002 29.1912 19.6986C29.0453 19.597 28.8719 19.5423 28.6942 19.5416H23.1671Z"
      fill="black"
    />
  </svg>
);

const skillGroups = [
  {
    title: "الخياطة التقليدية",
    items: ["القندورة الجزائرية", "الكاراكو", "الحايك"],
  },
  { title: "الخياطة العصرية", items: ["الفساتين", "البدل", "ملابس الأطفال"] },
  { title: "التطريز", items: ["التطريز اليدوي", "الشريط", "الخرز"] },
  { title: "الأقمشة", items: ["الحرير", "القطن", "الكتان", "الحشو"] },
  { title: "الأدوات", items: ["ماكينة خياطة", "قالب خياطة", "أنماط يدوية"] },
];

const timelineItems = [
  {
    title: "دورة خياطة متقدمة",
    location: "معهد التكوين المهني، الجزائر",
    year: "2018",
  },
  {
    title: "شهادة تطريز يدوي",
    location: "جمعية الحرف التقليدية",
    year: "2020",
  },
  {
    title: "عمل مستقل من البيت",
    location: "خياطة مخصصة حسب الطلب",
    year: "2021 – الآن",
  },
];

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const goGallery = () => navigate("/projects");
  const featuredProjects = galleryProjects.slice(-3);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  return (
    <div className="relative overflow-hidden pt-24 text-[#4b313d]" dir="rtl">
      <section id="home" className="px-5 pb-10 pt-2 md:px-10 lg:px-14 lg:pt-6">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 lg:min-h-[calc(100vh-8rem)] lg:grid-cols-2 lg:gap-10">
          <div className="order-2 space-y-6 text-right lg:order-1">
            <span className="inline-flex rounded-full border border-[#f4d5e0] bg-[#fff1f7] px-4 py-2 text-sm font-medium text-[#9f6b86] shadow-sm">
              🧵 خياطة منزلية | الجزائر
            </span>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#3d2734] sm:text-5xl lg:text-7xl lg:tracking-[-1.8px]">
              أم وائل
            </h1>
            <p className="max-w-xl text-base leading-8 text-[#6b515f] sm:text-lg sm:leading-9 lg:text-xl">
              أصنع ملابس تقليدية وعصرية بحب واتقان من بيتي، وأحوّل كل تصميم إلى
              قطعة مميزة تحمل طابعك الخاص.
            </p>
            <div className="flex flex-wrap items-center justify-end gap-3 sm:gap-5">
              <a
                href="#contact"
                className="inline-flex h-11 items-center justify-center rounded-full border border-[#c86c94] bg-white px-6 text-sm font-semibold text-[#c86c94] transition hover:border-[#b55f83] hover:text-[#b55f83]"
              >
                تواصلي معي
              </a>
              <button
                type="button"
                onClick={goGallery}
                className="inline-flex h-11 items-center justify-center rounded-full bg-[#c86c94] px-6 text-sm font-semibold text-white shadow-lg transition hover:bg-[#b55f83]"
              >
                شوفي أعمالي
              </button>
            </div>
          </div>

          <div className="order-1 mx-auto flex w-full max-w-md items-center justify-center lg:order-2">
            <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] lg:w-[350px] lg:h-[350px] mx-auto">
              <div className="absolute -right-8 top-14 h-36 w-36 rounded-full bg-[#ffeaf2] opacity-70 blur-3xl sm:h-48 sm:w-48" />
              <div className="absolute -left-6 bottom-10 h-28 w-28 rounded-full bg-[#f6e2f0] opacity-80 blur-3xl sm:h-36 sm:w-36" />
              <div className="relative w-full h-full">
                <div className="absolute inset-0 rounded-full bg-white/30 scale-110 blur-sm" />
                <div className="absolute -inset-3 rounded-full border-2 border-white/25" />
                <div className="absolute -inset-6 rounded-full border border-white/15" />
                <div className="relative w-full h-full overflow-hidden rounded-full border-4 border-white/60 shadow-lg">
                  <img
                    src={img01}
                    alt="profile"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="border-t border-[#f0d8e3] px-5 py-16 md:px-10 lg:px-14"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-right">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#b26488]">
              من أنا
            </span>
            <h2 className="mt-4 text-3xl font-semibold text-[#3d2734] sm:text-4xl lg:text-5xl">
              خيط، طراز، وحكاية جزائرية
            </h2>
          </div>
          <div className="rounded-[32px] border border-[#f2dbe2] bg-white/90 p-6 shadow-[0_25px_60px_rgba(224,179,200,0.12)] sm:p-8 lg:p-10">
            <p className="text-right text-base leading-8 text-[#6b515f] sm:text-lg sm:leading-9">
              أسعى لتقديم تصاميم أنثوية أنيقة تجمع بين جمال التراث الجزائري وخفة
              العصر. أنفّذ كل قطعة باليد مع اهتمام دقيق بالتطريز والتفاصيل.
            </p>
            <p className="mt-4 text-right text-base leading-8 text-[#6b515f] sm:text-lg sm:leading-9">
              خدماتي تشمل تفصيل القندورة والكاراكو، فساتين السهرة، البدل، وأزياء
              الأطفال مع درع شخصي لكل عميلة.
            </p>
            <p className="mt-4 text-right text-base leading-8 text-[#6b515f] sm:text-lg sm:leading-9">
              أعمل من البيت لأضمن تجربة مريحة وبأسعار مناسبة، مع تسليم منتظم
              وجودة تفوق التوقعات.
            </p>
            <div className="mt-8 text-right">
              <a
                href="#"
                className="inline-flex h-11 items-center rounded-full bg-[#c86c94] px-6 text-sm font-semibold text-white shadow-lg transition hover:bg-[#b55f83]"
              >
                تحميل كتالوج أعمالي
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="px-5 py-16 md:px-10 lg:px-14">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-right">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#b26488]">
              تخصصاتي
            </span>
            <h2 className="mt-4 text-3xl font-semibold text-[#3d2734] sm:text-4xl lg:text-5xl">
              مجموعة المهارات
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-[28px] border border-[#f0d8e3] bg-white/95 p-6 shadow-[0_20px_50px_rgba(216,169,194,0.12)] transition hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(216,169,194,0.18)]"
              >
                <h3 className="text-right text-xl font-semibold text-[#4b313d]">
                  {group.title}
                </h3>
                <div className="mt-4 flex flex-wrap justify-end gap-2 sm:gap-3">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#f4d5e0] bg-[#fff1f7] px-3 py-2 text-xs text-[#7d5a70] shadow-sm sm:px-4 sm:text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="border-t border-[#f0d8e3] px-5 py-16 md:px-10 lg:px-14"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-right">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#b26488]">
              أعمالي
            </span>
            <h2 className="mt-4 text-3xl font-semibold text-[#3d2734] sm:text-4xl lg:text-5xl">
              نماذج من التصاميم
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {featuredProjects.map((project) => (
              <article
                key={project.id}
                className="group overflow-hidden rounded-[28px] border border-[#f2dbe2] bg-white shadow-[0_20px_60px_rgba(224,179,200,0.1)] transition hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(224,179,200,0.16)]"
              >
                <div className="aspect-square bg-gradient-to-br from-[#fdeef5] via-[#fff2f7] to-[#f9e7ee] p-2 sm:p-3">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="h-full w-full rounded-3xl object-cover shadow-inner shadow-[#e5b2cb]/40"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-3 p-5 text-right sm:space-y-4 sm:p-6">
                  <h3 className="text-lg font-semibold text-[#3d2734] sm:text-xl">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap justify-end gap-2">
                    <span className="rounded-full bg-[#fff0f4] px-3 py-1 text-xs font-semibold text-[#b26488]">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-sm leading-7 text-[#6b515f]">
                    {project.description}
                  </p>
                  <button
                    type="button"
                    onClick={goGallery}
                    className="text-sm font-semibold text-[#8e5a72] transition hover:text-[#b76487]"
                  >
                    شوفي التفاصيل
                  </button>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 text-right">
            <button
              type="button"
              onClick={goGallery}
              className="inline-flex h-11 items-center rounded-full bg-[#c86c94] px-8 text-sm font-semibold text-white shadow-lg transition hover:bg-[#b55f83]"
            >
              شوفي كل الأعمال
            </button>
          </div>
        </div>
      </section>

      <section id="journey" className="px-5 py-16 md:px-10 lg:px-14">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-right">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#b26488]">
              مساري
            </span>
            <h2 className="mt-4 text-3xl font-semibold text-[#3d2734] sm:text-4xl lg:text-5xl">
              الخبرات والتعليم
            </h2>
          </div>
          <div className="relative pr-6 sm:pr-8">
            <div className="absolute bottom-0 right-2 top-0 w-[2px] bg-[#f0d0dc]" />
            <div className="space-y-8">
              {timelineItems.map((item) => (
                <div key={item.title} className="relative">
                  <div className="absolute -right-[2px] top-2 h-4 w-4 rounded-full bg-[#c86c94] ring-4 ring-white" />
                  <div className="rounded-[28px] border border-[#f2dbe2] bg-white p-5 shadow-[0_20px_25px_rgba(224,179,200,0.08)] sm:p-6">
                    <h3 className="text-lg font-semibold text-[#3d2734] sm:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#6b515f]">
                      {item.location}
                    </p>
                    <p className="mt-3 text-sm font-semibold text-[#b26488]">
                      {item.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="border-t border-[#f0d8e3] px-5 py-16 md:px-10 lg:px-14"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-right">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#b26488]">
              تواصلي معي
            </span>
            <h2 className="mt-4 text-3xl font-semibold text-[#3d2734] sm:text-4xl lg:text-5xl">
              هيا نبدأ تصميمك
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <a
              href="tel:+212600000000"
              className="group rounded-[30px] border border-[#f2dbe2] bg-white p-6 text-right shadow-[0_20px_20px_rgba(220,171,197,0.1)] transition hover:-translate-y-1 hover:border-[#e7aac0] hover:bg-[#fff5f8]"
            >
              <div className="flex items-center justify-between gap-4">
                <PhoneIcon />
                <div>
                  <p className="text-lg font-semibold text-[#3d2734]">الهاتف</p>
                  <p className="text-sm text-[#7d5a70]">+212 600 000 000</p>
                </div>
              </div>
            </a>
            <a
              href="https://wa.me/212600000000"
              target="_blank"
              rel="noreferrer"
              className="group rounded-[30px] border border-[#f2dbe2] bg-white p-6 text-right shadow-[0_20px_20px_rgba(220,171,197,0.1)] transition hover:-translate-y-1 hover:border-[#e7aac0] hover:bg-[#fff5f8]"
            >
              <div className="flex items-center justify-between gap-4">
                <WhatsappIcon />
                <div>
                  <p className="text-lg font-semibold text-[#3d2734]">واتساب</p>
                  <p className="text-sm text-[#7d5a70]">أرسل رسالة الآن</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
