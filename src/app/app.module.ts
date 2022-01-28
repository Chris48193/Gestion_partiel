import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { PartielsComponent } from './partiels/partiels.component';
import { AppRoutingModule } from './routing.modules';
import { PartielListComponent } from './partiels/partiel-list/partiel-list.component';
import { PartielItemComponent } from './partiels/partiel-list/partiel-item/partiel-item.component';
import { FormsModule } from '@angular/forms';
import { IsfatesModule } from './isfates/isfates.module';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PartielsComponent,
    PartielListComponent,
    PartielItemComponent,
    ContactComponent
  ],
  imports: [
    IsfatesModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
