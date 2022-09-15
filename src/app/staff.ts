export class Staff 
{
    staffId: number;
    staffName: string;
    password: string;
    category:string;
    dateOfPost:string;
    dateOfClosing:string;
    
    constructor(a:number, b:string, c:string, d:string, e:string, f:string)
    {
        this.staffId=a;
        this.staffName=b;
        this.password=c;
        this.category=d;
        this.dateOfPost=e;
        this.dateOfClosing=f;
    }

}
