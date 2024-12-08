import { userDetail } from "../data/dummyData";

export const enterUserDetail=(
    data:{
        name:string,
        email:string,
        password: string,
        login: boolean

})=>{
    userDetail.push(data)
    // console.log("Recorded",userDetail)
}


  
export const updateUserDetail = (data: {
    email: string;
    login: boolean;
  }) => {
    userDetail.forEach(item => {
      if (item.email === data.email) {
        item.login = data.login;
      }
    });
  };

  export const updateUserLogin = ( 
    email: string,
    login:boolean 
  ) => {
    userDetail.forEach(item => {
      if (item.email === email) {
        item.login = login;
      }
    });
  };

  export const checkUserRecord = (email: string | null ): boolean => 
    { 
      if (!email) return false;   
      const result: boolean = userDetail.some(item => item.email === email); return result; };
  