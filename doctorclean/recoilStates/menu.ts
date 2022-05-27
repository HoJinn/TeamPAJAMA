
export type Menu = {
  id: number;
  absoluteKey:string;
  key: string;
  ruleParent: number;
  hierarchical: MenuHierarchical;
  metadatas: Array<MenuMetadata>;
  title: string;
  properties: Array<string>;
}

export type MenuHierarchical = {
  id: number;
  groupId: number;
  groupParent: number;
  groupDepth: number;
  groupOrd: number;
  menuId: number
}

export type MenuMetadata = {
  type: string
  link: string
}