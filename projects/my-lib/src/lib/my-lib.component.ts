import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { BackendService } from './backend.service';

@Component({
  selector: 'lib-my-lib',
  templateUrl: 'my-lib.component.html',
  styleUrls: ['my-lib.component.scss']
})
export class MyLibComponent implements OnInit {

  constructor(private backendService: BackendService){}
  
  ngOnInit(): void {
  }

  getTotal(){
    this.backendService.getFromBackend();
  }

}
