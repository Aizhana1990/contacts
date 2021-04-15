import React from 'react';
import { useForm } from "react-hook-form";

const AddForm = ({addUser, setIsShowFrom}) => {
    const { register, handleSubmit, formState: { errors },reset} = useForm();
    const onSubmit = data => {
        addUser(data)
        reset()//очищает инпут
    }
    return (
        <form className="p-3" onSubmit={handleSubmit(onSubmit)}>
            <input type="text"
                   className="border-2 w-full mb-3 px-2"
                   placeholder="Enter your name"
                   {...register("name", { required: true})}
            />
            {errors.name && <span className="text-red-400">Введите имя пользователя</span>}
            <input type="number"
                   className="border-2 w-full mb-3 px-2"
                   placeholder="Enter your phone"
                   {...register("phone", { required: true})}
            />
            {errors.phone && <span className="text-red-400">Введите номер пользователя</span>}
            <div className="text-right">
                <button className="bg-red-100 px-4 py-2 text-xs font-semibold
                tracking-wider text-red-600 rounded mr-3" onClick={()=> setIsShowFrom(false)}>Cancel</button>
                <button className="bg-blue-100 px-4 py-2 text-xs font-semibold
                tracking-wider text-blue-600 rounded mr-3">Add</button>
            </div>
        </form>
    );
};

export default AddForm;