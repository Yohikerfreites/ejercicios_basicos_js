// Usar bucle for para recorrer el array y eliminar id 11 y id 40

const placesToTravel = [{ id: 5, name: 'Japan' }, { id: 11, name: 'Venecia' }, { id: 23, name: 'Murcia' }, { id: 40, name: 'Santander' }, { id: 44, name: 'Filipinas' }, { id: 59, name: 'Madagascar' }]


for (let i = 0; i < placesToTravel.length; i++) {
  let place = placesToTravel[i]
  let comprobacion = placesToTravel[i].id != 11 && placesToTravel[i].id != 40
  if (comprobacion == true) {
    console.log(place)
  }

}








