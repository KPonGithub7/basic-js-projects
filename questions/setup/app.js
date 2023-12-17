// this here is an interesting project for learning
// because here we add the class to the parent element to toggle two classes at the same time
// here we added the show-text class the parent element having the queston class
// by this the css property ".show-text .question-text" applies by question text appears
// and with this the ".show-text icon class" also gets applied
// so whenever the .show-text class is added to the parent element both the css properties gets applied
// and thus the question text appears and the icon changes

//using selectors inside the element
// in here instead of travesing over the buttons we traverse over the parent element

const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
    // question.addEventListener("click", () => {
    //     question.classList.toggle("show-text");
    // });
    // above one is by me but it is not the best way to do it actually it might even be wrong
    //OR
    const btn = question.querySelector(".question-btn");
    btn.addEventListener("click", () => {
        questions.forEach((item) => {
            if (item !== question) {
                item.classList.remove("show-text");
            }
        });
        question.classList.toggle("show-text");
    });
});

// traversing the dom
// in this method we traverse the dom and select the parent element to apply the class

// const btns = document.querySelectorAll(".question-btn");
// btns.forEach(function (btn) {
//     btn.addEventListener("click", function (e) {
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle("show-text");
//     });
// });
