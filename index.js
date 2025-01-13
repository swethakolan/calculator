function loveCalculator() {
  var lovePercentage = Math.floor(Math.random() * 100) + 1;

  
  var resultElement = document.querySelector(".change");

  if (lovePercentage > 50) {
   // console.log(lovePercentage);
    resultElement.innerHTML = `Love percentage is <strong>${lovePercentage}%</strong>. You and your partner are an amazing pair! ❤️`;
    resultElement.style.color = "#441752"; 
  } else {
   // console.log(lovePercentage);
    resultElement.innerHTML = `Love percentage is <strong>${lovePercentage}%</strong>. Sorry! You and your partner are not an amazing pair. 💔`;
    resultElement.style.color = "black"; 
  }
}
