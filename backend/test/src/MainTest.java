import org.junit.Test;
import static org.junit.Assert.*;

import java.util.Arrays;
import java.util.List;


public class MainTest {

    @Test
    public void testGetPersonNameListOlderThan() {
        Data data = new Data();
        List<Person> inputList = data.getPersonList();
        int age = 25;

        List<String> expectedNames = Arrays.asList("Steve", "Chris");
        List<String> actualNames = data.getPersonNameListOlderThan(inputList, age);

        assertEquals(expectedNames, actualNames);
    }
}