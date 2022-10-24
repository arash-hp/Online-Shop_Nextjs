import { FormikProps, Form, withFormik } from 'formik'
import { Input } from '../components/form/Input'
import * as yup from "yup"
import { innerRegisterForm } from '../components/form/innerRegisterForm'
import { RegisterFormValuesInterface } from '../contracts/auth'
import { callApi } from '../helper/callApi'
import Router from 'next/router'

const registerFormValidationSchema = yup.object().shape({
    name: yup.string().required().min(4),
    email: yup.string().required().email(),
    password: yup.string().required().min(8)
})

//this type just for get props 
interface RegisterFormProps {
    // name?: string,
}
const RegisterForm = withFormik<RegisterFormProps, RegisterFormValuesInterface>({
    mapPropsToValues: props => ({
        name: '',  //if wanna get name from props => props.name ?? ''
        email: '',
        password: '',
    }),
    validationSchema: registerFormValidationSchema,
    handleSubmit: async (values) => {
        const response = await callApi().post('auth/register', values);
        if (response.status == 201) {
            Router.push('login')
        }
        console.log(response)
    }
})(innerRegisterForm)

export default RegisterForm; 