import {FolderInterface} from '../model/folder.interface';

export interface FolderState {
  folders: ReadonlyArray<FolderInterface>;
  error: string;
}
