import React from 'react';

/**
 * Props for the Input component.
 */
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Custom label for the input. */
  label?: string;
  /** Variant of the input for styling purposes. @default "default" */
  variant?: 'default' | 'error' | 'success';
  /** Optional message to display below the input. Useful for validation messages. */
  message?: string;
  /** An identifier for the input component. Necessary for associating the label with the input. */
  id: string;
}

/**
 * A reusable input component.
 * It includes optional labeling and validation message display.
 * An id must be supplied so that the label can be associated with the input for a11y purposes
 * @param {InputProps} props - The properties of the input component.
 * @returns {JSX.Element} The rendered input element with optional label and message, following a11y best practices.
 */
const Input: React.FC<InputProps> = ({
  label,
  variant = 'default',
  message,
  id,
  className,
  ...rest
}) => {
  const baseStyles =
    'block w-full px-4 py-2 mt-2 border rounded-md focus:border-blue-500 focus:outline-none focus:ring';
  let variantStyles = '';

  switch (variant) {
    case 'default':
      variantStyles = 'border-gray-300';
      break;
    case 'error':
      variantStyles = 'border-red-500 text-red-600';
      break;
    case 'success':
      variantStyles = 'border-green-500 text-green-600';
      break;
  }

  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        id={id}
        className={`${baseStyles} ${variantStyles} ${className}`}
        aria-invalid={variant === 'error' ? true : undefined}
        aria-describedby={message ? `${id}-message` : undefined}
        {...rest}
      />
      {message && (
        <p
          id={`${id}-message`}
          className={`mt-2 text-sm ${
            variant === 'error' ? 'text-red-600' : 'text-green-600'
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default Input;
