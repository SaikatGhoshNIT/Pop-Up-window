/*
*TODO: 2.Select the elements with the following IDs
*modal
*open-modal-button
*close-modal-button
*BONUS: overlay
*/

const modal = document.getElementById("modal")
const openModal = document.getElementById("open-modal-btn")
const closeModal = document.getElementById("close-modal-btn")
const overlay = document.getElementById("overlay")

/*TODO: 3. Create a click event Listener for the open-modal-btn that adds the class "open" to the modal*/

//BONUS: Also add the class "open" to the overlay
openModal.addEventListener('click', ()=>{
    modal.classList.add("open")
    overlay.classList.add("open")
    
})

/*TODO: 4. Create a click event Listener for the close-modal-btn that removes the class "open" from the modal*/
function close(){
    modal.classList.remove("open")
    overlay.classList.remove("open")
}
//BONUS: Also removes the class "open" from the overlay
closeModal.addEventListener('click', close)
//BONUS: Add a click event listener to the overlay that removes the class "open" from the modal and  the overlay
overlay.addEventListener("click", close)