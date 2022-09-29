const { ManufacturerData } = require('../models');

const manufacturer = [

    { manufacturer: "Mattel",
    manufacturer_location: "USA",
    industry: "toys",
    category:"children's toys",
    quantity:"47",
    in_stock:"true"
},
{ manufacturer: "Hasbro",
    manufacturer_location: "USA",
    industry: "toys",
    category:"children's toys",
    quantity:"47",
    in_stock:"true"
},
{ manufacturer: "Acme",
    manufacturer_location: "USA",
    industry: "toys",
    category:"children's toys",
    quantity:"47",
    in_stock:"true"
},
{ manufacturer: "University Games",
    manufacturer_location: "USA",
    industry: "toys",
    category:"children's toys",
    quantity:"47",
    in_stock:"true"
},
{ manufacturer: "Deep Print Games",
    manufacturer_location: "USA",
    industry: "toys",
    category:"children's toys",
    quantity:"47",
    in_stock:"true"
},
{ manufacturer: "Barnes & Noble",
    manufacturer_location: "USA",
    industry: "retail books",
    category:"books",
    quantity:"47",
    in_stock:"true"
}
];
const seedManufacturers = () => ManufacturerData.bulkCreate(manufacturer);

module.exports = seedManufacturers;
