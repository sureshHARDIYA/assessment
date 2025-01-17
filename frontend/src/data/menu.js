export default [
  {
    id: '1',
    icon: 'dashboard',
    name: 'Dashboard',
    route: '/admin',
    roles: ['admin'],
  },
  {
    id: '2',
    bpid: '1',
    name: 'Offers',
    icon: 'table',
    route: '/offers',
    roles: ['admin'],
  },
  {
    id: '2.1',
    bpid: '2',
    mpid: '2',
    name: 'All Offers',
    route: '/offers',
    roles: ['admin'],
  },
  {
    id: '2.2',
    bpid: '2',
    mpid: '2',
    name: 'New Offer',
    route: '/offers/new',
    roles: ['admin'],
  },
  {
    id: '3',
    bpid: '1',
    name: 'Users',
    icon: 'user',
    route: '/',
    roles: ['admin'],
  },
  {
    id: '3.1',
    bpid: '3',
    mpid: '3',
    name: 'Customers',
    route: '/customers',
    roles: ['admin'],
  },
  {
    id: '4.2',
    bpid: '3',
    mpid: '3',
    name: 'Agents',
    route: '/agents',
    roles: ['admin'],
  },
];
