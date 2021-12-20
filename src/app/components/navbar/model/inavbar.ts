import { Iimg } from "../../shared/sharedModel/ishared";

export interface Inavbar {
    logo: Iimg
    links: Ilink[]
}

export interface Ilink {
    path: string;
    name: string;
}