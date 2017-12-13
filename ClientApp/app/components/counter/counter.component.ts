import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';
import * as $ from "jquery";

@Component({
    selector: 'counter',
    templateUrl: './counter.component.html'
})
export class CounterComponent {
<<<<<<< HEAD
    public person: User;
    public currentName: string;
    public myentry: Note;
    public myjournal: Journal;
    public note: string;
    public journal: string;

    
    constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
        http.get(baseUrl + 'api/SampleData/Usersdata').subscribe(result => {
            this.person = result.json() as User;
            this.currentName = result.json().name;
           
        }, error => console.error(error));
    
        
        http.get(baseUrl + 'api/SampleData/NoteData').subscribe(result => {
            this.myentry = result.json() as Note;
            this.note = result.json().mynotes;
        }, error => console.error(error));

        http.get(baseUrl + 'api/SampleData/JournalData').subscribe(result => {
            this.myjournal = result.json() as Journal;
            this.journal = result.json().contents;
        }, error => console.error(error));
    }

}
interface User {
    id: number;
    name: string;
    email: string;
    password: string;
=======
    public something = "Something";
    toggleNotes_m(){
        $(".notesContent_m").slideDown();
        $(".journalContent_m").slideUp();
        $(".agendaContent_m").slideUp();
        console.log("Notes")
    }
    toggleJournal_m(){
        $(".journalContent_m").slideDown();
        $(".notesContent_m").slideUp();
        $(".agendaContent_m").slideUp();
    }
    toggleAgenda_m(){
        $(".journalContent_m").slideUp();
        $(".notesContent_m").slideUp();
        $(".agendaContent_m").slideDown();
    }
    toggleNotes_tu(){
        $(".notesContent_tu").slideDown();
        $(".journalContent_tu").slideUp();
        $(".agendaContent_tu").slideUp();
        console.log("Notes")
    }
    toggleJournal_tu(){
        $(".journalContent_tu").slideDown();
        $(".notesContent_tu").slideUp();
        $(".agendaContent_tu").slideUp();
    }
    toggleAgenda_tu(){
        $(".journalContent_tu").slideUp();
        $(".notesContent_tu").slideUp();
        $(".agendaContent_tu").slideDown();
    }
    toggleNotes_w(){
        $(".notesContent_w").slideDown();
        $(".journalContent_w").slideUp();
        $(".agendaContent_w").slideUp();
    }
    toggleJournal_w(){
        $(".journalContent_w").slideDown();
        $(".notesContent_w").slideUp();
        $(".agendaContent_w").slideUp();
    }
    toggleAgenda_w(){
        $(".journalContent_w").slideUp();
        $(".notesContent_w").slideUp();
        $(".agendaContent_w").slideDown();
    }
    toggleNotes_th(){
        $(".notesContent_th").slideDown();
        $(".journalContent_th").slideUp();
        $(".agendaContent_th").slideUp();
    }
    toggleJournal_th(){
        $(".journalContent_th").slideDown();
        $(".notesContent_th").slideUp();
        $(".agendaContent_th").slideUp();
    }
    toggleAgenda_th(){
        $(".journalContent_th").slideUp();
        $(".notesContent_th").slideUp();
        $(".agendaContent_th").slideDown();
    }
    toggleNotes_f(){
        $(".notesContent_f").slideDown();
        $(".journalContent_f").slideUp();
        $(".agendaContent_f").slideUp();
    }
    toggleJournal_f(){
        $(".journalContent_f").slideDown();
        $(".notesContent_f").slideUp();
        $(".agendaContent_f").slideUp();
    }
    toggleAgenda_f(){
        $(".journalContent_f").slideUp();
        $(".notesContent_f").slideUp();
        $(".agendaContent_f").slideDown();
    }
    toggleNotes_sa(){
        $(".notesContent_sa").slideDown();
        $(".journalContent_sa").slideUp();
        $(".agendaContent_sa").slideUp();
    }
    toggleJournal_sa(){
        $(".journalContent_sa").slideDown();
        $(".notesContent_sa").slideUp();
        $(".agendaContent_sa").slideUp();
    }
    toggleAgenda_sa(){
        $(".journalContent_sa").slideUp();
        $(".notesContent_sa").slideUp();
        $(".agendaContent_sa").slideDown();
    }
    toggleNotes_su(){
        $(".notesContent_su").slideDown();
        $(".journalContent_su").slideUp();
        $(".agendaContent_su").slideUp();
    }
    toggleJournal_su(){
        $(".journalContent_su").slideDown();
        $(".notesContent_su").slideUp();
        $(".agendaContent_su").slideUp();
    }
    toggleAgenda_su(){
        $(".journalContent_su").slideUp();
        $(".notesContent_su").slideUp();
        $(".agendaContent_su").slideDown();
    }




    
    // constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
    //     http.get(baseUrl + 'api/SampleData/Usersdata').subscribe(result => {
    //         this.person = result.json() as Users;
    //     }, error => console.error(error));
    // }
}
// interface Users {
//     id: number;
//     name: string;
//     email: string;
//     password: string;
>>>>>>> 3801056d246d403a079308e648fe02fd232ca95c
    
// }

interface Journal {
    idjournals: number;
    contents: string;
    created_at: Date;
    updated_at: Date;
    users_id: number;
    // author: User;
    calendar_datedId: number;
    // calendar: string;
}

interface Note {
    idnotes: number;
    mynotes: string;
    created_at: Date;
    updated_at: Date;
    users_id: number;
    // author: User;
    calendar_datedId: number;
    // calendar: string;
}

