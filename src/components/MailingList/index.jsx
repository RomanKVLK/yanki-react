import React from 'react';
import styles from './MailingList.module.scss';

const MailingList = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Узнайте первым о новинках</h2>
      <input className={styles.input} type="email" placeholder="Ваш e-mail" />
      <button className={styles.button}>Подписаться</button>
      <p className={styles.descr}>
        Нажимая на кнопку «Подписаться», я соглашаюсь на обработку моих персональных данных и
        ознакомлен(а) с условиями конфиденциальности.
      </p>
    </div>
  );
};

export default MailingList;
