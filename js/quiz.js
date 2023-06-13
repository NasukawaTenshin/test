var questions = [
    {
        question: "いみしの意味は、次のどれか。",
        options: ["大胆な", "決まり悪い", "意地の悪い", "うるさい"],
        answer: 2,
    },
    {
        question: "げんねの意味は、次のどれか。",
        options: ["かわいらしい", "だらしない", "残念", "はずかしい"],
        answer: 3,
    },
    {
        question: "ずんだれたの意味は、次のどれか。",

        options: ["みずが垂れる", "だらしない", "すべった", "転んだ"],
        answer: 1,
        
    },
    {
        question: "ごっそいの意味は、次のどれか。",

        options: ["全部", "だらしない", "きまり悪い", "怒っている"],
        answer: 0,
        
    },
    {
        question: "ちんぐゎらっの意味は、次のどれか。",

        options: ["ちぐはぐ", "だらしない", "めずらしい", "めちゃくちゃ"],
        answer: 3,
        
    },
    {
        question: "よんごひんごの意味は、次のどれか。",

        options: ["ちぐはぐ", "左右がわからない", "めずらしい", "横に曲がっている"],
        answer: 0,
        
    },
    {
        question: "さるくの意味は、次のどれか。",

        options: ["おこる", "笑う", "歩く", "走る"],
        answer: 2,
        
    },
    {
        question: "やせひぼけるの意味は、次のどれか。",

        options: ["すっかりやせてしまう", "貧乏になる", "つっつく", "髪を乱している"],
        answer: 0,
        
    },
    {
        question: "よかまねをするの意味は、次のどれか。",

        options: ["いいことをする", "見栄を張る", "ほめる", "人を馬鹿にする"],
        //見栄を張る、いいことをする、ほめる、人を馬鹿にする
        //1,0,2,3
        //
        answer: 1,
        
    },
    
];

var currentQuestion = 0;
var score = 0;
var flag = 0;

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function displayQuestion() {
    var questionElement = document.getElementById("question");
    var optionsElement = document.getElementById("options");

    questionElement.innerHTML = questions[currentQuestion].question;

    optionsElement.innerHTML = "";
    var tmp = questions[currentQuestion].options;
    console.log("tmp"+tmp);
    var shuffledOptions = shuffleArray(questions[currentQuestion].options.slice());
    console.log(shuffledOptions)
    
    for (var i = 0; i < shuffledOptions.length; i++) {
        var option = document.createElement("button");
        option.innerHTML = shuffledOptions[i];
        console.log(shuffledOptions[i]);
        console.log(Array.prototype.indexOf.call(questions[currentQuestion].options, shuffledOptions[i]));
        option.setAttribute("value", Array.prototype.indexOf.call(questions[currentQuestion].options, shuffledOptions[i]));
        option.setAttribute("onclick", "selectOption(" + Array.prototype.indexOf.call(questions[currentQuestion].options, shuffledOptions[i]) + ")");
        optionsElement.appendChild(option);
    }
}

function selectOption(option) {
    if (flag == 0) {
        flag = 1;
        var resultElement = document.getElementById("result");
        if (option === questions[currentQuestion].answer) {
            score++;
            resultElement.innerHTML = "正解！";
        } else {
            resultElement.innerHTML = "不正解...";
        }

        var answerElement = document.createElement("p");
        answerElement.innerHTML = "正解は: " + questions[currentQuestion].options[questions[currentQuestion].answer];
        resultElement.appendChild(answerElement);

        currentQuestion++;
    }
}

function nextQuestion() {
    var resultElement = document.getElementById("result");
    var scoreElement = document.getElementById("score");

    if (currentQuestion < questions.length) {
        flag = 0;
        resultElement.innerHTML = "";
        displayQuestion();
    } else {
        resultElement.innerHTML = "";
        var questionElement = document.getElementById("question");
        questionElement.innerHTML = "お疲れさまでした。";
        document.getElementById("options").innerHTML = "";
        document.getElementById("options").innerHTML = "正解数: " + score + "/" + questions.length;
        document.getElementById("next").style.display = "none";

        scoreElement.style.display = "block";

        document.getElementById("restartButton").style.display = "block";
    }
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    flag = 0;
    displayQuestion();
    document.getElementById("result").innerHTML = "";
    document.getElementById("next").style.display = "block";

    var scoreElement = document.getElementById("score");
    scoreElement.innerHTML = "";
    scoreElement.style.display = "none";

    document.getElementById("restartButton").style.display = "none";
}

shuffleArray(questions); // 問題をランダムにシャッフルする
displayQuestion();