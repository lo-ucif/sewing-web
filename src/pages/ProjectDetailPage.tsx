import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import type { Project } from "../types/project";
import AnimatedSection from "../components/ui/AnimatedSection";
import { staggerContainer, staggerItem, scaleIn } from "../utils/animations";

interface SupplyItem {
  item: string;
  quantity: number;
  price: string;
}

type RouteParams = {
  id?: string;
};

const toArabicCategory = (project: Project): string => {
  return project.category;
};

const parseNumberFromPrice = (value: string | number) => {
  if (typeof value === "number") return value;
  const digits = String(value).replace(/[^\d]/g, "");
  return digits ? Number(digits) : 0;
};

const formatPrice = (value: number) => `${value} دج`;

const makeFallbackCostModel = (project: Project) => {
  const fabricMeters = Math.max(2, Math.min(8, (project.title.length % 7) + 2));
  const fabricPricePerMeter =
    1400 +
    (project.id.length % 5) * 250 +
    (project.description.length % 4) * 100;
  const sewingFee =
    3200 +
    ((project.longDescription?.length ?? project.description.length) % 2800);

  const defaultSupplies: SupplyItem[] = [
    { item: "سحاب مخفي", quantity: 1, price: "450 دج" },
    { item: "خيط تطريز", quantity: 2, price: "300 دج" },
    { item: "بطانة داخلية", quantity: 1, price: "600 دج" },
  ];

  return { fabricMeters, fabricPricePerMeter, sewingFee, defaultSupplies };
};

const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<RouteParams>();
  const navigate = useNavigate();
  const projectId = Number(id ?? NaN);
  const project =
    Number.isInteger(projectId) && projectId > 0
      ? projects[projectId - 1]
      : undefined;

  const handleGoBack = () => navigate(-1);

  if (!project) {
    return (
      <div dir="rtl" className="px-4 pb-16 pt-28 text-center md:px-8">
        <p className="mb-6 text-2xl font-semibold text-[#3d2734]">
          العمل غير موجود
        </p>
        <button
          type="button"
          onClick={handleGoBack}
          className="rounded-full border border-accent px-6 py-3 text-sm font-semibold text-accent"
        >
          رجوع
        </button>
      </div>
    );
  }

  return (
    <ProjectDetailPageContent
      key={projectId}
      project={project}
      projectId={projectId}
    />
  );
};

const ProjectDetailPageContent: React.FC<{
  project: Project;
  projectId: number;
}> = ({ project, projectId }) => {
  const [activeImg, setActiveImg] = useState(0);
  const { fabricMeters, fabricPricePerMeter, sewingFee, defaultSupplies } =
    useMemo(() => makeFallbackCostModel(project), [project]);

  const supplies = project.supplies ?? defaultSupplies;
  const suppliesTotalNumber = project.suppliesTotal
    ? parseNumberFromPrice(project.suppliesTotal)
    : supplies.reduce((sum, item) => sum + parseNumberFromPrice(item.price), 0);

  const fabricTotal = project.fabricInfo
    ? parseNumberFromPrice(project.fabricInfo.totalPrice ?? "0")
    : fabricMeters * fabricPricePerMeter;

  const fabricInfoType =
    project.fabricInfo?.type ?? project.specs.fabric ?? "كتان بلجيكي طبيعي";
  const fabricMetersText =
    project.fabricInfo?.quantity ?? `${fabricMeters} أمتار`;
  const fabricPricePerMeterText =
    project.fabricInfo?.meterPrice ?? formatPrice(fabricPricePerMeter);
  const fabricTotalText =
    project.fabricInfo?.totalPrice ?? formatPrice(fabricTotal);

  const sewingCostText = project.summary?.sewingCost ?? formatPrice(sewingFee);
  const fabricCostText = project.summary?.fabricCost ?? fabricTotalText;
  const totalCostText =
    project.summary?.totalCost ??
    formatPrice(fabricTotal + sewingFee + suppliesTotalNumber);
  const sewingDateText = project.sewingDate ?? project.date;
  const notesText =
    project.notes ?? project.longDescription ?? project.description;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [projectId]);

  return (
    <div className="px-3 pb-14 pt-24 sm:px-4 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl space-y-8 sm:space-y-10 md:space-y-12">
        <AnimatedSection animation="slideDown">
          <h1 className="mx-auto max-w-130 text-center text-2xl font-bold leading-tight tracking-[0.36px] text-[#3d2734] sm:text-3xl md:text-4xl">
            {project.title}
          </h1>
        </AnimatedSection>

        <div className="mx-auto w-full max-w-95 space-y-4">
          {/* Main Image Card - Luxury Home Style */}
          <AnimatedSection animation="scaleIn">
            <div className="overflow-hidden rounded-[28px] border border-[#f2dbe2] bg-white shadow-[0_20px_60px_rgba(224,179,200,0.1)] transition hover:shadow-[0_30px_70px_rgba(224,179,200,0.16)]">
              <div className="aspect-square bg-gradient-to-br from-[#fdeef5] via-[#fff2f7] to-[#f9e7ee] p-2 sm:p-3">
                <img
                  src={project.images[activeImg] ?? project.coverImage}
                  alt={project.title}
                  className="h-full w-full rounded-3xl object-cover shadow-inner shadow-[#e5b2cb]/40 transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Image Counter */}
          <p className="text-center text-xs text-[#7d5a70] font-semibold">
            {activeImg + 1} / {project.images.length}
          </p>

          {/* Thumbnail Cards - Luxury Style */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex gap-2 mt-3 sm:gap-3 justify-center flex-wrap"
          >
            {project.images.map((img, index) => (
              <motion.button
                variants={staggerItem}
                key={`${img}-${index}`}
                onClick={() => setActiveImg(index)}
                type="button"
                className={`relative shrink-0 overflow-hidden rounded-2xl transition-all duration-300 aspect-square w-14 sm:w-16 border-2 ${
                  activeImg === index
                    ? "border-[#c86c94] shadow-md"
                    : "border-[#f2dbe2] hover:border-[#d4a5c3]"
                }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className={`w-full h-full object-cover object-center transition-all duration-300 ${
                    activeImg === index
                      ? "brightness-100 scale-100"
                      : "brightness-90 hover:brightness-100 hover:scale-105"
                  }`}
                />
              </motion.button>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:gap-8 lg:grid-cols-2">
          {/* Left Column - Project Information Cards */}
          <div className="space-y-4">
            {/* Category Card */}
            <AnimatedSection animation="slideLeft">
              <div className="overflow-hidden rounded-[28px] border border-[#f2dbe2] bg-white p-5 sm:p-6 shadow-[0_20px_60px_rgba(224,179,200,0.1)] transition hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(224,179,200,0.16)]">
                <span className="inline-block rounded-full bg-[#fff0f4] px-4 py-2 text-sm font-semibold text-[#b26488]">
                  {toArabicCategory(project)}
                </span>
              </div>
            </AnimatedSection>

            {/* Sewing Date Card */}
            <AnimatedSection animation="slideLeft" delay={1}>
              <div className="overflow-hidden rounded-[28px] border border-[#f2dbe2] bg-white p-5 sm:p-6 shadow-[0_20px_60px_rgba(224,179,200,0.1)] transition hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(224,179,200,0.16)]">
                <div className="text-right" dir="rtl">
                  <p className="text-xs text-[#7d5a70] font-semibold uppercase tracking-widest">
                    📅 تاريخ الخياطة
                  </p>
                  <p className="text-base md:text-lg font-semibold text-[#3d2734] mt-2">
                    {sewingDateText}
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Fabric Information Card */}
            <AnimatedSection animation="slideLeft" delay={2}>
              <div className="overflow-hidden rounded-[28px] border border-[#f2dbe2] bg-white p-5 sm:p-6 shadow-[0_20px_60px_rgba(224,179,200,0.1)] transition hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(224,179,200,0.16)]">
                <div className="text-right space-y-3" dir="rtl">
                  <p className="text-xs text-[#7d5a70] font-semibold uppercase tracking-widest mb-3">
                    🧵 القماش المستخدم
                  </p>
                  <div className="space-y-2 text-sm text-[#6b515f]">
                    <div className="flex items-center justify-between">
                      <span>النوع:</span>
                      <span className="font-semibold text-[#3d2734]">
                        {fabricInfoType}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>الكمية:</span>
                      <span className="font-semibold text-[#3d2734]">
                        {fabricMetersText}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>سعر المتر:</span>
                      <span className="font-semibold text-[#3d2734]">
                        {fabricPricePerMeterText}
                      </span>
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-[#f2dbe2]">
                      <span className="font-bold">الإجمالي:</span>
                      <span className="font-bold text-[#b26488]">
                        {fabricTotalText}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column - Supplies and Summary Cards */}
          <div className="space-y-4">
            {/* Supplies Card */}
            <AnimatedSection animation="slideRight">
              <div className="overflow-hidden rounded-[28px] border border-[#f2dbe2] bg-white p-5 sm:p-6 shadow-[0_20px_60px_rgba(224,179,200,0.1)] transition hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(224,179,200,0.16)]">
                <div className="text-right" dir="rtl">
                  <p className="mb-4 text-xs text-[#7d5a70] font-semibold uppercase tracking-widest">
                    📦 المستلزمات المستخدمة
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-right text-xs sm:text-sm">
                      <thead>
                        <tr className="border-b border-[#f2dbe2] text-[#7d5a70] font-semibold">
                          <th className="py-2">المستلزم</th>
                          <th className="py-2">الكمية</th>
                          <th className="py-2">السعر</th>
                        </tr>
                      </thead>
                      <tbody>
                        {supplies.map((item) => (
                          <tr
                            key={item.item}
                            className="border-b border-[#f2dbe2] text-[#6b515f] hover:bg-[#fff5f8] transition-colors"
                          >
                            <td className="py-2">{item.item}</td>
                            <td className="py-2">{item.quantity}</td>
                            <td className="py-2">{item.price}</td>
                          </tr>
                        ))}
                        <tr className="font-bold text-[#3d2734] bg-[#fff5f8]">
                          <td className="py-2">الإجمالي</td>
                          <td className="py-2" />
                          <td className="py-2">
                            {project.suppliesTotal ??
                              formatPrice(suppliesTotalNumber)}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Cost Summary Card */}
            <AnimatedSection animation="slideRight" delay={1}>
              <div className="overflow-hidden rounded-[28px] border border-[#f2dbe2] bg-white p-5 sm:p-6 shadow-[0_20px_60px_rgba(224,179,200,0.1)] transition hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(224,179,200,0.16)]">
                <div className="text-right space-y-3" dir="rtl">
                  <p className="text-xs text-[#b26488] font-semibold uppercase tracking-widest mb-4">
                    💰 ملخص التكاليف
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-[#6b515f]">تكلفة القماش</span>
                      <span className="font-semibold text-[#3d2734]">
                        {fabricCostText}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#6b515f]">أجرة الخياطة</span>
                      <span className="font-semibold text-[#3d2734]">
                        {sewingCostText}
                      </span>
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-[#f2dbe2]">
                      <span className="font-bold text-[#3d2734]">
                        السعر الإجمالي
                      </span>
                      <span className="font-bold text-lg text-[#b26488]">
                        {totalCostText}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        <AnimatedSection animation="slideUp">
          <section className="space-y-3 text-right" dir="rtl">
            <p className="text-base font-bold text-[#3d2734]">📝 ملاحظات</p>
            <p className="max-w-130 text-base leading-7 text-muted">
              {notesText}
            </p>
          </section>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
