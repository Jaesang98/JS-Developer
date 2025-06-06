import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import type { UserStore, UserInfo, DarkMode } from '@/type/useStore';

// 사용자 정보
const useUserInfoStore = create<UserStore>()(
  persist(
    (set) => ({
      userInfo: {
        userId: '',
        userName: '',
        role: '',
        loginType: '',
      },

      setUser: (user: UserInfo) =>
        set({
          userInfo: user,
        }),

      logout: () =>
        set({
          userInfo: {
            userId: '',
            userName: '',
            role: '',
            loginType: '',
          },
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
