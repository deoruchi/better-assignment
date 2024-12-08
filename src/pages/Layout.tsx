import { Outlet } from "react-router";
import { AuthProvider } from "../context/login-context";

export const Layout = () => {

  return <section className="bg-bgAmber max-h-full min-h-[100vh] w-[100vw] px-12 py-4 ">
    <div className=" flex flex-col items-center justify-center gap-4">
    <p className="text-primary2Black font-bold lg:text-[2.5rem] text-[1.5rem] ">Welcome to Bumblebee's Hive!</p>
    <AuthProvider> <Outlet/></AuthProvider>
   
    </div>
    
    </section>;
};
