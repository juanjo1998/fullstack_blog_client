import { useState } from "react";
import { api } from "../../../axios";
import { useForm } from "../../hooks";
import { ErrorMessage, SuccessMessage } from "../../components/commons";
import "./Form.css";
import { useNavigate } from "react-router-dom";

const initialForm = {
  username: "",
  password: "",
};

export const RegisterPage = () => {
  const { formState, username, password, onInputChange, onInputReset } =
    useForm(initialForm);

  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    // prevent event

    e.preventDefault();

    // send formState

    try {
      await api.post("/api/register", formState);
      onInputReset();
      setErrors([]);
      setSuccess(true);
      navigate("/login");
    } catch ({ response: { data } }) {
      console.log(data.errors);
      setErrors(data.errors);
      setSuccess(false);
    }
  };
  return (
    <>
      <form className="form form-register" onSubmit={onSubmit}>
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
    </>
  );
};
