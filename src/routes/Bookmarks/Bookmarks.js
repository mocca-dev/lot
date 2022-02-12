import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { FormikProvider, useFormik, Form } from 'formik';
import { useTranslation } from 'react-i18next';

import LotList from '../../components/LotList/LotList';
import SearchBar from '../../components/SearchBar/SearchBar';
import { set } from '../../reducers/subHeader/subHeaderSlice';
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
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(fetchBookmarks());
  }, [dispatch]);

  useEffect(() => {
    dispatch(set(t('bookmarksSubheader')));
    dispatch(showFixedContent());
  }, [dispatch, t]);

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
