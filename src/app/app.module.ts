import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MuseumService } from 'src/shared/museum.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ArtworkComponent } from './artwork/artwork.component';
import { AccordionModule } from 'primeng/accordion';
import { CarouselModule } from 'primeng/carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArtworkCommonDialogComponent } from './artwork-common-dialog/artwork-common-dialog.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [AppComponent, ArtworkComponent, ArtworkCommonDialogComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AccordionModule,
    CarouselModule,
    BrowserAnimationsModule,
    NgbModule,
  ],
  providers: [MuseumService],
  bootstrap: [AppComponent],
})
export class AppModule {}
