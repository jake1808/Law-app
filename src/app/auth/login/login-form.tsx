/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React from 'react'
import { useAuth } from "../../../components/providers/supabase-auth-provider";
import { Button } from "../../../components/form/button";
import { Input } from "../../../components/form/input";
import { Label } from "../../../components/form/label";
import { Separator } from "../../../components/form/seperator";
// import { Github, Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from 'next/link';

const LoginForm = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    const { signInWithEmail, user } = useAuth();
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);
        try {
            const error = await signInWithEmail(email, password);
            if (error) {
                setError(error);
            }
        } catch (error) {
            console.log('Something went wrong!');
        }
    }

    useEffect(() => {
        if (user) {
            router.push("/")
        }
    }, [user])

    return (
        <div className='flex items-center justify center w-full h-screen px-8'>
            <div className="w-full max-w-lg">
                <div>
                    <h1 className="text-4xl font-bold">Login</h1>
                    <p className="mt-2 text-neutral-600">
                        Welcome to the {" "}
                        <span className="font-semibold text-neutral-800">
                            Law Concierge Africa.
                        </span>{" "}
                        Please login into your account with your email and password.
                    </p>
                </div>
                {/* Seperator */}
                {/* <div className="flex items-center my-8">
                    <Separator /> <span className="mx-6">OR</span> <Separator />
                </div> */}
                <form onSubmit={handleSubmit}>
                    <div className="mt-6 space-y-6">
                        <div className="space-y-2">
                            <Label>Email</Label>
                            <Input value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="space-y-2">
                            <Label>Password</Label>
                            <Input value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </div>
                    {error && <div className='mt-4 text-red-500'>{error}</div>}
                    <Button variant='subtle' type='submit' className='flex items-center w-full gap-2 mt-6'>
                        Login
                    </Button>
                </form>
                <div className="text-center mt-2">
                    <Link href="/auth/signup">Don&apos;t have an account? signup here!</Link>
                </div>

            </div>
        </div>
    )
}

export default LoginForm