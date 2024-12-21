
// document.addEventListener("DOMContentLoaded", () => {

//     // Track Shipment
//     document.getElementById("track_btn").addEventListener("click", async () => {
//         const trackingId = document.getElementById("tracking_id").value;
//         if (trackingId === '') {
//             alert('Tracking Number not given');
//             return;
//         }


//     // Contact Form Submit
//     document.getElementById('contact-formm').addEventListener('submit', async (e) => {
//         e.preventDefault();

//         const formData = new FormData(e.target);

//         try {
//             // Show loading animation
//             document.querySelector(".lbtn").style.display = 'inline-block';
//             document.querySelector(".nlbtn").style.display = 'none';

//             const response = await fetch('controller/Controller', {
//                 method: 'POST',
//                 body: formData
//             });

//             const data = await response.json();

//             if (data.error) {
//                 data.message.forEach((msg) => {
//                     showToast(msg, 'error');
//                 });
//             } else {
//                 e.target.reset();
//                 showToast(data.message, 'success');
//             }
//         } catch (error) {
//             console.error("Error: Unable to communicate with the server.", error);
//             showToast('There was a problem with the contact form submission.', 'error');
//         } finally {
//             // Hide loading animation after delay
//             setTimeout(() => {
//                 document.querySelector(".nlbtn").style.display = 'inline-block';
//                 document.querySelector(".lbtn").style.display = 'none';
//             }, 1500);
//         }
//     });

// });

// // Utility function for showing toast messages
// function showToast(message, type) {
//     const toast = document.createElement('div');
//     toast.classList.add('toast');
//     toast.style.position = 'absolute';
//     toast.style.top = '10px';
//     toast.style.right = '10px';
//     toast.style.padding = '10px';
//     toast.style.borderRadius = '5px';
//     toast.style.fontSize = '14px';
//     toast.style.zIndex = '9999';
//     toast.innerHTML = `<h6 style="color: #fff; font-size: 11px;"><i class="fa-solid fa-${type === 'success' ? 'check' : 'exclamation-circle'}"></i> ${message}</h6>`;
//     toast.style.backgroundColor = type === 'success' ? 'green' : '#b92020';
//     document.body.appendChild(toast);

//     setTimeout(() => {
//         toast.remove();
//     }, 5000);
// } });
