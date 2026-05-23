import React from "react";
import { ExternalLink, Mail, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "../components/ui/AnimatedSection";
import { staggerContainer, staggerItem } from "../utils/animations";
import devImg from "../assets/port.png";

const DEVELOPER_EMAIL = "developer@example.com"; // replace with your email
const DEVELOPER_PORTFOLIO = "https://your-portfolio.example.com"; // replace
const DEVELOPER_WHATSAPP = "+000000000000"; // international format, replace

const DeveloperContact: React.FC = () => {
  return (
    <div dir="rtl" className="px-4 pb-16 pt-28 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Visual/Image Space */}
          <AnimatedSection animation="scaleIn" className="order-2 md:order-1">
            <div className="relative aspect-square w-full max-w-sm mx-auto overflow-hidden rounded-[40px] border-4 border-white shadow-2xl bg-gradient-to-br from-[#fdeef5] via-[#fff2f7] to-[#f9e7ee]">
              <img
                src={devImg}
                alt="Developer"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#c86c94]/20 to-transparent pointer-events-none" />
            </div>
          </AnimatedSection>

          {/* Contact Information */}
          <div className="order-1 md:order-2 space-y-8">
            <AnimatedSection animation="slideDown">
              <h1 className="text-3xl font-bold text-[#3d2734] mb-4">
                التواصل مع المطوّر
              </h1>
              <p className="text-[#6b515f] text-lg leading-relaxed">
                هل لديك فكرة مشروع أو ترغب في التعاون التقني؟ يمكنك التواصل معي
                مباشرة عبر القنوات التالية.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="slideUp" delay={1}>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="grid gap-4"
              >
                {/* Email Card */}
                <motion.a
                  variants={staggerItem}
                  href={`mailto:${DEVELOPER_EMAIL}`}
                  className="group flex items-center justify-between p-5 rounded-[24px] border border-[#f2dbe2] bg-white shadow-sm transition-all hover:shadow-md hover:border-[#c86c94]/30 hover:bg-[#fff5f8]"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#fff1f7] text-[#c86c94]">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-[#3d2734]">
                        البريد الإلكتروني
                      </p>
                      <p className="text-xs text-[#7d5a70]">
                        {DEVELOPER_EMAIL}
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#7d5a70] group-hover:text-[#c86c94]" />
                </motion.a>

                {/* WhatsApp Card */}
                <motion.a
                  variants={staggerItem}
                  href={`https://wa.me/${DEVELOPER_WHATSAPP.replace(/[^\d]/g, "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between p-5 rounded-[24px] border border-[#f2dbe2] bg-white shadow-sm transition-all hover:shadow-md hover:border-[#25D366]/30 hover:bg-[#f2fff7]"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#f2fff7] text-[#25D366]">
                      <MessageSquare className="w-6 h-6" />
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-[#3d2734]">
                        واتساب
                      </p>
                      <p className="text-xs text-[#7d5a70]">
                        {DEVELOPER_WHATSAPP}
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#7d5a70] group-hover:text-[#25D366]" />
                </motion.a>

                {/* Portfolio Card */}
                <motion.a
                  variants={staggerItem}
                  href={DEVELOPER_PORTFOLIO}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between p-5 rounded-[24px] border border-[#f2dbe2] bg-white shadow-sm transition-all hover:shadow-md hover:border-[#3d2734]/30 hover:bg-[#f9f9f9]"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#f9f9f9] text-[#3d2734]">
                      <ExternalLink className="w-6 h-6" />
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-[#3d2734]">
                        معرض الأعمال (Portfolio)
                      </p>
                      <p className="text-xs text-[#7d5a70]">
                        مشاهدة المشاريع التقنية
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#7d5a70] group-hover:text-[#3d2734]" />
                </motion.a>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperContact;
