import React from 'react'
import { useLocation } from "react-router-dom";
export default function Detailpage() {
	const location = useLocation();

	return (
		<div className="App">
		<div className="content">
		<h1>{location.state.title}</h1>
		<h5>Status <span>{location.state.done.toString()}</span></h5>
		</div>
	</div>
	)
}
