//variables
let myLeads = []
const inputEl = document.querySelector("#input-el")
const inputBtn = document.querySelector("#input-btn")
const ulEl = document.querySelector("#ul-el")
const deleteBtn = document.querySelector("#delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()
}

deleteBtn.addEventListener("dblclick", function(){
    console.log("double clicked!")
    localStorage.clear()
    myLeads = []
    renderLeads()
})



inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    
    renderLeads()
    
})

function renderLeads(){
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
         //listItems += "<li><a target='_blank' href=' " + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
         listItems += `
         <li>
            <a target='_blank' href='${myLeads[i]}'>
            ${myLeads[i]}
         </li>
         `

    }
    ulEl.innerHTML = listItems
}









    // -createElement&make li textContent for myleads without innerhtml
    // const li = document.createElement("li")
    // li.textContent = myLeads[i]
    // ulEl.append(li)
