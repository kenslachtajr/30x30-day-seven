import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SpeciesComponent } from './species/species.component';
import { SpeciesListComponent } from './species/species-list/species-list.component';
import { SpeciesDetailsComponent } from './species/species-details/species-details.component';
import { SpeciesItemComponent } from './species/species-item/species-item.component';

@NgModule({
  declarations: [AppComponent, SpeciesComponent, SpeciesListComponent, SpeciesDetailsComponent, SpeciesItemComponent],
  imports: [BrowserModule, NoopAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
