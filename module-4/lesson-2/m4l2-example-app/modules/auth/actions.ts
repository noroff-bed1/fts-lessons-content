'use server';

import { cookies } from 'next/headers';
// Our URL constants we have created
import { LOGIN_API_URL, REGISTER_API_URL } from '@/lib/constants';

export async function registerUser(
  prevState: {
    message: string;
  },
  formData: FormData,
) {
  // Get the values from the form
  const username = formData.get('username');
  const email = formData.get('email');
  const password = formData.get('password');

  try {
    const response = await fetch(REGISTER_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: username, email, password }),
    });
    const json = await response.json();
    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }

    return { message: `Added user with id of: ${json.email}` };
  } catch (error) {
    return { message: 'Failed to create user' };
  }
}

export async function loginUser(
  prevState: {
    message: string;
  },
  formData: FormData,
) {
  // Get the values from the form
  const email = formData.get('email');
  const password = formData.get('password');

  try {
    const response = await fetch(LOGIN_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const json = await response.json();
    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }

    // Create a cookie with the name of "token" and store our access token in it
    cookies().set('token', json.accessToken, { httpOnly: true });

    return { message: `Logged in user: ${json.email}` };
  } catch (error) {
    console.log(error);
    return { message: 'Failed to log in user' };
  }
}
