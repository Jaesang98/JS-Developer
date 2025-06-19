import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import type { UserStore, UserInfo, DarkMode } from '@/type/useStore';

// 사용자 정보
const useUserInfoStore = create<UserStore>()(
  persist(
    (set) => ({
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

      setUser: (user: UserInfo) => set({ userInfo: user }),

      emailCheck: false,
      savedEmail: '',

      saveEmail: (save: boolean, email: string) =>
        set(() => ({
          emailCheck: save,
          savedEmail: save ? email : '',
        })),

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
