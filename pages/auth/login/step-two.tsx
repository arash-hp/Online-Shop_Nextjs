import type { NextPage } from 'next';
import Router from 'next/router';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import PhoneVerifyFormyForm from '../../../app/auth/PhoneVerifyForm';
import RegisterForm from '../../../app/auth/RegisterForm';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { selecetPhoneVerifyToken, updatePhoneVerifyToken } from '../../../app/store/auth';

const PhoneVerify: NextPage = () => {

  const dispatch = useAppDispatch()
  const token = useAppSelector(selecetPhoneVerifyToken);

  const clearPhoneVerifyToken = () => {
    dispatch(updatePhoneVerifyToken(undefined))
  }

  useEffect(() => {
    Router.beforePopState(({ url, as, options }) => {
      clearPhoneVerifyToken()
      return true
    })

    if (token === undefined) {
      Router.push('/auth/login')
      console.log('token')

    }
  }, [token])
  console.log(token)

  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">start your 14-day free trial</a>
            </p>
          </div>
          <PhoneVerifyFormyForm token={token} clearToken={clearPhoneVerifyToken} />
        </div>
      </div>
    </>
  )
}

export default PhoneVerify
