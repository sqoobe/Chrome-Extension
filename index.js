//variables
let myLeads = []
const inputEl = document.querySelector("#input-el")
const inputBtn = document.querySelector("#input-btn")
const ulEl = document.querySelector("#ul-el")


inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})

function renderLeads(){
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
         listItems += "<li><a target='_blank' href=' " + myLeads[i] + "'>" + myLeads[i] + "</a></li>"

    }
    ulEl.innerHTML = listItems
}









    // -createElement&make li textContent for myleads without innerhtml
    // const li = document.createElement("li")
    // li.textContent = myLeads[i]
    // ulEl.append(li)
