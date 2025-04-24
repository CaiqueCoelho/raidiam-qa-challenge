import io.restassured.RestAssured;
import io.restassured.response.Response;

public class DemoBlazeTest {
  public static void main(String[] args) {
    Response response = RestAssured.given()
      .header("Content-Type", "application/json")
      .body("{ \"username\": \"user123\", \"password\": \"pass123\" }")
      .post("https://api.demoblaze.com/login");

    System.out.println(response.getStatusCode());
  }
}