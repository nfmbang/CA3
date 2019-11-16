import React from 'react';


class listItem extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			msgs : ["hej","hello","smth"]
		}
	}
	addItem(e){
		e.preventDefault();
		const {msgs} = this.state;
		const newItem = this.newItem.value;
		this.setState({
			msgs: [newItem,...this.state.msgs]
		})
	}
	render(){
		const {msgs} = this.state;
		return(
		<div>
		<form onSubmit ={(e) => {this.addItem(e)}} >
			<label> print a msg</label>
			<input ref={input => this.newItem = input} placeholder="msg" id="msg" />
			<button type="submit"> add </button>
		</form>

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
  						<tr key={item}>
  							<th scope ="row">1</th> 
  							<td>{item}</td>
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