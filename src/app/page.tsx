"use client";

import BoardComponent from "@/components/BoardComponent.tsx/BoardComponent";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { Board } from "@/models/Board";
import { Player } from "@/models/Player";
import { Colors } from "@/models/Colors";
import LostFigures from "@/components/LostFigures/LostFigures";
import Timer from "@/components/Timer/Timer";

export default function Home() {

    const [board, setBoard] = useState(new Board());
    const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE));
    const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK));
    const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null); 

    useEffect(() => {
        restart();
        setCurrentPlayer(whitePlayer);
    }, [])

    function restart() {
        const newBoard = new Board();
        newBoard.initCells();
        newBoard.addFigures();
        setBoard(newBoard);
    }

    function swapPlayer() {
        setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer);
    }

    return (
        <div className={styles.page}>
            <Timer 
                restart={restart}
                currentPlayer={currentPlayer}
            />
            <BoardComponent 
                board={board} 
                setBoard={setBoard}
                currentPlayer={currentPlayer}
                swapPlayer={swapPlayer}
            />
            <div>
                <LostFigures 
                    title="White figures"
                    figures={board.lostWhiteFigures}
                />
                <LostFigures 
                    title="Black figures"
                    figures={board.lostBlackFigures}
                />
             </div>
        </div>
    );
}
