import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'gold' | 'text';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-sans tracking-widest uppercase transition-all duration-300 ease-out focus:outline-none focus:ring-1 focus:ring-[#c8a96a] disabled:opacity-50 disabled:pointer-events-none';
  
  const variants = {
    primary: 'bg-[#111111] text-white hover:bg-white hover:text-[#111111] border border-[#111111] hover:border-[#111111]',
    secondary: 'bg-[#f5f1ea] text-[#111111] hover:bg-[#111111] hover:text-[#f5f1ea] border border-[#f5f1ea] hover:border-[#111111]',
    outline: 'bg-transparent text-[#111111] border border-[#111111] hover:bg-[#111111] hover:text-white',
    gold: 'bg-[#c8a96a] text-[#111111] hover:bg-[#111111] hover:text-white border border-[#c8a96a] hover:border-[#111111]',
    text: 'bg-transparent text-[#111111] p-0 hover:text-[#c8a96a] relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-[#c8a96a] after:transition-all after:duration-300'
  };

  const sizes = {
    sm: 'text-xs px-4 py-2 rounded-sm',
    md: 'text-sm px-6 py-3 rounded-sm',
    lg: 'text-base px-8 py-4 rounded-sm'
  };

  const widthStyle = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
export default Button;
