<?php




if (isset($_REQUEST['message']) || $REQUEST['to'] || $REQUEST['Name'] || $REQUEST['Phone'] || $REQUEST['Email'] || $REQUEST['DDate'] || $REQUEST['RDate'] || $REQUEST['adult'] || $REQUEST['child'] || $REQUEST['infant'])

{

  //start enquiry mail

  
  
   
    

  //$to = "email id update here";

$to = "info@skyquesta.com";

  $subject = "Enquiry from Website Name : ";

  $subject .= $_REQUEST['Name'];



  $from = $_REQUEST['Email'];



  $message = "\n";

  $message = "From: ";

  $message .= $_REQUEST['Email'];

  $message .= "\n";

  $message .= "Name: ";

  $message .= $_REQUEST['Name'];

  $message .= "\n";

  $message .= "Phone Number: ";

  $message .= $_REQUEST['Phone'];

  $message .= "\n";

  $message .= "Email: ";

  $message .= $_REQUEST['Email'];

  $message .= "\n";

 

 


 $message .= "message: ";

  $message .= $_REQUEST['message'];

  $message .= "\n";





 

  

  $headers = "MIME-Version: 1.0" . "\r\n";

  $headers .= "Content-type:text/html;charset=iso-8859-1" . "\r\n";

  $headers = 'From: '. $from . "\r\n";



  //end enquiry mail



  

  



  //Confirmation mail funtion



  mail($from, $subject1, $message1, $headers1);



  //Enquiry mail funtion



  //mail($to, $subject, $message, $headers, $envFrom);

  

 mail($to, $subject, $message, $headers);

 

   //header( 'Location: getback book-an-appointment.php' ) ;
   
   
   
 

   

		header("location:index.html");

		
		
		
	



  }




  

?>