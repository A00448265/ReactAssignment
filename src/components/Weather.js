import React, { Component } from "react"
import weatherURLcold from "../assets/cold.png"
import weatherURLmild from "../assets/mild.png"
import weatherURLsunny from "../assets/sunny.png"

let weatherF;

class Weather extends Component {
    constructor(props) {
        super(props)
        this.state = {
            temp_c : '',
            temp_f : '',
            selectedMenu: true
            //"current":{"temp_c":0.8,"temp_f":33.4
        }
        this.fetchData = this.fetchData.bind(this);
        console.log('Constructor');
    }

    fetchData() {
        fetch("http://api.weatherapi.com/v1/current.json?key=5c6a4ab75b7d445aadf212133213011&q=Chandigarh")
            .then(response => {
                return response.json()
            })
            .then(response => {
                //  console.log(response);
                 // console.log(response.current.temp_c);
                  //console.log(response.current.temp_c);
                this.setState({
                    temp_c: response.current.temp_c,
                    temp_f: response.current.temp_f,
                    })
            });
        this.setTempState = this.setTempState.bind(this)
    }

    componentDidMount() {
        console.log("Did mount");
        this.fetchData()
    }

    setTempState(){
        this.setState({ selectedMenu: !this.state.selectedMenu })
        weatherF = ((parseFloat(this.state.temp_c) * 9 / 5) + 32).toFixed(2)  ;  //(T . 9/5) + 32
        console.log("temp is " + weatherF);    
    }

    render() {
        return (
            <div className="covid19-container">
                    {/* <button onClick={() =>  setTempState()}>Click here to change the weather state</button> */}
                    <button onClick={this.setTempState} >Click here to change the weather state</button>
                    
                    {this.state.selectedMenu === true ?
                    <p className="para"><b>Temperature in Celsius: </b>{this.state.temp_c}</p>
                     :
                    <p className="para"><b>Temperature in Fahrenheit: </b>{weatherF}</p>
                    }
                    
                   
                     {this.state.temp_c > 10 ?  (this.state.temp_c > 10 && this.state.temp_c < 20) ? <img src={weatherURLmild}/> :<img src={weatherURLsunny}/>   : <img src={weatherURLcold}/> } 
            </div>
        )
    }
}

export default Weather;
