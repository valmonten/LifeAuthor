import { Component, Inject, Input } from '@angular/core';
import { Http } from '@angular/http';
import * as $ from "jquery";

@Component({
    selector: 'fetchdata',
    templateUrl: './fetchdata.component.html'
})
export class FetchDataComponent {
    @Input() weekday: string;
    @Input() monthday: number; 
    public name : string = "Fetching"
    public state : string ="agenda"
    // public weekday: string = this.day[0];
    // public monthday: string = this.day[1];
    



//     toggleNotes(){
//         $(".notesContent").slideDown();
//         $(".journalContent").slideUp();
//         $(".agendaContent").slideUp();
        
//     }
//     toggleJournal(){
//         $(".journalContent").slideDown();
//         $(".notesContent").slideUp();
//         $(".agendaContent").slideUp();
//     }
//     toggleAgenda(){
//         $(".journalContent").slideUp();
//         $(".notesContent").slideUp();
//         $(".agendaContent").slideUp();
//     }
}

