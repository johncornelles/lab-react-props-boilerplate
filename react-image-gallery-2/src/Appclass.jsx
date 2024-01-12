import { Component } from "react";
import './App.css'
export default class Appclass extends Component {
    render(){
        let imageArr = this.props.imageArr;
        console.log(imageArr);
        return (
            <div className="grids">
                {
                    imageArr.map((elephant) => <img height={"400px"} key={elephant.id} src={elephant.img} id={elephant.id} alt="elephant" />)
                }
            </div>
        );
    }
}