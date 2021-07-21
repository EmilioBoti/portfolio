import { Component } from "@angular/core";

import { Project } from "../../models/project.model"


@Component({
    selector: "home",
    templateUrl: "./project.component.html",
    styleUrls: ["./project.component.css"]
})

export class ProjectComponent {
    public projects: Project[]
    
    constructor(){
        this.projects = [
            new Project("assets/img/tictactoe.PNG", ["HTML","CSS", "Javacript"],"https://emilioboti.github.io/TresEnRayas/" ),
            new Project("assets/img/school-system.PNG", ["HTML","CSS", "Javacript", "Php", "MySQL"], "http://system-school.epizy.com/"),
            new Project("assets/img/masterMind.PNG", ["HTML","CSS", "Javacript"], "https://emilioboti.github.io/MasterMind/")
        ]
    }
}