import React, { useEffect } from 'react';

interface HomeProps {
  onGoGallery?: () => void;
}

const skillGroups = [
  { title: 'الخياطة التقليدية', items: ['القندورة الجزائرية', 'الكاراكو', 'الحايك'] },
  { title: 'الخياطة العصرية', items: ['الفساتين', 'البدل', 'ملابس الأطفال'] },
  { title: 'التطريز', items: ['التطريز اليدوي', 'الشريط', 'الخرز'] },
  { title: 'الأقمشة', items: ['الحرير', 'القطن', 'الكتان', 'الحشو'] },
  { title: 'الأدوات', items: ['ماكينة خياطة', 'قالب خياطة', 'أنماط يدوية'] },
];

const projects = [
  { title: 'فستان سهرة أنيق', tags: ['فساتين', 'حفلة'], description: 'تفصيل فستان سهرة بنقشة ناعمة وقصة خفيفة مع لمسات يدوية دقيقة.' },
  { title: 'طقم تقليدي', tags: ['قندورة', 'زفاف'], description: 'تصميم قندورة جزائرية تقليدية بلمسات معاصرة وألوان راقية.' },
  { title: 'بدلة رسمية', tags: ['بدل', 'مكتب'], description: 'بدلة أنثوية مصممة خصيصاً للراحة والأناقة في المناسبات الرسمية.' },
  { title: 'طقم أطفال', tags: ['أطفال', 'سهرة'], description: 'تطريز رقيق وأقمشة ناعمة تناسب الأطفال في المناسبات الخاصة.' },
  { title: 'شال مطرز', tags: ['تطريز', 'نسائي'], description: 'شال مزين بشريط وخرز لتفصيل مريح مع لمسة فنية تقليدية.' },
  { title: 'فستان نهاري', tags: ['فساتين', 'نهار'], description: 'فستان بسيط وعصري من القطن بلمسة منزلية دافئة أنيقة.' },
];

const timelineItems = [
  { title: 'دورة خياطة متقدمة', location: 'معهد التكوين المهني، الجزائر', year: '2018' },
  { title: 'شهادة تطريز يدوي', location: 'جمعية الحرف التقليدية', year: '2020' },
  { title: 'عمل مستقل من البيت', location: 'خياطة مخصصة حسب الطلب', year: '2021 – الآن' },
];

export const Home: React.FC<HomeProps> = ({ onGoGallery }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  return (
    <div className="relative overflow-hidden pt-24 text-[#4b313d]" dir="rtl">
      <section id="home" className="px-5 pb-16 pt-6 md:px-10 lg:px-14 lg:pt-10">
        <div className="mx-auto grid min-h-[calc(100vh-8rem)] max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div className="order-2 space-y-6 text-right lg:order-1">
            <span className="inline-flex rounded-full border border-[#f4d5e0] bg-[#fff1f7] px-4 py-2 text-sm font-medium text-[#9f6b86] shadow-sm">
              🧵 خياطة منزلية | الجزائر
            </span>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#3d2734] sm:text-5xl lg:text-7xl lg:tracking-[-1.8px]">
              فاطمة بوعلام
            </h1>
            <p className="max-w-xl text-base leading-8 text-[#6b515f] sm:text-lg sm:leading-9 lg:text-xl">
              أصنع ملابس تقليدية وعصرية بحب واتقان من بيتي، وأحوّل كل تصميم إلى قطعة مميزة تحمل طابعك الخاص.
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
                onClick={onGoGallery}
                className="inline-flex h-11 items-center justify-center rounded-full bg-[#c86c94] px-6 text-sm font-semibold text-white shadow-lg transition hover:bg-[#b55f83]"
              >
                شوفي أعمالي
              </button>
            </div>
          </div>

          <div className="order-1 mx-auto flex w-full max-w-md items-center justify-center lg:order-2">
            <div className="relative h-72 w-72 sm:h-80 sm:w-80">
              <div className="absolute -right-8 top-14 h-36 w-36 rounded-full bg-[#ffeaf2] opacity-70 blur-3xl sm:h-48 sm:w-48" />
              <div className="absolute -left-6 bottom-10 h-28 w-28 rounded-full bg-[#f6e2f0] opacity-80 blur-3xl sm:h-36 sm:w-36" />
              <div className="relative z-10 flex h-full w-full items-center justify-center rounded-full border-8 border-white/80 bg-gradient-to-br from-[#fdeff6] via-[#fff5f8] to-[#f8e7f2] shadow-[0_25px_45px_rgba(200,120,150,0.14)]">
                <div className="flex h-[82%] w-[82%] items-center justify-center rounded-full bg-[#f9e4ef] text-5xl shadow-inner shadow-[#d8b4cf]/50 sm:text-6xl">
                  👩🏽‍🧵
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-[#f0d8e3] px-5 py-16 md:px-10 lg:px-14">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-right">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#b26488]">من أنا</span>
            <h2 className="mt-4 text-3xl font-semibold text-[#3d2734] sm:text-4xl lg:text-5xl">خيط، طراز، وحكاية جزائرية</h2>
          </div>
          <div className="rounded-[32px] border border-[#f2dbe2] bg-white/90 p-6 shadow-[0_25px_60px_rgba(224,179,200,0.12)] sm:p-8 lg:p-10">
            <p className="text-right text-base leading-8 text-[#6b515f] sm:text-lg sm:leading-9">أسعى لتقديم تصاميم أنثوية أنيقة تجمع بين جمال التراث الجزائري وخفة العصر. أنفّذ كل قطعة باليد مع اهتمام دقيق بالتطريز والتفاصيل.</p>
            <p className="mt-4 text-right text-base leading-8 text-[#6b515f] sm:text-lg sm:leading-9">خدماتي تشمل تفصيل القندورة والكاراكو، فساتين السهرة، البدل، وأزياء الأطفال مع درع شخصي لكل عميلة.</p>
            <p className="mt-4 text-right text-base leading-8 text-[#6b515f] sm:text-lg sm:leading-9">أعمل من البيت لأضمن تجربة مريحة وبأسعار مناسبة، مع تسليم منتظم وجودة تفوق التوقعات.</p>
            <div className="mt-8 text-right">
              <a href="#" className="inline-flex h-11 items-center rounded-full bg-[#c86c94] px-6 text-sm font-semibold text-white shadow-lg transition hover:bg-[#b55f83]">تحميل كتالوج أعمالي</a>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="px-5 py-16 md:px-10 lg:px-14">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-right">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#b26488]">تخصصاتي</span>
            <h2 className="mt-4 text-3xl font-semibold text-[#3d2734] sm:text-4xl lg:text-5xl">مجموعة المهارات</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.title} className="rounded-[28px] border border-[#f0d8e3] bg-white/95 p-6 shadow-[0_20px_50px_rgba(216,169,194,0.12)] transition hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(216,169,194,0.18)]">
                <h3 className="text-right text-xl font-semibold text-[#4b313d]">{group.title}</h3>
                <div className="mt-4 flex flex-wrap justify-end gap-2 sm:gap-3">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full border border-[#f4d5e0] bg-[#fff1f7] px-3 py-2 text-xs text-[#7d5a70] shadow-sm sm:px-4 sm:text-sm">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="border-t border-[#f0d8e3] px-5 py-16 md:px-10 lg:px-14">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-right">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#b26488]">أعمالي</span>
            <h2 className="mt-4 text-3xl font-semibold text-[#3d2734] sm:text-4xl lg:text-5xl">نماذج من التصاميم</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} className="group overflow-hidden rounded-[28px] border border-[#f2dbe2] bg-white shadow-[0_20px_60px_rgba(224,179,200,0.1)] transition hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(224,179,200,0.16)]">
                <div className="aspect-square bg-gradient-to-br from-[#fdeef5] via-[#fff2f7] to-[#f9e7ee] p-5 sm:p-6">
                  <div className="h-full w-full rounded-3xl bg-[#f8d8e4] shadow-inner shadow-[#e5b2cb]/40" />
                </div>
                <div className="space-y-3 p-5 text-right sm:space-y-4 sm:p-6">
                  <h3 className="text-lg font-semibold text-[#3d2734] sm:text-xl">{project.title}</h3>
                  <div className="flex flex-wrap justify-end gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-[#fff0f4] px-3 py-1 text-xs font-semibold text-[#b26488]">{tag}</span>
                    ))}
                  </div>
                  <p className="text-sm leading-7 text-[#6b515f]">{project.description}</p>
                  <div className="text-sm font-semibold text-[#8e5a72]">شوفي التفاصيل</div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 text-right">
            <button type="button" onClick={onGoGallery} className="inline-flex h-11 items-center rounded-full bg-[#c86c94] px-8 text-sm font-semibold text-white shadow-lg transition hover:bg-[#b55f83]">شوفي كل الأعمال</button>
          </div>
        </div>
      </section>

      <section id="journey" className="px-5 py-16 md:px-10 lg:px-14">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-right">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#b26488]">مساري</span>
            <h2 className="mt-4 text-3xl font-semibold text-[#3d2734] sm:text-4xl lg:text-5xl">الخبرات والتعليم</h2>
          </div>
          <div className="relative pr-6 sm:pr-8">
            <div className="absolute bottom-0 right-2 top-0 w-[2px] bg-[#f0d0dc]" />
            <div className="space-y-8">
              {timelineItems.map((item) => (
                <div key={item.title} className="relative">
                  <div className="absolute -right-[2px] top-2 h-4 w-4 rounded-full bg-[#c86c94] ring-4 ring-white" />
                  <div className="rounded-[28px] border border-[#f2dbe2] bg-white p-5 shadow-[0_20px_25px_rgba(224,179,200,0.08)] sm:p-6">
                    <h3 className="text-lg font-semibold text-[#3d2734] sm:text-xl">{item.title}</h3>
                    <p className="mt-2 text-sm text-[#6b515f]">{item.location}</p>
                    <p className="mt-3 text-sm font-semibold text-[#b26488]">{item.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-[#f0d8e3] px-5 py-16 md:px-10 lg:px-14">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-right">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#b26488]">تواصلي معي</span>
            <h2 className="mt-4 text-3xl font-semibold text-[#3d2734] sm:text-4xl lg:text-5xl">هيا نبدأ تصميمك</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <a href="tel:+212600000000" className="group rounded-[30px] border border-[#f2dbe2] bg-white p-6 text-right shadow-[0_20px_20px_rgba(220,171,197,0.1)] transition hover:-translate-y-1 hover:border-[#e7aac0] hover:bg-[#fff5f8]">
              <div className="flex items-center justify-between gap-4">
                <span className="text-2xl">📞</span>
                <div>
                  <p className="text-lg font-semibold text-[#3d2734]">الهاتف</p>
                  <p className="text-sm text-[#7d5a70]">+212 600 000 000</p>
                </div>
              </div>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="group rounded-[30px] border border-[#f2dbe2] bg-white p-6 text-right shadow-[0_20px_20px_rgba(220,171,197,0.1)] transition hover:-translate-y-1 hover:border-[#e7aac0] hover:bg-[#fff5f8]">
              <div className="flex items-center justify-between gap-4">
                <span className="text-2xl">📘</span>
                <div>
                  <p className="text-lg font-semibold text-[#3d2734]">فيسبوك</p>
                  <p className="text-sm text-[#7d5a70]">تابعني على الصفحة</p>
                </div>
              </div>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="group rounded-[30px] border border-[#f2dbe2] bg-white p-6 text-right shadow-[0_20px_20px_rgba(220,171,197,0.1)] transition hover:-translate-y-1 hover:border-[#e7aac0] hover:bg-[#fff5f8]">
              <div className="flex items-center justify-between gap-4">
                <span className="text-2xl">📸</span>
                <div>
                  <p className="text-lg font-semibold text-[#3d2734]">إنستغرام</p>
                  <p className="text-sm text-[#7d5a70]">مشاهدة التصاميم اليومية</p>
                </div>
              </div>
            </a>
            <a href="https://wa.me/212600000000" target="_blank" rel="noreferrer" className="group rounded-[30px] border border-[#f2dbe2] bg-white p-6 text-right shadow-[0_20px_20px_rgba(220,171,197,0.1)] transition hover:-translate-y-1 hover:border-[#e7aac0] hover:bg-[#fff5f8]">
              <div className="flex items-center justify-between gap-4">
                <span className="text-2xl">💬</span>
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
