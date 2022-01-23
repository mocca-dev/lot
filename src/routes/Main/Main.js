import { useState, useContext, useEffect } from 'react';
import Store from '../../store';

import LotList from '../../components/LotList/LotList';
import SearchBar from '../../components/SearchBar/SearchBar';
import { FormikProvider, useFormik, Form } from 'formik';

const Main = () => {
  const [results] = useState([
    {
      img: '',
      title: 'Title Test',
      address: 'Brown 247',
      date: '',
      price: '86',
      since: '12',
    },
    {
      img: '',
      title: 'Title Test2',
      address: 'Brown 247',
      date: '',
      price: '86',
      since: '12',
    },
    {
      img: '',
      title: 'Title Test3',
      address: 'Brown 247',
      date: '',
      price: '86',
      since: '12',
    },
    {
      img: '',
      title: 'Title Test3',
      address: 'Brown 247',
      date: '',
      price: '86',
      since: '12',
    },
    {
      img: '',
      title: 'Title Test3',
      address: 'Brown 247',
      date: '',
      price: '86',
      since: '12',
    },
    {
      img: '',
      title: 'Title Test3',
      address: 'Brown 247',
      date: '',
      price: '86',
      since: '12',
    },
    {
      img: '',
      title: 'Title Test3',
      address: 'Brown 247',
      date: '',
      price: '86',
      since: '12',
    },
  ]);

  const { dispatch } = useContext(Store);

  useEffect(() => {
    dispatch({ type: 'SET_SUB_HEADER', payload: 'Buscar cocheras' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formik = useFormik({
    initialValues: {
      searchText: '',
    },
    onSubmit: async (values) => {
      console.log(JSON.stringify(values, null, 2));
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
        <LotList list={results} />
      </main>{' '}
    </>
  );
};

export default Main;
