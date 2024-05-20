import { useContext } from "react";
import { ErrorMessage, SuccessMessage } from "../../components/commons";
import AuthContext from "../../context/AuthContext";
import "./Form.css";
import { Navigate } from "react-router-dom";

export const RegisterPage = () => {
  const {
    username,
    password,
    success,
    isAuthenticated,
    errors,
    onInputChange,
    onSubmitRegister,
  } = useContext(AuthContext);

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <form className="form form-register" onSubmit={onSubmitRegister}>
      {/* success */}
      {success && <SuccessMessage msg="User registered successfully." />}
      {/* errors */}

      {errors.length > 0 && <ErrorMessage errors={errors} />}

      {/* form */}
      <h1 className="form__title">Register</h1>
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
      <button>Register</button>
    </form>
  );
};
