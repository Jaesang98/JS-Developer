import { create } from 'zustand';
import type { UserStore, UserInfo } from '@/type/userInfo';

export const useUserInfoStore = create<UserStore>((set, get) => ({
  //로그인한 사용자의 정보
  userInfo: {
    userId: '',
    userName: '',
    adminYn: '',
  },

  // getter
  isAdmin: () => get().userInfo.adminYn === 'Y',

  // actions
  setUser: (user: UserInfo) => set({ userInfo: user }),

  logout: () => {
    set({
      userInfo: {
        userId: '',
        userName: '',
        adminYn: '',
      },
    });
    window.location.href = '/';
  },
}));
