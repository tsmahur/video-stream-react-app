import React from 'react'
import { Link } from "react-router-dom";

export default function VIdeoCard(props) {
   let {title,desc,length,id}=props.meta
   let videoRoute=`/video/${id}`
   let imgUrl=`img\\${id}.png`
   return (
      <div className="card col-md-3  mx-2 my-2" >
         {/* image to be added under public root : name is same as ID in response from API */}
         <img src={imgUrl} className="card-img-top" alt={title} /> 
            <div className="card-body">
               <h5 className="card-title">{title}</h5>
               <p className="card-text">{desc}</p>
               <p>{length}</p>
               <Link to={videoRoute} className="btn btn-primary">Watch Video</Link>
            </div>
         </div>
         
         )
}
