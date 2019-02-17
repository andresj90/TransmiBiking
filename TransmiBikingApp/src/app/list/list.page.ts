import { Component, OnInit } from '@angular/core';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  public items: Array<{ id: number, title: string; note: string; icon: string }> = [];
  constructor(public datePicker: DatePicker, private storage: Storage) {
    for (let i = 1; i < 11; i++) {
      this.items.push({
        id: i,
        title: 'Item ' + i,
        note: 'Opcion #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }

  }

  showMessage() {
    window.alert('You have clicked me');
  }

  clickableOption(id) {
    if (id % 2 === 0) {
      this.datePicker.show({
        date: new Date(),
        mode: 'date',
        androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
      }).then(
        date => {
          console.log('Got date: ', date)
          this.storage.set('date', date)
        },
        err => console.log('Error occurred while getting date: ', err)
      );
    } else {

    }
  }
  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
