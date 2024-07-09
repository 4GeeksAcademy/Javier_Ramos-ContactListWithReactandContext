import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";
import { Formulario } from "../component/formulario";

export const NuevoContacto = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<Formulario/>
		</div>
	);
};
