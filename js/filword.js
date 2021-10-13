//correctAnswer  = [1,1,1,1,1,1,1,4,4,4,2,3,3,3,4,2,3,3,3,4,2,2,3,4,4];
alert ("Heelo");

answerCricket  = [1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // для сверчка
answerToad     = [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0]; // для жабы
answerHorsefly = [0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0]; // для слепня
answerFrog     = [0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1]; // для лягушки

answer =         [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

function changeAnswer (element) {
    document.getElementsByClassName('item'+(element+1).toString())[0].style.background = 'Green';
    answer[element] = 1-answer[element];
}

function checkAnswer () {
		flag = 1;
		for (i = 0; i < answer.length; i++){
			if (answer[i] != answerCricket[i])
				flag = 0;
		}
		if (flag){
			alert("Правильно!");
		}
		else {
			alert("Не правильно!");
		}
}


function restart(){
	answer = [0,0,0,0,0,0,0,0,0,0];
	for(i=0;i<10;i++)
		document.getElementsByClassName('slovo'+(i+1).toString())[0].style.background = 'Pink'
}










//Для работы с дом функции методы свой
//для обработки событий функции методы свойства
/*
массив база слов
пустой массив ++
дошли до последней буквы . кнопка проверить, если есть в массиве то ок

*/
/*
картинка найди это слово 
найди одно слово 
document.querySelector(".item").onclick = () => {
	document.querySelector(".item").style.background = 'green';
}
let word = {
 'СВЕРЧОК', 'ЛЯГУШКА', 'ЖАБА','СЛЕПЕНЬ'}
*/

// выделение слова

/*
let elem = document.querySelectorAll(".item");
       for (i = 0; i < elem.length; i++) {
           //elems[i].style.color="red";
           elem[i].addEventListener("mousedown", );
           elem[i].addEventListener("mouseup", );
           elem[i].addEventListener("mouseover", );
       }
*/