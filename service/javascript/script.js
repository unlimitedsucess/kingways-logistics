$(function() {

    //track
    $("#track_btn").click(function() {
        var trackingId = $("#tracking_id").val();
        if (trackingId=='') { alert('Tracking Number not given'); return;}
        $.ajax({
            // url: 'https://api-gmp.gaviceglobal.com/api/v1/track',
            url: 'https://solvent.gaviceglobal.com/api/shipment/track',
            type: 'GET',
            data: {
              trackingno: trackingId
            },
            beforeSend: function(){$(".lbtn").show(); $(".nlbtn").hide();},
            success: function(response) {
              // Store the data in a session variable
             sessionStorage.setItem('trackingData', JSON.stringify(response.data));
              if (response.status === "success") {
                  // Redirect to result page with obtained data
                  var data = response.data;
                  var queryString = $.param(data);
                  if(data.whichtype=='1'){
                    window.location.href = 'tracking-details?' + queryString;
                  }else if(data.whichtype=='2'){
                    window.location.href = 'tracking-haulage-details?' + queryString;
                  }else{
                    return;
                  }
                  // if(data.whichtype=='1'){
                  //   linkk = 'https://gavice.com/tracking-details?' + queryString;
                  // }else if(data.whichtype=='2'){
                  //   linkk = 'tracking-haulage-details?' + queryString;
                  // }else{
                  //   return;
                  // }
                  // window.open(linkk, '_blank');
                  
              } else {
                  if (response.status==="error") {
                    $.toast({ 
                      text : '<h6 style="color: #fff; font-size: 11px;"><i class="fa-solid fa-exclamation-circle "></i> '+response.message+'</h6>', 
                      showHideTransition : 'slide', 
                      bgColor : '#b92020',              
                      textColor : '#eee',            
                      allowToastClose : false,       
                      hideAfter : 5000,              
                      stack : 15,                     
                      textAlign : 'left',            
                      position : 'top-right'      
                    });
                  }
                  console.error("Error: Unable to fetch data from the API.");
              }
              setInterval(function() {$(".nlbtn").show(); $(".lbtn").hide(); },1500);
            },
            error: function(xhr, status, error) {
              console.error("Error: Unable to communicate with the server.");
              setInterval(function() {$(".nlbtn").show(); $(".lbtn").hide(); },1500);
              var data = xhr.responseJSON;
              if (status=="error") {
                $.toast({ 
                  text : '<h6 style="color: #fff; font-size: 11px;"><i class="fa-solid fa-exclamation-circle "></i> '+data.message+'</h6>', 
                  showHideTransition : 'slide', 
                  bgColor : '#b92020',              
                  textColor : '#eee',            
                  allowToastClose : false,       
                  hideAfter : 5000,              
                  stack : 15,                     
                  textAlign : 'left',            
                  position : 'top-right'      
                });
              }
            }
        });
    });
  
    //Contact us
    $('#contact-formm').submit(function(e){
      e.preventDefault();
      $.ajax({
        type: 'POST',
        url: 'controller/Controller',
        data: new FormData(this),
        processData: false,
        contentType: false,
        dataType: 'json',
        beforeSend: function(){$(".lbtn").show(); $(".nlbtn").hide();},
        success: function(response){
          if(response.error){
            $.each(response.message, function (i) {
              $.toast({ 
                text : '<h6 style="color: #fff; font-size: 11px;"><i class="fa-solid fa-exclamation-circle "></i> '+response.message[i]+'</h6>', 
                showHideTransition : 'slide', 
                bgColor : '#b92020',              
                textColor : '#eee',            
                allowToastClose : false,       
                hideAfter : 5000,              
                stack : 15,                     
                textAlign : 'left',            
                position : 'top-right'      
              });
            });
            
          }
          else{
            $('#contact-formm')[0].reset();
            $.toast({ 
              text : '<h6 style="color: #fff; font-size: 11px;"><i class="fa-solid fa-check "></i> '+response.message+'</h6>', 
              showHideTransition : 'slide', 
              bgColor : 'green',              
              textColor : '#eee',            
              allowToastClose : false,       
              hideAfter : 5000,              
              stack : 5,                     
              textAlign : 'left',            
              position : 'top-right'      
            });
          }
          setInterval(function() {$(".nlbtn").show(); $(".lbtn").hide(); },1500);
        }
      });
    });
  
      
  });