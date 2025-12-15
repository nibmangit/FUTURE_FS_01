const Button = ({ children, onClick, variant = 'primary', icon: Icon, className = '' }) => {
  const baseClasses = 'px-6 py-3 rounded-xl font-semibold transition duration-300 transform shadow-lg flex items-center cursor-pointer justify-center space-x-2';
  
  let variantClasses;
  if (variant === 'primary') {
    variantClasses = `bg-amber-500 text-gray-900 hover:bg-amber-400 hover:scale-[1.02] active:scale-[0.98] ${className}`;
  } else if (variant === 'secondary') {
    variantClasses = `bg-gray-700 text-white border border-gray-600 hover:bg-gray-600 hover:scale-[1.02] active:scale-[0.98] ${className}`;
  } else if (variant === 'accent') {
    variantClasses = `bg-blue-600 text-white hover:bg-blue-500 hover:scale-[1.02] active:scale-[0.98] ${className}`;
  }

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses}`}
    >
      {Icon && <Icon className="w-5 h-5" />}
      <span>{children}</span>
    </button>
  );
};

export default Button;