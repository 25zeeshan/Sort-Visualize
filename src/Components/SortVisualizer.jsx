import React, {Component} from 'react';
import '../css/SortVisualizer.css';
import {getSelectionSortAnimation, getquickSortAnimations, getBubbleSortAnimation, getInsertionSortAnimation, getMergeSortAnimation} from '../algorithm/sortingAlgorithm.js';
import { Button, ButtonToolbar } from 'reactstrap';

let array_size=0;

function randomInt(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class SortVisualizer extends Component{
    constructor(props){
        super(props);
        this.state={
            array: [],
        };
    }
    
    componentDidMount(){
        this.resetArray();
    }

    resetArray(){
        const array=[];

        const width = window.innerWidth;
        array_size = Math.floor((0.7 * width)/4);

        const height = window.innerHeight;
        let max_height = Math.floor(0.7 * height);

        for(let i=0;i<array_size;i++){
            array.push(randomInt(20,max_height));
        }
        this.setState({array});
    }

    resetColor(){
        const arrayBars = document.getElementsByClassName('vertical-bars');
        for(let i=0;i<array_size;i++){

            if(i!==array_size-1){
                const bar = arrayBars[i].style;
                const bar1 = arrayBars[i+1].style;
                setTimeout(() => {
                    bar1.backgroundColor = "red";
                    bar.backgroundColor = "lightblue";
                },i * 1);
            }
            else{
                const bar = arrayBars[i].style;
                setTimeout(() => {
                    bar.backgroundColor = "lightblue";
                },i * 1);
            }
        }
    }

    insertionSort(){
        const animation = getInsertionSortAnimation(this.state.array);
        const arrayBars = document.getElementsByClassName('vertical-bars');
        for (let i = 0; i < animation.length; i++) {
            const flag = animation[i][0];
            
            if(flag === 'C1' || flag==='C2'){
                const barOneIdx = animation[i][1];
                const barTwoIdx = animation[i][2];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                
                setTimeout(() => {
                    var color;
                    if(i===0)
                        color='red';
                    else
                        color = (flag==='C2')? 'lightgreen': 'red';
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * this.props.animationSpeed/10);
                
            }
            if(flag === 'S'){
                setTimeout(() => {
                    const barOneIdx = animation[i][1];
                    const barTwoIdx = animation[i][3];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    barOneStyle.height = `${animation[i][2]}px`;
                    barTwoStyle.height = `${animation[i][4]}px`;
                }, i * this.props.animationSpeed/10);
            }
        }
    }

    bubbleSort(){
        
        const animation = getBubbleSortAnimation(this.state.array);
        const arrayBars = document.getElementsByClassName('vertical-bars');

        for (let i = 0; i < animation.length; i++) {
            const flag = animation[i][0];
            
            if(flag === 'C1' || flag==='C2'){
                const barOneIdx = animation[i][1];
                const barTwoIdx = animation[i][2];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                
                setTimeout(() => {
                    var color;
                    if(i===0)
                        color='red';
                    else
                        color = (flag==='C2')? 'lightblue': 'red';
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * this.props.animationSpeed/10);
                
            }
            if(flag === 'S'){
                setTimeout(() => {
                    const barOneIdx = animation[i][1];
                    const barTwoIdx = animation[i][3];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    barOneStyle.height = `${animation[i][2]}px`;
                    barTwoStyle.height = `${animation[i][4]}px`;
                }, i * this.props.animationSpeed/10);
            }
            if(flag==='CL'){
                setTimeout(() =>{
                    const barOneIdx = animation[i][1];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.backgroundColor = 'lightgreen';
                },i * this.props.animationSpeed/10);
            }

        }
    }

    selectionSort(){ 
        
        const animation = getSelectionSortAnimation(this.state.array);
        const arrayBars = document.getElementsByClassName('vertical-bars');
        
        for (let i = 0; i < animation.length; i++) {
            const flag = animation[i][0];
            
            if(flag === 'C1' || flag==='C2'){
                const barOneIdx = animation[i][1];
                const barTwoIdx = animation[i][2];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                
                setTimeout(() => {
                    var color;
                    if(i===0)
                        color='red';
                    else
                        color = (flag==='C2')? 'lightblue': 'red';
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * this.props.animationSpeed/10);
                
            }
            if(flag === 'S'){
                setTimeout(() => {
                    const barOneIdx = animation[i][1];
                    const barTwoIdx = animation[i][3];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    barOneStyle.height = `${animation[i][2]}px`;
                    barTwoStyle.height = `${animation[i][4]}px`;
                    barOneStyle.backgroundColor = 'lightgreen';
                }, i * this.props.animationSpeed/10);
            }
        }
            
        
    }

    mergeSort(){
        const animation = getMergeSortAnimation(this.state.array);
        const arrayBars = document.getElementsByClassName('vertical-bars');
        for(let i=0;i<animation.length;i++){
            const flag = animation[i][0];
            
            if(flag === 'C1' || flag==='C2'){
                const barOneIdx = animation[i][1];
                const barTwoIdx = animation[i][2];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                
                setTimeout(() => {
                    var color;
                    if(i===0)
                        color='red';
                    else
                        color = (flag==='C2')? 'lightgreen': 'red';
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * this.props.animationSpeed/10);
                
            }
            if(flag === 'S'){
                setTimeout(() => {
                    const barOneIdx = animation[i][1];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${animation[i][2]}px`;
                }, i * this.props.animationSpeed/10);
            }
        }
    }

    quickSort(){
        const animation = getquickSortAnimations(this.state.array);
        const arrayBars = document.getElementsByClassName('vertical-bars');

        console.log(animation);

        for (let i = 0; i < animation.length; i++) {
            const flag = animation[i][0];
            
            if(flag === 'C1' || flag==='C2'){
                const barOneIdx = animation[i][1];
                const barTwoIdx = animation[i][2];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                
                setTimeout(() => {
                    var color;
                    if(i===0)
                        color='red';
                    else
                        color = (flag==='C2')? 'lightblue': 'red';
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * this.props.animationSpeed/10);
                
            }
            if(flag === 'S'){
                setTimeout(() => {
                    const barOneIdx = animation[i][1];
                    const barTwoIdx = animation[i][3];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    barOneStyle.height = `${animation[i][2]}px`;
                    barTwoStyle.height = `${animation[i][4]}px`;
                }, i * this.props.animationSpeed/10);
            }
            if(flag === 'CL'){
                setTimeout(() => {
                    const barIdx = animation[i][1];
                    const barStyle = arrayBars[barIdx].style;
                    barStyle.backgroundColor = "lightgreen";
                }, i* this.props.animationSpeed/10);
            }
        }
    }

    handleNewArray(){
        let newArrayPromise = new Promise((resolve, reject) => {
            this.resetArray();
            resolve("Reset Array Done");
        });
        newArrayPromise.then((message) => {
            console.log(message);
            this.resetColor();
        })
    }

    handleSelectionSort(){

        let newArrayPromise = new Promise((resolve, reject) => {
            this.selectionSort();
            resolve("selection sort Done");
        });
        newArrayPromise.then((message) => {
            console.log(message);
            this.resetColor();
            console.log("reset color done");
        }).catch((err) => { console.log(err) });
    }

    render(){
        const array = this.state.array;
        return(
            <>
                <div className="buttons">
                    <ButtonToolbar>
                        <Button className="buttons" color="danger" onClick={() => this.handleNewArray() }>Generate New Array</Button>
                        <Button onClick={() => this.selectionSort() }>Selection Sort</Button>
                        <Button color="success" onClick={() => this.bubbleSort() }>Bubble Sort</Button>
                        <Button onClick={() => this.insertionSort() }>Insertion Sort</Button>
                        <Button color="success" onClick={() => this.mergeSort() }>Merge Sort</Button>
                        <Button onClick={() => this.quickSort() }>Quick Sort</Button>
                    </ButtonToolbar>
                </div>
                <div className="array-container">
                    {array.map((value, id) => {
                        
                        return (
                            <div 
                                className="vertical-bars"
                                key={id}
                                style={{height: `${value}px`}}>
                            </div>
                        );
                    })}
                </div>
               
            </>
        );
    }
}

export default SortVisualizer;