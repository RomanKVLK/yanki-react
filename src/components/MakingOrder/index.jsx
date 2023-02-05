const MakingOrder = () => {
  return (
    <section>
      <h2>Оформление заказа</h2>
      <h3>Персональные данные:</h3>
      <input type='name' placeholder='Ваше имя*' />
      <input type='lastname' placeholder='Ваша фамилия*' />
      <input type='email' placeholder='Ваш e-mail*' />
      <input type='tel' placeholder='Ваш телефон*' />
      <h3>Способ доставки:</h3>
      <div>
        <h4>По Беларуси:</h4>
        <form action='radio'>
          <label>
            <input
              type='radio'
              value='Самовывоз - вул. Большая Васильковская 14(м. Льва Толстого)'
            />
            <span>Самовывоз - вул. Большая Васильковская 14(м. Льва Толстого)</span>
          </label>
          <label>
            <input type='radio' value='Белпошта' />
            <span>Белпошта</span>
          </label>
        </form>
      </div>
      <div>
        <h4>Международная доставка:</h4>
        <label>
          <input type='radio' value='Белпочта / 1-3 недели / 30$' />
          <span>Белпочта / 1-3 недели / 30$</span>
        </label>
        <label>
          <input type='radio' value='DHL / 3-7 дней / 60$' />
          <span>DHL / 3-7 дней / 60$</span>
        </label>
      </div>
      <div>
        <h3>Адрес доставки:</h3>
        <input type='text' placeholder='Город*' />
        <input type='address' placeholder='Отделение почты*' />
      </div>
      <div>
        <label>
          <input type='radio' value='Полная предоплата через ЕРИП' />
          <span>Полная предоплата через ЕРИП</span>
        </label>
        <label>
          <input type='radio' value='Денежным переводом  Visa/MasterCard' />
          <span>Денежным переводом Visa/MasterCard</span>
        </label>
        <label>
          <input type='radio' value='Наложенным платежом в отделении Белпочты' />
          <span>Наложенным платежом в отделении Белпочты</span>
        </label>
      </div>
      <div>
        <h3>Использование бонусного счёта:</h3>
        <input type='text' placeholder='Сумма списания бонусов*' />
      </div>
      <div>
        <ul>
          <li>Войти в личный кабинет</li>
          <li>УСЛОВИЯ ДОСТАВКИ</li>
          <li>УСЛОВИЯ ОБМЕНА И ВОЗВРАТА</li>
          <li>ИНФОРМАЦИЯ ОБ ОПЛАТЕ</li>
        </ul>
      </div>
    </section>
  );
};

export default MakingOrder;
