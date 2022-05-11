import { atom } from "recoil";
import PageInfo from "src/entity/PageInfo";

export interface ListPage<T> {
  page: PageInfo,
  list: Array<T>
}

export type CategoryMenu={
  title:string;
  sub:Array<SubCategoryMenu>
}
export type SubCategoryMenu={
  title:string;
  link:string;
}

export interface Hierarchical {
  groupDepth: number;
  groupId: number;
  groupOrd: number;
  id: number;
  targetId: number;
}
export const ProgramPageAtom = atom<number|undefined>({
  key: 'ProgramPageAtom',
  default:undefined
})
export type Attachment = {
  id: string;
  state: 'UPLOADING' | 'UPLOADED' | 'ERROR';
  mimeType: string
  extension: string
  pathRoot: string
  pathSub: string
  originName: string
  storeName: string
  size: number
  width?: number
  height?: number
  upt_date?: Date;
  reg_date?: Date;
}
export interface Hierarchical {
  groupDepth: number;
  groupId: number;
  groupOrd: number;
  id: number;
  targetId: number;
}