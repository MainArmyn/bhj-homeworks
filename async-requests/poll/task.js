function Poll() {
    const xhr = new XMLHttpRequest();
    const answerContainer = document.querySelector(".poll__answers");
    xhr.open("GET","https://students.netoservices.ru/nestjs-backend/poll");
    xhr.send();
    xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState === xhr.DONE) {
            const obj = JSON.parse(xhr.response).data.answers;
            const idVote = JSON.parse(xhr.response).id;
            obj.forEach((element,idx) => {
                CreateElement(element,idVote,idx);
            });
        }
    });
}

function PollPost(idVote,idElement) {
    const answerContainer = document.querySelector(".poll__answers");
    const xhr = new XMLHttpRequest();
    xhr.open( "POST", "https://students.netoservices.ru/nestjs-backend/poll" );
    xhr.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
    xhr.send(`vote=${idVote}&answer=${idElement}`);
    xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState === xhr.DONE) {
            Clear();
            const arrayOfStat = JSON.parse( xhr.response ).stat;
            for (let el of arrayOfStat) {
                Clear();
                const answer  = document.createElement("div");
                answer.textContent = `${el.answer}:${el.votes}%`;
                answerContainer.appendChild(answer);
            }
        }
    })
}

function Clear() {
    const items  = document.getElementsByClassName("poll__answer");
    for (let item of items) {
        item.remove();
    }
}

 function CreateElement(text,idVote,idAnswer) {
    const answerContainer = document.querySelector(".poll__answers");
    const item = document.createElement("button");
    item.className = "poll__answer";
    item.textContent = text;
    item.onclick = () => {
        alert("Спасибо, ваш голос засчитан!");
        PollPost(idVote,idAnswer);
    };
    answerContainer.appendChild(item);
}

Poll();