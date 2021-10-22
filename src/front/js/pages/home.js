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
					<div className="menuSqu mx-auto plantillaPic">Plantilla</div>
				</div>
				<div className="col-4" />
				<div className="col-4">
					<div className="menuSqu mx-auto tacticaPic">Táctica</div>
				</div>
			</div>
			<div className="row">
				<div className="col-4">
					<div className="menuSqu mx-auto estadisticasPic">Estadísticas</div>
				</div>
				<div className="col-4">
					<div className="menuSqu mx-auto canchaPic">Estadio</div>
				</div>
				<div className="col-4">
					<div className="menuSqu mx-auto mercadoPic">Mercado</div>
				</div>
			</div>
			<div className="row">
				<div className="col-4">
					<div className="menuSqu mx-auto hospitalPic">Hospital</div>
				</div>
				<div className="col-4" />
				<div className="col-4">
					<div className="menuSqu mx-auto economiaPic">Economía</div>
				</div>
			</div>
		</div>
	);
};
