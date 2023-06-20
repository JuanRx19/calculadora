import React from "react";
import "../stylesheets/Calculadora.css"
import Botones from './Botones';
import Limpiar from "./Limpiar";
import { useState } from 'react';

function Calculadora() {
    const [cadena, setCadena] = useState("");
  
    const numero = (num) => setCadena(cadena + num);
  
    const operador = (op) => setCadena(cadena + op);
  
    const clear = () => setCadena("");

    const operar = () => setCadena(eval(cadena));
  
    return (
      <div className="contenedor-principal">
        <div className="calculadora">
          <div className="pantalla">{cadena}</div>
            <div className="botones-calculadora">
                <Botones valor={"1"} tipo={true} accion={() => numero("1")} />
                <Botones valor={"2"} tipo={true} accion={() => numero("2")} />
                <Botones valor={"3"} tipo={true} accion={() => numero("3")} />
                <Botones valor={"+"} tipo={false} accion={() => operador("+")} />
                <Botones valor={"4"} tipo={true} accion={() => numero("4")} />
                <Botones valor={"5"} tipo={true} accion={() => numero("5")} />
                <Botones valor={"6"} tipo={true} accion={() => numero("6")} />
                <Botones valor={"-"} tipo={false} accion={() => operador("-")} />
                <Botones valor={"7"} tipo={true} accion={() => numero("7")} />
                <Botones valor={"8"} tipo={true} accion={() => numero("8")} />
                <Botones valor={"9"} tipo={true} accion={() => numero("9")} />
                <Botones valor={"*"} tipo={false} accion={() => operador("*")} />
                <Botones valor={"="} tipo={false} accion={operar} />
                <Botones valor={"0"} tipo={true} accion={() => numero("0")} />
                <Botones valor={"."} tipo={false} accion={() => numero(".")} />
                <Botones valor={"/"} tipo={false} accion={() => operador("/")} />
                <Limpiar accion={clear} />
            </div>
        </div>
      </div>
    );
}
export default Calculadora;