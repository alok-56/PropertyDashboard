import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
import GuestTable from './Guest/Table';
import ProductTable from './Product/Table';
import RoomTable from './Product/Table';
import UserTable from './User/Table';

const Analytics = Loadable(lazy(() => import('./Analytics')));

const dashboardRoutes = [
  { path: '/dashboard', element: <Analytics /> },
  { path: '/guest', element: <GuestTable></GuestTable> },
  { path: '/rooms', element: <RoomTable></RoomTable> },
  { path: '/users', element: <UserTable></UserTable> },
];

export default dashboardRoutes;
