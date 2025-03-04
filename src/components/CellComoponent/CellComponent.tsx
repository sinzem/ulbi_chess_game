import { Cell } from "@/models/Cell";
import styles from "./cellComponent.module.css";
import { FC } from "react";
import Image from "next/image";

interface CellProps {
    cell: Cell;
    selected: boolean;
    click: (cell: Cell) => void;
}

const CellComponent: FC<CellProps> = ({cell, selected, click}) => {
    return (
        <div 
            className={`${styles.cell} ${styles[cell.color]} ${styles[String(selected)]}`}
            onClick={() => click(cell)} 
            style={{background: cell.available && cell.figure ? "green" : ""}}   
        >
            {cell.available && !cell.figure && 
                <div className={styles.available}></div>
            }
            {cell.figure?.logo && 
                <Image src={cell.figure.logo} alt="figure"/>
            }
        </div>
    );
};

export default CellComponent;