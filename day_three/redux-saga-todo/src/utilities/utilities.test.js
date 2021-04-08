import {hireSoftwareEngineer} from "./utilities";

describe("Hire a software developer method", function() {
  test("It should return true if role is Software Engineer",function(){
    const shouldHireSoftwareEngineer = hireSoftwareEngineer("Software Engineer");
    expect(shouldHireSoftwareEngineer).toBeTruthy();
  });

  test("It should return false if role is empty",function(){
    const shouldHireSoftwareEngineer = hireSoftwareEngineer("");
    expect(shouldHireSoftwareEngineer).toBeFalsy();
  });

  test("It should return false if role is wrong",function(){
    const shouldHireSoftwareEngineer = hireSoftwareEngineer("Wrong role");
    expect(shouldHireSoftwareEngineer).toBeFalsy();
  });

  test("It should return false if role is a number",function(){
    const shouldHireSoftwareEngineer = hireSoftwareEngineer(1);
    expect(shouldHireSoftwareEngineer).toBeFalsy();
  });

  test("It should return false if no role has been given",function(){
    const shouldHireSoftwareEngineer = hireSoftwareEngineer();
    expect(shouldHireSoftwareEngineer).toBeFalsy();
  });
})