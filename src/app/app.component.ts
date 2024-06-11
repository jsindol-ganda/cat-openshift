import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MycatService, } from './services/mycat-service.service';
import { Subscription, forkJoin } from 'rxjs';
import { HttpInformation } from './models/status-codes';
import { HttpCode } from './models/status-code.interface';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatCardModule, MatButtonModule, MatIconModule],
  providers: [MycatService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Cats and Dogs';
  theCode = 200;
  secondCode = 400;
  forkSub = new Subscription();
  listOfStatusCodes = HttpInformation;
  selectedCode: HttpCode = {
    category: '',
    code: 0,
    description: '',
    meaning: ''
  }
  selectedCodeTwo: HttpCode = {
    category: '',
    code: 0,
    description: '',
    meaning: ''
  }
  animalImg = '';
  dogImg = '';

  constructor(private myCat: MycatService) {

  }

  ngOnInit(): void {
      this.initInfo();
  }

  ngOnDestroy(): void {
    this.forkSub.unsubscribe();
  }

  initInfo() {
    this.forkSub = forkJoin([this.myCat.getCats(), this.myCat.getDogs()]).subscribe(subs => {
      this.animalImg = subs[0][0].url;
      this.dogImg = subs[1][0].url;
    })
    
    const checkIfExist =  this.listOfStatusCodes.find(httpCode => httpCode.code === this.theCode);
    const checkIfExistTwo =  this.listOfStatusCodes.find(httpCode => httpCode.code === this.secondCode);

    if (checkIfExist && checkIfExistTwo) {
      this.selectedCode = checkIfExist;
      this.selectedCodeTwo = checkIfExistTwo;
    }
  }

  doRandom () {
    const httpCodes = this.listOfStatusCodes.map(items => items.code);
    const randomIndex = Math.floor(Math.random() * httpCodes.length);
    const randomIndexTwo = Math.floor(Math.random() * httpCodes.length);

    this.theCode = httpCodes[randomIndex];
    this.secondCode = httpCodes[randomIndexTwo];
    this.initInfo();
  }
}
