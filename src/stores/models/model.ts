import Name from "./name";

type Model = {
    id: number;
    name: string;
    description: string;
    photo: string;
    brand: Name;
    idBrand: Name["id"]
}

export default Model;