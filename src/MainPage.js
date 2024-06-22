import './App.css';
import img1 from './img/earth.jpg';
import man from './img/man.png';
import React, {Component} from 'react'
import Button from './button.js';

//transparent
//<a target="_blank" href="https://icons8.com/icon/lWQbgdTdErdB/note">Note</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
//<a target="_blank" href="https://icons8.com/icon/bSBJ7165l9Vr/star">Star</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
//<a target="_blank" href="https://icons8.com/icon/JHFYPQIPcXti/folder">Folder</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>

export default class MainPage extends Component{
	constructor (props) {
		super(props)
		this.state = {
			article: 
			"Я в своем познании настолько преисполнился, что я как будто бы уже\
			сто триллионов миллиардов лет проживаю на триллионах и\
			триллионах таких же планет, как эта Земля, мне этот мир абсолютно\
			понятен, и я здесь ищу только одного - покоя, умиротворения и\
			вот этой гармонии, от слияния с бесконечно вечным, от созерцания\
			великого фрактального подобия и от вот этого замечательного всеединства\
			существа, бесконечно вечного, куда ни посмотри, хоть вглубь - бесконечно\
			малое, хоть ввысь - бесконечное большое, понимаешь? А ты мне опять со\
			своим вот этим, иди суетись дальше, это твоё распределение, это\
			твой путь и твой горизонт познания и ощущения твоей природы, он\
			несоизмеримо мелок по сравнению с моим, понимаешь? Я как будто бы уже\
			давно глубокий старец, бессмертный, ну или там уже почти бессмертный,\
			который на этой планете от её самого зарождения, ещё когда только Солнце\
			только-только сформировалось как звезда, и вот это газопылевое облако,\
			вот, после взрыва, Солнца, когда оно вспыхнуло, как звезда, начало\
			формировать вот эти коацерваты, планеты, понимаешь, я на этой Земле уже\
			как будто почти пять миллиардов лет живу и знаю её вдоль и поперёк\
			этот весь мир, а ты мне какие-то... мне не важно на твои тачки, на твои\
			яхты, на твои квартиры, там, на твоё благо.",
			
			index: 0,
			exp_count: 0,
			wait: 0,
			writer: () => { 
				setInterval(() => {
					this.setState({
						index : this.state.index+=1
					});
					if (this.state.article[this.state.index] ==" ") {this.setState({index : this.state.index+=1})};
					if (this.state.index >= this.state.article.length){
					this.setState({index : 0})
					};
					if (this.state.index >= 65){
						document.getElementById("writer").style.top = (3.4-(this.state.index*0.052))+ 'vh';
					} else{ document.getElementById("writer").style.top = (0.2)+ 'vh';}
				}, 40);	
			},
			flow_left: () => {
				const left = setInterval(() => {
					if (document.getElementById("left").style.left <= 0 +  "vw"){
						this.setState({ wait: this.state.wait+0.5 });
						document.getElementById("left").style.left = (-40 + this.state.wait) + "vw";
						document.getElementById("right").style.right = (-40 + this.state.wait) + "vw";
					} else{ 
						clearInterval(this.state.left);
						this.state.writer();
						this.state.plane("horizontal");
						this.state.plane("vertical");
						
					}
				}, 5	);	
				this.setState({ left });
			},
			flow_right: () => {
			},
			plane: (direction) => {
				let plane_count = [0, 1]
				const plane_process = setInterval(() => {
					plane_count[0] += 1*plane_count[1]
					if (direction == "horizontal"){
						if (Math.abs(plane_count[0]) == 25) {plane_count[1] = -plane_count[1]}
						document.getElementById("left").style.paddingLeft = ((7 -(0.008*plane_count[0])) + "vw")
					}else{
						if (Math.abs(plane_count[0]) == 20) {plane_count[1] = -plane_count[1]}
						document.getElementById("left").style.paddingTop = ((7 -(0.008*plane_count[0])) + "vh")
					}
				}, 50);	
				this.setState({ plane_process });
			},
			
			list: ["/a", "Сеть Awz", "/a", "Проекты", "/a", "О создателях"],
			list_button: [],
			create_buttons: () => {
				for (let i = 1; i < this.state.list.length/2 + 1; i++) { 
					this.state.list_button.push(<Button 
						key={i} 
						icon = {"icon" + i.toString()}
						href = {this.state.list[i*2-2]}
						label = {this.state.list[i*2-1]}
						/>);
					
					//src={require('./images/bumper1.png')}
				}	
			},
		};
	}
	
	componentDidUpdate() {}
	componentDidMount() { 
		const exp = setInterval(() => {
				if (this.state.exp_count < 150) { this.setState({ exp_count: this.state.exp_count+1 });
				document.getElementById("exp").style.height = (3.4+(2*this.state.exp_count))+ 'vh';
				document.getElementById("exp").style.width = (3.4+(4*this.state.exp_count))+ 'vh';
				document.getElementById("exp").style.bottom = (34-(this.state.exp_count*0.7))+ 'vh';
				} else {
					this.setState({ wait: this.state.wait+0.01 });
					document.getElementById("exp").style.opacity = 1- this.state.wait
					if (this.state.wait >= 1.5) {
						clearInterval(this.state.exp);
						this.setState({ exp_count: 0 });
						this.setState({ wait: 0 });
						this.state.flow_left();
						this.state.flow_right();
						this.state.create_buttons();
					}
				}
			}, 5	);	
		this.setState({ exp });
	}
	
	render() {
		return(
			<div>
				<img style= {{position: "absolute", zIndex: "-1", width: "100vw", height: "100vh"}} src={img1} alt = {"a"}/>				{/* Задний фон */}
				<div style= {{width: "100vw",position: "absolute", display:"flex", justifyContent: "center"}}> 												{/* Взрыв */}
					<div id="exp" style= {{position: "fixed", opacity: "1", borderRadius: "40%", backgroundImage: "radial-gradient(white, white, white,#000072, transparent,transparent, transparent)"}}></div>
				</div>
				<img id="right" style= {{position: "absolute", right: "-40vw", top: "10vh",width: "40vw", height: "60vh"}}  src={man}  alt = {"a"}/>
				<div id="left" style= {{position: "relative", left: "-40vw", paddingLeft: "7vw", paddingTop: "7vh", display: "flex", flexDirection: "column", width: "30vw", height: "92vh"}} >	{/*  Половинка */}
					<div style= {{position: "absolute",  opacity: ".3", border: "12vw solid transparent", borderLeft: "35vh solid green", borderTop: "50vh solid green", }}></div>	{/*  Зеленушка */}
					<div style= {{ zIndex: "1", height: "3vh",  display: "flex", justifyContent: "center", marginBottom: "2vw"}}>	{/* Заголовок */}
						<b style= {{fontFamily: "Yulong", fontSize: "60px",color: "white"}}>Werzant</b>
					</div>
					<div style= {{ fontFamily: "Yulong", zIndex: "1",   display: "flex", marginLeft: "2vw", flexDirection: "column"}}> {/* Всё под заголовком */}
						<div style= {{overflow: "hidden",position: "relative",  width: "24vw", height: "7vh"}}>
							<h2 id="writer" style= {{position: "absolute",marginTop: "2px",color: "white"}}>{ this.state.article.slice(0,this.state.index)}</h2>  {/* Писатель */}
						</div>
						{/* Кнопки */}
						<tbody style= {{ listStyleType: "none",marginLeft: "2vw", position: "relative", top: "0vh", height: "43vh", fontSize: "3vh",color: "white", display: "flex", flexDirection: "column", justifyContent: "space-evenly",}}>{this.state.list_button}</tbody>
					</div>
				</div>
			</div>
		);
	}
}

