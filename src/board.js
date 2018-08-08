import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
// import Square from './square.js'
import './board.css'



function Square (props) {
    console.log(props.disability)
return (<div className = "button">
<Grid item xs={6} sm={3} spacing = {8}  >
<Button disabled = {props.disability} className ="square" variant="fab" color="primary" aria-label="Add"
 onClick = {props.onClick}>
    {props.value}
   </Button>

   </Grid>
   </div>

)
}
class board extends Component {

    constructor(props)
    {
        super(props) 

        this.state = {
            squares : Array(9).fill(null) , 
            isnext : true , 
            disability : false , 
            winner : null 
            
        }
    }


    checkwinner = (squares) => {
        const  line = [
            [0, 1 ,2 ] , 
            [3 ,4 ,5 ] , 
            [6 , 7 , 8] , 
            [0 , 3 , 6] , 
            [1 , 4 , 7] , 
            [2 , 5 , 8] , 
            [0 , 4 , 8] ,
            [2 , 4 , 6]
        ]

        for(let i = 0;i< line.length ; i++) {

             const [a,b,c] = line[i] 

            if(squares[a]&&squares[a] === squares[b]&&squares[a] === squares[c])
            {
                return squares[a]
            }
           
        }
         return null
    }

    handleclick = (i) => {

    

        const squares = this.state.squares.slice()

        squares[i] =  this.state.isnext ? 'X' : 'O'
        const winner  = this.checkwinner(squares) 
        console.log(winner)
     if(winner) 
     {
        this.setState({
            squares : squares , 
            isnext : !this.state.isnext , 
            disability : true , 
            winner : winner
        })  
    }
    else {
        this.setState({
            squares : squares , 
            isnext : !this.state.isnext , 
            disability : false , 
            winner : null
        })
    }

      
    }    

 
    renderSquare(i)  {
      return <Square value = {this.state.squares[i]}
               onClick = {() => this.handleclick(i)} 
               disability = {this.state.disability}
      />    }


    render() 
    {

        return(
            <div className = "board">
        <div className="status"><h1>the winner is {this.state.winner}</h1></div>
        
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
        )
    }
}

export default board