import { LoginValues } from "./interface";
export const validate_login_values = (values:LoginValues) => {
    const errors:{[key:string] : string} = {};
  
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
  
   if (!values.password){ 
      errors.password = "Required"; 
    }else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(values.password)) {
       errors.password = `Password must be 8+ chars, upper, lower, number, special (@#$&!)`;
    }
    
    return errors;
  };

import { SignValues } from "./interface";
export const validate_sigin_values = (values:SignValues) => {
    const errors:{[key:string] : string} = {};
    if (!values.firstName) {
      errors.firstName = 'Please enter first name';
    } else if (values.firstName.length > 15) {
      errors.firstName = 'Must be 15 characters or less';
    }
  
    if (!values.lastName) {
      errors.lastName = 'Please enter first name';
    } else if (values.lastName.length > 20) {
      errors.lastName = 'Must be 20 characters or less';
    }
  
    if (!values.email) {
      errors.email = 'Email Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
  
   if (!values.password){ 
      errors.password = "Password Required"; 
    }else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(values.password)) {
       errors.password = `Password must be 8+ chars, upper, lower, number, special (@#$&!)`;
    }
    
    return errors;
  };