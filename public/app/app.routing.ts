import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { TasksComponent } from './components/tasks/tasks.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';


const routes:Routes = [
	//defining default route
	{path: '', pathMatch: 'full', redirectTo: 'task'},
	{path: 'tasklist', component: TasksComponent},
	{path: 'tasklist/edit/:id', component: TasksComponent},
	{path: 'login', component: LoginComponent},
	{path: 'register', component: RegisterComponent},
	{path: 'logout', component: LoginComponent},
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule { }


//export const routingComponents = [TasksComponent, LoginComponent, RegisterComponent];
