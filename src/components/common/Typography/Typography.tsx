import React, {FC} from 'react';
import styles from "./Typography.module.scss";
import {TypographyProps} from "./types";


export const Typography: FC<TypographyProps> = ({children}) => {
    return (
        <h2 className={styles.typography}>{children}</h2>
    );
};
