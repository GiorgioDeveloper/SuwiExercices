
var row= 10;
 
  for (var i=0; i <=row ; i++){
    
    for (var j=0; j<=i; j++) {
      document.write(" # ");
    } 
    document.write("<br/>");
  }

  document.write ("<br/>")

  /////////////////////////////////////////////////////////

  for (var i=row; i >=0 ; i--){
    
    for (var j=0; j<=i; j++) {
      document.write(" # ");
    } 
    document.write("<br/>");
  }

document.write ("<br/>")

/////////////////////////////////////////////////////////

  for (var i=row; i >=0 ; i--){
    
    for (var j=0; j<=i; j++) {
      document.write("&nbsp;&nbsp;&nbsp");
        document.write(" # ");
    }
        for (var x=0; x <=row ; x++){
          document.write(" # ");
          
      
    }
    document.write("<br/>");
  }
  

  document.write("<br/>");

/////////////////////////////////////////////////////////
  
  for (var i=row; i >=0 ; i--){
    
    for (var j=0; j<=i; j++) {
      document.write("&nbsp;&nbsp;&nbsp");
    }
          document.write(" # ");
    
    document.write("<br/>");
  }

  document.write("<br/>");

  /////////////////////////////////////////////////////////
    
    for (var i=row; i >=0 ; i--){
      
      for (var j=0; j<=i; j++) {
        document.write("&nbsp;&nbsp;&nbsp");
      } 
      for(var x=0; x<=row; x++)   {
      document.write(" # ");
    }
      document.write("<br/>");
    }

    document.write("<br/>");

/////////////////////////////////////////////////////////
      
      for (var i=row; i >=0 ; i--){
        
        for (var j=0; j<=i; j++) {

          if(j>=i)
          document.write("&nbsp;&nbsp;&nbsp");
          else 
        document.write(" # ");
        }
        document.write("<br/>");
      }

      document.write("<br/>");

/////////////////////////////////////////////////////////
 
for (var i=row; i >=0 ; i--){
        
  for (var j=0; j<=i; j++) {

  
    document.write(" # ");
   
  }
  document.write("<br/>");
}

document.write("<br/>");

/////////////////////////////////////////////////////////

for (var i=row; i >=0 ; i--){
       
  for (var j=0; j<=i; j++) {

    if(j>=i)
    document.write(" # ");
    else 
  document.write("&nbsp;&nbsp;&nbsp");
  }
  document.write("<br/>");
}

document.write("<br/>");

/////////////////////////////////////////////////////////

for (var i=row; i >=0 ; i--){
  
       debugger
  for (var j=0; j<=i; j++) {

    if(j>=i)
    for(var x=0; x<=row-i; x++){
    document.write(" # ");
    }
    else 
  document.write("&nbsp;&nbsp;&nbsp");
  }
  document.write("<br/>");
}

document.write("<br/>");

/////////////////////////////////////////////////////////

for (var i=row; i >=0 ; i--){
  
       
  for (var j=0; j<=i; j++) {

    if(j>=i)
    for(var x=0; x<=row-i; x++){
    document.write("# ");
    }
    else 
  document.write("&nbsp;&nbsp;&nbsp");
  }
  document.write("<br/>");
}

document.write("<br/>");

/////////////////////////////////////////////////////////


      
for (var i=row; i >=0 ; i--){
        
  for (var j=0; j<=i; j++) {

    if(j>=i)
    document.write("&nbsp;&nbsp;&nbsp");
    else 
    for (var x=0; x<=row-i; x++){
  document.write("# ");
    }
  }
  document.write("<br/>");
}

document.write("<br/>");



///////////////////////Pyramid_1//////////////////////////////////


      
for (var i=row; i >=0 ; i--){
        
  for (var j=1; j<=i; j++) {

    if(j>=i)
    for (var x=0; x<=row-i; x++){
      document.write("# ");
        }
    
    else 
    document.write("&nbsp;&nbsp;&nbsp");
   
  }
  document.write("<br/>");

}

document.write("<br/>");


///////////////////////Pyramid_2//////////////////////////////////

for (var i=row; i >=0 ; i--){
        
  for (var j=0; j<=i; j++) {

    if(j>=i)
    document.write("&nbsp;&nbsp;&nbsp");
    else 
  document.write("# ");
  }
  document.write("<br/>");
}

document.write("<br/>");





































