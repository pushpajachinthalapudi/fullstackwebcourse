import React, { Component } from 'react'

export  class Form extends Component {
    constructor(props){
        super(props)
        this.state={
            name:null,
            branch:null,
        }
    }
    nameChangeHandler = (event)=>{
        console.log(event.target.value)
        
    }
    selectChangeHandler =(event)=>{
        console.log(event.target.value)
    }
    submitHandler =(event)=>{
        const name = event.target.Name.value
        const branch = event.target.Branch.value
        this.state({name,branch})
        console.log(this.state)
        // event.preventDefault()
    }
  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
            <label htmlFor="Name">Name</label>
            <input type="text" name="Name" onKeyUp={this.nameChangeHandler}/><br />
            <label htmlFor="Branch">Branch</label>
            <select name="Branch" onChange={this.selectChangeHandler}>
                <option value="CSE">CSE</option>
                <option value="ECE">ECE</option>
                <option value="EEE">EEE</option>
                <option value="MECH">MECH</option>
            </select><br />
            <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
export default Form