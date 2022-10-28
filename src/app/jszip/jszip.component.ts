import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as JSZip from 'jszip';
import * as saveAs from 'file-saver';

@Component({
  selector: 'app-jszip',
  templateUrl: './jszip.component.html',
  styleUrls: ['./jszip.component.scss'],
})
export class JszipComponent implements OnInit {
  files = [
    'http://currcrafterweb.azurewebsites.net/assets/images/curriculum-works-transparent.png',
    'http://currcrafterweb.azurewebsites.net/assets/images/cw-logo-mono.png',
  ];

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.zipAndDownloadFiles();
  }

  zipAndDownloadFiles = (): void => {
    // TODO: get the files from from files array, zip it, and download it
    // https://stuk.github.io/jszip/documentation/examples/get-binary-files-ajax.html
    // https://stackoverflow.com/questions/8608724/how-to-zip-files-using-javascript
  };
  download = async () => {
    this.createZip(this.files, 'sample');
  };
  async getFile(url: string) {
    const httpOptions = {
      responseType: 'blob' as 'json',
    };
    const res = await this.httpClient
      .get(url, httpOptions)
      .toPromise()
      .catch((err: HttpErrorResponse) => {
        const error = err.error;
        return error;
      });
    return res;
  }

  async createZip(files: any[], zipName: string) {
    const zip = new JSZip();
    const name = zipName + '.zip';
    // tslint:disable-next-line:prefer-for-of
    for (let counter = 0; counter < files.length; counter++) {
      const element = files[counter];
      const fileData: any = await this.getFile(element);
      console.log('filed', fileData);
      const b: any = new Blob([fileData], { type: '' + fileData.type + '' });
      zip.file(element.substring(element.lastIndexOf('/') + 1), b);
    }
    zip.generateAsync({ type: 'blob' }).then(function (content: any) {
      // see FileSaver.js
      saveAs(content, 'sample.zip');
    });
  }
}
