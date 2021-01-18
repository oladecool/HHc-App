import {
    Component,
    OnInit,
	ViewEncapsulation
} from '@angular/core';
import {
    ApiService
} from 'src/app/services/api.service';
import { File, FileEntry } from '@ionic-native/file/ngx';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { Media, MediaObject } from '@ionic-native/media/ngx';
@Component({
    selector: 'app-podcast',
    templateUrl: './podcast.page.html',
    styleUrls: ['./podcast.page.scss'],
    encapsulation: ViewEncapsulation.None
})
export class PodcastPage implements OnInit {

    public pods: any;
    song:any;
    constructor(private api: ApiService, public file: File, public txfr: FileTransfer, public audio: Media) {
        
    }

    ngOnInit() {
        this.getPods();
    }

    getPods() {
        this.api.getPods()
                .subscribe((res: any) => {
                    console.log(res);
                    this.pods = res.records;
                }, err => {

                })
        var token = localStorage.getItem('HHC');
//        if (token == '' || token == null || token == undefined) {
//            this.api.getPods()
//                .subscribe((res: any) => {
//                    console.log(res);
//                    this.pods = res.records;
//                }, err => {
//
//                })
//        } else {
//            this.api.getUserPods({
//                    token: token
//                })
//                .subscribe((res: any) => {
//                    console.log(res);
//                    this.pods = res.records;
//                }, err => {
//
//                })
//        }
    }
    play(filename){
        var url="http://office.holyhillchapelag.com/public/uploads/audios/"+filename;
//        this.download(url);
//        this.download("https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3");
    }
    pause(){
        this.song.pause();
    }
    public download(url: string) {
        let ft: FileTransferObject = this.txfr.create();
        let fn = this.file.dataDirectory + url.substring(url.lastIndexOf('/') + 1);
        ft.download(url, fn).then(
            (fe: FileEntry) => {
                let song: MediaObject = this.audio.create(fe.nativeURL);
                alert(JSON.stringify(song));
                this.song=song;
                this.song.play();
            },
            err => {
                alert(JSON.stringify(err));
                console.log(JSON.stringify(err));
            }
        );
    }

}