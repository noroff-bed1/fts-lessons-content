'use client';

import { useFormState } from 'react-dom';
import { registerUser } from '@/modules/auth/actions';
import Button from './Button';
import Input from './Input';

const initialState = {
  message: '',
};

/**
 * A form for registering a new user.
 */
function RegisterForm() {
  const [state, formAction] = useFormState(registerUser, initialState);
  return (
    <form action={formAction} className="max-w-md mx-auto">
      <Input
        id="username"
        name="username"
        label="Username"
        placeholder="Your username"
        autoComplete="username"
        required
      />
      <Input
        id="email"
        name="email"
        label="Email"
        placeholder="Your email"
        type="email"
        autoComplete="username"
        required
      />
      <Input
        id="password"
        name="password"
        label="Password"
        type="password"
        placeholder="Your password"
        autoComplete="current-password"
        required
      />
      <Button type="submit">Register</Button>
      <div>{state?.message}</div>
    </form>
  );
}

export default RegisterForm;
