import React from "react"
// import Downloader from "filedownloader";
import Chapter from "./chapter"
import data from "../Data/data"


class Home extends React.Component {  
    render() {
        const introItems = Object.keys(data.Introdunction).map((key, id) => (
            <div key={id}>
            <div className="well">{key}</div>
            {data.Introdunction[key].map((item,index) => <Chapter key={index} item={item} />)}
            </div>
        ));
        const mathItems = Object.keys(data.Math).map((key,id) => (
            <div key={id}>
            <div className="well">{key}</div>
            {data.Math[key].map((item,index) => <Chapter key={index} item={item} />)}
            </div>
        ));
        const verbalItems = Object.keys(data.Verbal).map((key,id) => (
            <div key={id}>
            <div className="well">{key}</div>
            {data.Verbal[key].map((item,index) => <Chapter key={index} item={item} />)}
            </div>
        ));
        const awaItems = Object.keys(data.AWA).map((key,id) => (
            <div key={id}>
            <div className="well">{key}</div>
            {data.AWA[key].map((item,index) => <Chapter key={index} item={item} />)}
            </div>
        ));
        const integratedReasoningItems = Object.keys(data.IntegratedReasoning).map((key,id) => (
            <div key={id}>
            <div className="well">{key}</div>
            {data.IntegratedReasoning[key].map((item,index) => <Chapter key={index} item={item} />)}
            </div>
        ));
        
        return (
            <div className=".container-fluid">
                <div className="d-flex justify-content-center bg-secondary mb-3">
                    <div >
                       <h3>Lectures List</h3>
                    </div>
                </div>
              <div className="row">
                <div className="col-6" style={{borderRight: '2px solid orange'}}>
                  <div className="d-flex justify-content-center mb-3 bg-info">
                    <div >
                       <h6> Introduction</h6>
                    </div>
                   </div>
                  {introItems}
                  <div className="d-flex justify-content-center mb-3 bg-info">
                    <div >
                       <h6>Verbal</h6>
                    </div>
                   </div>
                  {verbalItems}
                  <div className="d-flex justify-content-center mb-3 bg-info">
                    <div >
                       <h6>AWA</h6>
                    </div>
                   </div>
                  {awaItems}
                   <div className="d-flex justify-content-center mb-3 bg-info">
                    <div >
                       <h6>Integrated Reasoning</h6>
                    </div>
                   </div>
                  {integratedReasoningItems}
                </div>
                <div className="col-6">
                <div className="d-flex justify-content-center mb-3 bg-info">
                    <div >
                       <h6>Math</h6>
                    </div>
                </div>
                   {mathItems}
                </div>
              </div>            
            </div>
        )    
    }
}

export default Home
