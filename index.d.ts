export class Söz {
    private olacaklar: ((dönüt: any) => void)[];
    private tutulmamaDönüşü: any;
    constructor(tetikleyici: (kabul: (dönüt: T) => void, red: (sebep?: any) => void) => void);
    sonra(olacak = () => { }): this
    olmazsa(olmaz: (sebep: any)=>  void): this
}

