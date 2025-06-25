import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import type { UserStore, UserInfo, DarkMode } from '@/type/useStore';

// 사용자 정보
const useUserInfoStore = create<UserStore>()(
  persist(
    (set) => ({
      // 유저정보
      userInfo: {
        email: '',
        name: '',
        phone: '',
        loginType: '',
        profile: '',
        providerId: '',
        created: '',
        updated: '',
        deleteYn: '',
        role: '',
      },

      //토큰
      accessToken: '',
      refreshToken: '',
      grantType: '',

      // 유저정보 저장
      setUser: (user: UserInfo) => set({ userInfo: user }),

      //토큰저장
      setToken: (grantType: string, accessToken: string, refreshToken: string) =>
        set(() => ({
          grantType,
          accessToken,
          refreshToken,
        })),

      clearToken: () =>
        set(() => ({
          grantType: '',
          accessToken: '',
          refreshToken: '',
        })),

      // 이메일 저장
      emailCheck: false,
      savedEmail: '',

      saveEmail: (save: boolean, email: string) =>
        set(() => ({
          emailCheck: save,
          savedEmail: save ? email : '',
        })),

      // 로그아웃
      logout: () =>
        set((state) => {
          return {
            userInfo: {
              email: '',
              name: '',
              phone: '',
              loginType: '',
              profile: '',
              providerId: '',
              created: '',
              updated: '',
              deleteYn: '',
              role: '',
            },
            emailCheck: state.emailCheck,
            savedEmail: state.emailCheck ? state.savedEmail : '',
          };
        }),
    }),
    {
      name: 'userInfo',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

// 다크모드
const useDarkModeStore = create<DarkMode>()(
  persist(
    (set) => ({
      isDarkMode: false,
      toggleDarkMode: () =>
        set((state) => ({
          isDarkMode: !state.isDarkMode,
        })),
    }),
    {
      name: 'darkMode',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export { useUserInfoStore, useDarkModeStore };
