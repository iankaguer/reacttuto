import { render } from '@testing-library/react';
import Input from "./Input";

test("test Input", ()=>{
    const rendered = render(<Input/>);
    expect(rendered).toBeInTheDocument();
})
