const clacGrade = () => {
  let bangla = document.getElementById("bangla").value;
  let bangla2 = document.getElementById("bangla2").value;
  let english = document.getElementById("english").value;
  let english2 = document.getElementById("english2").value;
  let math = document.getElementById("math").value;
  let science = document.getElementById("science").value;
  let socialScience = document.getElementById("social-science").value;
  let history = document.getElementById("history").value;
  let islam = document.getElementById("islam").value;
  let agriculture = document.getElementById("agri").value;

  // total
  let totalGrades =
    +bangla +
    +bangla2 +
    +english +
    +english2 +
    +math +
    +science +
    +socialScience +
    +history +
    +islam +
    +agriculture;
  console.log(totalGrades);

  //parcentage
  let parcentage = (totalGrades / 1000) * 100;

  //grade
  let grade = "";
  if (parcentage <= 100 && parcentage >= 80) {
    grade = "A";
  } else if (parcentage <= 79 && parcentage >= 60) {
    grade = "B";
  } else if (parcentage <= 59 && parcentage >= 40) {
    grade = "C";
  } else {
    grade = "F";
  }

  //   fail or pass
  if (parcentage >= 35) {
    document.getElementById(
      "showData"
    ).innerHTML = ` Out of 1000 your total is ${totalGrades} and percentage is ${parcentage}%. <br> Your grade is ${grade}. You are <span class="pass">Pass</span>. `;
  } else {
    document.getElementById(
      "showData"
    ).innerHTML = ` Out of 1000 your total is ${totalGrades} and percentage is ${parcentage}%. <br> Your grade is ${grade}. <br> You are <span class="fail">Fail</span>.`;
  }

  //   // show output
  //   document.getElementById(
  //     "showData"
  //   ).innerHTML = ` Out of 1000 your ${totalGrades} and percentage is ${parcentage}%. <br> Your grade is ${grade} `;
};
