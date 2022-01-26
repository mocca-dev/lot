import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { set } from '../../reducers/subHeader/subHeaderSlice';

import LotList from '../../components/LotList/LotList';
import SearchBar from '../../components/SearchBar/SearchBar';
import { FormikProvider, useFormik, Form } from 'formik';
// import { showFixedContent } from '../../reducers/showFlags/showFlags';

const fetchParkData = (setResults, setIsFetching) => {
  setIsFetching(true);
  fetch('api/parkinglots')
    .then((response) => response.json())
    .then((data) => {
      setResults(data);
      setIsFetching(false);
    });
};

const Main = () => {
  const [results, setResults] = useState([]);
  const [isFetching, setIsFetching] = useState([]);
  // const { dispatch } = useContext(Store);
  // const showSubHeader = useSelector(selecSubHeader);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchParkData(setResults, setIsFetching);
  }, []);

  useEffect(() => {
    // dispatch({ type: 'SET_SUB_HEADER', payload: 'Buscar cocheras' });
    // dispatch({ type: 'SHOW_FIXED_CONTENT' });
    dispatch(set('Buscar cocheras'));
    // dispatch(showFixedContent());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formik = useFormik({
    initialValues: {
      searchText: '',
    },
    onSubmit: async (values) => {
      // console.log(JSON.stringify(values, null, 2));
      setResults([]);
      fetchParkData(setResults, setIsFetching);
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
          Mostrando {results?.length} de 10 resultados
        </span>
      </span>
      <main>
        <LotList list={results} isLoading={isFetching} />
      </main>
    </>
  );
};

export default Main;
