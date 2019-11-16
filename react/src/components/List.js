import React from 'react';


class listItem extends Component{
	constructor(props){
		super(props);
		this.state = {
			msgs : ["hej","hello","smth"]
		}
	}
	addItem(e){
		e.preventDefault();
		const {msgs} = this.state;
		const newItem = "test";
		this.setState({
			msgs: [newItem,...this.state.msgs]
		})
	}
	render(){
		return(
		<form>
			<label> print a msg</label>
			<input> message </input>
			<button type="submit"> add </button>
		</form>
		<thead>
		<tr>
    		<th>#</th>
    		<th>Item</th>
    		<th>time</th>
  		</tr>
  		</thead>
  		<tbody>
  		<tr>
  			msgs.map(item =>{}
  				return(
  					<tr key=item>
  						<th scope ="row">1</th>
  						<td>item</td>
  				)
  			)
  		</tr>
  		</tbody>
  		</>
		)
	}

}

export default listItem