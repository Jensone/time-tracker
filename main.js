// Filter stetting
let filterSelected
document.querySelector("#Daily").onclick = function () { filterSelected = "Daily" }
document.querySelector("#Weekly").onclick = function () { filterSelected = "Weekly" }
document.querySelector("#Monthly").onclick = function () { filterSelected = "Monthly" }

// Fetch my json file
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // Select the ul tag to display the data
        let activities = document.querySelector("#activities")

        // Display my data in a loop with a li tag
        for (let i of data) { 
            let item = document.createElement("article")
            // Filter the data
            if(filterSelected == "Monthly"){
                item.innerHTML = 
            `
            <section class="${i.title} flex flex-column flex-justify-center">
                <header class="flex flex-justify-between w100">
                    <h4>${i.title}</h4>
                    <a href="#">
                        <svg width="32" height="32" viewBox="0 0 16 16"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><circle cx="2.5" cy="8" r=".75"/><circle cx="8" cy="8" r=".75"/><circle cx="13.5" cy="8" r=".75"/></g></svg>
                    </a>
                </header>
                <main class="flex flex-align-center flex-justify-between w100">
                    <p class="hours">${i.timeframes.monthly.current}hrs</p>
                    <p class="past-hours">Last Week - <span >${i.timeframes.monthly.previous}hrs</span></p>
                </main>
            </section>
            `
            }
            else if(filterSelected == "Weekly"){
                item.innerHTML = 
            `
            <section class="${i.title} flex flex-column flex-justify-center">
                <header class="flex flex-justify-between w100">
                    <h4>${i.title}</h4>
                    <a href="#">
                        <svg width="32" height="32" viewBox="0 0 16 16"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><circle cx="2.5" cy="8" r=".75"/><circle cx="8" cy="8" r=".75"/><circle cx="13.5" cy="8" r=".75"/></g></svg>
                    </a>
                </header>
                <main class="flex flex-align-center flex-justify-between w100">
                    <p class="hours">${i.timeframes.weekly.current}hrs</p>
                    <p class="past-hours">Last Week - <span >${i.timeframes.weekly.previous}hrs</span></p>
                </main>
            </section>
            `
            }
            else {
                item.innerHTML = 
            `
            <section class="${i.title} flex flex-column flex-justify-center">
                <header class="flex flex-justify-between w100">
                    <h4>${i.title}</h4>
                    <a href="#">
                        <svg width="32" height="32" viewBox="0 0 16 16"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><circle cx="2.5" cy="8" r=".75"/><circle cx="8" cy="8" r=".75"/><circle cx="13.5" cy="8" r=".75"/></g></svg>
                    </a>
                </header>
                <main class="flex flex-align-center flex-justify-between w100">
                    <p class="hours">${i.timeframes.daily.current}hrs</p>
                    <p class="past-hours">Last Week - <span >${i.timeframes.daily.previous}hrs</span></p>
                </main>
            </section>
            `
            }
            item.classList.add("activity")
            activities.appendChild(item)
        }
        document.querySelector("#activities").appendChild(activity)
        console.log("Seems all it's ok 😍")
	})
    .catch(error => {
        console.log("I dunno what to display 🤷")
    })


// Display classes to my html


