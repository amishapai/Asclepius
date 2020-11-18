public class agefatility {
    public static void main(String[] args) {
        int x, y; // inputted loation
        int dead; // inputting no.of dead people in the locality
        float fatality0to15, fatality16to25, fatality26to40, fatality41to65, fatalitymorethan65 ; 
        int age0to15, age16to25, age26to40, age41to65, agemorethan65 ;
        int i;
        int deadage  [] = new int [dead] ; 
        for (i=0 ; i<= dead ; i++)
        {
            if (deadage[i] >= 0 && deadage[i] <=15) 
            {
                age0to15 = age0to15 +1; 
            }
            else if (deadage[i] >= 16 && deadage[i] <=25) 
            {
                    age16to25 = age16to25 +1;
            }
            else if (deadage[i] >= 26 && deadage[i] <=40) 
            {
                    age26to40 = age26to40 +1;
            }
            else if (deadage[i] >= 41 && deadage[i] <=65) {
                age41to65 = age41to65 +1;
            else 
            {
                agemorethan65 = agemorethan65 + 1; 
            }
        }
        fatality0to15 = (age0to15/ dead) * 100; 
        fatality16to25 = (age16to25/ dead) * 100;
        fatality26to40 = (age26to40/ dead) * 100;
        fatality41to65 = (age41to65/ dead) * 100;
        fatalitymorethan65 = (agemorethan65/ dead) * 100; 
}
