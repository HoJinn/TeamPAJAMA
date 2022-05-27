import { atom } from "recoil"

export type Member = {
  uk: string;
  nickname: string;
  roles: Array<Role>;
  type: string
}

export type Role = {
  key: string;
  name: string;
}



export const authAtom = atom<Member|null>({
  key: 'authAtom',
  default: null
})