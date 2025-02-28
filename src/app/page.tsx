"use client";

import BoardComponent from "@/components/BoardComponent.tsx/BoardComponent";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { Board } from "@/models/Board";

export default function Home() {

    const [board, setBoard] = useState(new Board());

    useEffect(() => {
        restart();
    }, [])

    function restart() {
        const newBoard = new Board();
        newBoard.initCells();
        newBoard.addFigures();
        setBoard(newBoard);
    }

    return (
        <div className={styles.page}>
            <BoardComponent board={board} setBoard={setBoard}/>
        </div>
    );
}
