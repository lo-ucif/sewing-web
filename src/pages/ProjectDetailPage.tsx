import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import type { Project } from "../types/project";

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
        <h1 className="mx-auto max-w-130 text-center text-2xl font-bold leading-tight tracking-[0.36px] text-[#3d2734] sm:text-3xl md:text-4xl">
          {project.title}
        </h1>

        <div className="mx-auto w-full max-w-80 space-y-3 sm:max-w-90 md:max-w-95">
          <div className="w-full aspect-square overflow-hidden rounded-2xl bg-[#f7edf1]">
            <img
              src={project.images[activeImg] ?? project.coverImage}
              alt={project.title}
              className="w-full h-full object-cover object-center transition-opacity duration-300"
            />
          </div>
          <p className="text-center text-xs text-muted">
            {activeImg + 1} / {project.images.length}
          </p>
          <div className="flex gap-2 mt-3">
            {project.images.map((img, index) => (
              <div
                key={`${img}-${index}`}
                onClick={() => setActiveImg(index)}
                className={`w-16 h-16 rounded-xl overflow-hidden cursor-pointer shrink-0 transition-all duration-200 ${
                  activeImg === index
                    ? "ring-2 ring-offset-2 ring-current opacity-100"
                    : "opacity-60 hover:opacity-90"
                }`}
              >
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-cover object-center"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="space-y-6 text-right" dir="rtl">
            <section className="border-b border-border py-4">
              <span className="inline-block rounded-full bg-[#fff0f4] px-4 py-1 text-sm font-semibold text-[#b26488]">
                {toArabicCategory(project)}
              </span>
            </section>

            <section className="border-b border-border pb-4">
              <p className="text-base text-[#5d4352]">
                📅 تاريخ الخياطة: {sewingDateText}
              </p>
            </section>

            <section className="border-b border-border pb-4">
              <p className="mb-3 text-base font-bold text-[#3d2734]">
                🧵 القماش المستخدم
              </p>
              <div className="space-y-2 text-base text-muted">
                <p>النوع: {fabricInfoType}</p>
                <p>الكمية: {fabricMetersText}</p>
                <p>سعر المتر: {fabricPricePerMeterText}</p>
                <p className="font-bold">
                  سعر القماش الإجمالي: {fabricTotalText}
                </p>
              </div>
            </section>
          </div>

          <div className="space-y-6">
            <section className="border-b border-border pb-4">
              <p className="mb-3 text-right text-base font-bold text-[#3d2734]">
                📦 المستلزمات المستخدمة
              </p>
              <div className="overflow-x-auto">
                <table className="w-full min-w-85 text-right text-sm">
                  <thead>
                    <tr className="border-b border-divider text-muted">
                      <th className="py-2 font-bold">المستلزم</th>
                      <th className="py-2 font-bold">الكمية</th>
                      <th className="py-2 font-bold">السعر</th>
                    </tr>
                  </thead>
                  <tbody>
                    {supplies.map((item) => (
                      <tr
                        key={item.item}
                        className="border-b border-[#f6e7ed] text-[#5d4352]"
                      >
                        <td className="py-2">{item.item}</td>
                        <td className="py-2">{item.quantity}</td>
                        <td className="py-2">{item.price}</td>
                      </tr>
                    ))}
                    <tr className="font-bold text-[#3d2734]">
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
            </section>

            <section className="border-b border-border pb-4">
              <p className="mb-3 text-right text-base font-bold text-[#3d2734]">
                ملخص مختصر
              </p>
              <div className="space-y-2 text-right text-[#5d4352]">
                <div className="flex items-center justify-between">
                  <span className="text-[#5d4352]">تكلفة القماش</span>
                  <span className="font-medium">{fabricCostText}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#5d4352]">أجرة الخياطة</span>
                  <span className="font-medium">{sewingCostText}</span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-border mt-2">
                  <span className="font-bold text-[#3d2734]">
                    السعر الإجمالي
                  </span>
                  <span className="font-bold text-[#3d2734]">
                    {totalCostText}
                  </span>
                </div>
              </div>
            </section>
          </div>
        </div>

        <section className="space-y-3 text-right" dir="rtl">
          <p className="text-base font-bold text-[#3d2734]">📝 ملاحظات</p>
          <p className="max-w-130 text-base leading-7 text-muted">
            {notesText}
          </p>
        </section>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
