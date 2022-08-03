import React, { ChangeEventHandler, Dispatch, SetStateAction } from "react"
import { ICategory } from "../pages/posts/CreatePost"

interface ISelectFieldProps {
    list: ICategory[] | any[]
    name: string,
    htmlFor: string,
    fullWidth?: boolean
    required?: boolean
    handleChange: ChangeEventHandler<HTMLSelectElement>
    stateField: string
}

const SelectField: React.FC<ISelectFieldProps> = ({ list, name, htmlFor, fullWidth = false, required = false, handleChange, stateField }) => {
    return (
        <div className='my-1'>
            <select onChange={handleChange} value={stateField} className={`p-3 rounded-sm ${fullWidth ? 'w-full' : 'w-fit'}`} name={htmlFor} required={required} placeholder={name}>
                <option value={-1} className="text-slate-500/70" disabled>Select {name}</option>
                {list.map((item, idx) => (
                    <option key={idx} value={item.title}>{item.title}</option>
                ))}
            </select>
        </div>
    )
}

export default SelectField