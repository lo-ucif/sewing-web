import React, { useEffect, useMemo, useState } from 'react';
import { projects } from '../data/projects';
import type { Project } from '../types/project';

interface ProjectDetailPageProps {
  projectId: number;
  onGoBack: () => void;
}

interface CommodityLine {
  name: string;
  qty: number;
  price: number;
}

const toArabicCategory = (project: Project): string => {
  if (project.category === 'Women') return 'نساء';
  if (project.category === 'Kids') return 'بيبي';
  if (project.category === 'Traditional') return 'ستايل تقليدي';
  if (project.category === 'Custom') return 'تفصيل خاص';
  return 'رجالي';
};

const makeCostModel = (project: Project) => {
  const fabricMeters = Math.max(2, Math.min(8, (project.title.length % 7) + 2));
  const fabricPricePerMeter = 1400 + (project.id.length % 5) * 250 + (project.description.length % 4) * 100;
  const sewingFee = 3200 + (project.longDescription?.length ?? project.description.length) % 2800;

  const commodities: CommodityLine[] = [
    {
      name: 'سحاب مخفي',
      qty: 1,
      price: 250 + (project.id.length % 3) * 100,
    },
    {
      name: 'خيط تطريز',
      qty: 2,
      price: 300 + (project.title.length % 4) * 120,
    },
    {
      name: 'بطانة داخلية',
      qty: 1,
      price: 600 + (project.description.length % 3) * 200,
    },
  ];

  const sizes = project.category === 'Kids' ? ['2Y', '4Y', '6Y', '8Y'] : ['S', 'M', 'L', 'XL'];

  return { fabricMeters, fabricPricePerMeter, sewingFee, commodities, sizes };
};

const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ projectId, onGoBack }) => {
  const [activeImg, setActiveImg] = useState(0);
  const project = projects[projectId - 1];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [projectId]);

  useEffect(() => {
    setActiveImg(0);
  }, [projectId]);

  const { fabricMeters, fabricPricePerMeter, sewingFee, commodities, sizes } = useMemo(() => {
    if (!project) {
      return {
        fabricMeters: 0,
        fabricPricePerMeter: 0,
        sewingFee: 0,
        commodities: [] as CommodityLine[],
        sizes: [] as string[],
      };
    }
    return makeCostModel(project);
  }, [project]);

  const [selectedSize, setSelectedSize] = useState('');

  useEffect(() => {
    setSelectedSize(sizes[0] ?? '');
  }, [projectId, sizes]);

  if (!project) {
    return (
      <div dir="rtl" className="px-4 pb-16 pt-28 text-center md:px-8">
        <p className="mb-6 text-2xl font-semibold text-[#3d2734]">العمل غير موجود</p>
        <button
          type="button"
          onClick={onGoBack}
          className="rounded-full border border-[#c86c94] px-6 py-3 text-sm font-semibold text-[#c86c94]"
        >
          رجوع
        </button>
      </div>
    );
  }

  const fabricTotal = fabricMeters * fabricPricePerMeter;
  const commoditiesTotal = commodities.reduce((sum, c) => sum + c.price, 0);
  const grandTotal = fabricTotal + commoditiesTotal + sewingFee;

  const related = projects
    .filter((item) => item.category === project.category && item.id !== project.id)
    .slice(0, 3);

  const jumpToContact = () => {
    const section = document.getElementById('contact');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    onGoBack();
  };

  return (
    <div dir="rtl" className="px-4 pb-16 pt-24 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-2xl bg-[#f7edf1]">
              <img
                src={project.images[activeImg] ?? project.coverImage}
                alt={project.title}
                className="h-full w-full object-cover transition-opacity duration-300"
              />
            </div>
            <p className="text-center text-sm text-[#7d5a70]">{activeImg + 1} / {project.images.length}</p>
            <div className="flex flex-row-reverse flex-wrap gap-3">
              {project.images.slice(0, 4).map((img, index) => (
                <button
                  key={`${img}-${index}`}
                  type="button"
                  onClick={() => setActiveImg(index)}
                  className={`aspect-square w-20 overflow-hidden rounded-lg transition hover:scale-105 ${
                    activeImg === index ? 'ring-2 ring-[#c86c94]' : 'ring-1 ring-[#edd2dd]'
                  }`}
                >
                  <img src={img} alt={`صورة ${index + 1}`} className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6 text-right">
            <section className="border-b border-[#f0d8e3] pb-4">
              <h1 className="text-3xl font-bold text-[#3d2734] md:text-4xl">{project.title}</h1>
              <span className="mt-3 inline-block rounded-full bg-[#fff0f4] px-4 py-1 text-sm font-semibold text-[#b26488]">
                {toArabicCategory(project)}
              </span>
            </section>

            <section className="border-b border-[#f0d8e3] pb-4">
              <p className="text-[#5d4352]">📅 تاريخ الخياطة: {project.date}</p>
            </section>

            <section className="border-b border-[#f0d8e3] pb-4">
              <p className="mb-3 font-bold text-[#3d2734]">🧵 القماش المستخدم</p>
              <div className="space-y-2 text-[#5d4352]">
                <p>النوع: {project.specs.fabric ?? 'قماش فاخر حسب الطلب'}</p>
                <p>الكمية: {fabricMeters} أمتار</p>
                <p>سعر المتر: {fabricPricePerMeter} دج</p>
                <p className="font-bold">سعر القماش الإجمالي: {fabricTotal} دج</p>
              </div>
            </section>

            <section className="border-b border-[#f0d8e3] pb-4">
              <p className="mb-3 font-bold text-[#3d2734]">📦 المستلزمات المستخدمة</p>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[320px] text-right text-sm">
                  <thead>
                    <tr className="border-b border-[#edd2dd] text-[#7d5a70]">
                      <th className="py-2">المستلزم</th>
                      <th className="py-2">الكمية</th>
                      <th className="py-2">السعر</th>
                    </tr>
                  </thead>
                  <tbody>
                    {commodities.map((item) => (
                      <tr key={item.name} className="border-b border-[#f6e7ed] text-[#5d4352]">
                        <td className="py-2">{item.name}</td>
                        <td className="py-2">{item.qty}</td>
                        <td className="py-2">{item.price} دج</td>
                      </tr>
                    ))}
                    <tr className="font-bold text-[#3d2734]">
                      <td className="py-2">الإجمالي</td>
                      <td className="py-2" />
                      <td className="py-2">{commoditiesTotal} دج</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="border-b border-[#f0d8e3] pb-4">
              <p className="mb-3 font-bold text-[#3d2734]">📐 المقاسات المتاحة</p>
              <div className="flex flex-row-reverse flex-wrap gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`rounded-full px-4 py-2 text-sm transition ${
                      selectedSize === size
                        ? 'bg-[#111111] text-white'
                        : 'border border-[#d9b7c5] text-[#6b515f] hover:border-[#b76487]'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </section>

            <section className="border-b border-[#f0d8e3] pb-4">
              <p className="mb-3 font-bold text-[#3d2734]">💰 ملخص التكاليف</p>
              <div className="space-y-2 text-[#5d4352]">
                <div className="flex flex-row-reverse justify-between"><span>تكلفة القماش</span><span>{fabricTotal} دج</span></div>
                <div className="flex flex-row-reverse justify-between"><span>تكلفة المستلزمات</span><span>{commoditiesTotal} دج</span></div>
                <div className="flex flex-row-reverse justify-between"><span>أجرة الخياطة</span><span>{sewingFee} دج</span></div>
                <hr className="border-[#edd2dd]" />
                <div className="flex flex-row-reverse justify-between text-lg font-bold text-[#3d2734]"><span>السعر النهائي</span><span>{grandTotal} دج</span></div>
              </div>
            </section>

            <section className="border-b border-[#f0d8e3] pb-4">
              <p className="mb-3 font-bold text-[#3d2734]">📝 ملاحظات</p>
              <p className="italic text-[#7d5a70]">{project.longDescription ?? project.description}</p>
            </section>

            <section className="grid grid-cols-1 gap-3 md:grid-cols-2">
              <button
                type="button"
                onClick={jumpToContact}
                className="rounded-xl bg-[#111111] px-5 py-3 font-semibold text-white transition hover:opacity-90"
              >
                🧵 اطلبي نفس الفصلة
              </button>
              <button
                type="button"
                onClick={onGoBack}
                className="rounded-xl border border-[#c86c94] px-5 py-3 font-semibold text-[#c86c94] transition hover:bg-[#fff0f4]"
              >
                ← رجوع للأعمال
              </button>
            </section>
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-16">
            <h2 className="mb-6 text-center text-2xl font-semibold text-[#3d2734]">أعمال مشابهة</h2>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {related.map((item) => (
                <article key={item.id} className="overflow-hidden rounded-2xl border border-[#f0d8e3] bg-white shadow-sm">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img src={item.coverImage} alt={item.title} className="h-full w-full object-cover" loading="lazy" />
                  </div>
                  <div className="p-4 text-right">
                    <h3 className="line-clamp-2 text-base font-semibold text-[#3d2734]">{item.title}</h3>
                    <p className="mt-1 text-xs text-[#7d5a70]">{item.date}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProjectDetailPage;

