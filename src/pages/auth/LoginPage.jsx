import { useContext } from "react";
import { ErrorMessage } from "../../components/commons";
import AuthContext from "../../context/AuthContext";
import "./Form.css";
import { Navigate } from "react-router-dom";

export const LoginPage = () => {
  const {
    username,
    password,
    isAuthenticated,
    errors,
    onInputChange,
    onSubmitLogin,
  } = useContext(AuthContext);

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <form className="form form-login" onSubmit={onSubmitLogin}>
      {/* errors */}

      {errors.length > 0 && <ErrorMessage errors={errors} />}

      <h1 className="form__title">Login</h1>
      <input
        type="text"
        placeholder="Username"
        name="username"
        onChange={onInputChange}
        value={username}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        onChange={onInputChange}
        value={password}
      />
      <button>Login</button>
    </form>
  );
};
