import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  user = {
    name: 'Anatolio',
    lastName: 'Rios', 
    userName: 'toliori22',
    loans: 7,
    lastLoan: new Date(2019,2,11),
    profilePic: '/assets/icon/man.svg'
  }

  constructor() { }

  ngOnInit() {
  }

}
