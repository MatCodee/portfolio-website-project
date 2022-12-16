import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import projects from "../../utils/projects.json";

const Detail = () => {
    const {id} = useParams()
    const filter_project = (id_params) => { return projects.filter((e) => Number(e.id) === Number(id_params))}
    
    useEffect(() => {
        console.log(id)
    },[])

    return (
        <>
   
        </> 
    )
}

export default Detail