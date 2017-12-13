import { Component } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public Monday: string = "Monday"
    public monthday1: number = 11;

    public Tuesday: string = "Tuesday"
    public monthday2: number = 12;

    public Wednesday: string = "Wednesday"
    public monthday3: number = 13;

    public Thursday: string = "Thursday"
    public monthday4: number = 14;

    public Friday: string = "Friday"
    public monthday5: number = 15;

    public Saturday: string = "Saturday"
    public monthday6: number = 16;

    public Sunday: string = "Sunday"
    public monthday7: number = 17;

}
