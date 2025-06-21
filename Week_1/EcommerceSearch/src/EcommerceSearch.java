class Product {
    int productId;
    String productName;
    String category;

    Product(int id, String name, String cat) {
        productId = id;
        productName = name;
        category = cat;
    }

    public String toString() {
        return "Product ID: " + productId + ", Name: " + productName + ", Category: " + category;
    }
}

class EcommerceSearch {
    public static Product linearSearch(Product[] products, int searchId) {
        for (int i = 0; i < products.length; i++) {
            if (products[i].productId == searchId) {
                return products[i];
            }
        }
        return null;
    }

    public static Product binarySearch(Product[] sortedProducts, int searchId) {
        int left = 0;
        int right = sortedProducts.length - 1;

        while (left <= right) {
            int mid = (left + right) / 2;
            int midId = sortedProducts[mid].productId;

            if (midId == searchId) {
                return sortedProducts[mid];
            } else if (midId < searchId) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return null;
    }

    public static void main(String[] args) {
        Product[] products = {
            new Product(3, "TV", "Electronics"),
            new Product(1, "Mobile", "Electronics"),
            new Product(4, "Keyboard", "Electronics"),
            new Product(2, "mouse", "Electronics")
        };

        Product[] sortedProducts = {
            new Product(1, "Mobile", "Electronics"),
            new Product(2, "mouse", "Electronics"),
            new Product(3, "TV", "Electronics"),
            new Product(4, "Keyboard", "Electronics")
        };

        System.out.println("Trying Linear Search for Product ID 4:");
        Product found1 = linearSearch(products, 4);
        if (found1 != null) {
            System.out.println("Found: " + found1);
        } else {
            System.out.println("Product not found!");
        }

        System.out.println("\nTrying Binary Search for Product ID 4:");
        Product found2 = binarySearch(sortedProducts, 4);
        if (found2 != null) {
            System.out.println("Found: " + found2);
        } else {
            System.out.println("Product not found!");
        }
    }
}