

public class Main {

  static String myMethod(String s) {
    return String.format("%s !",s);
  }

  public static void main(String[] args) {
    String[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
    System.out.println(myMethod(cars[0]));
    MyClass myObj = new MyClass();
    System.out.println(myObj.x);
  }
}