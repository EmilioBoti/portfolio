import { Component } from "@angular/core";


@Component({
    selector: "home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})

export class HomeComponent {
    public fullname: string

    constructor(){
        this.fullname = "Luis Emilio Rodríguez Botier"
    }
}