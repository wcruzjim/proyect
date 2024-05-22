import { Outlet } from "react-router-dom";
import imgNav from '../assets/img/image-removebg-preview.png'
const Layout = () =>{
    return  <div>
        <header>
            <div class="redesSociales">
                <div class="sesion">
                    <ul>
                        <li>
                            <a href="/login">INICIAR SESIÓN</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
        <div class="contenedor-menu">
            <div class="barra">
                <div class="menu-izq">
                    <a href="#">INICIO</a>
                    <a href="#">PRODUCTOS</a>
                </div>
                <div class="tropiland">
                    <a href="inicio.html" class="icono-inicio" >
                        <img src={imgNav}/>
                    </a>
                </div>
                <div class="menu-der">
                    <a href="#">SERVICIOS</a>
                    <a href="#">ACERCA DE</a>
                </div>
            </div>
        </div>
        <Outlet/>
    </div>
}
export default Layout;