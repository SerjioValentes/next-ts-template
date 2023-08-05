type MenuItemProps = {
  id: string;
  title: string;
  link: string;
};

const menuItemList: MenuItemProps[] = [
  {
    id: '0',
    title: 'Home',
    link: '/',
  },
  {
    id: '3',
    title: 'Portraits',
    link: '/portraits',
  },
  {
    id: '4',
    title: 'Nature',
    link: '/nature',
  },
  {
    id: '2',
    title: 'Street',
    link: '/street',
  },
  {
    id: '1',
    title: 'Contact',
    link: '/contact',
  },
];
export default menuItemList;
