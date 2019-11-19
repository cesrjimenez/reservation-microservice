// local
import mongoose from '../../../config/database';

export interface Reservation {
  guestName: string;
  hotelName: string;
  arrivalDate: Date;
  departureDate: Date;
}

const reservationSchema = new mongoose.Schema({
  guestName: {
    type: String,
    required: true,
  },
  hotelName: {
    type: String,
    required: true,
  },
  arrivalDate: {
    type: Date,
    required: true,
  },
  departureDate: {
    type: Date,
    required: true,
  },
});

export type ReservationModel = mongoose.Document & {
  guestName: string;
  hotelName: string;
  arrivalDate: Date;
  departureDate: Date;
}

const Reservation = mongoose.model<ReservationModel>('reservation', reservationSchema);

export default Reservation;
