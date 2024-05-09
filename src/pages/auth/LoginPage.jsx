import { useState } from "react";
import { api } from "../../../axios";
import { useForm } from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import "./Form.css";
import { ErrorMessage } from "../../components/commons";

const initialForm = {
  username: "",
  password: "",
};

export const LoginPage = () => {
  const { formState, username, password, onInputChange, onInputReset } =
    useForm(initialForm);
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    // axios

    try {
      await api.post("/login", formState);
      setErrors([]);
      navigate("/");
    } catch (error) {
      setErrors(error.response.data.errors);
    }
  };

  return (
    <form className="form form-login" onSubmit={onSubmit}>
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
