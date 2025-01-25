import { IconDefinition } from "@fortawesome/free-brands-svg-icons";

export interface CarouselItemType {
    image?: string,
    icon?: IconDefinition
    title: string,
    description: string,
    buttonText?: string,
    buttonLink?: string,

}