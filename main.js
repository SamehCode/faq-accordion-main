let allQuestions = document.querySelectorAll('.question');
let allAnswers = document.querySelectorAll('.question p.answer')
console.log(document.querySelector('.head h4.active + img'))


allQuestions.forEach(question => {
    question.onclick = function(e) {
        console.log(this.classList.contains('active'))
        allQuestions.forEach(q => q.classList.remove('active'))
        if(question.classList.contains('active')) {
            question.classList.remove('active')
            
        } else {
            question.classList.add('active')
            
        }
        document.querySelectorAll('.head h4').forEach(q => q.classList.remove('active'))
        this.querySelector('.head h4').classList.toggle('active')
        allAnswers.forEach(ans => ans.classList.remove('clicked'))
        this.querySelector('p.answer').classList.toggle('clicked')
        document.querySelectorAll('.head img').forEach(img => img.src = 'assets/images/icon-plus.svg')
        document.querySelector('.head h4.active + img').src = 'assets/images/icon-minus.svg'
    }
})

console.log(document.querySelector('.head img').src)