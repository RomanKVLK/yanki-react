import { Link } from 'react-router-dom';
import styles from './MakingOrder.module.scss';

const MakingOrder = () => {
  return (
    <section className={styles.sectionBox}>
      <h2>Оформление заказа</h2>
      <div className={styles.wrapper}>
        <div className={styles.wrapperPersonal}>
          <h3>Персональные данные:</h3>
          <div className={styles.wrapperInputs}>
            <input className={styles.inputPerson} type="name" placeholder="Ваше имя*" />
            <input className={styles.inputPerson} type="lastname" placeholder="Ваша фамилия*" />
            <input className={styles.inputPerson} type="email" placeholder="Ваш e-mail*" />
            <input className={styles.inputPerson} type="tel" placeholder="Ваш телефон*" />
          </div>
          <h3>Способ доставки:</h3>
          <div className={styles.wrapperDelivery}>
            <div className={styles.wrapperDeliveryBox}>
              <h4>По Беларуси:</h4>
              <form className={styles.form}>
                <label>
                  <input
                    type="radio"
                    value="Самовывоз - вул. Большая Васильковская 14(м. Льва Толстого)"
                  />
                  <span>
                    Самовывоз - вул. Большая Васильковская 14
                    <br />
                    (м. Льва Толстого)
                  </span>
                </label>
                <label>
                  <input type="radio" value="Белпошта" />
                  <span>Белпошта</span>
                </label>
              </form>
            </div>
            <div className={styles.wrapperDeliveryBox}>
              <h4>Международная доставка:</h4>
              <form className={styles.form}>
                <label>
                  <input type="radio" value="Белпочта / 1-3 недели / 30$" />
                  <span>Белпочта / 1-3 недели / 30$</span>
                </label>
                <label>
                  <input type="radio" value="DHL / 3-7 дней / 60$" />
                  <span>DHL / 3-7 дней / 60$</span>
                </label>
              </form>
            </div>
          </div>
          <div className={styles.inputAddress}>
            <h3>Адрес доставки:</h3>
            <div>
              <input className={styles.inputPerson} type="text" placeholder="Город*" />
              <input className={styles.inputPerson} type="address" placeholder="Отделение почты*" />
            </div>
          </div>
          <div>
            <form className={styles.form}>
              <label className={styles.labelBlock}>
                <input type="radio" value="Полная предоплата через ЕРИП" />
                <span>Полная предоплата через ЕРИП</span>
              </label>
              <label className={styles.labelBlock}>
                <input type="radio" value="Денежным переводом  Visa/MasterCard" />
                <span>Денежным переводом Visa/MasterCard</span>
              </label>
              <label className={styles.labelBlock}>
                <input type="radio" value="Наложенным платежом в отделении Белпочты" />
                <span>Наложенным платежом в отделении Белпочты</span>
              </label>
            </form>
          </div>
          <div>
            <h3>Использование бонусного счёта:</h3>
            <input
              className={styles.inputBonus}
              type="text"
              placeholder="Сумма списания бонусов*"
            />
          </div>
        </div>
        <div className={styles.wrapperOrder}>
          <ul className={styles.listLink}>
            <li>Войти в личный кабинет</li>
            <li>
              <Link to="/payment-and-delivery">УСЛОВИЯ ДОСТАВКИ</Link>
            </li>
            <li>
              <Link to="/exchange-and-return">УСЛОВИЯ ОБМЕНА И ВОЗВРАТА</Link>
            </li>
            <li>
              <Link to="/payment-and-delivery">ИНФОРМАЦИЯ ОБ ОПЛАТЕ</Link>
            </li>
          </ul>
          <ul>
            <li className={styles.wrapperScore}>
              <p>ДОСТАВКА:</p>
              <b>По тарифам перевозчика</b>
            </li>
            <li className={styles.wrapperScore}>
              <p>БОНУСЫ:</p>
              <b>-69 р</b>
            </li>
            <li className={styles.wrapperScore}>
              <p>ИТОГО:</p>
              <b>15250 грн</b>
            </li>
          </ul>
          <button className={styles.buttonOrder}>ОФОРМИТЬ ЗАКАЗ</button>
          <p className={styles.orderDescription}>
            Нажимая на кнопку «оплатить заказ», я принимаю условия{' '}
            <span>
              <Link to="/public-offer">публичной оферты</Link>
            </span>{' '}
            и{' '}
            <span>
              <Link>политики конфиденциальности</Link>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default MakingOrder;
