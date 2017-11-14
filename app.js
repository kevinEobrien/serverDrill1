const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const port = process.env.PORT || 3000;
const cohorts = {
  data:[
{
  id: 1,
  "Cohort Name": "17-01-WD-DP",
  "Chort Code": "g100",
  students: 28
},
{
  id: 2,
  "Cohort Name": "17-01-DS-GT",
  "Chort Code": "g105",
  students: 24
},
{
  id: 3,
  "Cohort Name": "17-02-WD-PX",
  "Chort Code": "g109",
  students: 30
},
{
  id: 4,
  "Cohort Name": "17-03-WD-BD",
  "Chort Code": "g110",
  students: 29
}
]};


function findById(data, id) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].id == id) {
      return data[i];
    }
  }
  return null;
}

app.get("/", function(request, response) {
  response.json(cohorts);
});

app.get("/:id", function(request, response) {
  var record = findById(cohorts, request.params.id);
  if (!record) {
    response.status(404);
    response.json({
      error: {
        message: "No record found!"
      }
    });
  }
  response.json(record);
});

app.listen(port);
