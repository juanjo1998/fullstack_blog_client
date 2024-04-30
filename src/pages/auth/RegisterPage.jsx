import { api } from "../../../axios";
import { useForm } from "../../hooks";
import "./Form.css";

const initialForm = {
  username: "",
  password: "",
};

export const RegisterPage = () => {
  const { formState, username, password, onInputChange, onInputReset } =
    useForm(initialForm);

  const onSubmit = async (e) => {
    // prevent event

    e.preventDefault();

    // send formState

    try {
      await api.post("/register", formState);
    } catch (error) {
      alert("Register failed.");
    }

    onInputReset();
  };
  return (
    <form className="form form-register" onSubmit={onSubmit}>
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
