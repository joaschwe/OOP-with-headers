import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

    lists: any = [
        {
            header: "Sports",
            list: [
                { listItem: "Gymnastics" },
                { listItem: "Baseball" },
                { listItem: "Football" }
            ]
        },
        {
            header: "Food",
            list: [
                { listItem: "Spaghetti" },
                { listItem: "Lasagna" },
                { listItem: "Ice Cream" }
            ]
        }
    ];


    constructor() {
        console.log('Hello DataProvider Provider');
        console.log(this.lists);
    }

}