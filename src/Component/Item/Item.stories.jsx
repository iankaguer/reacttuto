import Item from "./Item";

export default {
    title : "Component/Item",
    component : Item
}

export const Normal = () =>  <Item/>
//export const Priority = () =>  Item.bind({});


/*export const Priority_Low = () =>  Item.bind({});
Priority_Low.args = {variant: 'Low',control:{background : "#cffced"}};

export const Priority_Medium = () =>  Item.bind({});
Priority_Medium.args = {background : "#b6ff93"};

export const Priority_High = () =>  Item.bind({});
Priority_High.args = {background : "#fdacac"};*/