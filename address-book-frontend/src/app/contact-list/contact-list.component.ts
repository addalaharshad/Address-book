import { Component, OnInit,AfterViewInit,ChangeDetectorRef } from '@angular/core';
import { Contact } from '../contacts';
import { CONTACTS } from '../mock-contacts';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit,AfterViewInit {

  public contacts = CONTACTS;
  public selectedContact!: Contact;
  public contact: Contact = new Contact({});
  public index!: number;
  public show : boolean= false;
  public add: boolean = false;
  public counter:number=3;
  public noContact:boolean=false;
  public indexSelected:number=-1;

  constructor(private http:HttpClient,private router:Router) {
    
   }

  onHome() {
    this.selectedContact=undefined!;
    this.show=false;
    this.add=false;
  }

  ngOnInit() {
    this.http.get("https://localhost:7082/api/Contacts").subscribe(posts =>{
      this.contacts=posts as Contact[];
      console.log(posts)
    })
  }


  ngAfterViewInit(): void {
  }

  onSelect(contact: Contact,index:number): void {
    this.add =false;
    this.show=false;
    this.selectedContact = contact;
    this.indexSelected=index;
    console.log(contact)
    this.router.navigate(['/contact',this.selectedContact.id]);
  }

  onDelete(contact: Contact): void {
      //this.index=this.contacts.indexOf(contact);
      console.log(this.indexSelected);
      console.log("https://localhost:7082/api/Contacts/"+this.contacts[this.indexSelected].id.toString());
      this.http.delete("https://localhost:7082/api/Contacts/"+this.contacts[this.indexSelected].id.toString()).subscribe(ResponseData =>{
        this.contacts.splice(this.indexSelected,1);
        this.selectedContact=undefined!;
      });
    //   this.counter--;
    //   if(this.counter==0){
    //      this.noContact=true;
    //   }
    //   if(this.contacts.length){
    // (document.querySelector("#holder > li") as HTMLElement).click();
    //   }
  }

  update(): void {
    // let data={
    //   "contactName": this.selectedContact.contactName,
    //   "email": this.contact.email,
    //   "mobile": this.contact.mobile,
    //   "landline": this.contact.landline,
    //   "website": this.contact.website,
    //   "contactAddress": this.contact.contactAddress
    // }
    console.log(this.selectedContact);
    this.http.put("https://localhost:7082/api/Contacts/"+this.contacts[this.indexSelected].id.toString(),this.selectedContact).subscribe(ResponseData =>{
      this.add =false;
      this.show = ! this.show;
    })
  }

  addContact(contact: Contact): void {
    let tempcontact: Contact= new Contact(this.contact);
    let data=
      {
          "name": tempcontact.name,
          "email": tempcontact.email,
          "mobile": tempcontact.mobile,
          "landline": tempcontact.landline,
          "website": tempcontact.website,
          "address": tempcontact.address
      }
      console.log(data)
    this.http.post("https://localhost:7082/api/Contacts",data).subscribe(Responsedata =>{
      this.contacts.push(Responsedata as Contact);
      let temphero1: Contact= new Contact({});
      this.contact=temphero1;
      this.add = !this.add;
    })
  }

  onAdd(): void {
    this.show = false;
    this.add = true;
    this.selectedContact= undefined!; 
    this.router.navigate(['/add/',])
  }

  cancel() {
    this.add=false;
    this.show=false;
  }
}
