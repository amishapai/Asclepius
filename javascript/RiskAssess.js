
    function rfactor(e) { 

        
      var pname=document.getElementById("fname").value;
        var checkdiabetes = document.getElementById("illness1").checked;
        var checkrespiratory =document.getElementById("illness2").checked;
        var checkabnormalBP =document.getElementById("illness2").checked;
        var stdate = new Date(document.getElementById("sdate").value);
        var dedate=new Date(document.getElementById("rdate").value);
        var Difference_In_Time = dedate.getTime() - stdate.getTime(); 
      
        // To calculate the no. of days between two dates 
        var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 
            
        var delayreport=Difference_In_Days;
        var age = document.getElementById("ageNo").value;
    
        //VAriables to calculate
        var agerf=0;
        var rf=0;
        
        //CONSTANTS FOR CALCULATING THE RISK FACTOR

        const drf = 1; 
        const rrf = 3;
        const abprf = 2;
        
      
        if (checkdiabetes)
        {
            rf = rf + drf ;
        }

        if (checkrespiratory)
        {
            rf = rf + rrf ;
        }

        if (checkabnormalBP)
        {
            rf = rf + abprf ;
        }
      
        //calculating agerf 
        if (age>=0 && age<=20)
        {
            agerf = 0 ; 
        }
        else if (age>=20 && age<=40)
        {
            agerf = 1 ; 
        }
        else if (age>=40 && age<=60)
        {
            agerf = 2 ; 
        }
        else if (age>=60 && age<=80)
        {
            agerf = 3 ; 
        }
        else 
        {
            agerf = 4; 
        }
       

        rf = rf + agerf ; 

        
     //calculating agerf 
       if (delayreport>10)
       {
           rf = rf+1 ; 
       }
       
       if (rf>10)
       {
           rf=10;
       }

       if (rf<1)
       {
           rf=1;
       }
      
       document.getElementById("rffor").innerHTML = pname +", your Risk Factor is " + rf
        document.getElementById("results").style.display="inline";
        document.getElementById("myRange").value=rf;

    };
    
   