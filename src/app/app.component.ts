import {Component} from '@angular/core';
import {timer} from "rxjs/internal/observable/timer";
import {Observable} from "rxjs/internal/Observable";
import {map, mergeMap, takeUntil} from "rxjs/operators";
import {compareLogSummaries} from "@angular/core/src/render3/styling/class_and_style_bindings";
import {of} from "rxjs/internal/observable/of";
import {Subject} from "rxjs/internal/Subject";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    nextNumber$: Observable<number>;

    ngOnInit() {
        this.nextNumber$ = timer(0, 1000).pipe(
            mergeMap(() => {
                return of(Math.floor(Math.random()*100));
            }),
        )
    }

}
