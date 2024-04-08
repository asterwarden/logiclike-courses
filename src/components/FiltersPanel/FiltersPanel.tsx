import React, {FC} from 'react';
import styles from "./FiltersPanel.module.scss";
import {FilterPanelItem} from "../FilterPanelItem";
import uuid from 'react-uuid';
import {tagsNames} from "./constants";
import {FiltersPanelProps} from "./types";

export const FiltersPanel: FC<FiltersPanelProps> = ({onClick, activeTag}) => {
    return (
        <div className={styles["filter-panel"]}>
            {tagsNames.map((tagName) => (
                <FilterPanelItem isActive={tagName === activeTag} key={uuid()} label={tagName} onClick={onClick}/>
            ))}
        </div>
    );
};
