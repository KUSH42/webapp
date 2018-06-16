import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { SlavesComponent } from './slaves/slaves.component';
import { MatrixBackgroundCanvasComponent } from './matrix-background-canvas/matrix-background-canvas.component';


@NgModule({
  declarations: [
    AppComponent,
    SlavesComponent,
    MatrixBackgroundCanvasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
