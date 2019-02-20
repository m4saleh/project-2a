import React, { Component } from 'react';
import './App.css';
import Child from './child';

class App extends Component {
  //input 
  state = {
    formData: {
      textList: ''
    },


    listArray:[],
  }


  updateForm = (event) => {
    //
    const newData = event.target.value;
    //
    const originalState = this.state.formData
    //
    const copy = Object.assign({}, originalState);
    //
    const key = event.target.name
    //
    copy[key] = newData
    //
    this.setState({
      formData: copy,
    })
  }
  submitForm = (event) => {
    //function use for no refresh page
    event.preventDefault()
    //copy the arry start with index 0 
    const copy = this.state.listArray.slice(0)
    //take the arry and push the nwe 
    copy.push(this.state.formData)
    //copy the array and update change 
    this.setState({
      listArray: copy,
      formData: {
        textList:'',
      }
    })

  }
  print =()=>{
   console.log('√√');
  }
  clear=()=>{
    this.setState({ listArray: [] });
  }

  deleteList = (index) => {
    console.log('deleting item # ', index)

    var array = this.state.listArray.slice(0);
    console.log('arr val: ', array)
    array.splice(index, 1);
    console.log('arr val 2: ', array)
    this.setState({ listArray: array}) 

    // this.setState({this.state.formData.listArray.splice(index, 1)}  ) 
    
  }
  
  render() {
    //take array for map and call up the child , style and list array 
    const listInput = this.state.listArray.map((task , index) => {
      return <Child text={task.textList} index={index} deleteList={this.deleteList}/> 
    })
    return (
      <div >
      
        <form onSubmit={this.submitForm} >
        
          <label>
            <h1 className='addYour'>add your ToDo List:
        <input type="text" name="textList" className="inputText" onChange={this.updateForm} value={this.state.formData.textList} />
              <input type="submit" value="Submit" className="subm"/>
            </h1>
            
          </label>
         
         
        </form>
        {listInput}
        <button type="reset" value="Reset" className="clearButton" onClick={this.clear}>Clear</button>

      
        

      </div>
    );
  }
}

export default App;
