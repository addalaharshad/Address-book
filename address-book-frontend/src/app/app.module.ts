import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {Routes,RouterModule} from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import {HttpClientModule,HttpClient} from '@angular/common/http';
import { SelectedContactIdComponent } from './selected-contact-id/selected-contact-id.component';
import { AddContactComponent } from './add-contact/add-contact.component';

const appRoutes:Routes=[
  {path:'',component:ContactListComponent,
  children: [
    {
      path: 'add', // child route path
      component: AddContactComponent
    }
  ],
},
  {path:'contact/:id',component:SelectedContactIdComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    SelectedContactIdComponent,
    AddContactComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
