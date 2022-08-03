import React, { ChangeEventHandler, Dispatch, SetStateAction } from "react"

interface ITextAreaFieldProps {
    name: string,
    htmlFor: string,
    fullWidth?: boolean
    required?: boolean
    handleChange: ChangeEventHandler<HTMLTextAreaElement>
    stateField: string
}

const TextAreaField: React.FC<ITextAreaFieldProps> = ({ name, htmlFor, fullWidth = false, required = false, handleChange, stateField }) => {
    return (
        <div className='my-1'>
            <textarea onChange={handleChange} value={stateField} className={`p-3 rounded-sm  ${fullWidth ? 'w-full' : 'w-fit'}`} name={htmlFor} required={required} placeholder={name} />
        </div>
    )
}

export default TextAreaField