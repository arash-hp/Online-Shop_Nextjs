import { FormikProps, Form, withFormik } from 'formik'
import { Input } from '../components/form/Input'
import * as yup from "yup"
import { LoginFormValuesInterface } from '../contracts/auth'
import { innerLoginForm } from '../components/form/innerLoginForm'

const loginFormValidationSchema = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required().min(8)
})

//this type just for get props 
interface LoginFormProps {
}

const LoginForm = withFormik<LoginFormProps, LoginFormValuesInterface>({
    mapPropsToValues: props => ({
        email: '',
        password: '',
    }),
    validationSchema: loginFormValidationSchema,
    handleSubmit: (values) => {
        console.log(values)
    }
})(innerLoginForm)

export default LoginForm; 