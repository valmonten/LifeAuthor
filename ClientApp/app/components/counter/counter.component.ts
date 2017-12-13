import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'counter',
    templateUrl: './counter.component.html'
})
export class CounterComponent {
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
    
}

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

