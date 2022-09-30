// let activity = document.querySelector('#activity');
// for (let activity in data) {
        //     console.log(activity.title);
        // }


// Fetch my json file
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // Display my data in a loop
        let activity = document.createElement("ul")
        for (let i of data) { 
            let item = document.createElement("ul")
            item.innerHTML = `
            <section class="flex flex-column flex-justify-center">
                <header class="flex flex-justify-between w100">
                    <h4>${i.title}</h4>
                    <a href="#">
                        <svg width="32" height="32" viewBox="0 0 16 16"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><circle cx="2.5" cy="8" r=".75"/><circle cx="8" cy="8" r=".75"/><circle cx="13.5" cy="8" r=".75"/></g></svg>
                    </a>
                </header>
                <main class="flex flex-align-center flex-justify-between w100">
                    <p class="hours">32hrs</p>
                    <p class="past-hours">Last Week - <span >36hrs</span></p>
                </main>
            </section>
            `
            item.classList.add("activity");
            activity.appendChild(item)
        }
        document.querySelector("#activities").appendChild(activity);
        // data.forEach(data => {
	    // activity.createElement('Nom: ', data.title);
        // console.log("C'est passé");
	})
   // return data;
    .catch(error => {
        console.log("I dunno 🤷");
    })


// Display classes to my html


