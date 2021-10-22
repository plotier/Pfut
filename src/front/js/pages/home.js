import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="homeBkg">
			<div className="row">
				<div className="col-4 ">
					<div className="menuSqu">Plantilla</div>
				</div>
				<div className="col-4" />
				<div className="col-4">
					<div className="menuSqu">Táctica</div>
				</div>
			</div>
			<div className="row">
				<div className="col-4">
					<div className="menuSqu">Estadísticas</div>
				</div>
				<div className="col-4">
					<div className="menuSqu">Estadio</div>
				</div>
				<div className="col-4">
					<div className="menuSqu">Mercado</div>
				</div>
			</div>
			<div className="row">
				<div className="col-4">
					<div className="menuSqu">Hospital</div>
				</div>
				<div className="col-4" />
				<div className="col-4">
					<div className="menuSqu">Economía</div>
				</div>
			</div>
		</div>
	);
};
