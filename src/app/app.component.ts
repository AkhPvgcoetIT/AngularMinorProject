import {Component} from "@angular/core";
import { Forms } from "./forms";
@Component({
    selector:"app-root",
    templateUrl:"app.component.html"
})
export class AppComponent{

    f=new Forms();
    test(){
      console.log(JSON.stringify(this.f));
    }


}
