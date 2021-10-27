import CheckBox from "./CheckBox";
import { render } from '@testing-library/react';


test("test Checkbox", ()=>{
    const rendered = render(<CheckBox/>);
    expect(rendered).toBeInTheDocument();
})