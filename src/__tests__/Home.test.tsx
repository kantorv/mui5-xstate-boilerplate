import React from "react";
import { render, fireEvent, waitFor , screen} from "@testing-library/react";

import {HomeMain, WidgetAMain, WidgetBMain} from '../widgets'

describe("Renders Home", () => {


  test("Renders text", async () => {
    render(<HomeMain />)
    const homeText = screen.getByText(/HomeMain/i);
    expect(homeText).toBeInTheDocument();
  });


  
});