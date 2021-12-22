import React, { useContext } from 'react';
// libs
import classNames from 'classnames';
// components
import Logo from './mains/logo/Logo';
import MenuBar from './mains/menubar/MenuBar';
import SwitchComponent from './mains/switch/SwitchComponent';
// contexts
import { ThemeContext } from '../../context/ThemeContext';
// other
import styles from './header.module.scss';

const Header = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <nav
      className={classNames(styles.menuBar, {
        [styles.light]: isDarkMode,
      })}
    >
      <Logo />
      <MenuBar />
      <SwitchComponent />
    </nav>
  );
};

export default Header;
