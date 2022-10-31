import { FormikProps, Form, withFormik } from 'formik'
import { Input } from '../components/form/Input'
import * as yup from "yup"
import { PhoneVerifyFormValuesInterface } from '../contracts/auth'
import { innerPhoneVerifyForm } from '../components/form/phoneVerifyLoginForm'
import { callApi } from '../helper/callApi'
import { validationError } from '../helper/validationErrors'
import Router from 'next/router'


const verifyFormValidationSchema = yup.object().shape({
    code: yup.string().required().matches(/^[0-9]+$/, " ید").length(6)
})

//this type just for get props 
interface PhoneVerifyFormProps {
    token?: string,
    clearToken: () => void,
}

const PhoneVerifyForm = withFormik<PhoneVerifyFormProps, PhoneVerifyFormValuesInterface>({
    mapPropsToValues: props => ({
        code: '',
        token: props.token || ''
    }),
    validationSchema: verifyFormValidationSchema,
    handleSubmit: async (values, { props, setFieldError }) => {
        try {
            const response = await callApi().post('auth/login/verify-phone', values);
            if (response.status == 200) {
                if (response.status == 200) {
                  await  Router.push('/')
                    props.clearToken()
                }
            }
        } catch (error) {
            if (error instanceof validationError) {
                Object.entries(error.messages).forEach(([key, value]) => setFieldError(key, value as any))
            }

        }
    }
})(innerPhoneVerifyForm)

export default PhoneVerifyForm