const server = require('./src/app.js');
const { conn, Vehicle, Category, Property } = require('./src/db.js');
const port = 3001;

conn.sync({ force: true }).then(() => {
    server.listen(port, () => {
        console.log(`%s listening at ${port}`);
    });
    //vehicles
    var car = Vehicle.create({
        name: "Auto",
        icon: ""
    });
    //cat
    var document = Category.create({
        name: "Documentación",
        icon: ""
    });
    //prop
    var identification = Property.create({
        name: "Cédula verde, azul, titulo",
        value: 1
    });
    var vtv = Property.create({
        name: "VTV vigente",
        value: 1
    });
    var debts = Property.create({
        name: "Deudas",
        value: 1
    });
    var check = Property.create({
        name: "Verificación Policial",
        value: 1
    });
    //cat
    var motor = Category.create({
        name: "Motor",
        icon: ""
    });
    //prop
    var state = Property.create({
        name: "Estado general",
        value: 1
    });
    var noises = Property.create({
        name: "Ruidos",
        value: 1
    });
    var oil = Property.create({
        name: "Estado de aceite",
        value: 1
    });
    //cat
    var interior = Category.create({
        name: "Ruedas y frenos",
        icon: ""
    });
    //prop
    var frontWheels = Property.create({
        name: "Ruedas delanteras",
        value: 1
    });
    var rearWheels = Property.create({
        name: "Ruedas traseras",
        value: 1
    });
    var frontBrakes = Property.create({
        name: "Frenos delanteros",
        value: 1
    });
    var rearBrakes = Property.create({
        name: "Frenos traseros",
        value: 1
    });
    //cat
    var bodywork = Category.create({
        name: "Exterior",
        icon: ""
    });
    //prop
    var mirrors = Property.create({
        name: "Espejos retrovisores",
        value: 1
    });
    var painting = Property.create({
        name: "Pintura",
        value: 1
    });
    var lights = Property.create({
        name: "Luces",
        value: 1
    });

    Promise.all([car, document, identification, vtv, debts, check, motor, state, noises, oil, interior, frontWheels, rearWheels, frontBrakes, rearBrakes, bodywork, mirrors, painting, lights])
        .then(res => {
            console.log("Datos precargados")
        })
    // document.setVehicle(car);
    Property.findAll({ atributes: ['name'] })
        .then(properties => {
            console.log(properties)
        })

    // car.addCategories([document, motor, interior, bodywork]);
    // document.addProperties([identification, vtv, debts, check]);
});