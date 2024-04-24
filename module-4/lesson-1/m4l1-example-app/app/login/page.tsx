function Login() {
  return (
    <div>
      <h1>Login user</h1>
      <form>
        <input
          type="email"
          name="email"
          placeholder="Your email address"
          autoComplete="email"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Your password"
          autoComplete="current-password"
          required
        />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
