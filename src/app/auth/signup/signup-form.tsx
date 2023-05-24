"use client";

import { useAuth } from "../../../components/providers/supabase-auth-provider";
import { Button } from "../../../components/form/button";
import { Input } from "../../../components/form/input";
import { Label } from "../../../components/form/label";
import { Separator } from "../../../components/form/seperator";
// import { Github, Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

const SignupForm = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    const [res, setRes] = useState<boolean>(false);
    const { signUpWithEmail, user } = useAuth();
    const router = useRouter();


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);
        try {
            const error = await signUpWithEmail(email, password);
            console.log(error);
            if (error) {
                setError(error)
            } else {
                setRes(true);
            }
        } catch (error) {
            console.log('something went wrong')
        }
    }
    //check if there is a user
    useEffect(() => {
        if (res) {
            router.push("/auth/verify")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [res]);

    return (
        <div className="flex items-center justify-center w-full h-screen px-8">
            <div className="w-full max-w-lg">
                <div>
                    <h1 className="text-4xl font-bold">SignUp</h1>
                    <p className="mt-2 text-neutral-600">
                        Welcome to {" "}
                        <span className="font-semibold text-neutral-800">
                            Law Concierge Africa.
                        </span>{" "}
                        Please Sign up with your email.
                    </p>
                </div>
                {/* Seperator */}
                {/* <div className="flex items-center my-8">
          <Separator /> <span className="mx-6">OR</span> <Separator />
        </div> */}
                {/* Form Container */}
                <form onSubmit={handleSubmit}>
                    {/* Inputs Container */}
                    <div className="mt-6 space-y-6">
                        <Label>Email</Label>
                        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="space-y-2 mt-6">
                        <Label>Password</Label>
                        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    {error && <div className="mt-4 text-red-500">{error}</div>}
                    <Button variant='subtle' type="submit" className="flex items-center w-full gap-2 mt-6">Sign up</Button>
                </form>
                <div className="text-center mt-2">
                    <Link href="/auth/login">Already have an account? login here!</Link>
                </div>
            </div>
        </div>
    )
}

export default SignupForm