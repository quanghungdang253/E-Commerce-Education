// src/components/common/NavLinkItem.jsx
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

function NavLinkItem({ to, icon: Icon, label }) {
  const rippleRef = useRef(null);

  const handleHover = (e) => {
    const ripple = document.createElement('span');
    const rect = e.currentTarget.getBoundingClientRect();

    ripple.className = 'ripple';
    ripple.style.left = `${e.clientX - rect.left}px`;
    ripple.style.top = `${e.clientY - rect.top}px`;

    const button = rippleRef.current;
    button.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 800);
  };

  return (
    <Link
      to={to}
      onMouseEnter={handleHover}
      ref={rippleRef}
      className="
        relative
        overflow-hidden
        px-4 py-2 
        rounded-lg
       flex items-center
       gap-2 text-gray-700
      hover:text-green-500
      transition-all duration-300 group
      text-white
    "
    >
      <Icon className="hidden sm:block" />
          <span className='text-[14px]'>{label}</span>

      {/* Ripple style injected inline */}
      <style jsx="true">{`
        .ripple {
          position: absolute;
          background: rgba(0, 123, 255, 0.15); /* soft blue water effect */
          border-radius: 50%;
          transform: scale(0);
          animation: rippleHover 0.8s ease-out;
          pointer-events: none;
          width: 120px;
          height: 120px;
          z-index: 0;
        }

        @keyframes rippleHover {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
      `}</style>
    </Link>
  );
}

export default NavLinkItem;
