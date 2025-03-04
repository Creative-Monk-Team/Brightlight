import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ Component }) => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace("/auth/panel/dash/bright");
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return null; // Prevents flickering before redirect
  }

  return <Component />;
};

export default PrivateRoute;
