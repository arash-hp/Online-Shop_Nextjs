import { Field, ErrorMessage } from "formik"
import { FC } from "react"
interface InputProps {
    name: string,
    type?: string,
    label: string,
    labelClassName?: string,
    inputClassName?: string,
    errorClassName?: string
}
export const Input: FC<InputProps> = ({
    name,
    label,
    type = 'text',
    labelClassName,
    inputClassName,
    errorClassName,
}) => {

    return <>
        <label htmlFor={name} className={` ${labelClassName ?? ''}`}>{label}</label>
        <Field id={name} name={name} type={type} className={`relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm ${inputClassName ?? ''}`} placeholder={`${name}`} />
        <div className={`text-red-500 ${errorClassName ?? ''}`}>
            <ErrorMessage name={name}  />
        </div>
    </>
}