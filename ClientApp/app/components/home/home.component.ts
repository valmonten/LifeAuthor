import { Component, Input } from '@angular/core';
import * as $ from "jquery";
@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent {
    @Input() show: string;
    public name: string = "Homesweethome"
    public nowshow: boolean = true;
    changeshow(){
        if(this.nowshow == true){
            this.nowshow = false;
        }else{
            this.nowshow = true;
        }
    }
    parentcheck(){
        var parent = $(this).parent();
        $(parent).css("background-color", "yellow");
        $(this).css("background-color", "yellow");
        console.log("Parent is yellow");
        console.log($(this).parent().children())
        $(this).hide();
    }
    toggleNotes(){
        $(".content").slideDown();
        $(".content").slideUp();
        $(".content").slideUp();
        
    }
    toggleJournal(){
        $(".journalContent").slideDown();
        $(".notesContent").slideUp();
        $(".agendaContent").slideUp();
    }
    toggleAgenda(){
        $(".journalContent").slideUp();
        $(".notesContent").slideUp();
        $(".agendaContent").slideUp();
    }

}
