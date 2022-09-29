const { ManufacturerData } = require('../models');

const manufacturer = [

    { manufacturer: "Mattel",
    brand_id:"1",
    manufacturer_location: "USA",
    industry: "toys",
    category:"children's toys",
    quantity:"47",
    in_stock:"true"
},
{ manufacturer: "Hasbro",
brand_id:"2",
    manufacturer_location: "USA",
    industry: "toys",
    category:"children's toys",
    quantity:"47",
    in_stock:"true"
},
{ manufacturer: "Acme",
brand_id:"3",
    manufacturer_location: "USA",
    industry: "toys",
    category:"children's toys",
    quantity:"47",
    in_stock:"true"
},
{ manufacturer: "University Games",
brand_id:"4",
    manufacturer_location: "USA",
    industry: "toys",
    category:"children's toys",
    quantity:"47",
    in_stock:"true"
},
{ manufacturer: "Deep Print Games",
brand_id:"5",
    manufacturer_location: "USA",
    industry: "toys",
    category:"children's toys",
    quantity:"47",
    in_stock:"true"
},
{ manufacturer: "Barnes & Noble",
brand_id:"6",
    manufacturer_location: "USA",
    industry: "retail books",
    category:"books",
    quantity:"47",
    in_stock:"true"
}
];
const seedManufacturers = () => ManufacturerData.bulkCreate(manufacturer);

module.exports = seedManufacturers;
