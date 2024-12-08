# Sign up and Login form

This application allows users to sign up, log in, and logout.

## Sign-Up Page

### Description

The Sign-Up page is designed for new users to register. The page includes fields for the user's first name, last name, email, and password. Upon successful registration, users are welcomed with a thank-you page.

### Features

- **First Name and Last Name:** Fields for the user to enter their first and last name.
- **Email Address:** Field for the user to enter their email address.
- **Password:** Field for the user to enter a secure password.
- **Remember Me:** Checkbox to remember the user's login details.
- **Submit Button:** Button to submit the registration form.

## Login Page

### Description

The Login page allows existing users to access their accounts. The page includes fields for the user's email and password. If the "Remember Me" checkbox is selected, the user's email is stored locally, and they are automatically redirected to the welcome page upon subsequent visits.

### Features

- **Email Address:** Field for the user to enter their email address.
- **Password:** Field for the user to enter their password.
- **Remember Me:** Checkbox to remember the user's login details.
- **Submit Button:** Button to log in to the application.

## How to Run the Application

1. **Clone the Repository:**

```bash
 git clone https://github.com/your-username/bumblebee-hive.git
 cd better
```

2. **Install Dependencies**

```bash
npm install
```

3. **8Start Application**

```bash
npm run dev
```

4. Access the Application: Open your web browser and navigate to http://localhost:5173 or whatever localport your site is running on.

## Thought Process

User Experience: The design aims to provide a seamless user experience with intuitive navigation and clear instructions.

Data Handling: Dummy data is used to simulate user interactions, with simple functions to add, update, and delete user details.

Remember Me Functionality: The "Remember Me" feature stores the user's email locally to streamline subsequent logins.

User Flow: Users can sign up, log in, and log out. New users are welcomed with a thank-you page, and returning users are redirected to the welcome page if remembered.

**User Interactions**

Sign Up: Users fill out the sign-up form and are added to the dummy data list. They are then redirected to the thank-you page.

Log In: Users enter their credentials to log in. If the "Remember Me" checkbox is checked, their email is stored locally.

Log Out: Users can log out, which clears their login status.

Remember Me: If the user opts to be remembered, they are automatically redirected to the welcome page on subsequent visits.

### Limitations

No Databases: Currently, there is no backend database for storing user data.

No Cookies and Tokens: The application does not use cookies or tokens (e.g., refresh and access tokens) for authentication.
