"use client"
import { Button } from '@/components/form/button';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { useAuth } from '../../components/providers/supabase-auth-provider'

const Page = () => {
    const { user, signOut } = useAuth();
   

    useEffect(() => {
        if (!user) {
        
        }
    }, [user])
    return (
        <div className='h-screen flex flex-col justify-center items-center'>
            {user?.id}
            <Button variant={'subtle'} onClick={signOut}>Sign out</Button>
        </div>
    )
}

export default Page