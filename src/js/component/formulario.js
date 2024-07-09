import React, { useState,useContext } from "react";
import { Context } from "../store/appContext";

export const Formulario = () =>{
    const { store, actions } = useContext(Context);
    const [dataForm,setDataForm]=useState({
        name: '',
        email: '',
        phone: '',
        address: ''
    })

    const handleChange = (e) =>{
        const{name,value}=e.target
        setDataForm({...dataForm, [name]: value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault() //evita que se recargue la página
        actions.createContact(dataForm)
        setDataForm({
            name: '',
            email: '',
            phone: '',
            address: ''
        }) 
        console.log(dataForm)
    }

    return(
        <div>
            <form className="w-50 mx-auto" onSubmit={handleSubmit}>
			    <label>Full Name
                    <input className="form-control" name="name" value={dataForm.name} placeholder="Full Name" onChange={handleChange} type="text"></input>
                </label>
                <label>Email
                    <input className="form-control" name="email" value={dataForm.email} placeholder="Email" onChange={handleChange} type="text"></input>
                </label>
			    <label>Phone
                    <input className="form-control" name="phone" value={dataForm.phone} placeholder="Phone" onChange={handleChange} type="text"></input>
                </label>
                <label>Address
                    <input className="form-control" name="address" value={dataForm.address} placeholder="Address" onChange={handleChange} type="text"></input>
                </label>
                <input className="btn btn-primary" value="enviar" type="submit"/>
            </form>
        </div>
    )
} 