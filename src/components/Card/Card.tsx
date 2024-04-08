import React, {FC} from 'react';
import {Typography} from "../common/Typography";
import styles from "./Card.module.scss";
import {CardProps} from "./types";

export const Card: FC<CardProps> = ({record}) => {
    const {image, bgColor, name} = record;
    return (
        <>
            <div className={styles.card}>
                <div className={styles["card-head"]} style={{backgroundColor: bgColor}}><img
                    className={styles["card-image"]} src={image} alt="Image"/></div>
                <div className={styles["card-description"]}><Typography>{name}</Typography></div>
            </div>
        </>
    );
};
