import './App.css';
import img1 from './img/earth.jpg';
import icon1 from './img/star.png';
import icon1_gif from './img/star.gif';
import icon2 from './img/folder.png';
import icon2_gif from './img/folder.gif';
import icon3 from './img/note.png';
import icon3_gif from './img/note.gif';
import React, {Component} from 'react'
//transparent
//<a target="_blank" href="https://icons8.com/icon/lWQbgdTdErdB/note">Note</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
//<a target="_blank" href="https://icons8.com/icon/bSBJ7165l9Vr/star">Star</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
//<a target="_blank" href="https://icons8.com/icon/JHFYPQIPcXti/folder">Folder</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>

export default class ButtonTap extends Component{
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
					} else{ 
						clearInterval(this.state.left);
						this.state.writer();
						
					}
				}, 5	);	
				this.setState({ left });
			},
			flow_right: () => {
			},
			list: [icon1, icon1_gif, "", icon2, icon2_gif, "", icon3, icon3_gif, ""],
			list_on: (a) => {
				document.getElementById("icon" + a.toString()).src = this.state.list[(a*3)-2]
				document.getElementById("icon" + a.toString()).style.height = 5 + "vh"
				document.getElementById("icon" + a.toString()).style.top = 1.3+ "vh"
			},
			list_out: (a) => {
				document.getElementById("icon" + a.toString()).src = this.state.list[(a*3)-3]
				document.getElementById("icon" + a.toString()).style.height = 4 + "vh"
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
					}
				}
			}, 5	);	
		this.setState({ exp });
	}
	
	render() {
		return(
			<div>
				<img style= {{position: "absolute", zIndex: "-1", top: "0", width: "100vw", height: "93vh"}} src={img1} alt = {"a"}/>				{/* Задний фон */}
				<div style= {{width: "100vw",position: "absolute", display:"flex", justifyContent: "center"}}> 												{/* Взрыв */}
					<div id="exp" style= {{position: "fixed", opacity: "1", borderRadius: "40%", backgroundImage: "radial-gradient(white, white, white,#000072, transparent,transparent, transparent)"}}></div>
				</div>
				<div id="left" style= {{position: "relative", left: "-40vw", paddingLeft: "7vw", paddingTop: "7vh", display: "flex", flexDirection: "column", width: "30vw", height: "92vh"}} >	{/*  Половинка */}
					<div style= {{position: "absolute",  opacity: ".3", border: "12vw solid transparent", borderLeft: "35vh solid green", borderTop: "50vh solid green", }}></div>	{/*  Зеленушка */}
					<div style= {{ zIndex: "1", height: "3vh",  display: "flex", justifyContent: "center", marginBottom: "2vw"}}>	{/* Заголовок */}
						<b style= {{fontFamily: "Yulong", fontSize: "60px",color: "white"}}>Werzant {this.props.cookie}</b>
					</div>
					<div style= {{ fontFamily: "Yulong", zIndex: "1",   display: "flex", marginLeft: "2vw", flexDirection: "column"}}> {/* Всё под заголовком */}
						<div style= {{overflow: "hidden",position: "relative",  width: "24vw", height: "7vh"}}>
							<h2 id="writer" style= {{position: "absolute",marginTop: "2px",color: "white"}}>{ this.state.article.slice(0,this.state.index)}</h2>  {/* Писатель */}
						</div>
						<ul style= {{ listStyleType: "none",marginLeft: "2vw", position: "relative", top: "-5vh", height: "43vh", fontSize: "3vh",color: "white", display: "flex", flexDirection: "column", justifyContent: "space-evenly",}}>
							<li style= {{width: "10vw", height: "5vh",}} onMouseEnter={() => this.state.list_on(1)} onMouseLeave={() => this.state.list_out(1)}>
								<img id = "icon1" style= {{position: "relative",top: "0.5vw",height: "4vh", width: "2vw"}} src={icon1}/>
								<span>&nbsp;</span>  Сеть Awz
							</li>
							<li style= {{width: "10vw", height: "5vh",}} onMouseEnter={() => this.state.list_on(2)} onMouseLeave={() => this.state.list_out(2)}>
								<img id = "icon2" style= {{position: "relative",top: "0.5vw",height: "4vh", width: "2vw"}} src={icon2}/>
								<span>&nbsp;</span>  <a style={{ color: "white", textDecoration: "none"}} href="a">Проекты</a>
							</li>
							<li style= {{width: "10vw", height: "5vh",}} onMouseEnter={() => this.state.list_on(3)} onMouseLeave={() => this.state.list_out(3)}>
								<img id = "icon3" style= {{position: "relative",top: "0.5vw",height: "4vh", width: "2vw"}} src={icon3}/>
								<span>&nbsp;</span>  О создателях
							</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

