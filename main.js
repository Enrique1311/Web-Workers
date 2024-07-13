// Worker - A file that is executed in the background
const worker = new Worker("worker.js");

const loadData = async (div) => {
	const req = await fetch("assets/data.txt");
	const result = await req.json();
	const data = result;
	document.querySelector(div).innerHTML = data;
};
loadData(".load-results");

console.log(worker);
