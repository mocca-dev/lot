import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useSelector } from 'react-redux';
import {
  fecthPosts,
  fetchPostsByTitle,
  selecPosts,
  selecPostsIsFetching,
} from '../../reducers/posts/postsSlice';
import { set } from '../../reducers/subHeader/subHeaderSlice';

import LotList from '../../components/LotList/LotList';
import SearchBar from '../../components/SearchBar/SearchBar';
import { FormikProvider, useFormik, Form } from 'formik';
import { showFixedContent } from '../../reducers/showFlags/showFlagsSlice';

const Main = () => {
  const dispatch = useDispatch();
  const list = useSelector(selecPosts);
  const isFetching = useSelector(selecPostsIsFetching);

  useEffect(() => {
    dispatch(fecthPosts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(set('Buscar cocheras'));
    dispatch(showFixedContent());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formik = useFormik({
    initialValues: {
      searchText: '',
    },
    onSubmit: async (values) => {
      dispatch(fetchPostsByTitle(values.searchText));
    },
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

export default Main;
