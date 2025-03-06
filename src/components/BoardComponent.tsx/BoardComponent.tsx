import { Board } from "@/models/Board";
import styles from "./boardComponent.module.css";
import { Fragment, FC, useState, useEffect } from "react";
import CellComponent from "../CellComoponent/CellComponent";
import { Cell } from "@/models/Cell";

interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void;
}

const BoardComponent: FC<BoardProps> = ({board, setBoard}) => {

    const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

    function click(cell: Cell) {
        if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
            selectedCell.moveFigure(cell);
            setSelectedCell(null);
            updateBoard();
        } else if (cell.figure) { 
            setSelectedCell(cell);
        } 
    }

    useEffect(() => {
        highlightCells()
    }, [selectedCell])

    function highlightCells() {
        board.highlightCells(selectedCell);
        updateBoard();
    }

    function updateBoard() {
        const newBoard = board.getCopyBoard();
        setBoard(newBoard);
    }

    return (
        <div className={styles.board}>
            {board.cells.map((row, index) => 
                <Fragment key={index}>
                    {row.map(cell => 
                        <CellComponent 
                            click={click}
                            cell={cell}
                            key={cell.id}
                            selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                        />
                    )}
                </Fragment>
            )}
        </div>
    );
};

export default BoardComponent;