import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule, // Necesario para *ngFor, *ngIf y [ngClass]
    FormsModule // Necesario si quieres manejar formularios
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
