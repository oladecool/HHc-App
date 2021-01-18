import { Component, OnInit } from "@angular/core";
import { AlertController, NavController } from "@ionic/angular";
import { ApiService } from 'src/app/services/api.service';

interface Notes {
  data: Array<[]>;
}
@Component({
  selector: "app-notes",
  templateUrl: "./notes.page.html",
  styleUrls: ["./notes.page.scss"],
})
export class NotesPage implements OnInit {

  public notes: any;
  note: any = { title: '', description: '', cover: '', price: '' };

  constructor(private alertCtrl: AlertController, private api: ApiService) {}

  ngOnInit() {
    this.getNotes();
  }

  addNote() {
    this.alertCtrl
      .create({
        header: "New Note",
        message: "What should the title of this note be?",
        inputs: [
          {
            type: "text",
            name: "title",
          },
        ],
        buttons: [
          {
            text: "Cancel",
          },
          {
            text: "Save",
            handler: (data) => {
              this.note.title = data.title;
              this.createNote();
            },
          },
        ],
      })
      .then((alert) => {
        alert.present();
      });
  }

  getNotes() {
    this.api.getNotes()
    .subscribe((res:any) => {
      this.notes = res.data;
    }, err => {

    })
  }

  // EditNotes() {
  //   this.api.put('notes', this.note)
  //   .subscribe((res:any) => {
  //     this.notes = res.data;
  //   }, err => {

  //   })
  // }

  createNote(): void {
    this.api.post('notes', this.note).subscribe((data: Notes[]) => {
      console.log(data)
      this.notes.push(this.note);
    });

  }
}
