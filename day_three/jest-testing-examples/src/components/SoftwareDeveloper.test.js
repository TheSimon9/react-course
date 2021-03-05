import React from "react";
import {render} from '@testing-library/react'
import SoftwareDeveloper from "./SoftwareDeveloper";

describe("SoftwareDeveloper component", function () {
  test("should render with all the props", function () {
    const {getByText} = render(<SoftwareDeveloper name={"Christian"}
                                                  surname={"De Simone"}
                                                  role={"Software Engineer"}/>
    );

    expect(getByText("Christian")).toBeTruthy();
    expect(getByText("De Simone")).toBeTruthy();
    expect(getByText("Software Engineer")).toBeTruthy();
  });

  /*
  * Fix this test during the course.
  */
  test("should render empty if no props given", function () {
    const {queryByTestId} = render(<SoftwareDeveloper/>);

    expect(queryByTestId("name")).toBeFalsy();
    expect(queryByTestId("surname")).toBeFalsy();
    expect(queryByTestId("role")).toBeFalsy();
  });

  test("should render without button if onClick action empty", function () {
    const {queryByTestId} = render(<SoftwareDeveloper name={"Christian"}
                                                      surname={"De Simone"}
                                                      role={"Software Engineer"}/>);

    expect(queryByTestId("contact-me")).toBeFalsy();
  });

  test("should render action button if onClick has been given", function () {
    const onClickAction = () => {};
    const {queryByTestId} = render(<SoftwareDeveloper name={"Christian"}
                                                      surname={"De Simone"}
                                                      role={"Software Engineer"}
                                                      onClick={onClickAction}/>);

    expect(queryByTestId("contact-me")).toBeTruthy();
  });

  test("should call the given onClick action if button has been clicked", function () {

    const fakeOnClickAction = jest.fn();

    const {queryByTestId} = render(<SoftwareDeveloper name={"Christian"}
                                                      surname={"De Simone"}
                                                      role={"Software Engineer"}
                                                      onClick={fakeOnClickAction}/>);

    const contactMeButton = queryByTestId("contact-me");

    contactMeButton.click(); //Comment me and check if this test still pass

    expect(contactMeButton).toBeTruthy();
    expect(fakeOnClickAction).toHaveBeenCalled();
  });
})
