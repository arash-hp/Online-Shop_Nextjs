import { FormikProps, Form, withFormik } from 'formik'
import { Input } from '../components/form/Input'
import * as yup from "yup"
import { PhoneVerifyFormValuesInterface } from '../contracts/auth'
import { innerPhoneVerifyForm } from '../components/form/phoneVerifyLoginForm'
import { callApi } from '../helper/callApi'
import { validationError } from '../helper/validationErrors'
import  Router  from 'next/router'


const verifyFormValidationSchema = yup.object().shape({
    code : yup.string().required().matches(/^[0-9]+$/," ید").length(6)
})

//this type just for get props 
interface VerifyFormProps {
}

const PhoneVerifyForm = withFormik<VerifyFormProps, PhoneVerifyFormValuesInterface>({
    mapPropsToValues: props => ({
        code: '',
        token:''
    }),
    validationSchema: verifyFormValidationSchema,
    handleSubmit: async (values, { props, setFieldError }) => {
        try {
            const response = await callApi().post('auth/login', values);
            if (response.status == 200) {
                localStorage.setItem('phone-verify-token',response.data.token)
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
})(innerPhoneVerifyForm)

export default PhoneVerifyForm