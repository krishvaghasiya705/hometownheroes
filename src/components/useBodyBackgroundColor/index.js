import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useBodyBackgroundColor = () => {
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;
    if (pathname === "/ausstellung2023" || pathname === "/") {
      document.body.style.backgroundColor = "#f6f1e5";
    } else {
      document.body.style.backgroundColor = "#1a1a1a";
    }

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [location]);
};

export default useBodyBackgroundColor;