import styles from './BaseTemplate.module.css';
export interface IBaseTemplate {}

const BaseTemplate: React.FC<IBaseTemplate> = () => {
  return <div className={styles.container}>Hello world!</div>;
};

export default BaseTemplate;
