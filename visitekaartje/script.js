const name = document.querySelector("p.name");

async function getData() {
	let res = await fetch("https://tribes-api.netlify.app/.netlify/functions/member?id=cldeppc393z9h0avwfpz8hb99")
	return await res.json();
}

function showData(data) {
    console.log(data);
    name.textContent = data.data.member.name;
}

getData()
    .then (data => {
    showData(data)
})