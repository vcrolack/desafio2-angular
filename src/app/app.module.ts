import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfilePictureComponent } from './components/profile-picture/profile-picture.component';
import { SocialNetworksComponent } from './components/social-networks/social-networks.component';
import { DescriptionComponent } from './components/description/description.component';
import { TitleComponent } from './components/title/title.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfilePictureComponent,
    SocialNetworksComponent,
    DescriptionComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
