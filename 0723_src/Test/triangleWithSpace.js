const star = "*";
const space = " ";
let answer = "";

let starCount = 1;
let spaceCount = 9;
let tempStC = starCount;
let tempSpC = spaceCount;
for(let i=0; i<10; i++) {
  if(i < 5) {
    answer += space.repeat(spaceCount) + star.repeat(starCount) +'\n';
    spaceCount--;
    starCount += 2;
  } else {
    answer += 
      space.repeat(spaceCount) + star.repeat(tempStC) + space.repeat(tempSpC) + star.repeat(tempStC) +'\n';
      spaceCount--;
      tempStC += 2;
      tempSpC -= 2;
  }
}
console.log(answer);