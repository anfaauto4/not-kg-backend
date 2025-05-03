const Record = require("../models/Record");

// Создание записи
exports.createRecord = async (req, res) => {
  try {
    const record = new Record(req.body);
    await record.save();
    res.status(201).json(record);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Получение всех записей (сначала новые)
exports.getAllRecords = async (req, res) => {
  try {
    const records = await Record.find().sort({ customCreationDate: -1 });
    res.json(records);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Получение записи по ID
exports.getRecordById = async (req, res) => {
  try {
    const record = await Record.findById(req.params.id);
    if (!record) return res.status(404).json({ error: "Запись не найдена" });
    res.json(record);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Удаление всех записей
exports.deleteAllRecords = async (req, res) => {
  try {
    await Record.deleteMany({});
    res.json({ message: "Все записи удалены" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
