package SinglePattern;
public class LoggerTest {
    public static void main(String[] args) {
        Logger log1=Logger.getLogger();
        Logger log2=Logger.getLogger();
        
        log1.print("Hello!");
        log2.print("Hi again!");
        
        if(log1==log2) {
            System.out.println("It's the same logger!");
        } else {
            System.out.println("Different loggers!");
        }
    }
}
