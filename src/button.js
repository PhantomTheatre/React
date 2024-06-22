import './App.css';
import React, {Component} from 'react'

export default class Button extends Component{
	constructor (props) {
		super(props)
		this.state = {
			icon_opacity: [1, "relative", "0vw", 0, "absolute","-100vw"],
			list_on: () => {
				this.setState({
					icon: "./img/" + this.props.icon.toString() + ".gif",
					icon_opacity: [0, "absolute", "-100vw", 1, "relative",  "0vw"],
				});
				this.state.fly();
			},
			list_out: () => {
				this.setState({
					icon: "./img/" + this.props.icon.toString() + ".png",
					icon_opacity: [1, "relative", "0vw", 0, "absolute","-100vw"],
				});
			},
			
			fly_index:  ["","",this.props.label],
			fly: () => {
				if (this.state.fly_index[2] === this.props.label){
					const fly_process = setInterval(() => {
						if (this.state.fly_index[0] != this.props.label ) {
							this.setState({ 
								fly_index: [this.state.fly_index[0] + this.state.fly_index[1], this.state.fly_index[2][0], this.state.fly_index[2].slice(1,this.props.label.length)]   
							});
						} else{
							this.setState({fly_index: ["","",this.props.label] });
							clearInterval(fly_process);
						}
					}, 60	);	
				}
			},
		};
	}
	componentDidMount() {
		console.log(this.state.icon)}
	render() {
		return(
			<div id = "button" style= {{width: "10vw", height: "8vh"}} onMouseEnter={() => this.state.list_on()} onMouseLeave={() => this.state.list_out()}> 
				<img style={{ position:  this.state.icon_opacity[1], left: this.state.icon_opacity[2], top: "0.7vh", height: "4vh", width: "2vw", opacity: this.state.icon_opacity[0]}}src={require("./img/" + this.props.icon.toString() + ".png")}/>
				<img style={{ position:  this.state.icon_opacity[4], left: this.state.icon_opacity[5], top: "1vh", height: "5vh", width: "2.2vw", opacity: this.state.icon_opacity[3]}}src={require("./img/" + this.props.icon.toString() + ".gif")}/>
				<span>&nbsp;</span> 
				<div id="label" style={{display: "inline"}}>
					<a href={this.props.href}>{this.state.fly_index[0]}</a>
					<a href={this.props.href} style={{fontSize: "40px", color: "yellow"}}>{this.state.fly_index[1]}</a>
					<a href={this.props.href}>{this.state.fly_index[2]}</a>
				</div>
			</div>
		)
	}
}