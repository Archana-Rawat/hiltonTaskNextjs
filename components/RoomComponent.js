import React,{ Component } from 'react';

class RoomComponent extends Component {
	render() {  
	if(this.props.rooms){
	  const disabled = this.props.counter === 0 ? false : !this.props.rooms.isChecked;
         return ( 
         <div className={!disabled?"column":"columnDisabled"}>
				<div className={!disabled?"inner1":"inner1Disabled"}>
				{this.props.counter===0?(
					<label>Room 1</label>
					):(<label>
					<input type="checkbox" id={`chkbox-${this.props.counter}`} checked={this.props.rooms.isChecked}
					onChange={e => this.props.changeEvent(e,this.props.counter)}
					/>
					Room {this.props.counter+1}</label>)
				}
				</div>
				<div className={!disabled?"inner2":"inner2Disabled"}>
					<label>Adults<br />(18+)
		          <select disabled={disabled} 
		          	id={`adult-${this.props.counter}`}
		            name="adult"
		           	value={this.props.rooms.adult}
		            onChange={e => this.props.changeEvent(e,this.props.counter)}>
		            <option value="1">1</option>
		            <option value="2">2</option>
		          </select>
		         </label>
		         <label>Children<br />(0-17)
		          <select disabled={disabled} 
		          	id={`adult-${this.props.counter}`}
		            name="children"
		            value={this.props.rooms.children}
		            onChange={e => this.props.changeEvent(e,this.props.counter)}>
		            <option value="0">0</option>
		            <option value="1">1</option>
		            <option value="2">2</option>
		          </select>
		         </label>
		   	</div>
<style jsx>{`
      html {
  font-family: sans-serif;
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-size: 18px;
}

.column {
  margin-top:20px;
  float: left;
  width: 15%;
  margin-left: 10px;
  height: 120px; 
  background-color:#F8F8F8;
  border-radius: 5px;
  font-size: 15px;
}

.columnDisabled {
  margin-top:20px;
  float: left;
  width: 15%;
  margin-left: 10px;
  height: 120px; 
  background-color:#F8F8F8;
  border-radius: 5px;
  font-size: 15px;
}
.inner1{
  width:100%;
  height:25%;
  background:#E8E8E8;
  border-radius: 5px 5px 0px 0px;	
}
.inner1Disabled:{
  width:100%;
  height:25%;
  background:#F8F8F8;
  border-radius: 5px 5px 0px 0px;
}

.inner2{
  width:96%;
  height:66%;
  background:#fff;
  margin-left:2%;
  margin-right:2%;
  margin-top:2%;
  margin-bottom:2%; 
  border-radius: 0px 0px 5px 5px;   
}

.inner2Disabled{
  width:96%;
  height:66%;
  background:#F8F8F8;
  margin-left:2%;
  margin-right:2%;
  margin-top:2%;
  margin-bottom:2%; 
  border-radius: 0px 0px 5px 5px;   
}
label { display: inline-block;margin-top:10px;margin-left:30Px;  white-space: pre-wrap;
 }
select { display: block;margin-left:10Px;margin-top:10px; }
    `}</style>
			</div> 
 
         )}}
	}
export default RoomComponent;
