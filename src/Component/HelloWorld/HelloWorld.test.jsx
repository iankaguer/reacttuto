import HelloWorld from "./HelloWorld";
import {render} from "@testing-library/react";

test("print hello world to user", ()=>{
    const rendered = render(<HelloWorld/>);
    expect(rendered).toBeInTheDocument();
})


