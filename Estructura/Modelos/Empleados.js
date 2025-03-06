const db = require("../PROYECTO");

const Usuario = {
    obtenerTodos: (callback) => {
        db.all("SELECT * FROM empleados", [], (err, rows) => {
            callback(err, rows);
        });
    },

    agregar: (usuario, clave, fk_empleados, callback) => {
        const sql = "INSERT INTO Empleados (NOmbre, DNI, Direccion, NOTelefono, FechaDeIngreso) VALUES (?, ?, ?, ?, ?)";
        db.run(sql, [Nombre, DNI, Dirrecion, NOTelefono, FechaDeIngreso], function (err) {
            callback(err, this.lastID);
        });
    }
};

module.exports = Usuario;
