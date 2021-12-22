import React, { useContext } from 'react';
import { Checkbox } from 'antd';
// context
import { ThemeContext } from '../../../../context/ThemeContext';
// others
import styles from './switch.module.scss';

const SwitchComponent = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <div className={styles.wrapper}>
      <Checkbox onChange={toggleTheme}>Dark Theme</Checkbox>
    </div>
  );
};

export default SwitchComponent;
