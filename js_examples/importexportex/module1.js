
const no=10;
function sayHello(n)
{
    return "Hi "+n;
}
export default function greet(firstname,lastname)
{
    return "Hello "+firstname + ' '+lastname;
}
export {no,sayHello} ;