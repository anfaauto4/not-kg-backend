const mongoose = require("mongoose");

const recordSchema = new mongoose.Schema({
  status: { type: String, required: true },
  signatureStatus: { type: String, required: true },
  creationDate: { type: String, required: true }, // вручную вводимое поле (строка)
  customCreationDate: { type: Date, default: Date.now }, // авто-дата для сортировки
  notaryName: { type: String },
  registryNumber: { type: String },
  registryDate: { type: String },
  participant1: { type: String },
  participant2: { type: String },
});

module.exports = mongoose.model("NotRecord", recordSchema);
