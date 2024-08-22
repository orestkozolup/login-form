'use client';

import Button from '../components/button';

const AuthorizationPage = () => {
  return (
    <Button label='Sign Up' onClick={() => {
      console.log('BTN CLICK')
    }} />
  )
}

export default AuthorizationPage;