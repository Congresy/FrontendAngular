import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';  // replaces previous Http service
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConferenciaService } from './conferencia/conferencia.service';
import { AppComponent } from './app.component';
import { ConferenciaComponent, CreateConferenciaComponent, ConferenciaDetailedComponent } from './conferencia/conferencia.component';
import { LoginComponent } from './login/login.component';
import { MatButtonModule, MatCheckboxModule, MatCardModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { UserComponent, ProfileComponent } from './user/user.component';
import { UsersService } from './services/users.service';
import { AuthGuardService } from './services/auth-guard.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventComponent } from './event/event.component';
import { TestComponent } from './test/test.component';
import { EventFormComponent } from './event/event-form.component';
import { DatePipe } from '@angular/common';


@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule,
        HttpClientModule, MatButtonModule,
        MatCheckboxModule, AppRoutingModule, BrowserAnimationsModule,
        MatCardModule, MatFormFieldModule, MatInputModule],
    declarations: [AppComponent,
        ConferenciaComponent, LoginComponent, CreateConferenciaComponent,
        HeaderComponent, FooterComponent, HomeComponent, UserComponent,
        ConferenciaDetailedComponent, ProfileComponent, EventComponent, TestComponent, EventFormComponent],
    providers: [ConferenciaService, UsersService, AuthGuardService, DatePipe],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [AppComponent]
})
export class AppModule { }
