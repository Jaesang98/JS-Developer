export interface GuideList {
  guideList: GuideItem[];
}

export interface GuideItem {
  menuDesId: string;
  menuId: string;
  menuName: string;
  imageUrl: string;
  gifUrl: string;
  iframeUrl: string;
  frameworkName: string;
  codeDescription: string;
  menuDescription: string;
}
