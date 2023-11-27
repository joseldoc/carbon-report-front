import {Injectable} from '@angular/core';
import {TreeNode} from 'primeng/api';
import {ReportInterface} from '../model/report.interface';

@Injectable({
  providedIn: 'root'
})
export class NodeService {
  constructor() {
  }

  formatJson(report: ReportInterface): TreeNode[] {
    let tree: { [key: string]: any } = {};
    for (let i = 0; i < report.videos.length; i++) {
      let video: any = report.videos[i];
      let tags: any = [...video.folders];
      tags = tags.reverse();

      for (let j = 0; j < tags.length; j++) {
        let id: any = tags[j].id;
        tree[id] = tree[id] ?? {
          parent: null,
          key: id.toString(),
          data: tags[j],
          children: [],
          label: tags[j].dossier
        };

        if ((j + 1) == tags.length) {
          tree[id].video = tree[id].video ?? new Object();
          tree[id].video[video.id] = video;
        }
        if (tree[tags[j - 1]?.id]) {
          tree[id].parent = tree[tags[j - 1]?.id];
          let parent: any = tree[tags[j - 1]?.id];
          parent.children.push(tree[id]);
        }

      }
    }
    return Object.values(tree).filter(leaf => !leaf.parent);
  }

  getFiles(report: ReportInterface) {
    return Promise.resolve(this.formatJson(report));
  }
}
