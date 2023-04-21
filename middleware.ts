import {Database} from 'types/supabase'
import {NextRequest, NextResponse} from 'next/server'
import { createMiddlewareSupabaseClient } from '@supabase/auth-helpers-nextjs';

export async function middleware(req:NextRequest){
    const res = NextResponse.next();
    const pathName = req.nextUrl.pathname;

    const supabase = createMiddlewareSupabaseClient<Database>({req, res});

    const {
        data: {session}
    } = await supabase.auth.getSession();

    // if (!session && pathName === "/") {
    //     const url = new URL(req.url)
    //     url.pathname = "/login"
    //     return NextResponse.redirect(url);
    // }
    return res;
}