import React from 'react';
import facade from "../apiFacade";

class listItem extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			msgs : [{key : 1 ,code : 200 , message : "Succesfuld connect"}]
		}
	}



	somefunction(e){
		e.preventDefault();
		const {msgs} = this.state;
		var list = this.state.msgs;
		const newItem = this.newItem.value;
		facade.TryGet(newItem,list)
				.then(res => this.setState({ msgs: list}));

	}

	CheckIfUser(e){
		e.preventDefault();
		const {msgs} = this.state;
		var list = this.state.msgs;
		facade.CheckIfUser(list)
				.then(res => this.setState({ msgs: list}));
	}
	CheckIfAdmin(e){
		e.preventDefault();
		const {msgs} = this.state;
		var list = this.state.msgs;
		facade.CheckIfAdmin(list)
				.then(res => this.setState({ msgs: list}));
	}
	render(){
		const {msgs} = this.state;
		return(
		<div>
		<form onSubmit ={(e) => {this.somefunction(e)}} >
			<label> Test en Get metode</label>
			<input ref={input => this.newItem = input} placeholder="5" id="msg" />
			<button type="submit"> add </button>
		</form>
		<button onClick={(e) => {this.CheckIfAdmin(e)}}> er du admin? </button> <button onClick={(e) => {this.CheckIfUser(e)}}> er du User? </button>
		<table className ="table">
			<thead>
				<tr>
    				<th>#</th>
    				<th>Item</th>
    				<th>time</th> 
  				</tr> 
  			</thead>
  			<tbody>
  			{
  				msgs.map(item =>{
  					return(
  						<tr  key={item.key}>
  							<td>{item.code}</td>
  							<td>{item.message}</td>
  						</tr> 
  					)
  				})
  			}
  			</tbody>
  		</table>

  		</div>
		)
	}

}

export default listItem