import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route);
    this.user = {
      id: this.route.snapshot.params["id"],
      name: this.route.snapshot.params["name"]
    }
    // Observable is an easy way to subscribe to some event that might happen in the future and act on it if and when it happens without blocking code
    // First argument function for subscribe -> Fired when new data is sent through the observable (when the params change in this case)
    this.paramsSubscription = this.route.params.subscribe(
      (updatedParams: Params) => {
        // This callback anonymous function is not executed on ngOnInit. Just the subscription code runs
        this.user.id = updatedParams["id"];
        this.user.name = updatedParams["name"]; 
      }
    );
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
    console.log('unscubscribed');
  }

}
