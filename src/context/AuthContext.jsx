import { createContext, useEffect } from "react";
import { useState } from "react";
import { loginRequest, registerRequest, verifyTokenRequest } from "../../axios";
import { useForm } from "../hooks";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const AuthContext = createContext();

// initial values
const initialForm = {
  username: "",
  password: "",
};

export const AuthProvider = ({ children }) => {
  // useForm -> hook
  const { formState, username, password, onInputChange, onInputReset } =
    useForm(initialForm);

  // useState

  const [user, setUser] = useState(null);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // handlers
  const onSubmitRegister = async (e) => {
    // prevent event

    e.preventDefault();

    // send formState

    try {
      const {
        data: { userSaved },
      } = await registerRequest(formState);
      setUser(userSaved);
      setIsAuthenticated(true);
      setSuccess(true);
      setErrors([]);
      onInputReset();

      navigate("/login");
    } catch ({ response: { data } }) {
      setUser(null);
      setIsAuthenticated(false);
      setSuccess(false);
      setErrors(data.errors);
    }
  };

  const onSubmitLogin = async (e) => {
    e.preventDefault();

    // axios

    try {
      const {
        data: { userFound },
      } = await loginRequest(formState);

      setUser(userFound);
      setIsAuthenticated(true);
      setErrors([]);

      navigate("/");
    } catch (error) {
      setIsAuthenticated(false);
      setErrors(error.response.data.errors);
    }
  };

  const verifyToken = async () => {
    const { token } = Cookies.get();

    if (token) {
      try {
        const { data } = await verifyTokenRequest();
        setUser(data);
        setIsAuthenticated(true);
        setErrors([]);
        console.info("valid token :)");
      } catch (error) {
        setUser(null);
        setIsAuthenticated(false);
        setErrors([error.response.data]);
      }
    }
  };

  // useEffect

  useEffect(() => {
    console.log("Usuario autenticado:", isAuthenticated);
    verifyToken();
  }, [isAuthenticated]);

  const data = {
    user,
    formState,
    username,
    password,
    success,
    isAuthenticated,
    errors,
    onInputChange,
    onSubmitRegister,
    onSubmitLogin,
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthContext;
