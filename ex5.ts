type Author ={
    firstName:string,
     lastName:string
}
type Book = {
    author:Author;
    name:string;
    pages?:number;
}

const book:Book={
    author: {
firstName:"Nicolo",
lastName: "Machiavelli",
},   name:"The Prince", 
}


