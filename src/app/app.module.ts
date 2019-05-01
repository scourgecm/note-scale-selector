import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NoteBuilderComponent } from './note-builder/note-builder.component';
import { NoteSelectorService } from './services/note-selector.service';
import { FormsModule } from '@angular/forms';
import { NoteKeeperService } from './note-keeper.service';
import { NoteListComponent } from './note-list/note-list.component';

@NgModule({
    declarations: [AppComponent, NoteBuilderComponent, NoteListComponent],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        MDBBootstrapModule.forRoot()
    ],
    providers: [NoteSelectorService, NoteKeeperService],
    bootstrap: [AppComponent]
})
export class AppModule {}
