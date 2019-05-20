import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';  // replaces previous Http service
import {
    FormsModule,
    ReactiveFormsModule
} from '@angular/forms';
import { AppComponent } from './app.component';
import {
    ConferenciaComponent,
    ConferenciaDetailedComponent
} from './components/conferencia/conferencia.component';
import { LoginComponent } from './components/login/login.component';
import {
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatSelectModule
} from '@angular/material';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { UserComponent, ProfileComponent } from './user/user.component';
import { UsersService } from './services/users.service';
import { AuthGuardService } from './services/auth-guard.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventComponent } from './components/event/event.component';
import { TestComponent } from './test/test.component';
import { EventFormComponent } from './components/event/form/event-form.component';
import { DatePipe } from '@angular/common';
import { MyeventsComponent } from './components/event/myevents/myevents.component';
import { ConferenceService } from './services/conference.service';
import { ConferenciaFormComponent } from './components/conferencia/form/conferencia-form.component';
import { PlaceService } from './services/place.service';
import { EventDisplayComponent } from './components/event/event-display/event-display.component';
import { EventService } from './services/event.service';
import { RouterModule } from '@angular/router';
import { PostComponent } from './components/post/post.component';
import { CommentComponent } from './components/comment/comment.component';
import { PostService } from './services/post.service';
import { CommentService } from './services/comment.service';
import { PostFormComponent } from './components/post/post-form/post-form.component';
import { CommentFormComponent } from './components/comment/comment-form/comment-form.component';


@NgModule({
    imports: [AppRoutingModule, RouterModule, BrowserModule, FormsModule, ReactiveFormsModule,
        HttpClientModule, MatButtonModule,
        MatCheckboxModule, BrowserAnimationsModule,
        MatCardModule, MatFormFieldModule, MatInputModule, MatMenuModule, MatSelectModule],
    exports: [],
    declarations: [AppComponent,
        ConferenciaComponent, LoginComponent,
        HeaderComponent, FooterComponent, HomeComponent, UserComponent,
        ConferenciaDetailedComponent, ProfileComponent, EventComponent,
        TestComponent, EventFormComponent, MyeventsComponent, ConferenciaFormComponent,
        EventDisplayComponent, PostComponent, CommentComponent, PostFormComponent, CommentFormComponent],
    providers: [UsersService, AuthGuardService, DatePipe, ConferenceService, PlaceService, EventService, PostService,
        CommentService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [AppComponent]
})
export class AppModule { }
