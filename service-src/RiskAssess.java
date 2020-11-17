import java.util.*;
import java.io.*;
public class RiskAssess
{
     String D; //You gotta input this bit of code to extract data off the XLS files
     String R; //You gotta input this bit of code to extract data off the XLS files
     String ABP; //You gotta input this bit of code to extract data off the XLS files
    int Risk1, Risk2, Risk3;
    int RiskM; //This is the modal risk i was talking about. Vedanth gotta add the code to calculate this
    public void under13()
    {
        if(D.equalsIgnoreCase("True")==true|| R.equalsIgnoreCase("True")==true || ABP.equalsIgnoreCase("True")==true)
        {
            Risk1=2;

        }

    }

    public void NotYet30Tho()
    {
        int c=0;
        if(D.equalsIgnoreCase("True")==true)
            c++;
        if(R.equalsIgnoreCase("True")==true)
            c++;
        if(ABP.equalsIgnoreCase("True")==true)
            c++;

        switch(c)
        {
            case 0:
            Risk1=0;

            case 1:
            Risk1=1;

            case 2:
            Risk1=1;

            default:
            Risk1=0;
        }

    }

    public void MidlifeCrisis()
    {
        int c1=0;
        if(D.equalsIgnoreCase("True")==true)
            c1++;
        if(R.equalsIgnoreCase("True")==true)
            c1++;
        if(ABP.equalsIgnoreCase("True")==true)
            c1++;

        switch(c1)
        {
            case 0:
            Risk1=0;

            case 1:
            Risk1=1;

            case 2:
            Risk1=2;

            default:
            Risk1=0;
        }
    }

    public void AjjasAjjis()
    {
        if(D.equalsIgnoreCase("True")==true|| R.equalsIgnoreCase("True")==true || ABP.equalsIgnoreCase("True")==true)
        {
            Risk1=2;

        }

    }
   
   
    int pop; //Extract from XLS
    public void PopRisk()
    {
        if(pop<=3500)
        Risk2=0;
        if(pop>3500 && pop<=8000)
        Risk2=1;
        if(pop>8000)
        Risk2=2;
    }
   
    public void totalRisk()
    {
     if(RiskM==0 && Risk2==0)
     Risk3=0;
     if(RiskM==0 && Risk2==1)
     Risk3=1;
     if(RiskM==0 && Risk2==2)
     Risk3=1;
     if(RiskM==1 && Risk2==0)
     Risk3=1;
     if(RiskM==1 && Risk2==1)
     Risk3=1;
     if(RiskM==1 && Risk2==2)
     Risk3=2;
     if(RiskM==2 && Risk2==0)
     Risk3=1;
     if(RiskM==2 && Risk2==1)
     Risk3=2;
     if(RiskM==2 && Risk2==2)
     Risk3=2;
    }
   
    public void ModalRisk()
    {
       
    }
    public static void main(String args[])
    {
     Scanner in = new Scanner(System.in);
       
     int Age = 13;//Extract from the XLS
     RiskAssess ob = new RiskAssess();
     if(Age<=13)
        ob.under13();
     if(Age>13 && Age<=30)
        ob.NotYet30Tho();
     if(Age>30 && Age<=60)
        ob.MidlifeCrisis();
     if(Age>60)
        ob.AjjasAjjis();
    }
   
    
}