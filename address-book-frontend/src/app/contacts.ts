export class Contact {
    id: number;
    contactName: string;
    email : string;
    mobile: string;
    landline: string;
    website: string;
    contactAddress: string;
    constructor(args:any){
      this.id = args.id;
      this.contactName=args.contactName;
      this.website=args.website;
      this.contactAddress=args.contactAddress;
      this.landline=args.landline;
      this.mobile=args.mobile;
      this.email=args.email;
    }
  }