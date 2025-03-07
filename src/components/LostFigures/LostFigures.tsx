import { Figure } from '@/models/figures/Figure';
import Image from 'next/image';
import React, { FC } from 'react';

import styles from "./lostFigures.module.css";

interface LostFiguresProps {
    title: string;
    figures: Figure[];
}

const LostFigures: FC<LostFiguresProps> = ({title, figures}) => {
    return (
        <div className={styles.lost}>
            <h3>{title}</h3>
            {figures.map(figure => 
                <div key={figure.id}>
                    {/* {figure.name}  */}{figure.logo && <Image width={20} height={20} src={figure.logo} alt={figure.name} />}
                </div>
            )}
        </div>
    );
};

export default LostFigures;