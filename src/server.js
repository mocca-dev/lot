import { createServer } from 'miragejs';

export function makeServer() {
  return createServer({
    routes() {
      this.timing = 1000;
      this.get('api/parkinglots', () => [
        {
          img: '',
          title: 'Cochera amplia',
          address: 'Calle 123',
          date: '',
          price: '140',
          since: '12',
        },
        {
          img: '',
          title: 'Alquilo cochera',
          address: 'Urquiza 345',
          date: '',
          price: '86',
          since: '12',
        },
        {
          img: '',
          title: 'Cochera en alquiler',
          address: 'Passo 455',
          date: '',
          price: '100',
          since: '12',
        },
        {
          img: '',
          title: 'Cocheras cubiertas',
          address: 'Alsina 954',
          date: '',
          price: '45',
          since: '12',
        },
        {
          img: '',
          title: 'Autos/Camionetas',
          address: 'Colon 763',
          date: '',
          price: '186',
          since: '12',
        },
        {
          img: '',
          title: 'Cochera con baulera',
          address: 'Luiggi 283',
          date: '',
          price: '231',
          since: '12',
        },
        {
          img: '',
          title: 'Disponible desde febrero',
          address: 'Alem 554',
          date: '',
          price: '98',
          since: '12',
        },
      ]);
    },
  });
}
