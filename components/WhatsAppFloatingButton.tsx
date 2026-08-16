"use client";

import {useEffect, useRef, useState} from 'react';

const WHATSAPP_URL = 'https://api.whatsapp.com/send?phone=37125612440&text=Sveiki%21%20K%C4%81%20varu%20pal%C4%ABdz%C4%93t%3F%20Rakstu%20par%20jumta%20pakalpojumiem.';

export default function WhatsAppFloatingButton() {
  const dragState = useRef({
    pointerId: -1,
    startX: 0,
    startY: 0,
    originX: 0,
    originY: 0,
    moved: false,
    dragging: false,
  });
  const [position, setPosition] = useState({x: 0, y: 0});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem('whatsapp-floating-button-position');
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as {x?: number; y?: number};
        if (typeof parsed.x === 'number' && typeof parsed.y === 'number') {
          setPosition({x: parsed.x, y: parsed.y});
          setReady(true);
          return;
        }
      } catch {
        // Ignore invalid saved position.
      }
    }

    const size = 56;
    setPosition({
      x: window.innerWidth - size - 20,
      y: window.innerHeight - size - 20,
    });
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    window.localStorage.setItem('whatsapp-floating-button-position', JSON.stringify(position));
  }, [position, ready]);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      if (dragState.current.pointerId !== event.pointerId || !dragState.current.dragging) return;

      const deltaX = event.clientX - dragState.current.startX;
      const deltaY = event.clientY - dragState.current.startY;

      if (!dragState.current.moved && Math.hypot(deltaX, deltaY) > 4) {
        dragState.current.moved = true;
      }

      if (!dragState.current.moved) return;

      const size = 56;
      const nextX = clamp(dragState.current.originX + deltaX, 12, window.innerWidth - size - 12);
      const nextY = clamp(dragState.current.originY + deltaY, 12, window.innerHeight - size - 12);
      setPosition({x: nextX, y: nextY});
    };

    const handlePointerUp = (event: PointerEvent) => {
      if (dragState.current.pointerId !== event.pointerId) return;
      dragState.current.pointerId = -1;
      dragState.current.dragging = false;
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    window.addEventListener('pointercancel', handlePointerUp);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('pointercancel', handlePointerUp);
    };
  }, []);

  const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

  const onPointerDown = (event: React.PointerEvent<HTMLAnchorElement>) => {
    if (event.button !== 0) return;
    event.preventDefault();
    dragState.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      originX: position.x,
      originY: position.y,
      moved: false,
      dragging: true,
    };
  };

  const onClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (dragState.current.moved) {
      event.preventDefault();
      dragState.current.moved = false;
    }
  };

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer nofollow"
      aria-label="Rakstiet mums ziņu WhatsApp"
      title="WhatsApp"
      onPointerDown={onPointerDown}
      onClick={onClick}
      className="fixed z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-green-500/30 transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-white"
      style={{
        left: position.x,
        top: position.y,
        touchAction: 'none',
        cursor: dragState.current.dragging ? 'grabbing' : 'grab',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        visibility: ready ? 'visible' : 'hidden',
      }}
    >
      <span className="absolute inset-0 rounded-full bg-white/10" aria-hidden="true" />
      <svg
        className="relative h-7 w-7"
        viewBox="0 0 32 32"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M19.11 17.23c-.28-.14-1.64-.81-1.89-.91-.25-.09-.43-.14-.61.14-.18.28-.69.91-.85 1.1-.16.19-.32.21-.6.07-.28-.14-1.2-.44-2.29-1.4-.85-.76-1.42-1.7-1.58-1.98-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.48.14-.16.19-.28.28-.46.09-.18.05-.34-.03-.48-.07-.14-.61-1.47-.84-2.02-.22-.53-.44-.46-.61-.47h-.52c-.18 0-.48.07-.73.35-.25.28-.95.99-.95 2.41 0 1.42.98 2.8 1.12 2.99.14.19 2.02 3.08 4.9 4.32.68.29 1.21.47 1.62.6.68.22 1.3.19 1.79.11.55-.08 1.64-.67 1.87-1.32.23-.65.23-1.2.16-1.32-.07-.11-.25-.18-.53-.32z" />
        <path d="M26.67 5.33A14.49 14.49 0 0 0 16 1.33C8.65 1.33 2.67 7.31 2.67 14.67c0 2.35.62 4.64 1.78 6.63L2.67 30.67l9.54-2.5a14.63 14.63 0 0 0 6.46 1.5H18.7c7.35 0 13.33-5.98 13.33-13.33 0-3.56-1.39-6.9-3.86-9.48zm-10.67 23.34h-.01a11.58 11.58 0 0 1-5.92-1.63l-.42-.24-4.39 1.15 1.17-4.29-.28-.44a11.56 11.56 0 0 1-1.77-6.08c0-6.39 5.2-11.59 11.6-11.59 3.1 0 6.03 1.21 8.21 3.4a11.52 11.52 0 0 1 3.4 8.2c0 6.4-5.2 11.52-11.6 11.52z" />
      </svg>
      <span className="sr-only">Rakstiet mums ziņu WhatsApp</span>
    </a>
  );
}
