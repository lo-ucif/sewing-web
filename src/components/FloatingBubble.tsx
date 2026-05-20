import { motion, AnimatePresence, useMotionValue, animate } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';

const SIZE = 45;

type Side = 'left' | 'right';

interface BubbleItem {
  key: string;
  label: string;
}

interface FloatingBubbleProps {
  items: BubbleItem[];
  onSelect: (key: string) => void;
}

const CARD_W = 180;
const CARD_GAP = 10;
const ITEM_H = 40;
const CARD_PADDING = 16;

const getSaved = (): { side: Side; y: number } => {
  try {
    const saved = localStorage.getItem('bubble-pos');
    if (saved) {
      const parsed = JSON.parse(saved) as { side: Side; y: number };
      const maxY = window.innerHeight - SIZE - 10;
      parsed.y = Math.max(10, Math.min(parsed.y, maxY));
      return parsed;
    }
  } catch {
    // noop
  }
  return { side: 'left', y: 100 };
};

const FloatingBubble = ({ items, onSelect }: FloatingBubbleProps) => {
  const initial = getSaved();

  const [side, setSide] = useState<Side>(initial.side);
  const [posY, setPosY] = useState<number>(initial.y);
  const [open, setOpen] = useState(false);
  const dragMoved = useRef(false);
  const bubbleRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const cardHeight = useMemo(() => items.length * ITEM_H + CARD_PADDING, [items.length]);

  const initX = initial.side === 'left' ? 10 : window.innerWidth - SIZE - 10;
  const x = useMotionValue(initX);
  const y = useMotionValue(initial.y);

  const savePos = (s: Side, newY: number) => {
    localStorage.setItem('bubble-pos', JSON.stringify({ side: s, y: newY }));
  };

  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node;
      if (!bubbleRef.current?.contains(target) && !cardRef.current?.contains(target)) {
        setOpen(false);
      }
    };

    const timer = setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }, 50);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [open]);

  const getCardPos = () => {
    const currentX = side === 'left' ? 10 : window.innerWidth - SIZE - 10;
    const cardX = side === 'left' ? currentX + SIZE + CARD_GAP : currentX - CARD_W - CARD_GAP;
    const cardY = posY + SIZE / 2 - cardHeight / 2;
    return { cardX, cardY };
  };

  const { cardX, cardY } = getCardPos();
  const ballCenterY = posY + SIZE / 2 - cardHeight / 2;

  return (
    <>
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
        whileDrag={{ scale: 1.08, cursor: 'grabbing' }}
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
          const newSide: Side = currentX < w / 2 ? 'left' : 'right';
          const snapX = newSide === 'left' ? 10 : w - SIZE - 10;
          const newY = Math.max(10, Math.min(currentY, h - SIZE - 10));

          animate(x, snapX, { type: 'spring', stiffness: 400, damping: 30 });
          animate(y, newY, { type: 'spring', stiffness: 400, damping: 30 });

          setSide(newSide);
          setPosY(newY);
          savePos(newSide, newY);
        }}
        onClick={() => {
          if (!dragMoved.current) setOpen((o) => !o);
          dragMoved.current = false;
        }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x,
          y,
          width: SIZE,
          height: SIZE,
          touchAction: 'none',
          zIndex: 9999,
          cursor: 'grab',
        }}
        className="flex select-none items-center justify-center rounded-full border border-[#f3d6e0]/50 bg-[#FFF6F7]/70 p-1 shadow-lg backdrop-blur-lg"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 30" fill="none">
          <path d="M27.5 17.5C27.5 20.1522 26.4464 22.6957 24.5711 24.5711C22.6957 26.4464 20.1522 27.5 17.5 27.5M22.5 13.75V12.5C22.5 11.837 22.2366 11.2011 21.7678 10.7322C21.2989 10.2634 20.663 10 20 10C19.337 10 18.7011 10.2634 18.2322 10.7322C17.7634 11.2011 17.5 11.837 17.5 12.5V11.25C17.5 10.587 17.2366 9.95107 16.7678 9.48223C16.2989 9.01339 15.663 8.75 15 8.75C14.337 8.75 13.7011 9.01339 13.2322 9.48223C12.7634 9.95107 12.5 10.587 12.5 11.25V12.5M12.5 11.875V5C12.5 4.33696 12.2366 3.70107 11.7678 3.23223C11.2989 2.76339 10.663 2.5 10 2.5C9.33696 2.5 8.70107 2.76339 8.23223 3.23223C7.76339 3.70107 7.5 4.33696 7.5 5V17.5" stroke="#4b313d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M22.4992 13.75C22.4992 13.087 22.7625 12.4511 23.2314 11.9822C23.7002 11.5134 24.3361 11.25 24.9992 11.25C25.6622 11.25 26.2981 11.5134 26.7669 11.9822C27.2358 12.4511 27.4992 13.087 27.4992 13.75V17.5C27.4992 20.1522 26.4456 22.6957 24.5702 24.5711C22.6949 26.4464 20.1513 27.5 17.4992 27.5H14.9992C11.4992 27.5 9.37415 26.425 7.51165 24.575L3.01165 20.075C2.58157 19.5987 2.35114 18.9752 2.36806 18.3337C2.38498 17.6921 2.64796 17.0817 3.10255 16.6287C3.55715 16.1757 4.16853 15.9149 4.81012 15.9002C5.45171 15.8856 6.07436 16.1182 6.54915 16.55L8.74915 18.75" stroke="#4b313d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            ref={cardRef}
            key="menu-card"
            initial={{ opacity: 0, scale: 0.85, x: cardX, y: ballCenterY }}
            animate={{ opacity: 1, scale: 1, x: cardX, y: cardY }}
            exit={{ opacity: 0, scale: 0.85, x: cardX, y: ballCenterY }}
            transition={{ type: 'spring', stiffness: 380, damping: 28 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: CARD_W,
              zIndex: 9998,
              transformOrigin: side === 'left' ? 'left center' : 'right center',
            }}
            className="rounded-[30px] bg-[#FFF6F7]/90 p-2 shadow-2xl backdrop-blur-lg"
          >
            {items.map((item, i) => (
              <motion.button
                key={item.key}
                initial={{ opacity: 0, x: side === 'left' ? -10 : 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04, type: 'spring', stiffness: 350, damping: 28 }}
                onClick={() => {
                  onSelect(item.key);
                  setOpen(false);
                }}
                whileHover={{ backgroundColor: 'rgba(200,169,182,0.18)' }}
                whileTap={{ scale: 0.97 }}
                className="flex h-[40px] w-full cursor-pointer items-center justify-center rounded-xl border-none bg-transparent px-1 text-sm text-[#4b313d]"
              >
                <span>{item.label}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingBubble;
