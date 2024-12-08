import { NavLink } from "react-router"
import { Card } from "./ui/Card"
import {Logout} from "./ui/Logout"
export const Thanks = () => {
  return (
    <>
    <Card 
    title="Thank You for Joining Bumblebee's Hive!" 
    body="Thank you for registering with Bumblebee's Hive! We're thrilled to have you as part of our buzzing community. Your journey with us is just beginning, and we can't wait to see all the amazing things you'll accomplish."
    />
    <div className="flex flex-row justify-between items-center w-[35%]">
    <NavLink to="/Login" className="text-blue-950 underline font-bold">Login</NavLink>
    <Logout/>
    </div>

  
    </>
        
      
  )
}
