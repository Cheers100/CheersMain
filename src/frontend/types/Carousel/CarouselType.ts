import { CarouselItemType } from "./CarouselItemType";

export interface CarouselType{
    items: Array<CarouselItemType>
    customStyles: {
        [key: string]: string | undefined;
    }
    customSettings: {
        [key: string]: string | undefined;
    }
}