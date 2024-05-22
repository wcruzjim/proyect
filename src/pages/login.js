import React from 'react'
import imgDescarga from '../assets/img/descarga.png'
import { Outlet } from "react-router-dom";

export const Login = () => {
  return <div>
        <div id="cont-fondo-sesion">
            <div class="fondo-sesion">
                <div class="form-inicio-sesion">
                    <div class="barra-inicio-sesion">
                        <a href="/">
                            Atras
                            <i class="fa-solid fa-circle-left"></i>
                        </a>
                        <h3>INICIA SESIÓN</h3> 
                    </div>
                    <div class="cont-form">
                        <div class="usuario">
                            <label for="usuario">USUARIO</label>
                            <input type="text" name="usuario" id="usuario"/>
                        </div>
                        <div class="contraseña">
                            <label for="password">CONTRASEÑA</label>
                            <input type="password" name="password" id="password"/>
                        </div>
                        <div class="btn-inicio-sesion">
                            <input id="enviar" type="submit" value="INICIAR SESIÓN"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Outlet/>
    </div>
}
