/**
  @arg {array} stdList - The object list of students, with a name and score.
  @returns {number} - The average class score from the given student list, rounded to the nearest whole digit.
  @desc Case sensitive.
 
*/

function classAverage(stdList) {

    let gradeAvg = 0;
    let stdCount = 0;

    for (let i = 0; i < stdList.length; i++) {
        gradeAvg+= stdList[i].finalGrade;
        stdCount++;
      }

    return (Math.round(gradeAvg / stdCount));
  } 

  var list = [{"studentName" : "A", "finalGrade" : 90},
  {"studentName" : "B", "finalGrade" : 67},
  {"studentName" : "C", "finalGrade" : 32},
  {"studentName" : "D", "finalGrade" : 41},
  {"studentName" : "E", "finalGrade" : 78},
  {"studentName" : "F", "finalGrade" : 97},
  {"studentName" : "G", "finalGrade" : 55}
 ];

 console.log(classAverage(list));