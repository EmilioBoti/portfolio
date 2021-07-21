import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router"

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from "@angular/material/icon"

import { routing, appRoutingProviders } from "./app.routing"

import { AppComponent } from './app.component';
import { HomeComponent } from "./components/home/home.component"
import { ProjectComponent } from "./components/project/project.component"

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
