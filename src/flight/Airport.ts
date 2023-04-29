import { Airline } from "../Airline/AirLine";
import { Passenger } from "../passenger/Passenger";
import { Route } from "./Route";

export class Airport {
  public name: string;
  private code: string;
  private route: Route;
  private airlineList: Airline[] = [];
  constructor(name: string, code: string, route: Route) {
    this.name = name;
    this.code = code;
    this.route = route
  }
  addAirline(airline: Airline): void {
    this.airlineList.push(airline);
  }
  getDetialPassenger(bookingNumber: string): Passenger|string {
    this.airlineList.forEach(airLine=>{
      airLine.getBooking().forEach(booking=>{
        if(booking.getreferenceNumber() == bookingNumber){
          return booking.getpassenger()
        }

      })
     
    })
    return "There is no passenger here!"
  }

  }
