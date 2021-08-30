import React, { Component } from 'react'
import VIdeoCard from './VIdeoCard'
import meta from './meta.json'

export default class Home extends Component {

   constructor() {
      super()
      this.state = {
         response: {}
      }
      
   }
   componentDidMount() {
      this.fetchMetaData()
   }

   isOffline = false
   // tunnelUrl=null //uncomment tunnel url in fetchMeta()
   hostIp = window.location.href.toString().includes("localhost")?"localhost":"Enter ur network Ip here" //network Ip in false condtiton

   domain = `http://${this.hostIp}:8080/video/`
   apiEndPoint = "meta"

   fetchMetaData = async () => {
      let url = this.domain + this.apiEndPoint
      // let url=tunnelUrl+/video/" +this.apiEndPoint
      if (this.isOffline) {
         let data = meta;
         this.response = await data;
      }
      else {
         let data = await fetch(url);
         this.response = await data.json();
      }
      this.setState({
         response: this.response
      })
   }

   render() {
      return (
         <div>
            <h2 className="text-center" style={{ margin: '20px 0px' }}>Collection</h2>
            <div className="container my-4">
               <div className="row d-flex justify-content-center">
                  {
                     this.response && this.response.metas &&
                     this.response.metas.map((meta) => {
                        return (
                           <VIdeoCard key={meta.id} meta={meta} />
                        )
                     })
                  }
               </div>
            </div>
         </div>
      )
   }
}