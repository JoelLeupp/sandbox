import org.junit.Test;
import static org.junit.Assert.*;

public class MyClassTest {

    @Test
    public void testSum() {
        int result = MyClass.sum(2, 3);
        assertEquals(5, result);
    }
    
    @Test
    public void testX() {
        MyClass myObj = new MyClass();
        assertEquals(1, myObj.x);
    }
}