import {CoursesRecord} from "../Dashboard/types";

export type CardInfoProps = Pick<CoursesRecord, "name" | "tags" | "image" | "bgColor" | "name"> & {
    isVisible: boolean;
}

export type CardsListProps = {
    records: CardInfoProps[];
}
