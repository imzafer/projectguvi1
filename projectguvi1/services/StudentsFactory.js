attendanceBot.factory("StudentsFactory", function StudentsFactory() {
    var factory = {};
    factory.students = [
        { name: "Jaffar", here: false },
        { name: "Sona", here: false },
        { name: "Karthika", here: false },
        { name: "Alan", here: false },
        { name: "Venkat", here: false },
        { name: "Sai Kumar", here: false },
        { name: "Aravinth", here: false },
        { name: "Jeevitha", here: false },
        { name: "Nalini", here: false },
        { name: "Ashwini", here: false },
        { name: "Rajpriyan", here: false },
        { name: "sharon", here: false },
        { name: "Dinesh", here: false },
        { name: "Gobi", here: false },
        { name: "Tharik", here: false },
        { name: "Feroz", here: false },
        { name: "Vaseem", here: false },
        { name: "Shivangi", here: false },
        { name: "Amrin", here: false },
        { name: "Aravindhan", here: false },
        { name: "Sherin", here: false },
        { name: "Gayatri", here: false },
        { name: "Pavadharani", here: false },
        { name: "Sree vidhya", here: false },
        { name: "Ilyas", here: false },
        { name: "Muzammail", here: false },
        { name: "Abdul Hannan", here: false },
        { name: "Balaji", here: false },
        { name: "Nafiu", here: false }
    ];

    factory.addStudent = function () {
        var student = { name: factory.studentName, here: false };
        factory.students.push(student);
        factory.studentName = null;
    };

    return factory;
});
