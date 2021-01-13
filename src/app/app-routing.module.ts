import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FaqComponent} from './faq/faq.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { NewsComponent } from './news/news.component';
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'aboutus', component: AboutusComponent}, 
  {path: 'news', component: NewsComponent}, 
];

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
