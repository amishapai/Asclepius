import java.util.*;

public class RiskFactor {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int age, agerf, rf;
        boolean diabetes, Respiratory, AbnormalHeartRate;
        String checkdiabetes, checkrespiratory, checkabnormalheartrate;
        final int drf = 1;
        final int rrf = 3;
        final int abprf = 2;
        System.out.println("Type in your age");
        age = sc.nextInt();
        System.out.println("Type yes/no if stating if you have diabetes");
        checkrespiratory = sc.next();
        System.out.println("Type yes/no if stating if you have respiratory illness");
        checkdiabetes = sc.next();
        System.out.println("Type yes/no if stating if you have Abnormal heart pulse");
        checkabnormalheartrate = sc.next();

        if (checkdiabetes.equalsIgnoreCase("YES")) {
            diabetes = true;
        } else {
            diabetes = false;
        }

        if (checkrespiratory.equalsIgnoreCase("YES")) {
            Respiratory = true;
        } else {
            Respiratory = false;
        }

        if (checkabnormalheartrate.equalsIgnoreCase("YES")) {
            AbnormalHeartRate = true;
        } else {
            AbnormalHeartRate = false;
        }

        // calculating agerf
        if (age >= 0 && age <= 20) {
            agerf = 0;
        } else if (age >= 20 && age <= 40) {
            agerf = 1;
        } else if (age >= 40 && age <= 60) {
            agerf = 2;
        } else if (age >= 60 && age <= 80) {
            agerf = 3;
        } else {
            agerf = 4;
        }

        rf = agerf;
        if (Respiratory == true) {
            rf = rf + rrf;
        }
        if (diabetes == true) {
            rf = rf + drf;
        }
        if (AbnormalHeartRate == true) {
            rf = rf + abprf;
        }

        System.out.println("Risk Factor is: " + rf);
        sc.close();
    }
}
