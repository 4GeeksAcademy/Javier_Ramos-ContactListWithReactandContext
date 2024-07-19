import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";

export const EditarContacto = () => {
    const { store, actions } = useContext(Context);
    const [dataForm,setDataForm]=useState({
        name: '',
        email: '',
        phone: '',
        address: ''
    })

    const contactId = store.contact ? store.contact.id : null;

    const handleChange = (e) =>{
        const{name,value}=e.target
        setDataForm({...dataForm, [name]: value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault() //evita que se recargue la página
        if(contactId){
            actions.editContact(contactId,dataForm)
        }
        else{
            alert("Ningún contacto seleccionado.")
        }  
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
                <input className="btn btn-warning" value="editar" type="submit"/>
            </form>
        </div>
    )
} 
