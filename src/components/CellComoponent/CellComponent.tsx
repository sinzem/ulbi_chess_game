import { Cell } from "@/models/Cell";
import styles from "./cellComponent.module.css";
import { FC } from "react";
import Image from "next/image";

interface CellProps {
    cell: Cell;
    selected: boolean;
}

const CellComponent: FC<CellProps> = ({cell, selected}) => {
    return (
        <div className={`${styles.cell} ${styles[cell.color]} ${styles[String(selected)]}`}>
            {cell.figure?.logo && 
                <Image src={cell.figure.logo} alt="figure"/>
            }
        </div>
    );
};

export default CellComponent;