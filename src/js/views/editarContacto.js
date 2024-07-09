import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";
import { Editar } from "../component/editar";

export const EditarContacto = () => {
    const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<Editar/>
		</div>
	);
};
