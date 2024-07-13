// Worker - A file that is executed in the background
const worker = new Worker("worker.js");

document.querySelector(".my-button").addEventListener("click", () => {
	execute();
});

worker.addEventListener("message", (e) => {
	console.log(e.data);
	worker.terminate();
});

const execute = () => {
	worker.postMessage("Hello, how are you?");
};

console.log(worker);
