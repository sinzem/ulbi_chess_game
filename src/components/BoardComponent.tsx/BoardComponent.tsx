import { Board } from "@/models/Board";
import styles from "./boardComponent.module.css";
import { Fragment, FC, useState } from "react";
import CellComponent from "../CellComoponent/CellComponent";
import { Cell } from "@/models/Cell";

interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void;
}

const BoardComponent: FC<BoardProps> = ({board, setBoard}) => {

    const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

    return (
        <div className={styles.board}>
            {board.cells.map((row, index) => 
                <Fragment key={index}>
                    {row.map(cell => 
                        <CellComponent 
                            cell={cell}
                            key={cell.id}
                        />
                    )}
                </Fragment>
            )}
        </div>
    );
};

export default BoardComponent;