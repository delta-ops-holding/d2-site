import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { NewsComponent } from './news/news.component';
import { MerchComponent } from './merch/merch.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SherpahubComponent } from './sherpahub/sherpahub.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FaqComponent,
    AboutusComponent,
    NewsComponent,
    MerchComponent,
    HeaderComponent,
    FooterComponent,
    SherpahubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
