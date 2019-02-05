import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ServerService {
  constructor(private http: HttpClient) {

  }

  storeServers(servers: any[]) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    /*return this.http.post(
      'https://angular-test-afc35.firebaseio.com/data.json',
      servers,
      {headers: headers}
    );*/
    return this.http.put(
      'https://angular-test-afc35.firebaseio.com/data.json',
      servers,
      //{headers: headers}
    );
  }

  getServers() {
    return this.http.get('https://angular-test-afc35.firebaseio.com/data.json');
  }

  getAPpName() {
    return this.http.get('https://angular-test-afc35.firebaseio.com/appName.json');
  }
}