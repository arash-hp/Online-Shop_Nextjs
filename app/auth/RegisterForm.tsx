import { FormikProps, Form, withFormik } from 'formik'
import { Input } from '../components/form/Input'
import * as yup from "yup"
import { innerRegisterForm } from '../components/form/innerRegisterForm'
import { RegisterFormValuesInterface } from '../contracts/auth'
import { callApi } from '../helper/callApi'
import Router from 'next/router'
import { validationError } from '../helper/validationErrors'

const phoneRegExp = /^(0|0098|\+98)9(0[1-5]|[1 3]\d|2[0-2]|98)\d{7}$/

const registerFormValidationSchema = yup.object().shape({
    name: yup.string().required().min(4),
    phone: yup.string().required().min(8).matches(phoneRegExp, 'the phone format is not correct')
})

//this type just for get props 
interface RegisterFormProps {
    // name?: string,
}
const RegisterForm = withFormik<RegisterFormProps, RegisterFormValuesInterface>({
    mapPropsToValues: props => ({
        name: '',  //if wanna get name from props => props.name ?? ''
        phone: '',
    }),
    validationSchema: registerFormValidationSchema,
    handleSubmit: async (values,{setFieldError}) => {


        try {
            const response = await callApi().post('auth/register', values);
            if (response.status == 201) {
                Router.push('login')
            }
        } catch (error) {
            if (error instanceof validationError) {
                Object.entries(error.messages).forEach(([key, value]) => setFieldError(key, value as any))
            }
        }
    }
})(innerRegisterForm)

export default RegisterForm; 