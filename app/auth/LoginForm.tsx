import { FormikProps, Form, withFormik } from 'formik'
import { Input } from '../components/form/Input'
import * as yup from "yup"
import { LoginFormValuesInterface } from '../contracts/auth'
import { innerLoginForm } from '../components/form/innerLoginForm'
import { callApi } from '../helper/callApi'
import { validationError } from '../helper/validationErrors'
import Router from 'next/router'

const phoneRegExp = /^(0|0098|\+98)9(0[1-5]|[1 3]\d|2[0-2]|98)\d{7}$/

const loginFormValidationSchema = yup.object().shape({
    phone: yup.string().required().matches(phoneRegExp, 'the phone format is not correct')
})

//this type just for get props 
interface LoginFormProps {
    setToken: (token: string) => void
}

const LoginForm = withFormik<LoginFormProps, LoginFormValuesInterface>({
    mapPropsToValues: props => ({
        phone: '',
    }),
    validationSchema: loginFormValidationSchema,
    handleSubmit: async (values, { props, setFieldError }) => {
        try {
            const response = await callApi().post('auth/login', values);
            if (response.status == 200) {
                props.setToken(response.data.token)
                Router.push('/auth/login/step-two')
                // props.setCookie('user-token', response.data.token, {
                //     'maxAge': 3600 * 24 * 30,
                //     'domain': 'localhost',
                //     'path': '/'
                // })
            }
        } catch (error) {
            if (error instanceof validationError) {
                Object.entries(error.messages).forEach(([key, value]) => setFieldError(key, value as any))
            }

        }
    }
})(innerLoginForm)

export default LoginForm; 