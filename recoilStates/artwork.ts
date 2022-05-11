import { atom } from "recoil";
import { Attachment, Hierarchical } from "./comm";
import { Member } from "./member";
import { Menu } from "./menu";

export interface Artworks<T = Record<string, string>> {
  uk: string;
  nb:number;
  writer?: string;
  title: string;
  content?: string;
  dates?:Array<number|Array<number>>
  view?: number;
  upt_date?: number;
  reg_date: number;
  menu?: Menu;
  preview?: Attachment;
  attachments:Array<Attachment>;
  hierarchical?: Hierarchical;
  // property?: Record<string, string>;
  property?: T;
}
export interface Artwork<T = Record<string, string>> {
  uk: string;
  writer: string;
  title: string;
  content?: string;
  view: number;
  upt_date: number;
  reg_date: number;
  menu: Menu;
  preview?:any;
  attachments: Array<Attachment>;
  member: Member;
  property: T;
}


export const noticeListAtom = atom<Array<Artwork>>({
  key: 'NoticeListAtom',
  default:[]
})

