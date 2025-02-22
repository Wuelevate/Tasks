let URL = "https://ipinfo.io/";
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let ip = document.querySelector("input").value;
    console.log(ip);

    let result = await getIPInfo(ip);
    showResult(result);
});

function showResult(result) {
    let ul = document.querySelector("#result");

    let city = document.createElement("li");
    let country = document.createElement("li");
    let org = document.createElement("li");
    let name = document.createElement("li");
    let region = document.createElement("li");
    let timezone = document.createElement("li");

    city.innerText = `City: ${result.city}`;
    country.innerText = `Country: ${result.country}`;
    org.innerText = `Organization: ${result.org}`;
    name.innerText = `Name: ${result.name}`;
    region.innerText = `Region: ${result.region}`;
    timezone.innerText = `Timezone: ${result.timezone}`;

    ul.appendChild(city);
    ul.appendChild(country);
    ul.appendChild(org);
    ul.appendChild(name);
    ul.appendChild(region);
    ul.appendChild(timezone);
}

async function getIPInfo(ip) {
    try {
        let res = await fetch(URL + ip + "/geo");
        let data = await res.json();
        return data;

        // let res = await axios.get(URL);
        // console.log(res);
    } catch(e) {
        console.log(e);
        return "No IP Found";
    }
    
}



