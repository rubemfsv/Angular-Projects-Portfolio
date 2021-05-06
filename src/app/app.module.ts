import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { DashboardModule } from './dashboard';
import { CalculadoraModule } from './calculator';
import { ConverterModule } from './converter';
import { TasksModule } from './tasks';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    DashboardModule,
    CalculadoraModule,
    ConverterModule,
    TasksModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
