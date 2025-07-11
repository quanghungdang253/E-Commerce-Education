import React, { useRef } from 'react';


function Input({ type, value, onChange, placeholder }) {
  const inputRef = useRef(null);

  const handleRipple = (e) => {
    const ripple = document.createElement("span");
    ripple.className = "ripple";

    const rect = inputRef.current.getBoundingClientRect();
    ripple.style.left = `${e.clientX - rect.left}px`;
    ripple.style.top = `${e.clientY - rect.top}px`;

    inputRef.current.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  };

  return (
    <div className="relative w-full">
      <input
        ref={inputRef}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onClick={handleRipple}
        className="
          w-[20em]
          px-4
          py-3
          backdrop-blur-md
          border border-gray-300
          rounded-xl
          shadow-lg
          outline-none
          focus:ring-2
          focus:ring-blue-400
          focus:border-transparent
          transition-all duration-300 ease-in-out
          placeholder-gray-400
          overflow-hidden
          relative
        text-black
        "
      />
    </div>
  );
}

export default Input;
