function callback()
{
    console.log("hello world")
}
function add(n1,n2,func)
    {
        console.log(n1+n2)
        func()
    }
    let a=1;
    let b=2;
    add(a,b,callback)