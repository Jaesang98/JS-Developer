export interface MenuList {
  menuList: MenuItem[];
}

export interface MenuItem {
  menuId: string;
  menuName: string;
  menuLevel: number;
  parentId: string;
  children: MenuItem[];
}
