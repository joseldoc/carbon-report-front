import {ResourceInterface} from '../model/resource.interface';

export abstract class ISerializer {
  // from json server to the front
  abstract fromJson(json: any): ResourceInterface;
}
