import "./Form.css";

export const LoginPage = () => {
  return (
    <form className="form form-login">
      <h1 className="form__title">Login</h1>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button>Login</button>
    </form>
  );
};
