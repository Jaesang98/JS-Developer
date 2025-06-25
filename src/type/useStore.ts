// 로그인 시 받는 사용자 정보
export interface UserStore {
  userInfo: UserInfo;
  grantType: string;
  accessToken: string;
  refreshToken: string;
  setUser: (user: UserInfo) => void;
  setToken: (grantType: string, accessToken: string, refreshToken: string) => void;
  logout: () => void;

  emailCheck: boolean;
  savedEmail: string;
  saveEmail: (save: boolean, email: string) => void;
}
// 사용자정보
export type UserInfo = {
  email: string;
  name: string;
  phone: string;
  loginType: string;
  profile: string;
  providerId: string;
  created: string;
  updated: string;
  deleteYn: string;
  role: string;
};

// 다크모드
export interface DarkMode {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}
