// import { ReactNode } from "react";
// import { JSXElementConstructor } from "react";
import { Navigate } from "react-router-dom";

// type PropsType = {
//   children?:ReactNode;
//   user:{};
// }

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const user = JSON.parse(localStorage.getItem("@auth")!);
  if (!user) {
    return (
      <Navigate
        to="/signin"
        replace
      />
    );
  }

  return children;
};

export default ProtectedRoute;
