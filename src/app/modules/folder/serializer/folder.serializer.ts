import {Injectable} from '@angular/core';
import {FolderInterface} from '../model/folder.interface';

@Injectable({
  providedIn: 'root'
})
export class FolderSerializer {
  fromJson(json: any): FolderInterface {
    return {
      id: json.id,
      dossier: json.dossier
    }
  }
}
