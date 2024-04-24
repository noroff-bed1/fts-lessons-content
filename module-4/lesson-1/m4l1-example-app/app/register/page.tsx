function Register() {
  return (
    <div>
      <h1>Register user</h1>
      <form>
        <input
          type="username"
          name="username"
          placeholder="Your username"
          autoComplete="username"
          required
        />
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
        <button>Register</button>
      </form>
    </div>
  );
}

export default Register;
