
export enum Category{
    books='books',
    newspaper='newspaper', 
    magazine='magazine'
}
export interface IProduct{

    id:number;
    name:string;
    category:Category;
    price:number;
    image:string;
    rating:number;
    qty:number;

}