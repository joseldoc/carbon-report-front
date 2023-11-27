import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AbstractService} from '../../../shared/service/abstract.service';
import {FolderInterface} from '../model/folder.interface';
import {FolderSerializer} from '../serializer/folder.serializer';

@Injectable({
  providedIn: 'root'
})
export class FolderService extends AbstractService<FolderInterface> {
  constructor(
    private http: HttpClient,
    private vSerializer: FolderSerializer
  ) {
    super(
      http,
      vSerializer
    );
    this.endpoint = 'folders'
  }
}
