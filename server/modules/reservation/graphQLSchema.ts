// modules
import { gql } from 'apollo-server-express';


export const typeDefs = gql`
    scalar Date
    type Reservation {
        _id: ID!
        guestName: String!
        hotelName: String!
        arrivalDate: Date!
        departureDate: Date!
    }

    type Query {
        reservation(id: ID!): Reservation
        allReservations: [Reservation]
    }

    type Mutation {
        addReservation(
            guestName: String!
            hotelName: String!
            arrivalDate:  String!
            departureDate: String!
        ): Reservation
    }
`;
