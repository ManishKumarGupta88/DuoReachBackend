const pool = require("../config/db");

const submitContact = async (req, res) => {
  try {
    const { name, email, phone, service, message } = req.body;

    const result = await pool.query(
      `INSERT INTO leads (name,email,phone,service,message)
       VALUES ($1,$2,$3,$4,$5)
       RETURNING *`,
      [name, email, phone, service, message]
    );

    res.status(201).json({
      success: true,
      data: result.rows[0],
    });
    } catch (error) {
    console.error("CONTACT ERROR:", error);

    res.status(500).json({
        success: false,
        error: error.message,
    });
    }
};

module.exports = { submitContact };