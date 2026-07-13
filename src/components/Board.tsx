import { useState } from "react";
import { Square } from "./Square";

export function Board(){

    const [ xIsNext, setXIsNext ] = useState(true)

    // Cria um ARRAY de Squares INICIALIZADOS em NULL
    const [ squares, setSquares ] = useState(Array(9).fill(null))

    function handleClick(i: number){
        
        const nextSquares = squares.slice()

        if(calculateWinner(squares) || squares[i]){
            return
        }

        if(xIsNext){
            nextSquares[i] = 'X'
        } else {
            nextSquares[i] = 'O'
        }

        setSquares(nextSquares)
        setXIsNext(!xIsNext)
    }

    const winner = calculateWinner(squares)

    let status

    if(winner){
        status = "Vencedor " + winner
    } else {
        status = "Próximo: " + (xIsNext ? 'X' : 'O')
    }

    function calculateWinner(squares: number[]){
        
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        for(let i = 0; i < lines.length; i++){
            
            const [ a, b, c ] = lines[i];

            if(squares[a] && squares[a] == squares[b] && squares[b] == squares[c]){
                return squares[a]
            }

        }

        return null

    }

    function clearBoard(){
        setSquares(Array(9).fill(null))
    }

    return (
        <>
            <h1 className="font-bold" >{ status }</h1>
            <section className="grid grid-cols-3 gap-1" >  
                <Square value={squares[0]} onSquareClick={ () => handleClick(0) } />
                <Square value={squares[1]} onSquareClick={ () => handleClick(1) } />
                <Square value={squares[2]} onSquareClick={ () => handleClick(2) } />
                <Square value={squares[3]} onSquareClick={ () => handleClick(3) } />
                <Square value={squares[4]} onSquareClick={ () => handleClick(4) } />
                <Square value={squares[5]} onSquareClick={ () => handleClick(5) } />
                <Square value={squares[6]} onSquareClick={ () => handleClick(6) } />
                <Square value={squares[7]} onSquareClick={ () => handleClick(7) } />
                <Square value={squares[8]} onSquareClick={ () => handleClick(8) } />
            </section>
            <button className="text-md font-bold p-3 hover:bg-gray-600 rounded-2xl cursor-pointer" onClick={() => clearBoard() } >Reiniciar</button>
        </>
    )

}