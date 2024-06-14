package demo.backend.user;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class User {

    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private final String name;
    private final String email;

    public User(String name, String email){
        this.name = name;
        this.email = email;
    }

    public User(){
        this.name = "Default";
        this.email = "default@domain.com";
    }

    public String getName(){
        return name;
    }
    
    public String getEmail(){
        return email;
    }

    public long getId(){
        return id;
    }

    @Override
    public String toString(){
        return String.format("User{id = %d, name = %s, email = %s",id,name,email);
    }
    
}
