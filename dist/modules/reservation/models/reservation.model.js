"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var database_1 = __importDefault(require("../../../config/database"));
var reservationSchema = new database_1.default.Schema({
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
var Reservation = database_1.default.model('reservation', reservationSchema);
exports.default = Reservation;
//# sourceMappingURL=reservation.model.js.map