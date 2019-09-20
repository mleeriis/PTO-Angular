import {HttpClient, HttpParams} from '@angular/common/http';
import {PTOInterface} from '../shared/pto-interface';
import {catchError, map} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {environment} from '../../environments/environment';

export class RequestsService {
  readonly API_URL = environment.API_URL;

  private apiParams = new HttpParams();

  constructor(private http: HttpClient) {
  }

  getPtoRequests(employeeID?: number) {
    if (employeeID) {
      this.apiParams = this.apiParams.set('empID', employeeID.toString());
    } else {
      this.apiParams = this.apiParams.set('empID', '');
    }
    return this.http.get(this.API_URL + 'pto', {
      params: this.apiParams
    })
      .pipe(
        map(responseData => {
          const ptoArray: PTOInterface[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              ptoArray.push({...responseData[key], arrayIndex: key});
            }
          }
          return ptoArray;
        }),
        catchError(errorRes => {
          return throwError(errorRes.message);
        })
      );
  }

  createPtoRequest(newRequest: PTOInterface) {
    return this.http.post(this.API_URL + 'pto',
      newRequest);
  }
  
  processRequest(pendingRequestID: number, statusCode: number) {
    return this.http.put(this.API_URL + 'pto/' + pendingRequestID,
      {
        'status': statusCode
      });
  }

  deleteRequest(id: number) {
    return this.http.delete(this.API_URL + 'pto/' + id);
  }
}
