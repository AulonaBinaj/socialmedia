// export interface  Posts {
//     id?: string;
//     title?: string;
//     description?: string;
//     upload?: string;
 
// }

export class Posts {
    id?: string;
    title?: string;
    description?: string;
    upload?: string;

    constructor(obj: any) {
      //  this.id = obj && obj.id,
        this.title = obj && obj.title
        this.description = obj && obj.description,
        this.upload = obj && obj.upload
    }
    }