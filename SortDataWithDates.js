var product_data = [
    {
        contacts: {
            created: "2019-07-12T09:18:16.751Z",
            email: "lily@2019gmail.com",
            telephone_number: "07285345348"
        },
        about: {
            description: "thisis thdsse first sacco to be inserted into the database",
            website: "https://www.lilymathu.com"
        },
        created: "2019-07-12T09:18:16.751Z",
        _id: "5d25f4a6a30ff939dd5d2e09",
        name: "Milimani Saccco",
        address: "Kisumu",
        registration_number: "AdfdhgjhjnsgF3W4332K",
        __v: 0
    },
    {
        contacts: {
            created: "2019-07-12T09:18:16.751Z",
            email: "lilies@2021gmail.com",
            telephone_number: "0725334548"
        },
        about: {
            description: "thisis thdsse first sacco to be inserted into the database",
            website: "https://www.lmathu.com"
        },
        created: "2019-07-12T09:18:16.751Z",
        _id: "5d25f4daa30ff939dd5d2e0a",
        name: "Makinika Saccco",
        address: "Makongeni",
        registration_number: "AdfdhArkwahsddsfhW4332K",
        __v: 0
    },
    {
        contacts: {
            created: "2019-07-12T09:18:16.751Z",
            email: "lily@2021gmail.com",
            telephone_number: "0728334548"
        },
        about: {
            description: "thisis thdsse first sacco to be inserted into the database",
            website: "https://www.mathu.com"
        },
        created: "2019-07-12T09:18:16.751Z",
        _id: "5d25f549a30ff939dd5d2e0e",
        name: "Nduthi Saccco",
        address: "Otonglo",
        registration_number: "AdfdhArAGHSjdsfhW4332K",
        __v: 0
    },
    {
        contacts: {
            created: "2019-07-11T12:50:44.881Z",
            email: "cyruskipropdss254@gmail.com",
            telephone_number: "07267158348"
        },
        about: {
            description: "thisis thdsse first sacco to be inserted into the database",
            website: "https://www.google.commm"
        },
        created: "2019-07-11T12:50:44.881Z",
        _id: "5d2731a46a7d9f50aceddb52",
        name: "Moms Saccco",
        address: "Lakehubs",
        registration_number: "ADJSKsdsHF3W4332K",
        __v: 0
    },
    {
        contacts: {
            created: "2019-07-11T12:50:44.881Z",
            email: "cyruskiprodspdss254@gmail.com",
            telephone_number: "0724567158348"
        },
        about: {
            description: "inserted some new fields into the databases",
            website: "https://www.google.commm"
        },
        created: "1996-12-08T21:00:00.000Z",
        _id: "5d27326a6a7d9f50aceddb53",
        name: "Ethiopia Saccco",
        address: "Lakehubdss",
        registration_number: "ADJSsddsKsdsHF3W4332K",
        status: "Active",
        __v: 0
    }
]

var startDate = new Date("2015-08-04");
var endDate = new Date("2015-08-12");

var resultProductData = product_data.filter(function (a) {
    var hitDates = a.created || {};
    // extract all date strings
    hitDates = Object.keys(hitDates);
    // improvement: use some. this is an improment because .map()
    // and .filter() are walking through all elements.
    // .some() stops this process if one item is found that returns true in the callback function and returns true for the whole expression
    hitDateMatchExists = hitDates.some(function (dateStr) {
        var date = new Date(dateStr);
        return date >= startDate && date <= endDate
    });
    return hitDateMatchExists;
});
console.log(resultProductData);