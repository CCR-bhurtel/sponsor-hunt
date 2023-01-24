import React from 'react';

function InputField({ name, type = 'text', placeholder, value, onChange, id }) {
    return (
        <div className="mt-3 input-group ">
            <input
                className="p-[1rem] w-[100%]  outline-0 focus:border-2 rounded-md bg-Iron focus:bg-transparent"
                type={type}
                placeholder={placeholder}
                name={name}
                onChange={onChange}
                value={value}
                id={id}
            />
        </div>
    );
}

export default InputField;
