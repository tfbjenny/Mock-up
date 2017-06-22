var tenant;
var pool;
var image;
var count;
var flavor;
var userdata;
var cnt=0;
var status = "In Process";

function popup() {

          //change placeholder value
          var temp = document.getElementById("tenant").value
          $("#disable").attr('placeholder', temp).val("").focus().blur();
          
          //clean request form
          document.getElementById("tenant").value="Choose your tenant";
          document.getElementById("disable").value="";
          document.getElementById("image").value="";
          document.getElementById("flavor").value="";
          document.getElementById("pool").value="";
          document.getElementById("count").value="";
          document.getElementById("userdata").value="";


          $(".initially-hidden").fadeIn(500);
          $("#table").hide();
          // console.log("hit");
          
        }


function checkit(obj) {

    var ID =obj.id;
    console.log(ID);

   //var st = document.getElementById("table").rows[temp-1].cells[8].text();
    var st = $("table tr:eq("+ID+") td:eq(8)").text();
    $("table tr:eq("+ID+") td:eq(8)").html("Canceled");

   // st="Canceled";
    console.log(st);
    $("#"+ID.toString()).prop('disabled',true);

    //clean Canceled Request, uncommit following code
    //var t = $("input:checked").parent().parent("tr").remove();

}

$(function() {


  $("form").submit(function(event) {

    event.preventDefault();
    $(".initially-hidden").hide();
    $("#table").fadeIn(200);
    
  });

  $("#submit-button").click(function(){  
            console.log("hit");
            //$("#table").fadeIn(200);
            //count/index request
            cnt++;

            //get input data send to table
            tenant = document.getElementById("tenant").value.toString();

            vpc = document.getElementById("vpc").value.toString();
            
            pool = document.getElementById("pool").value.toString();

            image = document.getElementById("image").value.toString();
       
            count = document.getElementById("count").value.toString();
            
            flavor = document.getElementById("flavor").value.toString();
            
            userdata = document.getElementById("userdata").value.toString();
            
            //append new row

            // if(image==="") {
            //   $("#submit-button").attr("disabled", "disabled");
            //   window.alert("missing image type");
            //   //$("#submit-button").removeAttr("disabled");
            // }else {
            //   $("#submit-button").removeAttr("disabled");
            //   var tr = "<tr class='CaseRow'><td>"+cnt+"</td><td>" +tenant+"</td><td>" +vpc+"</td><td>"+pool+"</td><td>"+image+"</td><td>"+count+"</td><td>"+flavor+"</td><td>"+userdata+"</td><td>"+ status+" </td><td><input type='checkbox' onchange='checkit(this)' id='" + cnt+"'/></td></tr>";  
            //   $("table").append(tr);
            //   console.log(tr);
            //   $("#table").fadeIn(200);
            // }
            var tr = "<tr class='CaseRow'><td>"+cnt+"</td><td>" +tenant+"</td><td>" +vpc+"</td><td>"+pool+"</td><td>"+image+"</td><td>"+count+"</td><td>"+flavor+"</td><td>"+userdata+"</td><td>"+ status+" </td><td><input type='checkbox' onchange='checkit(this)' id='" + cnt+"'/></td></tr>";  
            $("table").append(tr);
            console.log(tr);

            
        }); 

});

