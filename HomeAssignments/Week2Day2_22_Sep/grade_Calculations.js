var studScore = 80
function StudentScore(score)
{
    switch (score) {
      case (score >= 0 && score <= 40):
        console.log("Student is failed");
        break;
      case (score >= 41 && score <= 50):
        console.log("Third Class");
        break;
      case (score >= 51 && score <= 60):
        console.log("Second Class");
        break;
      case (score >= 61 && score <=70):
      console.log("First Class");
      break;
      case (score >= 71 && score <=80):
      console.log("Above First Class");
      break;
      
      case (score >80):
        console.log("Distinction");
        break;
      default:
        console.log("Invalid Mark / Data provided");
    }
}
console.log('Switch Statement Example with Marks');
StudentScore(studScore)
console.log('The type of Score is '+typeof(studScore));
