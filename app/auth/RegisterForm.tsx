import { FormikProps, Form, withFormik } from 'formik'
import { Input } from '../components/form/Input'
import * as yup from "yup"

interface RegisterFormValues {
    name: string,
    email: string,
    password: string
}

const innerRegisterForm = (props: FormikProps<RegisterFormValues>) => {
    return (
        <Form className="mt-8 space-y-6">
            <div className="-space-y-px rounded-md shadow-sm">
                <div>
                    <Input name="name" label='name' />
                </div>

                <div>
                    <Input name="email" label='Email' type='email' />

                </div>

                <div>
                    <Input name="password" label='Password' type='password' />
                </div>
            </div>

            <div>
                <button type="submit" className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
                        </svg>
                    </span>
                    Sign in
                </button>
            </div>
        </Form>
    )
}

//this type just for get props 
interface RegisterFormProps {
    name?: string,

}

const registerFormValidationSchema = yup.object().shape({
    name: yup.string().required().min(4),
    email: yup.string().required().email(),
    password: yup.string().required().min(8)
})

const RegisterForm = withFormik<RegisterFormProps, RegisterFormValues>({
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