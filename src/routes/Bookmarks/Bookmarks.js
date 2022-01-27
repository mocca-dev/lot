import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import LotList from '../../components/LotList/LotList';
import SearchBar from '../../components/SearchBar/SearchBar';
import { FormikProvider, useFormik, Form } from 'formik';
import { set } from '../../reducers/subHeader/subHeaderSlice';

const fetchParkData = (setResults, setIsFetching) => {
  setIsFetching(true);
  fetch('api/parkinglots')
    .then((response) => response.json())
    .then((data) => {
      setResults(data);
      setIsFetching(false);
    });
};

const Bookmarks = () => {
  const dispatch = useDispatch();
  const [results, setResults] = useState([]);
  const [isFetching, setIsFetching] = useState([]);

  useEffect(() => {
    fetchParkData(setResults, setIsFetching);
  }, []);

  useEffect(() => {
    dispatch(set('Guardados'));
    // dispatch({ type: 'SET_SUB_HEADER', payload: 'Guardados' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formik = useFormik({
    initialValues: {
      searchText: '',
    },
    onSubmit: async (values) => {
      // console.log(JSON.stringify(values, null, 2));
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
          Mostrando {results?.length} de 10
        </span>
      </span>
      <main>
        <LotList list={results} isLoading={isFetching} />
      </main>
    </>
  );
};

export default Bookmarks;
