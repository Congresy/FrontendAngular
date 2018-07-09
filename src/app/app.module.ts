import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';  // replaces previous Http service
import { FormsModule } from '@angular/forms';
import { ConferenciaService } from './conferencia/conferencia.service';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import {ConferenciaComponent} from './conferencia/conferencia.component';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule],
    declarations: [AppComponent, TestComponent, ConferenciaComponent],
    providers: [ConferenciaService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [AppComponent]
})
export class AppModule { }
