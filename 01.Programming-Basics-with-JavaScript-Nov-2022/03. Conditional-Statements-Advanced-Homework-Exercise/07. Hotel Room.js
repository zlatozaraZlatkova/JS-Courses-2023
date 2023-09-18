function hotelRoom(input) {
  let month = input[0];
  let numAccommodations = Number(input[1]);
  let studioPrice = 0;
  let apartmentPrice = 0;

  switch (month) {
    case "May":
    case "October":
      apartmentPrice = 65 * numAccommodations;
      studioPrice = 50 * numAccommodations;

      if (numAccommodations > 14) {
        apartmentPrice = apartmentPrice * 0.9;
        studioPrice = studioPrice * 0.7;
      } else if (numAccommodations > 7) {
        studioPrice = studioPrice * 0.95;
      }
      console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
      console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);

      break;

    case "June":
    case "September":
      apartmentPrice = 68.7 * numAccommodations;
      studioPrice = 75.2 * numAccommodations;

      if (numAccommodations > 14) {
        studioPrice = studioPrice * 0.8;
        apartmentPrice = apartmentPrice * 0.9;
      }
      console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
      console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
      break;

    case "July":
    case "August":
      apartmentPrice = 77 * numAccommodations;
      studioPrice = 76 * numAccommodations;

      if (numAccommodations > 14) {
        studioPrice = studioPrice;
        apartmentPrice = apartmentPrice * 0.9;
      }
      console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
      console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
      break;
  }
}

hotelRoom(["May", "15"]);
hotelRoom(["June", "14"]);
hotelRoom(["August", "20"]);
hotelRoom(["October", "8"]);
