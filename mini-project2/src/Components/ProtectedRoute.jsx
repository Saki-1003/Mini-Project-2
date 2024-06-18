import { useContext } from "react";
import { LoginContext } from "../Context/UserProvider";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({redirectPath = '/login', children}) {

  const {user, handleUserLogin} = useContext(LoginContext)

  if(!user.email) {
    return <Navigate to={redirectPath} replace></Navigate>
  }

  return children

}