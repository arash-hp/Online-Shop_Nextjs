import { FormikProps, Form, withFormik } from 'formik'
import { Input } from '../components/form/Input'
import * as yup from "yup"
import { LoginFormValuesInterface } from '../contracts/auth'
import { innerLoginForm } from '../components/form/innerLoginForm'
import { callApi } from '../helper/callApi'
import { validationError } from '../helper/validationErrors'

const loginFormValidationSchema = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required().min(8)
})

//this type just for get props 
interface LoginFormProps {
    setCookie: any
}

const LoginForm = withFormik<LoginFormProps, LoginFormValuesInterface>({
    mapPropsToValues: props => ({
        email: '',
        password: '',
    }),
    validationSchema: loginFormValidationSchema,
    handleSubmit: async (values, { props, setFieldError }) => {
        try {
            const response = await callApi().post('auth/login', values);
            if (response.status == 200) {
                props.setCookie('user-token', response.data.token, {
                    'maxAge': 3600 * 24 * 30,
                    'domain': 'localhost',
                    'path': '/'
                })
            }
        } catch (error) {
            if (error instanceof validationError) {
                Object.entries(error.messages).forEach(([key, value]) => setFieldError(key,value as any))
            }

        }
    }
})(innerLoginForm)

export default LoginForm; 