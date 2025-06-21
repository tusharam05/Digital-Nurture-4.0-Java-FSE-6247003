
class FinancialForecast {
    public static double calcFutureMoney(double money, double rate, int yrs) {
        if(yrs == 0) {
            return money;
        }
        return calcFutureMoney(money, rate, yrs - 1) * (1 + rate);
    }
    
    public static void main(String[] args) {
        double myMoney = 1000;
        double growth = 0.05; 
        int years = 10;
        
        double result = calcFutureMoney(myMoney,growth,years);
        System.out.println("Money after " + years + " years is $" + String.format("%.2f", result));
    }
}
