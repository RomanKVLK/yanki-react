import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import qs from 'qs';

import ProductItem from '../../components/ProductItem';
import Categories from '../../components/Categories';
import Pagination from '../../components/Pagination';
import styles from './Catalog.module.scss';

import { setCategoryId } from '../../redux/slices/filter/filterSlice';
import { fetchProduct } from '../../redux/slices/product/asyncActions';

const Catalog = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const categoryId = useSelector((state) => state.filter.categoryId);
  // const searchValue = useSelector((state) => state.filter.searchValue);
  const items = useSelector((state) => state.product.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const search = searchValue ? `&search=${searchValue}` : '';

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const getProduct = async () => {
    dispatch(
      fetchProduct({
        currentPage,
        categoryId,
      }),
    );
  };

  React.useEffect(() => {
    getProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, categoryId]);

  React.useEffect(() => {
    const queryString = qs.stringify({
      categoryId,
      currentPage,
    });
    navigate(`?${queryString}`);
  }, [categoryId, currentPage, navigate]);

  return (
    <main>
      <div className={styles.container}>
        <div className={styles.pagination}>
          Главная <img src="/img/little-arrow.svg" alt="Arrow" /> Каталог
          <img src="/img/little-arrow.svg" alt="Arrow" />
        </div>
        <div className={styles.wrapper}>
          <Categories value={categoryId} onChangeCategory={(i) => onChangeCategory(i)} />
          <div className={styles.catalogBlock}>
            {items.map((obj) => (
              <Link to={`/full-item/${obj.id}`}>
                <ProductItem key={obj.id} {...obj} />
              </Link>
            ))}
          </div>
        </div>
        <Pagination onChangePage={(num) => setCurrentPage(num)} />
      </div>
    </main>
  );
};

export default Catalog;
