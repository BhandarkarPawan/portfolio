import React from 'react';
import styles from './index.module.css';

export interface Props {}
const Highlight: React.FC<Props> = (props) => {
  return <div className={styles.highlight}>&nbsp;{props.children}&nbsp;</div>;
};

export default Highlight;
