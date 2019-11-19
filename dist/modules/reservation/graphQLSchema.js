"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_express_1 = require("apollo-server-express");
exports.typeDefs = apollo_server_express_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    scalar Date\n    type Reservation {\n        _id: ID!\n        guestName: String!\n        hotelName: String!\n        arrivalDate: Date!\n        departureDate: Date!\n    }\n\n    type Query {\n        reservation(id: ID!): Reservation\n        allReservations: [Reservation]\n    }\n\n    type Mutation {\n        addReservation(\n            guestName: String!\n            hotelName: String!\n            arrivalDate:  String!\n            departureDate: String!\n        ): Reservation\n    }\n"], ["\n    scalar Date\n    type Reservation {\n        _id: ID!\n        guestName: String!\n        hotelName: String!\n        arrivalDate: Date!\n        departureDate: Date!\n    }\n\n    type Query {\n        reservation(id: ID!): Reservation\n        allReservations: [Reservation]\n    }\n\n    type Mutation {\n        addReservation(\n            guestName: String!\n            hotelName: String!\n            arrivalDate:  String!\n            departureDate: String!\n        ): Reservation\n    }\n"])));
var templateObject_1;
//# sourceMappingURL=graphQLSchema.js.map