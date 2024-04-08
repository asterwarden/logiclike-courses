import React, {FC} from 'react';
import {Card} from "../Card";
import styles from "./CardsList.module.scss";
import uuid from 'react-uuid';
import {CardInfoProps, CardsListProps} from "./types";

export const CardsList: FC<CardsListProps> = ({records}) => {

    return (
        <div className={styles["cards-list"]}>{records.map((record: CardInfoProps) => (record.isVisible &&
            <Card key={uuid()} record={record}/>)
        )}</div>

    );
};
