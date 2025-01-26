import { CardItemType } from "./CardItemType";

export interface CardType {
    items: Array<CardItemType>
    customStyles: {
        [key: string]: string | undefined;
    }
}