import { Airline } from "../Airline/AirLine";
import { Booking } from "../Booking/Booking";
import { Passenger } from "../passenger/Passenger";
import { Gate } from "./Gate";
import { Route } from "./Route";

export class Airport {
  protected name: string;
  private code: string;
  private route: Route;
  private airlineList: Airline[] = [];
  private bookings: Booking[] = [];

  constructor(name: string, code: string, route: Route) {
    this.name = name;
    this.code = code;
    this.route = route
  }
  addAirline(airline: Airline): void {
    this.airlineList.push(airline);
  }
  addBooking(booking: Booking): void {
    this.bookings.push(booking);
  }
  getDetialPassenger(bookingNumber: string): Passenger | undefined {
    for (let booking of this.bookings) {
      if (booking.getreferenceNumber() === bookingNumber) {
        return booking.getpassenger()
      }
      return undefined
    }

  }
}