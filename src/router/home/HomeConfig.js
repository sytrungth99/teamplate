import Main from "./Main";

export const HomeConfig = {
    settings: {
        layout: 'Guests',
        showSideBar: true
      },
      routes: [
        {
          path: '/',
          component: Main
        }
      ]
}