
import React from "react";

class ElementComponent extends React.Component{
    constructor(props){
        super(props);
   
    }

    render(){
        return (
            <div className="main">
                <div  className="boxColor" style={{backgroundColor:  this.props.box}}>
  
                </div>
        <footer>{this.props.box}
        <button className="remover" onClick={()=>this.props.remover(this.props.box)}>Remove</button>
        </footer>
            </div>
        )
        }
}

export default ElementComponent;