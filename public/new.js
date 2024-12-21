// let updateStatus = document.querySelectorAll(".update-btn");
// const deleteStatus = document.querySelectorAll(".delete-btn");
// const updateManu = document.querySelector(".update-screen");
// const createBtn = document.getElementById("createbtn");
// const newConsignment = document.querySelector(".createShipment");
// const createConsignmentBtn = document.getElementById("create-btn");
// const forminput = document.getElementById("form-submit")

// updateStatus.forEach((btn) => {
//   btn.addEventListener("click", function () {
//     updateManu.classList.toggle("active2");
//   });
// });

// createBtn.addEventListener("click", function () {
//   newConsignment.classList.toggle("active3");
// });

// const newTable = [];

// const renderTable = ()=>{
//   const tabledata =document.getElementById("shipment-details");
 
//   if(newTable.length===0){
//     tabledata.classList.remove("visible");
//     return
//   }else{
//     tabledata.classList.add("visible");
//   }
//   tabledata.innerHTML="";
//   newTable.forEach((table) =>{
//     const tabEl = document.createElement("td");
//     tabEl.textContent = table.info.senderName;

//     tabledata.append(tabEl);
//   })

// };

// const createConsignmentHandler = () => {
//   const senderName = document.getElementById("senderName-input").value;
//   const senderEmail = document.getElementById("senderName-input").value;
//   const freightDate = document.getElementById("freightDate-input").value;
//   const weightInput = document.getElementById("Weight-input").value;
//   const receiverName = document.getElementById("recieverName-input").value;
//   const recieverEmail = document.getElementById("recieverEmail-input").value;
//   const arrivalDate = document.getElementById("arrivalDate-input").value;
//   const designationInput = document.getElementById("designation-input").value;
//   if (
//     senderName.trim() == "" ||
//     senderEmail.trim() === "" ||
//     freightDate.trim() === "" ||
//     weightInput.trim() === "" ||
//     receiverName.trim() === "" ||
//     recieverEmail.trim() === "" ||
//     arrivalDate.trim() === "" ||
//     designationInput.trim() === ""
//   ) {
//   //   $.toast({
//   //     text: '<h6 style="color: #fff; font-size: 13px;"><i class="fa-solid fa-exclamation-circle "></i> Incomplete form</h6>',
//   //     showHideTransition: 'slide',
//   //     bgColor: '#b92020',
//   //     textColor: '#eee',
//   //     allowToastClose: false,
//   //     hideAfter: 5000,
//   //     stack: 15,
//   //     textAlign: 'left',
//   //     position: 'top-right'
//   // });
//   // alert("what is your name");
//   }
//   const newUserConsignment = {
//     info: {
//       [senderName]: senderName,
//       [senderEmail]: senderEmail,
//       [freightDate]: freightDate,
//       [weightInput]: weightInput,
//       [receiverName]: receiverName,
//       [recieverEmail]: recieverEmail,
//       [arrivalDate]: arrivalDate,
//       [designationInput]: designationInput
//     },
//     id: (newTable.length +1)
//   };
//   newTable.push(newUserConsignment);
//   // console.log(newUserConsignment)
//   renderTable();
// }
// createConsignmentBtn.addEventListener("click", createConsignmentHandler)
// forminput.addEventListener("submit", (event)=>{
// event.preventDefault()
// })