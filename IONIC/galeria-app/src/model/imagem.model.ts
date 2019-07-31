import { Galeria } from "./galeria.model";

export interface Imagem{
    id   : string;
    nome : string;
    img  : string;
    galeria: Galeria[];
}