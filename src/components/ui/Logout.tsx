import {updateUserLogin} from "../../lib/manipulate_data.ts";
import { useAuth } from "../../context/login-context.tsx";
import { useNavigate } from "react-router";
export const Logout = () => {
  const User = useAuth();
  const navigate = useNavigate()
  const logout = () => {
    if(!User.usermail){
      alert('No user login/registered found')
      navigate('/')
    }
    updateUserLogin(User.usermail, false)
    localStorage.removeItem('email')
    User.setCurrentUser("");
    User.setUserLogin(false);
    setTimeout(()=>{
      navigate('/')
    }, 1000)
  };

  return (
    <>
      <button onClick={logout} className=" bg-red-600 p-2  m-2 text-lg rounded-lg font-semibold text-primaryText">Logout</button>
    </>
  );
};
