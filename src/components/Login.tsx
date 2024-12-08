
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Trans2 from '../trans2.jpg'; 
import { useNavigate } from 'react-router';
import { validate_login_values } from '../lib/validate';
import { LoginValues } from '../lib/interface';
import { useAuth } from '../context/login-context';
import { checkUserRecord } from '../lib/manipulate_data';

export const Login= () => {
  const navigate = useNavigate();
  const User = useAuth()
  const initialValues = {email:'', password : '', RememberMe:false,}
  const validate = validate_login_values

  const onSubmit = (
    values: LoginValues, 
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => 
    {
    const isUser = checkUserRecord(values.email)
    if(!isUser){
      alert("Not a User : please sign in")
      setTimeout(()=>{navigate('/')},1000)
    }
    else{
      alert("Success Full login");
      setSubmitting(true)
      if (values.RememberMe) {
        localStorage.setItem('email', values.email);
      }
      User.setCurrentUser(values.email)
      User.setUserLogin(true)
      navigate('/welcome-back');
    }

  };

  return (
    <section className="bg-black text-multiBrown rounded-2xl p-2  md:p-4  m-3 md:m-0 lg:grid  lg:grid-flow-col justify-between items-center gap-2 shadow-lg">
      <img src={Trans2} className="w-[250px] rounded-lg lg:block hidden" alt="Transformer" />
      <div className="rounded-xl text-center text-bgAmber w-[300px] flex gap-2 flex-col justify-center">
        <h3 className="text-2xl font-semibold">Welcome Back to Bumblebee's Hive</h3>
        <p className="text-sm text-gray-300 text-center">
          Great to see you again! Log in to continue your adventure with Bumblebee and the community.
        </p>
        <Formik
          initialValues={initialValues}
          validate={validate}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col flex-grow gap-3 justify-center items-center">
              <div>
                <label htmlFor="email">Email</label>
                <br />
                <Field
                  id="email"
                  name="email"
                  type="email"
                  className="text-primary2Black rounded-lg  w-[250px] p-2"
                />
                <ErrorMessage name="email" component="div" className="text-red-600" />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <br />
                <Field
                  id="password"
                  name="password"
                  type="password"
                  className="text-primary2Black rounded-lg  w-[250px] p-2"
                />
                <ErrorMessage name="password" component="div" className="text-red-600" />
              </div>
              <div>
                <label>
                  <Field
                    type="checkbox"
                    name="RememberMe"
                    className="mx-2"
                  />
                  Remember Me
                </label>
              </div>
              <button type="submit" disabled={isSubmitting} className="bg-bgAmber font-bold text-black w-1/3 rounded-lg p-2">
                Roll Out
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};


