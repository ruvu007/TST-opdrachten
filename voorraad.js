function Voorraad(item, aantal) {
    let artikel = item;
    let voorraad = aantal;

    this.getVoorraad = function () {
        return voorraad;
    }
    this.getArtikel = function () {
        return artikel;
    }
    this.showVoorrad = function () {
        console.log('De voorraad van : ' + artikel + ' is ' + voorraad);
    }
    this.verlaagVoorraad = function () {
        voorraad = voorraad - 1;
    }

    // Opdr 3
    this.verhoogVoorraad = function () {
        voorraad = voorraad + 1;
    }
    // Opdr 3

    // Opdr 4
    this.verhoogVoorraadMeer = function (aantal) {
        voorraad = voorraad + aantal;
    }
    // Opdr 4

    // Opdr 5
    this.verlaagVoorraadMeer = function (aantal) {
        voorraad = voorraad - aantal;
    }
    // Opdr 5
}