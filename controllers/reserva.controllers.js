const Reserva = require("../models/Reserva");

const ctrlReservas = {};

// ==========================================
//         Rutas VISTAS de reservas
// ==========================================
ctrlReservas.indexView = (_req, res) => {
  res.render("index");
};

ctrlReservas.showView = async (req, res) => {
  const reservaId = req.params.id;
  try {
    const reserva = await Reserva.findByPk(reservaId);
    if (!reserva) {
      throw {
        status: 404,
        message: "No existe la reserva con el id " + reservaId,
      };
    }
    res.render("reservas/show", { reserva });
  } catch (error) {
    res.status(error.status || 500).json(error.message || "Error interno del servidor");
  }
};

ctrlReservas.createView = (_req, res) => {
  res.render("reservas/create");
};

ctrlReservas.editView = async (req, res) => {
  const reservaId = req.params.id;
  try {
    const reserva = await Reserva.findByPk(reservaId);
    if (!reserva) {
      throw {
        status: 404,
        message: "No existe la reserva con el id " + reservaId,
      };
    }
    res.render("reservas/edit", { reserva });
  } catch (error) {
    res.status(error.status || 500).json(error.message || "Error interno del servidor");
  }
};

// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas
ctrlReservas.index = async (_req, res) => {
  try {
    const reservas = await Reserva.findAll();
    if (!reservas || reservas.length === 0) {
      throw {
        status: 404,
        message: "No hay reservas registrados aún.",
      };
    }
    res.json(reservas);
  } catch (error) {
    res.status(error.status || 500).json({
      message: error.message || "Error interno del servidor",
    });
  }
};

// Obtener una reserva
ctrlReservas.show = async (req, res) => {
  const reservaId = req.params.id;
  try {
    const reserva = await Reserva.findByPk(reservaId);
    if (!reserva) {
      throw {
        status: 404,
        message: "No existe la reserva con el id " + reservaId,
      };
    }
    res.json(reserva);
  } catch (error) {
    res.status(error.status || 500).json(error.message || "Error interno del servidor");
  }
};

// Crear una reserva
ctrlReservas.store = async (req, res) => {
  const { fullname, flightCode, date, time } = req.body;
  console.log(req.body)
  try {
    const reserva = await Reserva.create({
      fullname,
      flightCode,
      date,
      time,
    });
    console.log(reserva)
    if (!reserva) {
      throw {
        status: 400,
        message: "No se pudo crear la reserva.",
      };
    }
    if(reserva)console.log("reserva", reserva)
    
    res.json(reserva);
    console.log("👿esto es el json que envio", reserva )
  } catch (error) {
    //return
    res.status(error.status || 500).json(error.message || "Error interno del servidor");
  }
};

// Actualizar una reserva
ctrlReservas.update = async (req, res) => {
  const reservaId = req.params.id;
  const { fullname, flightCode, date, time } = req.body;

  try {
    const reserva = await Reserva.findByPk(reservaId);
    if (!reserva) {
      throw {
        status: 404,
        message: "No existe la reserva con el id " + reservaId,
      };
    }
    reserva.fullname = fullname;
    reserva.flightCode = flightCode;
    reserva.date = date;
    reserva.time = time;
    await reserva.save();
    res.json(reserva);
  } catch (error) {
    res.status(error.status || 500).json(error.message || "Error interno del servidor");
  }
};

// Eliminar una reserva de forma lógica
ctrlReservas.destroy = async (req, res) => {
  const reservaId = req.params.id;
  try {
    const reserva = await Reserva.destroy({
      where: {
        id: reservaId,
      },
    });
    res.json({ reserva, message: "Reserva eliminada correctamente." });
  } catch (error) {
    res.status(error.status || 500).json(error.message || "Error interno del servidor");
  }
};

module.exports = ctrlReservas;
