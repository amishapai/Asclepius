public class rfclassification {
    public static void main(String[] args) {
        int x, y; // inputted loation
        int age, rf; // inputted age and rf of individual
        String risk;
        switch (age) {
            case 0 - 15:
                if (rf >= 0 && rf <= 3) {
                    risk = "low";
                } else if (rf >= 4 && rf <= 7) {
                    risk = "medium";
                } else {
                    risk = "high";
                }
                break;
            case 16 - 25:
                if (rf >= 0 && rf <= 3) {
                    risk = "low";
                } else if (rf >= 4 && rf <= 7) {
                    risk = "medium";
                } else {
                    risk = "high";
                }
                break;
            case 26 - 40:
                if (rf >= 0 && rf <= 3) {
                    risk = "low";
                } else if (rf >= 4 && rf <= 7) {
                    risk = "medium";
                } else {
                    risk = "high";
                }
                break;
            case 41 - 65:
                if (rf >= 0 && rf <= 3) {
                    risk = "low";
                } else if (rf >= 4 && rf <= 7) {
                    risk = "medium";
                } else {
                    risk = "high";
                }
                break;
            case 65 - 90:
                if (rf >= 0 && rf <= 3) {
                    risk = "low";
                } else if (rf >= 4 && rf <= 7) {
                    risk = "medium";
                } else {
                    risk = "high";
                }
                break;
            default:
                break;
        }

    }
}
