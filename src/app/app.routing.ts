import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule  } from "@angular/router"

import { HomeComponent } from "./components/home/home.component"
import { ProjectComponent } from "./components/project/project.component"

const appRouters: Routes = [
    { path: "" , component: HomeComponent },
    { path: "projects" , component: ProjectComponent },
    { path: "**" , component: ProjectComponent },
]

export const appRoutingProviders: any[] = []
export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(appRouters)