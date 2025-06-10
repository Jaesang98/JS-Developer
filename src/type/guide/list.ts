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
  menuDescription: string;
  code: Code[];
}

export interface Code {
  codeDescription: string;
  code: string;
  frameworkName: string;
  frameworkId: string;
}
