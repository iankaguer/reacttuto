import { render } from '@testing-library/react';
import Button from "./Button";

test("test Button", ()=>{
    const rendered = render(<Button/>);
    expect(rendered).toBeInTheDocument();
})