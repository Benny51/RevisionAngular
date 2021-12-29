import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PropertyBindingComponent } from './binding/property-binding/property-binding.component';
import { BindingComponent } from './binding/binding.component';
import { EventBindingComponent } from './binding/event-binding/event-binding.component';
import { InterpolationComponent } from './binding/interpolation/interpolation.component';
import { TwoWayBindingComponent } from './binding/two-way-binding/two-way-binding.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DirectivesComponent } from './directives/directives.component';
import { StructuraldirectivesComponent } from './directives/structuraldirectives/structuraldirectives.component';
import { AttributsDirectiveComponent } from './directives/attributs-directive/attributs-directive.component';
import { SizeDirective } from './directives/attributsDirective/size.directive';
import { ServicesComponent } from './services/services.component';
import { PipesComponent } from './pipes/pipes.component';
import { RevisionPipePipe } from './pipes/revision-pipe.pipe';
import { PairePipe } from './pipes/paire.pipe';
import { TemplateReferenceComponent } from './template-reference/template-reference.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormComponent } from './form/reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertyBindingComponent,
    BindingComponent,
    EventBindingComponent,
    InterpolationComponent,
    TwoWayBindingComponent,
    DirectivesComponent,
    StructuraldirectivesComponent,
    AttributsDirectiveComponent,
    SizeDirective,
    ServicesComponent,
    PipesComponent,
    RevisionPipePipe,
    PairePipe,
    TemplateReferenceComponent,
    FormComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
