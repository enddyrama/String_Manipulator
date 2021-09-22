

function addTitle(person1, person2, person3, person4) {
  // Code disini
  console.log(`Mr. ${person1}`)
}

function changeSpacesWith(str, to) {
  // Code disini
  let temp = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] == ' ') {
      temp += to
    } else {
      temp += str[i]
    }
  }
  console.log(temp)
}

function cutString(str) {
  // Code disini
  let temp = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] == ' ') {
      break
    } else {
      temp += str[i]
    }
  }
  console.log(temp)
}

addTitle('Steve Fox')
changeSpacesWith('Steve Fox', '-')
cutString('Kazuya Mishima')