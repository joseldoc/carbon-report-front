import {Injectable} from '@angular/core';
import {map, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ISerializer} from '../serializer/iserializer';
import {environment} from '../../../environments/environment';
import {ResourceInterface} from '../model/resource.interface';
import {IService} from './IService';

@Injectable()

export class AbstractService<T extends ResourceInterface> implements IService<ResourceInterface> {

  public endpoint: string = ''

  constructor(
    protected httpClient: HttpClient,
    private serializer: ISerializer
  ) {

  }

  list(): Observable<T[]> {
    return this.httpClient.get<T[]>(`${environment.urlApi}${this.endpoint}`)
      .pipe(
        map((data: T[]) => {
          return this.convertData(data)
        })
      );
  }

  read(id: number): Observable<T> {
    return this.httpClient.get<T>(`${environment.urlApi}${this.endpoint}/${id}`)
      .pipe(
        map((res: T) => this.serializer.fromJson(res) as T)
      );
  }

  protected convertData(data: any): T[] {
    return data.map((item: any) => this.serializer.fromJson(item));
  }
}
