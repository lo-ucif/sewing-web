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

const NeedleLogo = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 161 161" fill="none" className={className} aria-hidden="true">
    <path d="M87.6086 79.6995L121.191 41.1042C122.562 39.2094 123.134 36.8519 122.784 34.5393C122.434 32.2268 121.189 30.1443 119.319 28.7404C117.448 27.3365 115.101 26.7235 112.782 27.0335C110.464 27.3435 108.36 28.5516 106.924 30.3977L41.5447 132.362L78.1946 90.4865" stroke="black" strokeWidth="1.94444" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M111.6 43.9619C109.938 45.1158 108.308 45.4713 107.318 44.7289C105.746 43.5505 106.387 40.0376 108.753 36.8869C111.119 33.7362 114.31 32.1396 115.882 33.3203C116.213 33.5754 116.456 33.9271 116.577 34.3265" stroke="black" strokeWidth="1.94444" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M109.581 35.8851C110.793 36.5112 111.942 37.238 113.029 38.0653C117.587 41.3601 121.107 45.8914 123.171 51.1233C125.236 56.3552 125.759 62.0689 124.679 67.5887C124.679 67.5887 121.072 87.5661 100.312 88.181C81.2938 88.7445 52.439 68.8767 24.5972 94.4377M77.3471 41.5112C77.3471 41.5112 90.8286 30.7711 104.59 34.0358" stroke="black" strokeWidth="1.94444" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M98.3039 76.8775L112.72 60.9027C112.72 60.9027 121.94 81.8126 98.3039 76.8775Z" fill="white" />
    <path d="M120.754 26.8289C118.371 25.057 115.381 24.3043 112.442 24.7362C109.504 25.1681 106.857 26.7493 105.084 29.1321L105.039 29.1902L39.6619 131.152C39.3559 131.628 39.2412 132.201 39.3409 132.757C39.4405 133.314 39.7472 133.812 40.199 134.151C40.6509 134.49 41.2146 134.646 41.7766 134.587C42.3387 134.527 42.8574 134.258 43.2285 133.831L122.874 42.5756L122.979 42.4459C124.751 40.0785 125.512 37.105 125.095 34.1775C124.678 31.2499 123.117 28.6072 120.754 26.8289ZM112.66 39.8207C111.741 41.2739 110.341 42.3582 108.704 42.8842C108.753 41.1663 109.403 39.5202 110.542 38.233C111.46 36.7802 112.86 35.696 114.496 35.1696C114.444 36.8863 113.794 38.5312 112.66 39.8207Z" fill="#D0CFCE" />
    <path d="M87.6086 79.6995L121.191 41.1042C122.562 39.2094 123.134 36.8519 122.784 34.5393C122.434 32.2268 121.189 30.1443 119.319 28.7404C117.448 27.3365 115.101 26.7235 112.782 27.0335C110.464 27.3435 108.36 28.5516 106.924 30.3977L41.5447 132.362L78.1946 90.4865" stroke="black" strokeWidth="1.94444" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M111.6 43.9619C109.938 45.1158 108.308 45.4713 107.318 44.7289C105.746 43.5505 106.387 40.0376 108.753 36.8869C111.119 33.7362 114.31 32.1396 115.882 33.3203C116.213 33.5754 116.456 33.9271 116.577 34.3265" stroke="black" strokeWidth="1.94444" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M103.532 31.5426C89.4757 29.1388 76.5041 39.3108 75.9383 39.7603C75.4743 40.1298 75.176 40.6684 75.1091 41.2578C75.0422 41.8472 75.2122 42.4391 75.5817 42.9031C75.9511 43.3672 76.4898 43.6655 77.0792 43.7324C77.6686 43.7993 78.2605 43.6293 78.7245 43.2598C78.8386 43.1704 89.469 34.8744 100.853 35.7196L103.532 31.5426ZM110.149 38.7853C110.667 39.1148 111.176 39.4688 111.676 39.8475C115.922 42.8767 119.201 47.0695 121.118 51.9203C123.034 56.7711 123.507 62.0728 122.479 67.1862C122.342 67.9286 118.89 85.3926 100.245 85.9449C94.1958 85.7241 88.1985 84.7437 82.394 83.0268C65.2207 78.8811 43.8568 73.7246 23.0834 92.7919C22.6466 93.1934 22.3872 93.752 22.3622 94.3447C22.3373 94.9375 22.5488 95.5159 22.9503 95.9526C23.3518 96.3894 23.9104 96.6488 24.5031 96.6738C25.0959 96.6987 25.6743 96.4872 26.1111 96.0857C45.1247 78.6328 64.3642 83.2728 81.343 87.3738C87.537 89.1627 93.9323 90.1846 100.377 90.4172C122.693 89.753 126.841 68.2036 126.846 68.141C128.065 62.195 127.536 56.0233 125.324 50.371C123.113 44.7186 119.312 39.8273 114.382 36.2876C114.063 36.0456 113.74 35.8108 113.411 35.5832C112.125 36.3008 111.045 37.3354 110.272 38.5886L110.149 38.7853Z" fill="#B26488" />
  </svg>
);

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
  return { side: 'right', y: 100 };
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
        <NeedleLogo className="h-6 w-6" />
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
