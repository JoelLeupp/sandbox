import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

class Person {
  String fname;
  int age;
  private int id;

  public int getId() {
    return id;
  }
  public void setId(int id) {
    this.id = id;
  }

  public Person(String fname, int age) {
    this.fname = fname;
    this.age = age;
  }
}

class Data {
  List<Person> personList;
  public Data() {
    this.personList = new ArrayList<>();
    this.personList.add(new Person("John", 25));
    this.personList.add(new Person("Steve", 30));
    this.personList.add(new Person("Anna", 20));
    this.personList.add(new Person("Chris", 37));
  }

  public List<Person> getPersonList() {
    return personList;
  }

  public List<String> getPersonNameListOlderThan(List<Person> inputList, int age) {
    return inputList.stream()
        .filter(p -> p.age > age)
        .map(p -> p.fname)
        .collect(Collectors.toList());
  }
}

public class Main {

  static String myMethodNew(String s) {
    return String.format("%s !", s);
  }

  public static void main(String[] args) {
    String[] cars = { "Volvo", "BMW", "Ford", "Mazda" };
    String res = myMethodNew(cars[0]);
    System.out.println(res);

    MyClass myObj = new MyClass();
    System.out.println(myObj.x);

    Data data = new Data();

    List<String> oldPersons = data.getPersonNameListOlderThan(data.getPersonList(), 25);

    System.out.println(oldPersons);

    LocalDate currentDate = LocalDate.now();
    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");
    String formattedDate = currentDate.format(formatter);
    System.out.println(formattedDate);
  }
}