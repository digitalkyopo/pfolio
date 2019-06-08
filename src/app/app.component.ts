import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {}
  title = 'pfolio';

switchLight() {
  const topButtons = document.getElementsByClassName('top-btn');
  const switchButton = document.querySelector('#switch');
  const light = document.getElementsByClassName('night');
  const text = switchButton.textContent;
  const textArea = document.querySelector('.clr-textarea');
  console.log('bang');
  console.log(textArea)

  for (let i = 0; i < light.length; i++) {
      light[i].classList.toggle('light');
      console.log('bang bang bang');
  }

  if (text === 'Light Mode') {
      switchButton.textContent = 'Dark Mode';
      document.querySelector('#switch').style.backgroundColor = '#7f8aff';
      window.document.body.style.backgroundColor = 'white';
      textArea.style.background = 'white';
      textArea.style.color = 'black';
      for (let i = 0; i < topButtons.length; i++) {
        topButtons[i].style.backgroundColor = '#7f8aff';
      }
    } else {
      switchButton.textContent = 'Light Mode';
      switchButton.style.backgroundColor = '#32ddda';
      window.document.body.style.backgroundColor = 'black';
      textArea.style.background = 'black';
      textArea.style.color = 'white';
      for (let i = 0; i < topButtons.length; i++) {
        topButtons[i].style.backgroundColor = '#32ddda';
      }
    }

  }

}
