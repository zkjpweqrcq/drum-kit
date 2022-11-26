const playSound = (audio, block) => {
	audio.play();
	block.classList.add('playing');

	setTimeout(() => {
		audio.pause();
		audio.currentTime = 0;
		block.classList.remove('playing');
	}, 100);
}

const audios = [...document.querySelectorAll("audio")];
const keysBlocks = [...document.querySelectorAll(".key")];

window.addEventListener('keydown', (event) => {
	const { keyCode } = event;
	const currentAudio = audios.filter(element => element.dataset.key == keyCode)[0];
	const currentBlock = keysBlocks.filter(element => element.dataset.key == keyCode)[0];
	currentAudio &&	playSound(currentAudio, currentBlock);
});