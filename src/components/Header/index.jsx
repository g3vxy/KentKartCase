import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./index.scss";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.user);

  const onClick = () => {
    dispatch({
      type: "auth/setUser",
      payload: {
        id: 0,
        name: "",
        surname: "",
        password: 0,
        email: "",
        status: false,
        isAuthenticated: false,
      },
    });

    navigate("/", { replace: true });
  };

  return (
    <header>
      <h1>KentKart Case / {user.name}</h1>
      <button onClick={onClick}>Logout</button>
    </header>
  );
}
