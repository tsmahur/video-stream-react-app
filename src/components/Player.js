import React from 'react'
import {useParams} from "react-router-dom";

export default function Player(props) {
   let hostIp = window.location.href.toString().includes("localhost")?"localhost":"Enter ur network Ip here" //network Ip in false condtiton
   let domain = `http://${hostIp}:8080/video/` //port of spring Boot application
   let {id}=useParams();
   let url=domain+id

   // tunnelUrl=null //uncomment tunnel url in fetchMeta()
   // let url=tunnelUrl+/video/"+id

   return (
      
      <div className="container mt-5">
         <h2 className="text-center">Video streaming</h2>
         {/* <!--    url in src end point of controller -> video/{id} --> */}
         <video src={url} className="col-10 offset-1" controls preload="none" autoPlay>
         </video>
      </div>
   )
}
