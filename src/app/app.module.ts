import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';  // replaces previous Http service
import { FormsModule } from '@angular/forms';
import { ConferenciaService } from './conferencia/conferencia.service';
import { AppComponent } from './app.component';
import {ConferenciaComponent, CreateConferenciaComponent} from './conferencia/conferencia.component';
import { LoginComponent } from './login/login.component';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule, MatButtonModule, MatCheckboxModule, AppRoutingModule],
    declarations: [AppComponent,
        ConferenciaComponent, LoginComponent, CreateConferenciaComponent,
        HeaderComponent, FooterComponent, HomeComponent],
    providers: [ConferenciaService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [AppComponent]
})
export class AppModule { }
