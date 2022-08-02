const Hotel = require("../models/Hotel");

const findHotels = async (req, res) => {
  try {
    const allHotels = await Hotel.find({ is_active: true }).populate(
      "destinos"
    );

    res.status(200).json({
      message: "All Available Hotels",
      hotels: allHotels,
    });
  } catch (error) {
    console.log("error", error);
    res.status(400).json({ message: "Error Recovering Hotels", error });
  }
};

const addHotel = async (req, res) => {
  try {
    const newHotel = await Hotel.create(req.body);
    res.status(201).json({
      message: "New Hotel Added",
      hotel: newHotel,
    });
  } catch (error) {
    console.log("error", error);
    res.status(400).json({ message: "Error Adding Hotel", error });
  }
};

const findHotelById = async (req, res) => {
  try {
    const { id } = req.params;
    const hotelFound = await Hotel.findById(id);
    if (!hotelFound) {
      res.status(404).json({
        message: "Hotel Not Found",
      });
    } else {
      res.status(200).json({ message: "Hotel Found", hotelFound });
    }
  } catch (error) {
    res.status(500).json({ message: "Error Finding Hotel", error });
  }
};

const UpdateHotelById = async (req, res) => {
  const { id } = req.params;
  try {
    const hotelToUpdate = await Hotel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({
      message: "Hotel Updated Successfully",
      hotel: hotelToUpdate,
    });
  } catch (error) {
    res.status(500).json({ message: "Error Updating Hotel", error });
  }
};

const DeleteHotelById = async (req, res) => {
  const { id } = req.params;
  try {
    const hotelToDelete = await Hotel.findByIdAndDelete(id);
    res.status(200).json({
      message: "Hotel Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({ message: "Error Deleting Hotel", error });
  }
};

const HotelSoftDelete = async (req, res) => {
  const { id } = req.params;
  try {
    const hotelToDelete = await Hotel.findByIdAndUpdate(
      id,
      {
        is_active: false,
      },
      { new: true }
    );
    res.status(200).json({
      message: "Hotel Deleted Successfully",
      hotel: hotelToDelete,
    });
  } catch (error) {
    res.status(500).json({ message: "Error Deleting Hotel", error });
  }
};

module.exports = {
  findHotels,
  addHotel,
  findHotelById,
  UpdateHotelById,
  DeleteHotelById,
  HotelSoftDelete,
};
