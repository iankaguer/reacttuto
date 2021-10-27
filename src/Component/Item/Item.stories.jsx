import Item from "./Item";

export default {
    title : "Component/Item",
    component : Item
}

export const Normal = () =>  <Item/>

export const Priority_Low = () =>  Item.bind({});
Priority_Low.args = {backgroundColor : "#cffced"};

export const Priority_Medium = () =>  Item.bind({});
Priority_Medium.args = {backgroundColor : "#b6ff93"};

export const Priority_High = () =>  Item.bind({});
Priority_High.args = {backgroundColor : "#fdacac"};