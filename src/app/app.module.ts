import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BeerAccordionComponent } from './components/beer-accordion/beer-accordion.component';
import * as fromFeature from './store';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BeerAccordionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreModule.forFeature('app', fromFeature.reducer),
    EffectsModule.forFeature([fromFeature.AppEffects]),
    HttpClientModule
  ],
  providers: [fromFeature.AppActionsService, fromFeature.AppSelectors],
  bootstrap: [AppComponent]
})
export class AppModule { }
