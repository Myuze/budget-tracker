import { useState } from 'react';
import LoginForm from './LoginForm';

export default function Login() {
  const [login, useLogin] = useState();

  if (!login) return;

  return (
    <div>
      <LoginForm />
    </div>
  );
}
