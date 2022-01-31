import { createServer, Model } from 'miragejs';

const NOTIFICATION_LIST = [
  {
    id: '0',
    img: 'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRyBTy_3B-cEArHrOpmwWG8zmC9FIaTPXfDuoETDszqRl8PFqX0-xRpaL97RIoL6TUXa5SkDsaZCJ5lMxKnyP4',
    title: 'Title Test',
    date: '',
    since: '12',
    contact: '(555) 555-5555',
    contactName: 'Inmobiliaria Jorgito',
    availability: 'Día',
    typeOfVehicle: 'Auto',
    typeOfCover: 'Cubierta',
    description:
      'Ubicado a media cuadra del Hospital y muy cercano a los nuevos accesos que el mismo abrió recientemente sobre la calle Potosí, hace que esta ubicación sea ideal para un garaje.',
  },
  {
    id: '1',
    img: 'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRyBTy_3B-cEArHrOpmwWG8zmC9FIaTPXfDuoETDszqRl8PFqX0-xRpaL97RIoL6TUXa5SkDsaZCJ5lMxKnyP4',
    title: 'Title Test2',
    date: '',
    since: '12',
    contact: '(555) 555-5555',
    contactName: 'Inmobiliaria Jorgito',
    availability: 'Día',
    typeOfVehicle: 'Auto',
    typeOfCover: 'Cubierta',
    description:
      'Ubicado a media cuadra del Hospital y muy cercano a los nuevos accesos que el mismo abrió recientemente sobre la calle Potosí, hace que esta ubicación sea ideal para un garaje.',
  },
  {
    id: '2',
    img: 'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRyBTy_3B-cEArHrOpmwWG8zmC9FIaTPXfDuoETDszqRl8PFqX0-xRpaL97RIoL6TUXa5SkDsaZCJ5lMxKnyP4',
    title: 'Title Test3',
    date: '',
    since: '12',
    contact: '(555) 555-5555',
    contactName: 'Inmobiliaria Jorgito',
    availability: 'Día',
    typeOfVehicle: 'Auto',
    typeOfCover: 'Cubierta',
    description:
      'Ubicado a media cuadra del Hospital y muy cercano a los nuevos accesos que el mismo abrió recientemente sobre la calle Potosí, hace que esta ubicación sea ideal para un garaje.',
  },
  {
    id: '3',
    img: 'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRyBTy_3B-cEArHrOpmwWG8zmC9FIaTPXfDuoETDszqRl8PFqX0-xRpaL97RIoL6TUXa5SkDsaZCJ5lMxKnyP4',
    title: 'Title Test3',
    date: '',
    since: '12',
    contact: '(555) 555-5555',
    contactName: 'Inmobiliaria Jorgito',
    availability: 'Día',
    typeOfVehicle: 'Auto',
    typeOfCover: 'Cubierta',
    description:
      'Ubicado a media cuadra del Hospital y muy cercano a los nuevos accesos que el mismo abrió recientemente sobre la calle Potosí, hace que esta ubicación sea ideal para un garaje.',
  },
  {
    id: '4',
    img: 'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRyBTy_3B-cEArHrOpmwWG8zmC9FIaTPXfDuoETDszqRl8PFqX0-xRpaL97RIoL6TUXa5SkDsaZCJ5lMxKnyP4',
    title: 'Title Test3',
    date: '',
    since: '12',
    contact: '(555) 555-5555',
    contactName: 'Inmobiliaria Jorgito',
    availability: 'Día',
    typeOfVehicle: 'Auto',
    typeOfCover: 'Cubierta',
    description:
      'Ubicado a media cuadra del Hospital y muy cercano a los nuevos accesos que el mismo abrió recientemente sobre la calle Potosí, hace que esta ubicación sea ideal para un garaje.',
  },
  {
    id: '5',
    img: 'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRyBTy_3B-cEArHrOpmwWG8zmC9FIaTPXfDuoETDszqRl8PFqX0-xRpaL97RIoL6TUXa5SkDsaZCJ5lMxKnyP4',
    title: 'Title Test3',
    date: '',
    since: '12',
    contact: '(555) 555-5555',
    contactName: 'Inmobiliaria Jorgito',
    availability: 'Día',
    typeOfVehicle: 'Auto',
    typeOfCover: 'Cubierta',
    description:
      'Ubicado a media cuadra del Hospital y muy cercano a los nuevos accesos que el mismo abrió recientemente sobre la calle Potosí, hace que esta ubicación sea ideal para un garaje.',
  },
  {
    id: '6',
    img: 'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRyBTy_3B-cEArHrOpmwWG8zmC9FIaTPXfDuoETDszqRl8PFqX0-xRpaL97RIoL6TUXa5SkDsaZCJ5lMxKnyP4',
    title: 'Title Test3',
    date: '',
    since: '12',
    contact: '(555) 555-5555',
    contactName: 'Inmobiliaria Jorgito',
    availability: 'Día',
    typeOfVehicle: 'Auto',
    typeOfCover: 'Cubierta',
    description:
      'Ubicado a media cuadra del Hospital y muy cercano a los nuevos accesos que el mismo abrió recientemente sobre la calle Potosí, hace que esta ubicación sea ideal para un garaje.',
  },
];

export function makeServer() {
  return createServer({
    models: {
      lot: Model,
    },
    seeds(server) {
      server.create('lot', {
        img: 'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRyBTy_3B-cEArHrOpmwWG8zmC9FIaTPXfDuoETDszqRl8PFqX0-xRpaL97RIoL6TUXa5SkDsaZCJ5lMxKnyP4',
        title: 'Cochera amplia',
        address: 'Calle 123',
        date: '',
        price: '140',
        since: '2',
        contact: '(555) 555-5555',
        contactName: 'Inmobiliaria Jorgito',
        availability: '1',
        typeOfVehicle: '0',
        typeOfCover: '1',
        description:
          'Ubicado a media cuadra del Hospital y muy cercano a los nuevos accesos que el mismo abrió recientemente sobre la calle Potosí, hace que esta ubicación sea ideal para un garaje.',
        isBookmarked: false,
      });
      server.create('lot', {
        img: 'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRyBTy_3B-cEArHrOpmwWG8zmC9FIaTPXfDuoETDszqRl8PFqX0-xRpaL97RIoL6TUXa5SkDsaZCJ5lMxKnyP4',
        title: 'Cochera en alquiler',
        address: 'Las Heras 342',
        date: '',
        price: '45',
        since: '12',
        contact: '(555) 555-5555',
        contactName: 'Inmobiliaria Jorgito',
        availability: '2',
        typeOfVehicle: '1',
        typeOfCover: '0',
        description:
          'Ubicado a media cuadra del Hospital y muy cercano a los nuevos accesos que el mismo abrió recientemente sobre la calle Potosí, hace que esta ubicación sea ideal para un garaje.',
        isBookmarked: true,
      });
      // server.create('bookmark', {
      //   img: 'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRyBTy_3B-cEArHrOpmwWG8zmC9FIaTPXfDuoETDszqRl8PFqX0-xRpaL97RIoL6TUXa5SkDsaZCJ5lMxKnyP4',
      //   title: 'Cochera amplia',
      //   address: 'Calle 123',
      //   date: '',
      //   price: '140',
      //   since: '2',
      //   contact: '(555) 555-5555',
      //   contactName: 'Inmobiliaria Jorgito',
      //   availability: '1',
      //   typeOfVehicle: '0',
      //   typeOfCover: '1',
      //   description:
      //     'Ubicado a media cuadra del Hospital y muy cercano a los nuevos accesos que el mismo abrió recientemente sobre la calle Potosí, hace que esta ubicación sea ideal para un garaje.',
      // });
    },
    routes() {
      // this.timing = 1000;
      this.get('api/notifications', () => NOTIFICATION_LIST);
      this.get('api/lot/:id', (schema, request) => {
        let { id } = request.params;
        return schema.lots.all().models.find((lot) => lot.id === id);
      });

      this.get('api/parkinglots', (schema) =>
        schema.lots.all().models.map((model) => model.attrs)
      );
      this.get('api/parkinglots/:title', (schema, request) => {
        let { title } = request.params;
        return schema.lots
          .all()
          .models.filter((lot) =>
            lot.attrs.title.toLowerCase().includes(title.toLowerCase())
          );
      });
      this.post('api/lots', (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        return schema.lots.create(attrs);
      });

      this.get('api/bookmarkedlots', (schema) =>
        schema.lots.all().models.filter((lot) => lot.attrs.isBookmarked)
      );
      this.get('api/bookmarkedlots/:title', (schema, request) => {
        let { title } = request.params;
        return schema.lots
          .all()
          .models.filter((lot) => lot.attrs.isBookmarked)
          .filter((lot) =>
            lot.attrs.title.toLowerCase().includes(title.toLowerCase())
          );
      });
      this.patch('api/bookmark/:id', (schema, request) => {
        let { id } = request.params;
        const lot = schema.lots.find(id);
        return lot.update('isBookmarked', !lot.attrs.isBookmarked);
      });
    },
  });
}

// const PARKING_LOTS_LIST = [
//   {
//     id: '0',
//     img: 'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRyBTy_3B-cEArHrOpmwWG8zmC9FIaTPXfDuoETDszqRl8PFqX0-xRpaL97RIoL6TUXa5SkDsaZCJ5lMxKnyP4',
//     title: 'Cochera amplia',
//     address: 'Calle 123',
//     date: '',
//     price: '140',
//     since: '12',
//     contact: '(555) 555-5555',
//     contactName: 'Inmobiliaria Jorgito',
//     availability: 'Día',
//     typeOfVehicle: 'Auto',
//     typeOfCover: 'Cubierta',
//     description:
//       'Ubicado a media cuadra del Hospital y muy cercano a los nuevos accesos que el mismo abrió recientemente sobre la calle Potosí, hace que esta ubicación sea ideal para un garaje.',
//   },
//   {
//     id: '1',
//     img: 'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRyBTy_3B-cEArHrOpmwWG8zmC9FIaTPXfDuoETDszqRl8PFqX0-xRpaL97RIoL6TUXa5SkDsaZCJ5lMxKnyP4',
//     title: 'Alquilo cochera',
//     address: 'Urquiza 345',
//     date: '',
//     price: '86',
//     since: '12',
//     contact: '(555) 555-5555',
//     contactName: 'Inmobiliaria Jorgito',
//     availability: 'Día',
//     typeOfVehicle: 'Auto',
//     typeOfCover: 'Cubierta',
//     description:
//       'Ubicado a media cuadra del Hospital y muy cercano a los nuevos accesos que el mismo abrió recientemente sobre la calle Potosí, hace que esta ubicación sea ideal para un garaje.',
//   },
//   {
//     id: '2',
//     img: 'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRyBTy_3B-cEArHrOpmwWG8zmC9FIaTPXfDuoETDszqRl8PFqX0-xRpaL97RIoL6TUXa5SkDsaZCJ5lMxKnyP4',
//     title: 'Cochera en alquiler',
//     address: 'Passo 455',
//     date: '',
//     price: '100',
//     since: '12',
//     contact: '(555) 555-5555',
//     contactName: 'Inmobiliaria Jorgito',
//     availability: 'Día',
//     typeOfVehicle: 'Auto',
//     typeOfCover: 'Cubierta',
//     description:
//       'Ubicado a media cuadra del Hospital y muy cercano a los nuevos accesos que el mismo abrió recientemente sobre la calle Potosí, hace que esta ubicación sea ideal para un garaje.',
//   },
//   {
//     id: '3',
//     img: 'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRyBTy_3B-cEArHrOpmwWG8zmC9FIaTPXfDuoETDszqRl8PFqX0-xRpaL97RIoL6TUXa5SkDsaZCJ5lMxKnyP4',
//     title: 'Cocheras cubiertas',
//     address: 'Alsina 954',
//     date: '',
//     price: '45',
//     since: '12',
//     contact: '(555) 555-5555',
//     contactName: 'Inmobiliaria Jorgito',
//     availability: 'Día',
//     typeOfVehicle: 'Auto',
//     typeOfCover: 'Cubierta',
//     description:
//       'Ubicado a media cuadra del Hospital y muy cercano a los nuevos accesos que el mismo abrió recientemente sobre la calle Potosí, hace que esta ubicación sea ideal para un garaje.',
//   },
//   {
//     id: '4',
//     img: 'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRyBTy_3B-cEArHrOpmwWG8zmC9FIaTPXfDuoETDszqRl8PFqX0-xRpaL97RIoL6TUXa5SkDsaZCJ5lMxKnyP4',
//     title: 'Autos/Camionetas',
//     address: 'Colon 763',
//     date: '',
//     price: '186',
//     since: '12',
//     contact: '(555) 555-5555',
//     contactName: 'Inmobiliaria Jorgito',
//     availability: 'Día',
//     typeOfVehicle: 'Auto',
//     typeOfCover: 'Cubierta',
//     description:
//       'Ubicado a media cuadra del Hospital y muy cercano a los nuevos accesos que el mismo abrió recientemente sobre la calle Potosí, hace que esta ubicación sea ideal para un garaje.',
//   },
//   {
//     id: '5',
//     img: 'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRyBTy_3B-cEArHrOpmwWG8zmC9FIaTPXfDuoETDszqRl8PFqX0-xRpaL97RIoL6TUXa5SkDsaZCJ5lMxKnyP4',
//     title: 'Cochera con baulera',
//     address: 'Luiggi 283',
//     date: '',
//     price: '231',
//     since: '12',
//     contact: '(555) 555-5555',
//     contactName: 'Inmobiliaria Jorgito',
//     availability: 'Día',
//     typeOfVehicle: 'Auto',
//     typeOfCover: 'Cubierta',
//     description:
//       'Ubicado a media cuadra del Hospital y muy cercano a los nuevos accesos que el mismo abrió recientemente sobre la calle Potosí, hace que esta ubicación sea ideal para un garaje.',
//   },
//   {
//     id: '6',
//     img: 'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRyBTy_3B-cEArHrOpmwWG8zmC9FIaTPXfDuoETDszqRl8PFqX0-xRpaL97RIoL6TUXa5SkDsaZCJ5lMxKnyP4',
//     title: 'Disponible desde febrero',
//     address: 'Alem 554',
//     date: '',
//     price: '98',
//     since: '12',
//     contact: '(555) 555-5555',
//     contactName: 'Inmobiliaria Jorgito',
//     availability: 'Día',
//     typeOfVehicle: 'Auto',
//     typeOfCover: 'Cubierta',
//     description:
//       'Ubicado a media cuadra del Hospital y muy cercano a los nuevos accesos que el mismo abrió recientemente sobre la calle Potosí, hace que esta ubicación sea ideal para un garaje.',
//   },
// ];

// const BOOKMARKED_LOTS_LIST = [
//   {
//     id: '0',
//     img: 'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRyBTy_3B-cEArHrOpmwWG8zmC9FIaTPXfDuoETDszqRl8PFqX0-xRpaL97RIoL6TUXa5SkDsaZCJ5lMxKnyP4',
//     title: 'Cochera en alquiler',
//     address: 'Passo 455',
//     date: '',
//     price: '100',
//     since: '12',
//     contact: '(555) 555-5555',
//     contactName: 'Inmobiliaria Jorgito',
//     availability: 'Día',
//     typeOfVehicle: 'Auto',
//     typeOfCover: 'Cubierta',
//     description:
//       'Ubicado a media cuadra del Hospital y muy cercano a los nuevos accesos que el mismo abrió recientemente sobre la calle Potosí, hace que esta ubicación sea ideal para un garaje.',
//   },
//   {
//     id: '1',
//     img: 'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRyBTy_3B-cEArHrOpmwWG8zmC9FIaTPXfDuoETDszqRl8PFqX0-xRpaL97RIoL6TUXa5SkDsaZCJ5lMxKnyP4',
//     title: 'Cocheras cubiertas',
//     address: 'Alsina 954',
//     date: '',
//     price: '45',
//     since: '12',
//     contact: '(555) 555-5555',
//     contactName: 'Inmobiliaria Jorgito',
//     availability: 'Día',
//     typeOfVehicle: 'Auto',
//     typeOfCover: 'Cubierta',
//     description:
//       'Ubicado a media cuadra del Hospital y muy cercano a los nuevos accesos que el mismo abrió recientemente sobre la calle Potosí, hace que esta ubicación sea ideal para un garaje.',
//   },
// ];
