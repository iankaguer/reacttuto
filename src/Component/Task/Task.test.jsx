import { render } from '@testing-library/react';
import Task from "./Task";

test("test Task", ()=>{
    const rendered = render(<Task/>);
    expect(rendered).toBeInTheDocument();
})