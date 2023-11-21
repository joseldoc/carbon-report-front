import {Observable} from 'rxjs';

export interface IService<ResourceInterface> {
  /**
   * fetch list data
   * @return Observable<T[]>
   */
  list(): Observable<ResourceInterface[]>;

  /**
   * Get infos user
   * @param id
   * @return Observable<T>
   */
  read(id: number): Observable<ResourceInterface>;

}
