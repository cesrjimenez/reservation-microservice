"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongodb_1 = require("mongodb");
var reservation_model_1 = __importDefault(require("./models/reservation.model"));
var resolver = {
    Query: {
        allReservations: function (_) { return reservation_model_1.default.find(); },
        reservation: function (_, args) { return reservation_model_1.default.findOne(new mongodb_1.ObjectId(args.id)); },
    },
    Mutation: {
        addReservation: function (_, reservation) {
            var newReservation = new reservation_model_1.default(reservation);
            return newReservation.save();
        }
    }
};
exports.default = resolver;
//# sourceMappingURL=resolvers.js.map