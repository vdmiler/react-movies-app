export const menuItems = [
   {
      id: 0,
      label: 'Home',
      path: '/',
      Component: 'Main'
   },
   {
      id: 1,
      label: 'Help',
      path: '/help',
      Component: 'Help'
   },
   {
      id: 2,
      label: 'Contacts',
      path: '/contacts',
      Component: 'Contacts'
   },
]

export const API_KEY = process.env.REACT_APP_API_KEY;