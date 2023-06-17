import React, { Component } from 'react'
import ClassExampleStyle from './ClassExample.module.css'
import Channel from './Channel'

export default class ClassExample extends Component {
    constructor(props){
        super(props)
        this.props=props;
        this.state = {
          swapStatus: true,
          shoutout:"Please login here",
          channels : [
            {
              id:0,
              name:"ABC",
              url:"abc.com"
            },
            {
              id:1,
              name:"XYZ",
              url:"XYZ.com"
            },
            {
              id:2,
              name:"UVW",
              url:"UVW.com"
            }
          ]
        }
        
    }
    buttonClickHandler = ()=> {
     // alert(this.props.data);
     this.setState({
      shoutout:"Thank you for login"
     
     })
    
     
    }
    swapHandler = ()=> {
       this.setState({swapSatus:!(this.state.swapStatus)})

    }

  render() {
    const style={
      color:"red"
    }
    let cs;
    cs=this.state.channels.map((channel,index)=>{
      return<>
      <Channel key={index} id={index} name={channel.name} />
      </>
    })
    return (
      <div className={ClassExampleStyle.Divstyle}>
        <h1 style={style}>This is a class based component. Data is {this.props.data}</h1>
        <h2 style={{color:'blue'}}>{this.state.shoutout}</h2>
        {this.state.swapStatus === true ? cs :''}
        
        <button onClick={this.swapHandler}>Swap</button>
      </div>
    )
  }
}
