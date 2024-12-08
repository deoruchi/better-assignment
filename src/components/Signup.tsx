import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router'; 
import { SignValues } from '../lib/interface';
import { validate_sigin_values } from '../lib/validate';
import Trans from '../asset/trans.jpg';
import { useEffect } from 'react';
import { checkUserRecord, enterUserDetail, updateUserLogin } from '../lib/manipulate_data';
import { useAuth } from '../context/login-context';

export const Signup = () => {
  const next = useNavigate();
  const User = useAuth()
  const validate = validate_sigin_values;
  useEffect(() => {
    const fetchUser =  () => {
      const email: string | null = localStorage.getItem('email');
      const userExists : boolean = checkUserRecord(email)
      if (email && userExists) {
        User.setCurrentUser(email)
        User.setUserLogin(true)
        alert('Welcome back')
        updateUserLogin(email, true)
        next('/welcome-back');
      } 
    };
    fetchUser();
  }, [next]);

  const initialValues: SignValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  const onSubmit = 
  (values: SignValues, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
    alert('Success Signin');
    setSubmitting(true);
    const name = `${values.firstName} ${values.lastName}`;
    const new_user = {
      name,
      email: values.email,
      password: values.password,
      login: true,
    };
    enterUserDetail(new_user);
    User.setCurrentUser(values.email)
    User.setUserLogin(true)
    next('/thank-page');
  };

  return (
    <section className="bg-primary2Black rounded-2xl p-2 md:p-4 m-3 md:m-0 lg:grid lg:grid-flow-col justify-between items-center shadow-lg">
      <img src={Trans} className="w-[280px] h-full lg:block hidden" alt="Transformer" />

      <div className="rounded-xl text-center text-bgAmber w-[350px] flex gap-2 flex-col justify-center">
        <h2 className="text-2xl font-semibold text-bgAmber">Sign Up for Bumblebee's Hive</h2>
        <p className="text-sm text-gray-300 text-center block">
          Welcome to Bumblebee's Hive! Join our vibrant community and embark on an exciting journey with us. Your adventure begins here.
        </p>
        <Formik initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
          {({ isSubmitting }) => (
            <Form className="flex flex-col flex-grow gap-3 justify-center items-center">
              <div>
                <label htmlFor="firstName">First Name</label>
                <br />
                <Field
                  id="firstName"
                  name="firstName"
                  type="text"
                  className="text-primary2Black rounded-lg w-[250px] p-2"
                />
                <ErrorMessage name="firstName" component="div" className="text-red-600" />
              </div>
              <div>
                <label htmlFor="lastName">Last Name</label>
                <br />
                <Field
                  id="lastName"
                  name="lastName"
                  type="text"
                  className="text-primary2Black rounded-lg w-[250px] p-2"
                />
                <ErrorMessage name="lastName" component="div" className="text-red-600" />
              </div>
              <div>
                <label htmlFor="email">Email Address</label>
                <br />
                <Field
                  id="email"
                  name="email"
                  type="email"
                  className="text-primary2Black rounded-lg w-[250px] p-2"
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
                  className="text-primary2Black rounded-lg w-[250px] p-2"
                />
                <ErrorMessage name="password" component="div" className="text-red-600" />
              </div>
              <button type="submit" disabled={isSubmitting} className="bg-bgAmber font-bold text-black w-1/3 rounded-lg p-2">
                Join the Hive
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};
