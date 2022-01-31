import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import LotList from '../../components/LotList/LotList';
import SearchBar from '../../components/SearchBar/SearchBar';
import { FormikProvider, useFormik, Form } from 'formik';
import { set } from '../../reducers/subHeader/subHeaderSlice';
import { useSelector } from 'react-redux';
import {
  fetchBookmarks,
  fetchBookmarksByTitle,
  selecBookmarks,
  selecBookmarksIsFetching,
} from '../../reducers/bookmarks/bookmarksSlice';
import { showFixedContent } from '../../reducers/showFlags/showFlagsSlice';

const Bookmarks = () => {
  const dispatch = useDispatch();
  const list = useSelector(selecBookmarks);
  const isFetching = useSelector(selecBookmarksIsFetching);

  useEffect(() => {
    dispatch(fetchBookmarks());
  }, [dispatch]);

  useEffect(() => {
    dispatch(set('Guardados'));
    dispatch(showFixedContent());
  }, [dispatch]);

  const formik = useFormik({
    initialValues: {
      searchText: '',
    },
    onSubmit: async (values) =>
      dispatch(fetchBookmarksByTitle(values.searchText)),
  });

  return (
    <>
      <span className="non-scroll-main">
        <FormikProvider value={formik}>
          <Form>
            <SearchBar />
          </Form>
        </FormikProvider>
        <span className="result-counter">
          Mostrando {list?.length} de 10 resultados
        </span>
      </span>
      <main>
        <LotList list={list} isLoading={isFetching} />
      </main>
    </>
  );
};

export default Bookmarks;
