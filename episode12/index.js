
var main_div=document.createElement("div")
main_div.setAttribute("id","GFG_DOWN")
document.getElementsByTagName("body")[0]
			.appendChild(main_div);
	var down = document.getElementById("GFG_DOWN");
    

	
	// Create a break line element
	var br = document.createElement("br");
    GFG_Fun();
	function GFG_Fun() {
				
	// Create a form synamically
    var head = document.getElementsByTagName('HEAD')[0]; 
    var link = document.createElement('link');

// set the attributes for link element 
link.rel = 'stylesheet'; 
      
link.type = 'text/css';

link.href = 'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css'; 

// Append link element to HTML head
head.appendChild(link); 

var link1 = document.createElement('link');

// set the attributes for link element 
link1.rel = 'stylesheet'; 
      
link1.type = 'text/css';

link1.href = 'index.css'; 

// Append link element to HTML head
head.appendChild(link1); 


var script1 = document.createElement('script');

// set the attributes for script element 

script1.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js'; 

// Append script element to HTML head
head.appendChild(script1); 

var script2 = document.createElement('script');

// set the attributes for script element 

script2.src = 'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js'; 

// Append script element to HTML head
head.appendChild(script2); 

	var form = document.createElement("form");
    form.setAttribute("id", "message_form");

	form.setAttribute("method", "post");
	form.setAttribute("action", "#");
	// Create an input element for Full Name
	var FN = document.createElement("TEXTAREA");
	FN.setAttribute("id", "message");
	FN.setAttribute("placeholder", "Message");

	

				// create a submit button
				var s = document.createElement("input");
                s.setAttribute("id", "btnsb");
				s.setAttribute("type", "button");
				s.setAttribute("value", "Submit");
                s.addEventListener("click",postMe);
				// Append the full name input to the form
				form.appendChild(FN);				
				// Inserting a line break
				form.appendChild(br.cloneNode());				
				
				// Append the submit button to the form
				form.appendChild(s);
				document.getElementsByTagName("body")[0]
			.appendChild(form);
            var dismis=document.createElement("span");
    dismis.setAttribute("id","dismis");
    dismis.innerText="x"
    dismis.addEventListener("click",hideShow);
            document.getElementById("message_form")
			.appendChild(dismis);
			}
		

            function postMe()
            {
                console.log('posted')
                let msg=document.getElementById("message").value
                console.log();

                $.get("mychat.com/save.php",{"message":msg}, function(data, status){
                    
                  });

            }
            function hideShow()
            {
                if(document.getElementById("message").style.display=='none')
                {
                    document.getElementById("message").style.display="initial"
                    document.getElementById("btnsb").style.display="initial"
                    document.getElementById("dismis").innerText="x"

                    document.getElementById("message_form").style.width="400px"
                    document.getElementById("message_form").style.minHeight="200px"
                }
                    else
                    {
                 document.getElementById("message").style.display="none"
                 document.getElementById("btnsb").style.display="none"
                 document.getElementById("dismis").innerText="i"
                 document.getElementById("message_form").style.width="4px"
                 document.getElementById("message_form").style.minHeight="20px"
                    }
            }