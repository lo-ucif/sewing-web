import React, { useEffect } from "react";

interface HomeProps {
  onGoGallery?: () => void;
}

const skillGroups = [
  {
    title: "الخياطة التقليدية",
    items: ["القندورة الجزائرية", "الكاراكو", "الحايك"],
  },
  {
    title: "الخياطة العصرية",
    items: ["الفساتين", "البدل", "ملابس الأطفال"],
  },
  {
    title: "التطريز",
    items: ["التطريز اليدوي", "الشريط", "الخرز"],
  },
  {
    title: "الأقمشة",
    items: ["الحرير", "القطن", "الكتان", "الحشو"],
  },
  {
    title: "الأدوات",
    items: ["ماكينة خياطة", "قالب خياطة", "أنماط يدوية"],
  },
];

const projects = [
  {
    title: "فستان سهرة أنيق",
    tags: ["فساتين", "حفلة"],
    description:
      "تفصيل فستان سهرة بنقشة ناعمة وقصة خفيفة مع لمسات يدوية دقيقة.",
  },
  {
    title: "طقم تقليدي",
    tags: ["قندورة", "زفاف"],
    description: "تصميم قندورة جزائرية تقليدية بلمسات معاصرة وألوان راقية.",
  },
  {
    title: "بدلة رسمية",
    tags: ["بدل", "مكتب"],
    description:
      "بدلة أنثوية مصممة خصيصاً للراحة والأناقة في المناسبات الرسمية.",
  },
  {
    title: "طقم أطفال",
    tags: ["أطفال", "سهرة"],
    description: "تطريز رقيق وأقمشة ناعمة تناسب الأطفال في المناسبات الخاصة.",
  },
  {
    title: "شال مطرز",
    tags: ["تطريز", "نسائي"],
    description: "شال مزين بشريط وخرز لتفصيل مريح مع لمسة فنية تقليدية.",
  },
  {
    title: "فستان نهاري",
    tags: ["فساتين", "نهار"],
    description: "فستان بسيط وعصري من القطن بلمسة منزلية دافئة أنيقة.",
  },
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

export const Home: React.FC<HomeProps> = ({ onGoGallery }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  return (
    <div className="relative overflow-hidden pt-24 text-[#4b313d]">
      <section id="home" className="relative px-5 pb-20 pt-8 md:px-10 lg:px-14">
        <div className="mx-auto flex min-h-[calc(100vh-7rem)] max-w-6xl flex-col justify-center gap-10 md:gap-16 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-6 text-right lg:max-w-xl">
            <span className="inline-flex rounded-full border border-[#f4d5e0] bg-[#fff1f7] px-4 py-2 text-sm font-medium text-[#9f6b86] shadow-sm">
              🧵 خياطة منزلية | الجزائر
            </span>
            <h1 className="text-5xl font-semibold tracking-tight text-[#3d2734] md:text-6xl lg:text-7xl">
              فاطمة بوعلام
            </h1>
            <p className="max-w-xl text-lg leading-9 text-[#6b515f] md:text-xl">
              أصنع ملابس تقليدية وعصرية بحب واتقان من بيتي، وأحوّل كل تصميم إلى
              قطعة مميزة تحمل طابعك الخاص.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-end">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-[#c86c94] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#b55f83]"
              >
                شوفي أعمالي
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-[#c86c94] bg-white px-6 py-3 text-sm font-semibold text-[#c86c94] transition hover:border-[#b55f83] hover:text-[#b55f83]"
              >
                تواصلي معي
              </a>
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-md items-center justify-center">
            <div className="absolute -right-14 top-16 h-48 w-48 rounded-full bg-[#ffeaf2] blur-3xl opacity-70" />
            <div className="absolute -left-10 bottom-10 h-36 w-36 rounded-full bg-[#f6e2f0] blur-3xl opacity-80" />
            <div className="relative z-10 flex h-80 w-80 items-center justify-center rounded-full border-8 border-white/80 bg-gradient-to-br from-[#fdeff6] via-[#fff5f8] to-[#f8e7f2] shadow-[0_25px_90px_rgba(200,120,150,0.14)]">
              <div className="flex h-72 w-72 items-center justify-center rounded-full bg-[#f9e4ef] text-6xl shadow-inner shadow-[#d8b4cf]/50">
                👩🏽‍🧵
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
            <h2 className="mt-4 text-4xl font-semibold text-[#3d2734] md:text-5xl">
              خيط، طراز، وحكاية جزائرية
            </h2>
          </div>
          <div className="rounded-[32px] border border-[#f2dbe2] bg-white/90 p-8 shadow-[0_25px_60px_rgba(224,179,200,0.12)] md:p-10">
            <p className="text-right text-lg leading-9 text-[#6b515f]">
              أسعى لتقديم تصاميم أنثوية أنيقة تجمع بين جمال التراث الجزائري وخفة
              العصر. أنفّذ كل قطعة باليد مع اهتمام دقيق بالتطريز والتفاصيل.
            </p>
            <p className="mt-4 text-right text-lg leading-9 text-[#6b515f]">
              خدماتي تشمل تفصيل القندورة والكاراكو، فساتين السهرة، البدل،
              وأزياء الأطفال مع درع شخصي لكل عميلة.
            </p>
            <p className="mt-4 text-right text-lg leading-9 text-[#6b515f]">
              أعمل من البيت لأضمن تجربة مريحة وبأسعار مناسبة، مع تسليم منتظم
              وجودة تفوق التوقعات.
            </p>
            <div className="mt-8 text-right">
              <a
                href="#"
                className="inline-flex rounded-full bg-[#c86c94] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#b55f83]"
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
            <h2 className="mt-4 text-4xl font-semibold text-[#3d2734] md:text-5xl">
              مجموعة المهارات
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-[28px] border border-[#f0d8e3] bg-white/95 p-6 shadow-[0_20px_50px_rgba(216,169,194,0.12)] transition hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(216,169,194,0.18)]"
              >
                <h3 className="text-right text-xl font-semibold text-[#4b313d]">
                  {group.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-3 text-right">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#f4d5e0] bg-[#fff1f7] px-4 py-2 text-sm text-[#7d5a70] shadow-sm"
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
            <h2 className="mt-4 text-4xl font-semibold text-[#3d2734] md:text-5xl">
              نماذج من التصاميم
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group overflow-hidden rounded-[32px] border border-[#f2dbe2] bg-white shadow-[0_20px_60px_rgba(224,179,200,0.1)] transition hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(224,179,200,0.16)]"
              >
                <div className="aspect-square bg-gradient-to-br from-[#fdeef5] via-[#fff2f7] to-[#f9e7ee] p-6">
                  <div className="h-full w-full rounded-3xl bg-[#f8d8e4] shadow-inner shadow-[#e5b2cb]/40" />
                </div>
                <div className="space-y-4 p-6 text-right">
                  <h3 className="text-xl font-semibold text-[#3d2734]">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[#fff0f4] px-3 py-1 text-xs font-semibold text-[#b26488]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm leading-7 text-[#6b515f]">
                    {project.description}
                  </p>
                  <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
                    <a
                      href="#contact"
                      className="text-sm font-semibold text-[#8e5a72] transition hover:text-[#b76487]"
                    >
                      شوفي التفاصيل
                    </a>
                    <a
                      href="#contact"
                      className="text-sm font-semibold text-[#c86c94] transition hover:text-[#b55f83]"
                    >
                      اطلبي الآن
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 text-right">
            <button
              type="button"
              onClick={onGoGallery}
              className="inline-flex rounded-full bg-[#c86c94] px-8 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#b55f83]"
            >
              شوفي كل الأعمال
            </button>
          </div>
        </div>
      </section>

      <section id="journey" className="px-5 py-16 md:px-10 lg:px-14">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-right">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#b26488]">
              مساري
            </span>
            <h2 className="mt-4 text-4xl font-semibold text-[#3d2734] md:text-5xl">
              الخبرات والتعليم
            </h2>
          </div>
          <div className="relative mx-auto max-w-3xl">
            <div className="absolute right-4 top-0 h-full w-0.5 bg-[#f0d0dc]" />
            <div className="space-y-10">
              {timelineItems.map((item) => (
                <div key={item.title} className="relative text-right md:pl-10">
                  <div className="absolute -right-2 top-2 h-4 w-4 rounded-full bg-[#c86c94] ring-8 ring-white" />
                  <div className="rounded-[28px] border border-[#f2dbe2] bg-white p-6 shadow-[0_20px_50px_rgba(224,179,200,0.08)]">
                    <h3 className="text-xl font-semibold text-[#3d2734]">
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
            <h2 className="mt-4 text-4xl font-semibold text-[#3d2734] md:text-5xl">
              هيا نبدأ تصميمك
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            <a
              href="tel:+212600000000"
              className="group rounded-[30px] border border-[#f2dbe2] bg-white p-6 text-right shadow-[0_20px_40px_rgba(220,171,197,0.1)] transition hover:-translate-y-1 hover:border-[#e7aac0] hover:bg-[#fff5f8]"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-2xl">📞</span>
                <div className="space-y-2">
                  <p className="text-lg font-semibold text-[#3d2734]">الهاتف</p>
                  <p className="text-sm text-[#7d5a70]">+212 600 000 000</p>
                </div>
              </div>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="group rounded-[30px] border border-[#f2dbe2] bg-white p-6 text-right shadow-[0_20px_40px_rgba(220,171,197,0.1)] transition hover:-translate-y-1 hover:border-[#e7aac0] hover:bg-[#fff5f8]"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-2xl">📘</span>
                <div className="space-y-2">
                  <p className="text-lg font-semibold text-[#3d2734]">فيسبوك</p>
                  <p className="text-sm text-[#7d5a70]">تابعني على الصفحة</p>
                </div>
              </div>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="group rounded-[30px] border border-[#f2dbe2] bg-white p-6 text-right shadow-[0_20px_40px_rgba(220,171,197,0.1)] transition hover:-translate-y-1 hover:border-[#e7aac0] hover:bg-[#fff5f8]"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-2xl">📸</span>
                <div className="space-y-2">
                  <p className="text-lg font-semibold text-[#3d2734]">
                    إنستغرام
                  </p>
                  <p className="text-sm text-[#7d5a70]">
                    مشاهدة التصاميم اليومية
                  </p>
                </div>
              </div>
            </a>
            <a
              href="https://wa.me/212600000000"
              target="_blank"
              rel="noreferrer"
              className="group rounded-[30px] border border-[#f2dbe2] bg-white p-6 text-right shadow-[0_20px_40px_rgba(220,171,197,0.1)] transition hover:-translate-y-1 hover:border-[#e7aac0] hover:bg-[#fff5f8]"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-2xl">💬</span>
                <div className="space-y-2">
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
