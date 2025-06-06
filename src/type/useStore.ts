// 로그인 시 받는 사용자 정보
export interface UserStore {
  userInfo: UserInfo;
  logout: () => void;
  setUser: (user: UserInfo) => void;
}

export type UserInfo = {
  userId: string;
  userName: string;
  role: string;
  loginType: string;
};

// 다크모드
export interface DarkMode {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}
