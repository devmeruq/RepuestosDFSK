import React from 'react';
import { useState, useEffect } from "react"
import CardRepuesto from "../components/CardRepuesto";
import { ToastContainer, toast } from 'react-toastify';

const URI = 'http://localhost:5116/api/Articulos/Existencia';

export default function RepuestosBodega({addToCart}) {
    const [data, setData] = useState([]);

    const toastId = React.useRef(null);//Dont repeat the notification
    //TODO: refactor this function to only one for all app
    const notifyerror = (error) => {
        if (!toast.isActive(toastId.current)) {
            toastId.current = toast.error(error, {
                draggable: true
            });
        }
    }
    const notifysuccess = () => {
        if (!toast.isActive(toastId.current)) {
            toastId.current = toast.success("Cargado exitoso", {
                draggable: true
            });
        }
    }


    useEffect(() => {
        fetch(URI)
            .then(response => response.json())
            .then(data => {
                setData(data);
                notifysuccess();
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                notifyerror(error.message);
            });
    }, []);

    return (
        <>
            <h2 className="bd-title text-center mb-0 pt-2">Inventario de Repuestos</h2>

            <div className="container my-5">
                
                <div className=" d-flex flex-wrap justify-content-between align-items-center p-3">
                    
                    <form className="d-flex pe-2 pt-3" role="search">
                        <input className="form-control me-2 rounded-5 shadow-sm" type="search" placeholder="Buscar..." aria-label="Buscar" />
                        <button className="btn btn-outline-danger rounded-5  shadow-sm" type="button">Buscar</button>
                    </form>
                    
                    <div className="btn-group ps-2 pt-3" role="group">
                        <button type="button" className="btn btn-outline-danger dropdown-toggle rounded-5 shadow-sm" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="bi bi-funnel" /> MARCA:
                        </button>
                        <ul className="dropdown-menu shadow">
                            <li><a className="dropdown-item" href="#">DFSK</a></li>
                            <li><a className="dropdown-item" href="#">BLUESKY</a></li>
                            <li><a className="dropdown-item" href="#">SHINERAY</a></li>
                        </ul>
                    </div>
                   
                    <div className="btn-group ps-2 pt-3 " role="group">
                        <button type="button" className="btn btn-outline-danger dropdown-toggle rounded-5 shadow-sm" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="bi bi-funnel" /> GRUPO:
                        </button>
                        <ul className="dropdown-menu shadow">
                            <li><a className="dropdown-item" href="#">REPUESTOS - GLORY 330</a></li>
                            <li><a className="dropdown-item" href="#">REPUESTOS - GLORY 500</a></li>
                            <li><a className="dropdown-item" href="#">REPUESTOS - GLORY 560/580</a></li>
                        </ul>
                    </div>
                    <div className="btn-group ps-2 pt-3" role="group">
                        <button type="button" className="btn btn-outline-danger dropdown-toggle rounded-5 shadow-sm" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className=" bi bi-sort-down" /> Ordenar por:
                        </button>
                        <ul className="dropdown-menu shadow">
                            <li><a className="dropdown-item" href="#">Existencia</a></li>
                            <li><a className="dropdown-item" href="#">Mayor Precio</a></li>
                            <li><a className="dropdown-item" href="#">Menor Precio</a></li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    {data?.map(item => (

                        <CardRepuesto
                            key={item.articulo}
                            repuestos={item} 
                            addToCart={addToCart}
                         />

                    ))}
                </div>
            </div>
        </>
    );
}