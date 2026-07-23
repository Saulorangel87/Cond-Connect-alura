import { useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router";

export const Logout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    logout();
    navigate("/auth/login");
  }, []); // eslint-disable-line react-hooks/exhaustive-deps -- logout and navigate are stable via useCallback/React Router

  return null;
};
