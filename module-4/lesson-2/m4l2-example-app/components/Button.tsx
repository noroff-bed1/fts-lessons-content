import React from 'react';

/**
 * Button component properties.
 */
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Defines the visual style of the button.
   * @default "primary"
   */
  variant?: 'primary' | 'secondary';
  /**
   * Optionally provides a more descriptive label for screen readers,
   * separate from the button's visible label.
   */
  ariaLabel?: string;
}

/**
 * A reusable button component that supports `primary` and `secondary` variants.
 * Utilizes Tailwind CSS for styling according to the application's design system.
 * Enhanced with ARIA attributes for improved accessibility.
 * @param {ButtonProps} props - The properties of the button.
 * @returns {JSX.Element} - The button element.
 */
const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className,
  ariaLabel,
  ...rest
}) => {
  const baseStyles =
    'px-4 py-2 font-medium text-white transition ease-in-out duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2';
  let variantStyles = '';
  let focusStyles = '';

  switch (variant) {
    case 'primary':
      variantStyles = 'bg-primary hover:bg-primary-dark';
      focusStyles = 'focus:ring-primary-dark';
      break;
    case 'secondary':
      variantStyles = 'bg-secondary hover:bg-secondary-dark';
      focusStyles = 'focus:ring-secondary-dark';
      break;
  }

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${focusStyles} ${className}`}
      aria-label={ariaLabel}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
