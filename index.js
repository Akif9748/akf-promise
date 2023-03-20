
module.exports = class Söz {
    #olacaklar;
    #tutulmazsaOlacak;

    constructor(tetikleyici) {
        this.#olacaklar = [];
        this.durum = "BEKLIYOR";
        const self = this;

        function tutuldu(dönüt) {
            let deger;
            while ((deger = self.#olacaklar.shift()) !== undefined) 
                dönüt = deger(dönüt);
            
            self.durum = "TUTULDU";
            return dönüt;
        }
        function tutulmadi(sebep) {
            self.durum = "TUTULMADI";
            if (self.#tutulmazsaOlacak) {
                self.#tutulmazsaOlacak(sebep);
            } else {
                throw Error(sebep || "Yer yüzünde yine bir söz tutulmadı...");
            }
        }

        tetikleyici(tutuldu, tutulmadi);

    }
    sonra(olacak = () => { }) {
        this.#olacaklar.push(olacak);
        return this;
    }
    olmazsa(nolur = null) {
        this.#tutulmazsaOlacak = nolur;
        return this;
    }
    toString() {
        return `Söz { ${this.durum} }`;
    }
}

