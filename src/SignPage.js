import React from 'react';
import SignUp from './Signup';
import NavBar from './navBar';

const formStyle = {
  display: 'flex',
  alignItems: 'relative',  
  justifyContent: 'space-between',
  width: '100%',
  minHeight: '100vh',
  backgroundColor: 'blue-500',
  flexDirection: 'column',
  padding: '1rem',
  marginbottom :0,
  '@media (min-width: 768px)': {
      flexDirection: 'row',
      padding: 60,
  },
};

const SignInPage = () => {     
  return (
    <div style={formStyle}>
      {/* Place NavBar at the top */}
      <NavBar />
      
      {/* Other content of the SignInPage */}
      <div className='sign-in-content'>
        {/* You can include other components like the SignUp form here */}
        <SignUp />
      </div>
    </div>
  );
};

export default SignInPage;
