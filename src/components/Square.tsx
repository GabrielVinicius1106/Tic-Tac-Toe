interface ButtonParams {
    value: number
    onSquareClick: Function
}

export function Square({ value, onSquareClick }: ButtonParams){

    return (
        <button className="w-16 h-16 cursor-pointer rounded-2xl text-5xl font-extrabold bg-gray-800 text-white" onClick={ () => onSquareClick() } value={value} >{ value } </button>
    )

}