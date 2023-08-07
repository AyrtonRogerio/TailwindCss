import {NgModule} from "@angular/core";
import  {RouterModule, Routes} from "@angular/router";
import {NewsletterComponent} from "./newsletter/newsletter.component";
import {MenuComponent} from "./menu/menu.component";
import {HomeComponent} from "./home/home.component";
import {FasesComponent} from "./fases/fases.component";
import {GameComponent} from "./game/game.component";

const routes: Routes = [
  {path: '', component: MenuComponent},
  {path: 'newsletter', component: NewsletterComponent},
  {path: 'home', component: HomeComponent},
  {path: 'game', component: GameComponent},

]

@NgModule({
  declarations:[],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule{}
