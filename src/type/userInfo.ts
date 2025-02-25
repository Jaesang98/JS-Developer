// 로그인 사용자 정보 타입 정의
export interface UserStore {
    setUser(arg0: { userId: any; userName: string; adminYn: string }): unknown;
    userInfo: UserInfo;
}

// UserInfo 타입 정의
export type UserInfo = {
    userId: string;
    userName: string;
    adminYn: string;
};
