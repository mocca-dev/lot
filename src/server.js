import { createServer } from 'miragejs';

const PARKING_LOTS_LIST = [
  {
    id: '0',
    img: '',
    title: 'Cochera amplia',
    address: 'Calle 123',
    date: '',
    price: '140',
    since: '12',
  },
  {
    id: '1',
    img: '',
    title: 'Alquilo cochera',
    address: 'Urquiza 345',
    date: '',
    price: '86',
    since: '12',
  },
  {
    id: '2',
    img: '',
    title: 'Cochera en alquiler',
    address: 'Passo 455',
    date: '',
    price: '100',
    since: '12',
  },
  {
    id: '3',
    img: '',
    title: 'Cocheras cubiertas',
    address: 'Alsina 954',
    date: '',
    price: '45',
    since: '12',
  },
  {
    id: '4',
    img: '',
    title: 'Autos/Camionetas',
    address: 'Colon 763',
    date: '',
    price: '186',
    since: '12',
  },
  {
    id: '5',
    img: '',
    title: 'Cochera con baulera',
    address: 'Luiggi 283',
    date: '',
    price: '231',
    since: '12',
  },
  {
    id: '6',
    img: '',
    title: 'Disponible desde febrero',
    address: 'Alem 554',
    date: '',
    price: '98',
    since: '12',
  },
];
const BOOKMARKED_LOTS_LIST = [
  {
    id: '0',
    img: '',
    title: 'Cochera en alquiler',
    address: 'Passo 455',
    date: '',
    price: '100',
    since: '12',
  },
  {
    id: '1',
    img: '',
    title: 'Cocheras cubiertas',
    address: 'Alsina 954',
    date: '',
    price: '45',
    since: '12',
  },
];

const NOTIFICATION_LIST = [
  {
    id: '0',
    img: '',
    title: 'Title Test',
    date: '',
    since: '12',
  },
  {
    id: '1',
    img: '',
    title: 'Title Test2',
    date: '',
    since: '12',
  },
  {
    id: '2',
    img: '',
    title: 'Title Test3',
    date: '',
    since: '12',
  },
  {
    id: '3',
    img: '',
    title: 'Title Test3',
    date: '',
    since: '12',
  },
  {
    id: '4',
    img: '',
    title: 'Title Test3',
    date: '',
    since: '12',
  },
  {
    id: '5',
    img: '',
    title: 'Title Test3',
    date: '',
    since: '12',
  },
  {
    id: '6',
    img: '',
    title: 'Title Test3',
    date: '',
    since: '12',
  },
];

export function makeServer() {
  return createServer({
    routes() {
      this.timing = 1000;
      this.get('api/parkinglots', () => PARKING_LOTS_LIST);
      this.get('api/bookmarkedlots', () => BOOKMARKED_LOTS_LIST);
      this.get('api/notifications', () => NOTIFICATION_LIST);
      this.get('api/lot/:id', (schema, request) => {
        let { id } = request.params;
        return PARKING_LOTS_LIST.find((lot) => lot.id === id);
      });
    },
  });
}
