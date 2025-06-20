package SinglePattern;

public class Logger {
    private static Logger loggerInstance;

    private Logger() {
        // Private constructor to prevent instantiation
    }

    public static Logger getLogger() {
        if (loggerInstance == null) {
            loggerInstance = new Logger();
        }
        return loggerInstance;
    }

    public void print(String message) {
        System.out.println(message);
    }
}