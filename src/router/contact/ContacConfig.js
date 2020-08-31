import Contac from './Contac';
export const ContactConfig  ={
  settings: {
    layout: 'Admin',
    showSideBar: true
  },
    routes:[
        {
            path:'/contact-us',
            component:Contac
          },
    ]
}
