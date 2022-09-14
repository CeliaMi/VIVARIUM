//import React, { useEffect, useState, useReducer } from "react";
import React from 'react';
import axios from 'axios';
import './estilob3.css';


function TiempoAemet() {


    const [tiempo, setTiempo] = React.useState([])

        React.useEffect(()=>{
            TiempoMar()
        },[])

        const TiempoMar = ()=> {
            
            axios.get("https://opendata.aemet.es/opendata/api/prediccion/maritima/altamar/area/2/?api_key=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjZWxpYWZ1bGxzdGFja0BnbWFpbC5jb20iLCJqdGkiOiJhM2JkMjM2Zi05NGE1LTQwMjAtODhhNi1jNjMzMGRhN2QwMzEiLCJpc3MiOiJBRU1FVCIsImlhdCI6MTY2MjU0Njk3NSwidXNlcklkIjoiYTNiZDIzNmYtOTRhNS00MDIwLTg4YTYtYzYzMzBkYTdkMDMxIiwicm9sZSI6IiJ9.b8CXI57c7GmD0aNKmzeAXGAjUIU8T5gvXxs_dbxuBJ0")
                    
                .then(res => {
        
                    return res.data.datos;
        
                }).then(res => {
        
                    axios.get(res)
        
                        .then(res => {
        
                            const result = res.data[0].situacion.texto;
                            setTiempo(result)
                            console.log(result)
                            })
                        
                        })
        }
      
                       
        
        return (
            <div>
            <p className='apiTiempoPrediccion'>
            <b>Estado del Mediterráneo en directo🔴: </b>
            </p>
            <p className='avisoDatosTiempo'> {tiempo}</p>
            <p className='apiTiempoPrediccion'> *Datos obtenidos de la Agencia estatal de Meteorología</p>
            </div>
           

        )
    
}       

export default TiempoAemet;


