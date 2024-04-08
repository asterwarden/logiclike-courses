import React, {FC, useEffect, useState} from 'react';
import {FiltersPanel} from "../FiltersPanel";
import {CardsList} from "../CardsList";
import styles from "./Dashboard.module.scss";
import {ALL_TOPICS} from "./constants";
import {CoursesRecord} from "./types";
import {CardInfoProps} from "../CardsList/types";

export const Dashboard: FC = () => {
    const [records, setRecords] = useState<CardInfoProps[]>([]);
    const [activeTag, setActiveTag] = useState<string>(ALL_TOPICS);

    useEffect(() => {
        fetchRecords().then();
    }, []);

    const isAllTopics = (record: CardInfoProps, tagName: string) => ({
        ...record,
        isVisible: tagName === ALL_TOPICS ? true : record.tags.includes(tagName)
    });

    const onClick = (tagName: string) => {
        setActiveTag(tagName);
        setRecords(records.map((record: CardInfoProps) => (isAllTopics(record, tagName))));
    };

    const fetchRecords = async () => {
        const response = await fetch('https://logiclike.com/docs/courses.json');
        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
        }
        const result = await response.json();
        setRecords(result.map((record: CoursesRecord) => ({...record, isVisible: true})));
    };

    return (
        <div className={styles["dashboard"]}>
            <FiltersPanel onClick={onClick} activeTag={activeTag}/>
            {records && <CardsList records={records}/>}
        </div>
    );
};
