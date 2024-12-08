import { Card } from "./ui/Card"
import { Logout } from "./ui/Logout"
export const Welcome = () => {
  return (
    <>
    <Card 
        title="Welcome Back to Bumblebee's Hive!"
        body="It's wonderful to see you again! We're delighted to have you back in Bumblebee's Hive. Your presence makes our community even stronger and more vibrant."
    />
    <Logout/>
    </>
  )
}
