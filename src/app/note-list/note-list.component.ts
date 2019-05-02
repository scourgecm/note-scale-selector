import { Component, OnInit } from '@angular/core';
import { NoteKeeperService } from '../note-keeper.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit {

  constructor(public keeperService: NoteKeeperService) { }

  ngOnInit() {
  }

}
