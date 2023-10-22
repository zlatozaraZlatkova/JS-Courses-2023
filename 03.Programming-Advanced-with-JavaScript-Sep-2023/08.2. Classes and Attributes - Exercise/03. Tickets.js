function tickets(tickets, sortCriteria) {
  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = price;
      this.status = status;
    }
    static sortNumbers(arr) {
      return arr.sort((a, b) => a - b);
    }

    static sortStrings(arr, sortCriteria) {
      return arr.sort((a, b) => a[sortCriteria].localeCompare(b[sortCriteria]));
    }
  }

  const arr = [];

  for (let ticket of tickets) {
    let [destination, price, status] = ticket.split("|");
    arr.push(new Ticket(destination, Number(price), status));
  }

  if (sortCriteria === "price") {
    Ticket.sortNumbers(arr, sortCriteria);
  } else {
    Ticket.sortStrings(arr, sortCriteria);
  }
  //console.table(arr)
  return arr;
}