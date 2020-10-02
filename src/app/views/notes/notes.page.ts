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

  public notes: any[] = [];
  note: any = { title: '', description: '', cover: '', price: '' };

  constructor(private alertCtrl: AlertController, private api: ApiService) {}

  ngOnInit() {}

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
              this.createNote(data.title);
            },
          },
        ],
      })
      .then((alert) => {
        alert.present();
      });
  }

  createNote(title): void {
    this.api.post('notes', this.note).subscribe((data: Notes[]) => {
      console.log(data)
      this.notes = data;
    });


    // Create a unique id that is one larger than the current largest id
    // let id = Math.max(...this.notes.map(note => parseInt(note.id)), 0) + 1;

    // this.notes.push({
    //   id: id.toString(),
    //   title: title,
    //   content: ''
    // });

    // this.save();

  }
}
