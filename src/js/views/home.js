import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const Home = () => {
	
	const{store,actions} = useContext(Context)
	
	return(
		<ul className="w-50 mx-auto">
			{store.contacts?.map(el => 
			<li className=" my-3 d-flex justify-content-between border border-primary p-2" key={el.id}>
				<div className="photo-container text-center">photo</div>
				<div>
					<h5>{el.name}</h5>
					<h5><span className="fa fa-envelope"></span> {el.email}</h5>
					<h5><span className="fa fa-phone m3-4"></span> {el.phone}</h5>
					<h5><span className="fa fa-location-dot"></span> {el.address}</h5>
				</div>
				<Link to="/editarContacto">
					<span className="fa-solid fa-pencil" onClick={()=>actions.selectContact(el.id)}></span>
				</Link>
				<span className="fas fa-trash-alt" onClick={()=>actions.deleteContact(el.id)}></span>
			</li>)}
		</ul>
		
)};
 