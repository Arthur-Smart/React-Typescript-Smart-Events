// import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

// type PropsType = {
//   children?:ReactNode;
//   user:{};
// }

const ProtectedRoute = ({ user, children }: never) => {
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
