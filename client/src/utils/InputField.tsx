import React, { ChangeEventHandler, Dispatch, SetStateAction } from "react"

interface IInputFieldProps {
    name: string,
    type: string,
    htmlFor: string,
    fullWidth?: boolean
    required?: boolean
    handleChange: ChangeEventHandler<HTMLInputElement>
    stateField: string | undefined
}

const InputField: React.FC<IInputFieldProps> = ({ name, type, htmlFor, fullWidth = false, required = false, handleChange, stateField }) => {
    return (
        <div className='my-1'>
            <input onChange={handleChange} value={stateField} className={`p-3 rounded-sm  ${fullWidth ? 'w-full' : 'w-fit'}`} name={htmlFor} type={type} required={required} placeholder={name} />
        </div>
    )
}

export default InputField