const star = "*";
const space = " ";
let answer = "";
let starCount = 5;
let spaceCount = 0;

for(let i=0; i<=5; i++) {
  answer += space.repeat(spaceCount) + star.repeat(starCount) + '\n';
  if(i < 2) {
    spaceCount++;
    starCount -= 2;
  }
  else if(i === 2) {
    continue
  } else {
    spaceCount--;
    starCount += 2;
  }
}

console.log(answer);