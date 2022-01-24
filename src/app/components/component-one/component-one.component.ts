import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppSetTitle } from 'src/app/store/app.actions';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.scss']
})
export class ComponentOneComponent implements OnInit {

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    //Para actualizar el título
    this.store.dispatch(
      AppSetTitle({title: 'Component One'})
    );
  }
}
