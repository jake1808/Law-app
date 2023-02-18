'use client'
import { CircularAvatar } from '@/components/atoms/NavBar/SignIn/CircularAvatar';
import { SignInLinkButton } from '@/components/atoms/NavBar/SignIn/SignInLinkButton';
import React, { useState } from 'react'


export const SignInMolecule = () => {
    const [signedIn, setSignIn] = useState(false);
    return (
        signedIn ?
            <CircularAvatar imageURL='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
            :
            <SignInLinkButton />
    )
}
