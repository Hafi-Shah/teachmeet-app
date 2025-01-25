import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HttpService {
  environment = {
    // Use localhost for browser and IP address for mobile devices
    apiUrl:
      window.location.hostname === 'localhost'
        ? 'http://localhost:5187/api'
        : 'http://192.168.10.4:5187/api',
  };
  constructor(private http: HttpClient) {}

  // Generic GET method
  get<T>(endpoint: string, params?: HttpParams): Observable<T> {
    return this.http.get<T>(`${this.environment.apiUrl}/${endpoint}`, {
      params,
    });
  }

  // Generic POST method
  post<T>(
    endpoint: string,
    body: any,
    options?: { params?: HttpParams; headers?: HttpHeaders }
  ): Observable<T> {
    return this.http.post<T>(`${this.environment.apiUrl}/${endpoint}`, body, {
      ...options,
    });
  }

  // Generic PUT method
  put<T>(
    endpoint: string,
    body: any,
    options?: { params?: HttpParams }
  ): Observable<T> {
    return this.http.put<T>(`${this.environment.apiUrl}/${endpoint}`, body, {
      ...options,
    });
  }

  // Generic DELETE method
  delete<T>(
    endpoint: string,
    options?: { params?: HttpParams }
  ): Observable<T> {
    return this.http.delete<T>(`${this.environment.apiUrl}/${endpoint}`, {
      ...options,
    });
  }
}
