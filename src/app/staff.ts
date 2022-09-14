export class Staff 
{
    staffId: number;
    staffName: string;
    password: string;
    category:string;
    dateOfPost:Date;
    dateOfClosing:Date;
    
    constructor(a:number, b:string, c:string, d:string, e:Date, f:Date)
    {
        this.staffId=a;
        this.staffName=b;
        this.password=c;
        this.category=d;
        this.dateOfPost=e;
        this.dateOfClosing=f;
    }

}
