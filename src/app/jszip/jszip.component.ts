import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jszip',
  templateUrl: './jszip.component.html',
  styleUrls: ['./jszip.component.scss'],
})
export class JszipComponent implements OnInit {
  files = [
    'https://currcrafterweb.azurewebsites.net/assets/images/curriculum-works-transparent.png',
    'https://currcrafterweb.azurewebsites.net/assets/images/cw-logo-mono.png',
  ];

  constructor() {}

  ngOnInit(): void {
    this.zipAndDownloadFiles();
  }

  zipAndDownloadFiles = (): void => {
    // TODO: get the files from from files array, zip it, and download it
    // https://stuk.github.io/jszip/documentation/examples/get-binary-files-ajax.html
    // https://stackoverflow.com/questions/8608724/how-to-zip-files-using-javascript
  };
}
