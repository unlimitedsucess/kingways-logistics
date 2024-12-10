

let updateStatus = document.querySelectorAll(".update-btn");
const deleteStatus = document.querySelectorAll(".delete-btn");
const updateManu = document.querySelector(".update-screen");
const createBtn = document.getElementById("createbtn");
const newConsignment = document.querySelector(".createShipment");
const createConsignmentBtn = document.getElementById("create-btn");
const tableRow = document.getElementsByTagName("tr")
console.log (tableRow)

updateStatus.forEach((btn) => {
  btn.addEventListener("click", function () {
    updateManu.classList.toggle("active2");
    console.log("clicked", updateStatus);
  });
});

createBtn.addEventListener("click", function () {
  newConsignment.classList.toggle("active3");
});

const newTable = [];

const createConsignmentHandler = () => {
  const senderName = document.getElementById("senderName-inpute").value;
  const senderEmail = document.getElementById("senderEmail-inpute").value;
  const freightDate = document.getElementById("freightDate-input").value;
  const weightInput = document.getElementById("Weight-input").value;
  const receiverName = document.getElementById("recieverName-input").value;
  const recieverEmail = document.getElementById("recieverEmail-input").value;
  const arrivalDate = document.getElementById("arrivalDate-input").value;
  const designationInput = document.getElementById("designation-input").value;
  if (
    senderName.trim() == "" ||
    senderEmail.trim() === "" ||
    freightDate.trim() === "" ||
    weightInput.trim() === "" ||
    receiverName.trim() === "" ||
    recieverEmail.trim() === "" ||
    arrivalDate.trim() === "" ||
    designationInput.trim() === ""
  ) {
  //   $.toast({
  //     text: '<h6 style="color: #fff; font-size: 13px;"><i class="fa-solid fa-exclamation-circle "></i> Incomplete form</h6>',
  //     showHideTransition: 'slide',
  //     bgColor: '#b92020',
  //     textColor: '#eee',
  //     allowToastClose: false,
  //     hideAfter: 5000,
  //     stack: 15,
  //     textAlign: 'left',
  //     position: 'top-right'
  // });
  return;
  }
  const newUserConsignment = {
    info: {
      [senderName]: senderName,
      [senderEmail]: senderEmail,
      [freightDate]: freightDate,
      [weightInput]: weightInput,
      [receiverName]: receiverName,
      [recieverEmail]: recieverEmail,
      [arrivalDate]: arrivalDate,
      [designationInput]: designationInput
    },
    id: Math.random()
  };
}