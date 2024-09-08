import {createBrowserRouter} from 'react-router-dom';
import Login from './views/login.jsx';
import Register from './views/register.jsx';
import DefaultLayout from './Components/DefaultLayout.jsx';
import GuestLayout from './Components/GuestLayout.jsx';
import Users from './views/users.jsx';
import UserForm from './views/UserForm.jsx';
import Certificate from './views/Certificate.jsx';
import App from './App.jsx';

const router = createBrowserRouter ([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/certificates',
                element: <Users />,
            },
            {
                path: '/certificates/new',
                element: <UserForm key="userCreate"/>
            },

        ]
    },
    {
        path: '/belge/SonucBelgesi/BasvuruNo/:application',
        element: <Certificate  />
    },
    {
        path:'',
        element:<App />
    },
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/r3g1st3r',
                element:  <Register />,
            }
        ]
    },
]);

export default router;
