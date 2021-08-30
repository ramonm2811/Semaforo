import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const TrafficLight = () => {
	const [selectedColor, setSelectedColor] = useState("red");

	return (
		<>
			<div className="contenedor">
				<div className="palito"></div>
			</div>
			<div className="contenedor">
				<div className="cuerpo">
					<div className="contenedor">
						<div
							onClick={() => setSelectedColor("red")}
							className={
								"luz luzRojo" +
								(selectedColor === "red" ? " glow" : "")
							}></div>
					</div>
					<div className="contenedor">
						<div
							onClick={() => setSelectedColor("yellow")}
							className={
								"luz luzAmarilla" +
								(selectedColor === "yellow" ? " glow" : "")
							}></div>
					</div>
					<div className="contenedor">
						<div
							onClick={() => setSelectedColor("green")}
							className={
								"luz luzVerde" +
								(selectedColor === "green" ? " glow" : "")
							}></div>
					</div>
				</div>
			</div>
		</>
	);
};

export default TrafficLight;
