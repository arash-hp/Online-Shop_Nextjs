import { FormikProps, Form, withFormik } from 'formik'
import { Input } from '../components/form/Input'
import * as yup from "yup"
import { innerRegisterForm } from '../components/form/innerRegisterForm'
import { RegisterFormValuesInterface } from '../contracts/auth'

const registerFormValidationSchema = yup.object().shape({
    name: yup.string().required().min(4),
    email: yup.string().required().email(),
    password: yup.string().required().min(8)
})

//this type just for get props 
interface RegisterFormProps {
    name?: string,
}
const RegisterForm = withFormik<RegisterFormProps, RegisterFormValuesInterface>({
    mapPropsToValues: props => ({
        name: props.name ?? '',  //if wanna get name from props
        email: '',
        password: '',
    }),
    validationSchema: registerFormValidationSchema,
    handleSubmit: (values) => {
        console.log(values)
    }
})(innerRegisterForm)

export default RegisterForm; 