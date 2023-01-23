import React from 'react';
import styles from './Contacts.module.scss';

const Contacts = () => {
  return (
    <main>
      <div className={styles.container}>
        <div className="pagination">Главная {'>'} Контакты</div>
        <h1 className="exchange-title">Связаться с нами</h1>
      </div>
      <div>
        {' '}
        <div>
          <h2>В социальных сетях</h2>
          <ul>
            <li>
              <svg
                width="25"
                height="25"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.50016 6.125C7.87027 6.125 7.26618 6.37522 6.82078 6.82062C6.37539 7.26602 6.12516 7.87011 6.12516 8.5C6.12516 9.12988 6.37539 9.73398 6.82078 10.1794C7.26618 10.6248 7.87027 10.875 8.50016 10.875C9.13005 10.875 9.73414 10.6248 10.1795 10.1794C10.6249 9.73398 10.8752 9.12988 10.8752 8.5C10.8752 7.87011 10.6249 7.26602 10.1795 6.82062C9.73414 6.37522 9.13005 6.125 8.50016 6.125ZM8.50016 4.54166C9.54998 4.54166 10.5568 4.9587 11.2991 5.70103C12.0415 6.44336 12.4585 7.45018 12.4585 8.5C12.4585 9.54981 12.0415 10.5566 11.2991 11.299C10.5568 12.0413 9.54998 12.4583 8.50016 12.4583C7.45035 12.4583 6.44353 12.0413 5.7012 11.299C4.95887 10.5566 4.54183 9.54981 4.54183 8.5C4.54183 7.45018 4.95887 6.44336 5.7012 5.70103C6.44353 4.9587 7.45035 4.54166 8.50016 4.54166ZM13.646 4.34375C13.646 4.6062 13.5417 4.8579 13.3562 5.04349C13.1706 5.22907 12.9189 5.33333 12.6564 5.33333C12.394 5.33333 12.1423 5.22907 11.9567 5.04349C11.7711 4.8579 11.6668 4.6062 11.6668 4.34375C11.6668 4.08129 11.7711 3.82959 11.9567 3.644C12.1423 3.45842 12.394 3.35416 12.6564 3.35416C12.9189 3.35416 13.1706 3.45842 13.3562 3.644C13.5417 3.82959 13.646 4.08129 13.646 4.34375ZM8.50016 2.16666C6.54158 2.16666 6.22175 2.1722 5.31054 2.21258C4.68987 2.24187 4.27345 2.325 3.88712 2.47541C3.54354 2.60841 3.29575 2.76754 3.03212 3.03195C2.78434 3.27135 2.59382 3.56362 2.47479 3.88695C2.32437 4.27487 2.24125 4.6905 2.21275 5.31037C2.17158 6.18437 2.16683 6.48995 2.16683 8.5C2.16683 10.4586 2.17237 10.7784 2.21275 11.6896C2.24204 12.3095 2.32516 12.7267 2.47479 13.1122C2.60937 13.4566 2.7677 13.7044 3.03054 13.9672C3.29733 14.2332 3.54512 14.3924 3.88554 14.5238C4.27662 14.675 4.69304 14.7589 5.31054 14.7874C6.18454 14.8286 6.49012 14.8333 8.50016 14.8333C10.4587 14.8333 10.7786 14.8278 11.6898 14.7874C12.3089 14.7581 12.7261 14.675 13.1124 14.5254C13.4552 14.3916 13.7046 14.2325 13.9674 13.9696C14.2342 13.7028 14.3933 13.455 14.5247 13.1146C14.6752 12.7243 14.7591 12.3071 14.7876 11.6896C14.8287 10.8156 14.8335 10.51 14.8335 8.5C14.8335 6.54141 14.828 6.22158 14.7876 5.31037C14.7583 4.69129 14.6752 4.27329 14.5247 3.88695C14.4054 3.56395 14.2153 3.2718 13.9682 3.03195C13.7289 2.78404 13.4366 2.5935 13.1132 2.47462C12.7253 2.3242 12.3089 2.24108 11.6898 2.21258C10.8158 2.17141 10.5102 2.16666 8.50016 2.16666ZM8.50016 0.583328C10.6511 0.583328 10.9195 0.591245 11.7634 0.630828C12.6065 0.670412 13.1805 0.80262 13.6856 0.998953C14.2081 1.20004 14.6482 1.47237 15.0884 1.91175C15.491 2.3075 15.8025 2.78621 16.0012 3.31458C16.1967 3.81887 16.3297 4.39362 16.3693 5.23675C16.4065 6.08066 16.4168 6.34904 16.4168 8.5C16.4168 10.651 16.4089 10.9193 16.3693 11.7632C16.3297 12.6064 16.1967 13.1803 16.0012 13.6854C15.803 14.2141 15.4915 14.6929 15.0884 15.0882C14.6926 15.4907 14.2139 15.8021 13.6856 16.001C13.1813 16.1966 12.6065 16.3296 11.7634 16.3692C10.9195 16.4064 10.6511 16.4167 8.50016 16.4167C6.34921 16.4167 6.08083 16.4087 5.23691 16.3692C4.39379 16.3296 3.81983 16.1966 3.31475 16.001C2.78617 15.8027 2.30737 15.4912 1.91191 15.0882C1.50928 14.6926 1.19778 14.2138 0.999121 13.6854C0.802788 13.1811 0.670579 12.6064 0.630996 11.7632C0.593788 10.9193 0.583496 10.651 0.583496 8.5C0.583496 6.34904 0.591413 6.08066 0.630996 5.23675C0.670579 4.39283 0.802788 3.81966 0.999121 3.31458C1.19722 2.78589 1.5088 2.30704 1.91191 1.91175C2.30749 1.50897 2.78625 1.19745 3.31475 0.998953C3.81983 0.80262 4.393 0.670412 5.23691 0.630828C6.08083 0.59362 6.34921 0.583328 8.50016 0.583328Z"
                  fill="#E0BEA2"
                />
              </svg>
            </li>
            <li>
              <svg
                width="25"
                height="25"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.50016 14.8333C10.1799 14.8333 11.7908 14.1661 12.9785 12.9783C14.1662 11.7906 14.8335 10.1797 14.8335 8.5C14.8335 6.82029 14.1662 5.20938 12.9785 4.02165C11.7908 2.83392 10.1799 2.16666 8.50016 2.16666C6.82046 2.16666 5.20955 2.83392 4.02182 4.02165C2.83409 5.20938 2.16683 6.82029 2.16683 8.5C2.16683 10.1797 2.83409 11.7906 4.02182 12.9783C5.20955 14.1661 6.82046 14.8333 8.50016 14.8333ZM8.50016 16.4167C4.12779 16.4167 0.583496 12.8724 0.583496 8.5C0.583496 4.12762 4.12779 0.583328 8.50016 0.583328C12.8725 0.583328 16.4168 4.12762 16.4168 8.5C16.4168 12.8724 12.8725 16.4167 8.50016 16.4167ZM6.03808 9.42625L4.0605 8.80954C3.633 8.67891 3.63062 8.38441 4.15629 8.17304L11.8616 5.19637C12.3089 5.01429 12.5622 5.24466 12.4173 5.82179L11.1055 12.0126C11.0137 12.4536 10.7485 12.5589 10.3804 12.3554L8.36083 10.8607L7.41954 11.7696C7.32296 11.863 7.24458 11.943 7.09575 11.9627C6.9477 11.9833 6.82579 11.939 6.73633 11.6936L6.04758 9.4207L6.03808 9.42625Z"
                  fill="#E0BEA2"
                />
              </svg>
            </li>
          </ul>
        </div>
        <div>
          <h2>По телефону</h2>
          <ul>
            <li>+38(067) 158 82 66</li>
            <li>+38(073) 226 39 81</li>
          </ul>
        </div>
        <div>
          <h2>По почте</h2>
          <p>example@gmail.com</p>
        </div>
        <div>
          <h2>Наш офис</h2>
          <p>г. Киев, улица Батумская, 18</p>
        </div>
      </div>
    </main>
  );
};

export default Contacts;
