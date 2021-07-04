import Debug from "debug";
import Hall from "../models/hall";
import Rooms from "../models/room";
import RoomTypes from "../models/roomTypes";
import CheckIn from "../models/checkIn";
import helpers from "../helpers";

const debug = Debug("API:businesslogic/emailTemplate.js");

const { failed, success } = helpers.response;

export const dashboardData = async (req, res) => {
  debug("dashboardData()");
  const companyId = req.staff.companyId;

  try {
    const halls = Hall.find({ companyId }).countDocuments();
    const guests = CheckIn.find({
      companyId,
      checkedOut: false,
    }).countDocuments();
    const rooms = Rooms.find({ companyId }).countDocuments();
    const roomTypes = RoomTypes.find({ companyId }).countDocuments();

    const { hallsCount, guestsCount, roomsCount, roomTypesCount } =
      await Promise.all([halls, guests, rooms, roomTypes]);

    return res.json(
      success({
        halls: hallsCount,
        guests: guestsCount,
        rooms: roomsCount,
        roomTypes: roomTypesCount,
      })
    );
  } catch (e) {
    return res.json(failed("Error occured. Try again."));
  }
};
