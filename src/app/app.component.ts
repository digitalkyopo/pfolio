import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  night = true;

  constructor() {}

  title = 'pfolio';

  switchLight() {
    this.night = !this.night;
    const topButtons = document.getElementsByClassName('top-btn') as HTMLCollectionOf<HTMLElement>;
    const switchButton = document.querySelector('#switch') as HTMLElement;
    const light = document.getElementsByClassName('night');
    const text = switchButton.textContent;
    const titles = document.getElementsByClassName('titles') as HTMLCollectionOf<HTMLElement>;
    const card = document.getElementsByClassName('card') as HTMLCollectionOf<HTMLElement>;
    const textArea = document.querySelector('.clr-textarea') as HTMLElement;

    for (let i = 0; i < light.length; i++) {
        light[i].classList.toggle('light');
    }

    if (text === 'Light Mode') {
        switchButton.textContent = 'Dark Mode';
        switchButton.style.backgroundColor = '#7f8aff';
        window.document.body.style.backgroundColor = 'white';
        textArea.style.background = 'white';
        textArea.style.color = 'black';

        for (let i = 0; i < topButtons.length; i++) {
          topButtons[i].style.color = 'black';
        }

        for (let i = 0; i < titles.length; i++) {
          titles[i].style.color = 'black';
        }

        for (let i = 0; i < card.length; i++) {
          card[i].style.backgroundColor = '#e8eeff';
        }
    } else {
        switchButton.textContent = 'Light Mode';
        switchButton.style.backgroundColor = '#32ddda';
        window.document.body.style.backgroundColor = 'black';
        textArea.style.background = 'black';
        textArea.style.color = 'white';

        for (let i = 0; i < topButtons.length; i++) {
            topButtons[i].style.color = 'white';
        }

        for (let i = 0; i < titles.length; i++) {
          titles[i].style.color = 'white';
        }

        for (let i = 0; i < card.length; i++) {
            card[i].style.backgroundColor = '#22343c';
        }
    }

  }

}
