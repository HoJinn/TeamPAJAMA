import { atom} from 'recoil';
import {Union, Literal, Static} from 'runtypes';

export const langs = Union(
  Literal('en'),
  Literal('fr'),
  Literal('ko'),
  Literal('sp')
);
export type Lang = Static<typeof langs>;

export const getI18n = (lang: Lang): string => {
  switch(lang.toLocaleLowerCase()){
    case 'ko': 
      return 'ko_KR';
    case 'fr':
      return 'fr_FR';
    case 'sp':
      return 'es_ES';
    default :
      return 'en_US';
  }
}


export const LangAtom = atom<Lang>({
  key: 'LangAtom',
  default:"ko"
})



export type CountriesProps = {
  id: number;
  iso: string;
  name: string;
  native: string;
  latitude: number;
  longitude: number;
}


// const 

