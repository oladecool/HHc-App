import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.page.html',
  styleUrls: ['./podcast.page.scss'],
})
export class PodcastPage implements OnInit {

  public pods: any;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getPods();
  }

  getPods() {
    this.api.getPods()
    .subscribe((res:any) => {
      console.log(res);
      this.pods = res.records;
    }, err => {

    })
  }


}
