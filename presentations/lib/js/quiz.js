document.addEventListener('ready', function() {
	var quizOptions = document.querySelectorAll(".quiz-option");

	for (var i = 0; i < quizOptions.length; i++) {
		quizOptions[i].addEventListener('click', function() {
			// skip if something is already selected here
			if (!this.parentElement.querySelectorAll('.quiz-option.selected').length) {
				this.classList.add('selected');
				
				// go to next fragment if there is an answer to show
				if (this.parentElement.parentElement.querySelectorAll('.fragment.quiz-answer').length) {
					Reveal.nextFragment();
				}
			}
		})
	}

	// prevent spacebar from progressing past unanswered quizzes
	Reveal.configure({
		keyboard: {
			32: function () {
				slide = Reveal.getCurrentSlide();
				if (!slide.querySelectorAll('.quiz-option').length ||
					slide.querySelectorAll('.quiz-option.selected').length) {
					Reveal.next();
				}
			}
		}
	});
})
