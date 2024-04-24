'use client';

import { useFormState } from 'react-dom';
import { loginUser } from '@/modules/auth/actions';
import Button from './Button';
import Input from './Input';

const initialState = {
  message: '',
};

/**
 * A form for logging in a user.
 */
function LoginForm() {
  const [state, dispatch] = useFormState(loginUser, initialState);
  return (
    <form action={dispatch} className="max-w-md mx-auto">
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
      <Button type="submit">Login</Button>
      <div>{state?.message}</div>
    </form>
  );
}

export default LoginForm;
