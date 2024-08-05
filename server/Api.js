var express = require("express");
var cors = require("cors");
var mongoClient = require("mongodb").MongoClient;
var url = "mongodb://127.0.0.1:27017";
var app = express();
app.use(cors());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.get('/getallusers', (req, res) => {
    mongoClient.connect(url)
        .then(obj => {
            var database = obj.db('Resumeproject');
            database.collection('allusers').find({})
                .toArray().then(documents => {
                    res.send(documents);
                    res.end();
                })
        })
        .catch(err => {
            console.log(err);
        })
});
app.post('/registeruser', (req, res) => {
    var userDetails = {

        UserName: req.body.UserName,
        Password: req.body.Password,
        Mobile: req.body.Mobile,
        Email: req.body.Email
    };
    mongoClient.connect(url)
        .then(obj => {
            var database = obj.db('Resumeproject');
            database.collection('allusers').insertOne(userDetails)
                .then(() => {
                    console.log("Record Inserted");
                    res.redirect('/getallusers')
                })
        })
});
app.get('/getuserresume', (req, res) => {
    mongoClient.connect(url)
        .then(obj => {
            var database = obj.db('Resumeproject');
            database.collection('resumedata').find({})
                .toArray().then(documents => {
                    res.send(documents);
                    res.end();
                })
        })
        .catch(err => {
            console.log(err);
        })
});
app.post('/userresume', (req, res) => {
    var userDetails = {
        Id: req.body.Id,
        UserName: req.body.UserName,
        Email: req.body.Email,
        Designation: req.body.Designation,
        profilesummery: req.body.profilesummery,
        CompanyName: req.body.CompanyName,
        UserRoll: req.body.UserRoll,
        RelaventExperience: req.body.RelaventExperience,
        YearsOfExperience: req.body.YearsOfExperience,
        ProjectDetails: req.body.ProjectDetails,
        Technicalskills: req.body.Technicalskills,
        Ssc: req.body.Ssc,
        Sscyearofpassing: req.body.Sscyearofpassing,
        Inter: req.body.Inter,
        Interyearofpassing: req.body.Interyearofpassing,
        Degree: req.body.Degree,
        Degreeyearofpassing: req.body.Degreeyearofpassing,

    };
    mongoClient.connect(url)
        .then(obj => {
            var database = obj.db('Resumeproject');
            database.collection('resumedata').insertOne(userDetails)
                .then(() => {
                    console.log("Record Inserted");
                    res.redirect('/getuserresume')
                })
        })
});
// app.post('/userexp', (req, res) => {
//     var userDetails = {

//         CompanyName: req.body.CompanyName,
//         UserRoll:req.body.UserRoll,
//         RelaventExperience:req.body.RelaventExperience,
//         YearsOfExperience:req.body.YearsOfExperience,
//         ProjectDetails:req.body.ProjectDetails

//     };
//     mongoClient.connect(url)
//         .then(obj => {
//             var database = obj.db('Resumeproject');
//             database.collection('resumedata').insertOne(userDetails)
//                .then(()=>{
//                 console.log("Record Inserted");
//                 res.redirect('/getuserresume')
//                })
//         })
// });



app.listen(5080);
console.log(`Server started :http://127.0.0.1:5080`);