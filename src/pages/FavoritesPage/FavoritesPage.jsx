import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { useResize } from '../../redux/hooks/useResize';


import { fetchDrinksFavorite } from '../../redux/auth/authOperations'
import {deleteFavorite} from '../../redux/auth/authOperations'
import { Container } from '../../components/GlobalStyled/container.styled';
// import { getAllDrinks } from '../../redux/drinks/drinksOperations';
// import { selectDrinks } from '../../redux/drinks/drinksSelectors';

import { selectError } from '../../redux/drinks/drinksSelectors';
import PageTitle from '../../components/PageTitle/PageTitle';
import Drinks_List from '../../components/Drinks_List/Drinks_List';
import FavoritesNotFound from '../../components/NotFoundComponent/NotFoundComponent';
import {selectFavoriteDrinks} from '../../redux/auth/authSelectors'
import { Wrap } from './FavoritesPage.styled';
import Paginator from '../../components/Paginator/Paginator';

const FavoritesPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { width } = useResize();
  const drinksPerPage = width < 1280 ? 10 : 9;
  const pageNumbersVisible = width < 768 ? 5 : 8;

 
  // const first = useSelector(selectFavoriteDrinks);
  // console.log('1', first)


  const error = useSelector(selectError);
  const data = useSelector(selectFavoriteDrinks);
  const dispatch = useDispatch();

  // console.log(data)


  useEffect(() => {
    // dispatch(getAllDrinks());
    dispatch(fetchDrinksFavorite());
  }, [dispatch]);

  const current = (value) => {
    if (value) {
      const lastDrinkIndex = currentPage * drinksPerPage;
      const firstDrinkIndex = lastDrinkIndex - drinksPerPage;
      const res = value.data.slice(firstDrinkIndex, lastDrinkIndex);
      return res;
    }
    return;
  };

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Wrap>
    <Container>
      <PageTitle title={'Favorites'}></PageTitle>
      {data && data.length !== 0 ? (
        <Drinks_List deleteCard={deleteFavorite} items={current(data)}></Drinks_List>
      ) : (
        <FavoritesNotFound error={error} message={"No favorite cocktails"}></FavoritesNotFound>
      )}
      {data && data.length !== 0 && (
        <Paginator
          currentPage={currentPage}
          paginate={pageNumbersVisible}
          drinksPerPage={drinksPerPage}
          totalItems={data.length}
          nextPage={onPageChange}
        ></Paginator>
      )}
       </Container>
    </Wrap>
  );
};

export default FavoritesPage;
