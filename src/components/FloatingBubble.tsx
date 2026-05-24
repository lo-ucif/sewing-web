import {
  motion,
  AnimatePresence,
  useMotionValue,
  animate,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

const SIZE = 45;

type Side = "left" | "right";

interface BubbleItem {
  key: string;
  label: string;
}

interface FloatingBubbleProps {
  items: BubbleItem[];
  activeKey?: string;
  onSelect: (key: string) => void;
}

const CARD_W = 220;
const CARD_GAP = 10;
const ITEM_H = 44;
const CARD_PADDING = 8;
const MAX_VISIBLE_ITEMS = 8;

const MenuIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <line
      x1="4"
      y1="6"
      x2="20"
      y2="6"
      stroke="#c86c94"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      x1="4"
      y1="12"
      x2="20"
      y2="12"
      stroke="#c86c94"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      x1="4"
      y1="18"
      x2="14"
      y2="18"
      stroke="#c86c94"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const getSaved = (): { side: Side; y: number } => {
  try {
    const saved = localStorage.getItem("bubble-pos");
    if (saved) {
      const parsed = JSON.parse(saved) as { side: Side; y: number };
      const maxY = window.innerHeight - SIZE - 10;
      parsed.y = Math.max(10, Math.min(parsed.y, maxY));
      return parsed;
    }
  } catch {
    // noop
  }
  return { side: "right", y: 100 };
};

const FloatingBubble = ({
  items,
  activeKey,
  onSelect,
}: FloatingBubbleProps) => {
  const initial = getSaved();

  const [side, setSide] = useState<Side>(initial.side);
  const [posY, setPosY] = useState<number>(initial.y);
  const [open, setOpen] = useState(false);
  const dragMoved = useRef(false);
  const bubbleRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const visibleCount = Math.min(items.length, MAX_VISIBLE_ITEMS);
  const cardHeight = visibleCount * ITEM_H + CARD_PADDING;

  const initX = initial.side === "left" ? 10 : window.innerWidth - SIZE - 10;
  const x = useMotionValue(initX);
  const y = useMotionValue(initial.y);

  const savePos = (s: Side, newY: number) => {
    localStorage.setItem("bubble-pos", JSON.stringify({ side: s, y: newY }));
  };

  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node;
      if (
        !bubbleRef.current?.contains(target) &&
        !cardRef.current?.contains(target)
      ) {
        setOpen(false);
      }
    };

    const timer = setTimeout(() => {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }, 50);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [open]);

  const getCardPos = () => {
    const currentX = side === "left" ? 10 : window.innerWidth - SIZE - 10;
    const cardX =
      side === "left"
        ? currentX + SIZE + CARD_GAP
        : currentX - CARD_W - CARD_GAP;
    
    // Clamp cardY within viewport boundaries
    const rawCardY = posY + SIZE / 2 - cardHeight / 2;
    const cardY = Math.max(10, Math.min(rawCardY, window.innerHeight - cardHeight - 10));
    
    return { cardX, cardY };
  };

  const { cardX, cardY } = getCardPos();
  const ballCenterY = posY + SIZE / 2 - cardHeight / 2;

  const isSpecial = (label: string) => /عملي|تطبيقي|Practical|عمل/i.test(label);

  return (
    <>
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
      <motion.div
        ref={bubbleRef}
        drag
        dragMomentum={false}
        dragElastic={0}
        dragConstraints={{
          top: 10,
          left: 10,
          right: window.innerWidth - SIZE - 10,
          bottom: window.innerHeight - SIZE - 10,
        }}
        whileDrag={{ scale: 1.08, cursor: "grabbing" }}
        onDragStart={() => {
          dragMoved.current = false;
          if (open) setOpen(false);
        }}
        onDrag={() => {
          dragMoved.current = true;
        }}
        onDragEnd={() => {
          const w = window.innerWidth;
          const h = window.innerHeight;
          const currentX = x.get();
          const currentY = y.get();
          const newSide: Side = currentX < w / 2 ? "left" : "right";
          const snapX = newSide === "left" ? 10 : w - SIZE - 10;
          const newY = Math.max(10, Math.min(currentY, h - SIZE - 10));

          animate(x, snapX, { type: "spring", stiffness: 400, damping: 30 });
          animate(y, newY, { type: "spring", stiffness: 400, damping: 30 });

          setSide(newSide);
          setPosY(newY);
          savePos(newSide, newY);
        }}
        onClick={() => {
          if (!dragMoved.current) setOpen((o) => !o);
          dragMoved.current = false;
        }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          x,
          y,
          width: SIZE,
          height: SIZE,
          touchAction: "none",
          zIndex: 9999,
          cursor: "grab",
        }}
        className="flex select-none items-center justify-center rounded-full bg-[#FFF5F6] shadow-lg"
      >
        <MenuIcon className="h-5 w-5" />
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            ref={cardRef}
            key="menu-card"
            initial={{ opacity: 0, scale: 0.85, x: cardX, y: ballCenterY }}
            animate={{ opacity: 1, scale: 1, x: cardX, y: cardY }}
            exit={{ opacity: 0, scale: 0.85, x: cardX, y: ballCenterY }}
            transition={{ type: "spring", stiffness: 380, damping: 28 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: CARD_W,
              zIndex: 9998,
              transformOrigin: side === "left" ? "left center" : "right center",
            }}
            className="overflow-hidden rounded-2xl bg-[#FFF5F6] shadow-xl"
          >
            <div
              className={`no-scrollbar ${items.length > MAX_VISIBLE_ITEMS ? "overflow-y-auto" : "overflow-hidden"}`}
              style={{
                maxHeight: cardHeight,
              }}
            >
              {items.map((item, i) => {
                const isActive = item.key === activeKey;
                const special = isSpecial(item.label);
                return (
                  <motion.button
                    key={item.key}
                    initial={{ opacity: 0, x: side === "left" ? -10 : 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: i * 0.04,
                      type: "spring",
                      stiffness: 350,
                      damping: 28,
                    }}
                    onClick={() => {
                      onSelect(item.key);
                      setOpen(false);
                    }}
                    whileHover={{
                      backgroundColor: "rgba(200,108,148,0.08)",
                    }}
                    whileTap={{ scale: 0.97 }}
                    className={`flex h-[44px] w-full outline-none items-center justify-between gap-2 border-b border-[#f0d8e3]/50 px-4 text-right text-sm transition-colors duration-150 ${
                      isActive
                        ? "bg-[#C86C94]/10 font-bold text-[#C86C94]"
                        : special
                          ? "text-[#C86C94]"
                          : "text-[#111111]"
                    } ${i === items.length - 1 ? "border-b-0" : ""}`}
                  >
                    <span className="flex-1 truncate">{item.label}</span>
                    <span className="shrink-0 text-xs text-[#C86C94]/40">
                      —
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingBubble;
