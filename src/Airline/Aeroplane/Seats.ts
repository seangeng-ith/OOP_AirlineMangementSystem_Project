export enum FareBasis{
    EconomicClass,
    EconomyFlex,
    BusinessClass,
}
export class Seat {
    public seat: String
    public fareBasis: FareBasis
    constructor (seat: String, fareBasis: FareBasis){
        this.seat = seat
        this.fareBasis = fareBasis
    }
    
}