const _database = {
  vehicles: {
    'Volkswagen Gol 2016': {
      name: 'Volkswagen Gol 2016',
      image: 'volkswagengol2016.png',
      price: 30000,
    },
    'Fiat Uno 2015': {
      name: 'Fiat Uno 2015',
      image: 'fiatuno2015.png',
      price: 25000,
    },
    'Fiat Palio 2016': {
      name: 'Fiat Palio 2016',
      image: 'fiatpalio2016.png',
      price: 28000,
    },
    'Volkswagen Fox 2015': {
      name: 'Volkswagen Fox 2015',
      image: 'volkswagenfox2015.png',
      price: 22000,
    },
  },
};

const Database = {
  getVehiclesIndex: ()=> Object.keys(_database.vehicles),
  getVehicles: ()=> _database.vehicles,
  getVehicle: (id)=> _database.vehicles[id],
  getVehicleByPrice: (price)=> {
    const vehicles = [];
    for (let key in _database.vehicles) {
      console.log(key);
      if (price >= _database.vehicles[key].price) {
        vehicles.push(_database.vehicles[key]);
      }
    }

    console.log(vehicles);
    return vehicles;
  },
}
