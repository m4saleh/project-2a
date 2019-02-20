import React, { Component } from 'react';


class Child extends Component {
state = {
    cross:false,
    // uncross:'false'
    crossClass: "uncross"
    }


// checkLine = () =>{
//     if (this.state.cross === 'false'){
//         this.setState({cross: 'true'} )
//         console.log('cross');
        
//     } else if (this.state.uncross === 'false'){
//         this.setState({ uncross: 'true' })
//         console.log('uncross');
//     }
// }




    checkLine = () => {
        //call up the cross
        if (this.state.crossClass === "uncross"){
            //give css for cross when cross false
            this.setState({ 
                cross: false, 
                crossClass: "cross"
            })
        }else {
            //when cross true take this css
            this.setState({ 
                cross: true, 
                crossClass: "uncross"
            })
        }

        
    }
   
    // clearOneList = (number)=>{
    //     // this.setState(this.listArray.remove(number));
    //     // this.listArray
    //     this.setState();

    //     // array.remove(number);
    //     console.log('Clear on list');
        
    // }
    render() {

        return (
            <div className={this.state.crossClass}>
                <input  type="checkbox" className="check"  onChange={ this.checkLine} />
                {this.props.text}
                <bytton type="reset" value="Reset" className="redX" onClick={() => this.props.deleteList(this.props.index)}>✕</bytton >
            </div >
        );
    }
}

export default Child;
