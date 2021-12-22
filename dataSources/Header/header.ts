export interface menuHeaderItem {
  path: string;
  label: string;
}

export const menuHeader: menuHeaderItem[] = [
  { path: '/', label: 'Home' },
  { path: '/work', label: 'Work' },
  { path: '/about', label: 'About' },
];

export default menuHeader;
