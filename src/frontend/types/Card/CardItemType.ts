import { CardButtonsType } from "./CardButtonsType"


export interface CardItemType{
    image?: string
    title?: string
    description?: string
    buttons?: Array<CardButtonsType>
}