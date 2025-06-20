package FactoryPattern;

public interface Document {
    void open();
}
public abstract class DocumentFactory {
    public abstract Document createDocument();
}

public class ExcelDocument implements Document {
    public void open() {
        System.out.println("Opening Excel document");
    }
}

public class ExcelDocumentFactory extends DocumentFactory {
    public Document createDocument(){
        return new ExcelDocument();
    }
}

public class PdfDocument implements Document {
    public void open() {
        System.out.println("Opening PDF document");
    }
}


public class PdfDocumentFactory extends DocumentFactory {
    public Document createDocument(){
        return new PdfDocument();
    }
}


public class WordDocument implements Document {
    public void open() {
        System.out.println("Opening Word document");
    }
}

public class WordDocumentFactory extends DocumentFactory {
    public Document createDocument(){
        return new WordDocument();
    }
}
public class DocumentTest_1 {
    public DocumentTest_1() {
    }
 
    public static void main(String[] var0) {
       WordDocumentFactory var1 = new WordDocumentFactory();
       Document var2 = var1.createDocument();
       var2.open();
       PdfDocumentFactory var3 = new PdfDocumentFactory();
       Document var4 = var3.createDocument();
       var4.open();
       ExcelDocumentFactory var5 = new ExcelDocumentFactory();
       Document var6 = var5.createDocument();
       var6.open();
    }
 }