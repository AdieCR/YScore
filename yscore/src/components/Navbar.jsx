import { Button } from '@chakra-ui/react';
import React, { useState } from 'react'
import SignIn from './SignIn';

function Navbar() {

const [showLoginModal, setShowLoginModal] = useState(false);
  return (
    <div>
         <Button onClick={() => setShowLoginModal(true)}>Sign In</Button>
        <SignIn showLoginModal={showLoginModal} setShowLoginModal={setShowLoginModal}/>
    </div>
  )
}

export default Navbar