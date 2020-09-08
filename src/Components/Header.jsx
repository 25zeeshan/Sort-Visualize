import React, {Component} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

import SortVisualizer from './SortVisualizer';
import '../css/Header.css';

class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            speed:25
        }
    }

    handleOnChange = (value) =>{
        this.setState({speed: value.target.value});
    }

    render(){
        let  { speed } = this.state;
        return(
            <>
                <Navbar dark expand="md" className="Navbar">
                    <div className="container">
                        <NavbarBrand href="/">
                            Sort Visualizer
                        </NavbarBrand>
                        <div className="slidecontainer">
                            Sorting Speed:
                            <input type="range" id="reversed" min={0.1} max={50} step={0.1} value={speed} className="slider" onChange={this.handleOnChange}/>
                        </div>
                    </div>
                </Navbar>
                <SortVisualizer animationSpeed={this.state.speed}/>
            </>
        );
    }
}

export default Header;