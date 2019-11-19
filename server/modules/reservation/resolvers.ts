// modules
import { IResolvers } from 'graphql-tools';
import { ObjectId } from 'mongodb';

// local
import Reservation, { Reservation as reservation } from './models/reservation.model'


const resolver: IResolvers = {
  Query: {
    allReservations: (_: void) => Reservation.find(),
    reservation: (_: void, args: { id: string }) => Reservation.findOne(new ObjectId(args.id)),
  },

  Mutation: {
    addReservation: (_: void, reservation: reservation) => {
      const newReservation = new Reservation(reservation);
      return newReservation.save();
    }
  }
};

export default resolver;
