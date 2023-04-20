'use client'
import React from 'react'
import { createClient } from '@supabase/supabase-js'
import {
    Formik,
    FormikHelpers,
    FormikProps,
    Form,
    Field,
    FieldProps,
} from 'formik';


interface FormValues {
    email: string;
    password: string;
}

const signUp = () => {
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_KEY);
    const initialValues: FormValues = { email: '', password: '' };
    function SignUp(email: string, password: string) {
        supabase.auth.signUp({
            email: email,
            password: password
        })
    }
    return (
        <div className='h-screen flex justify-center items-center'>
            <Formik
                initialValues={initialValues}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required'
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    if (!values.password) {
                        errors.password = 'required'
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    SignUp(values.email, values.password)
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit} className='flex flex-col px-6'>
                        <h1 className='mb-6'>Sign up</h1>
                        <label htmlFor='email' id='email'>Email</label>
                        {errors.email && touched.email && errors.email}
                        <input
                            id='email'
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            className='input input-primary mb-6'
                        />

                        <label htmlFor="password">Password</label>
                        {errors.password && touched.password && errors.password}
                        <input
                            id='password'
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            className='input input-primary mb-6'
                        />
                        <button type="submit" disabled={isSubmitting} className='btn btn-primary'>
                            Submit
                        </button>
                    </form>
                )}
            </Formik>

        </div>
    )
}

export default signUp