import React, {FC} from 'react';
import {Typography} from "../common/Typography";
import styles from "./FilterPanelItem.module.scss";
import classnames from "classnames/bind";
import {FilterPanelItemProps} from "./types";

const cn = classnames.bind(styles);

export const FilterPanelItem: FC<FilterPanelItemProps> = ({label, onClick, isActive}) => {
    return (
        <div className={cn(styles["filter-panel-items"], {active: isActive})} onClick={() => onClick(label)}>
            <Typography>{label}</Typography>
        </div>
    );
};
