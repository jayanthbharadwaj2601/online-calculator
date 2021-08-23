function n1(a)
{
    s=String(a);
    g=document.getElementById("ab").value
    document.getElementById("ab").value=g+s;
}
r=''
function compute()
{
    g=document.getElementById("ab").value
    h=[]
    s1=''
    for(i=0;i<g.length;i++)
    {
        if((g[i]>='0' && g[i]<='9')||g[i]=='.')
        {
            s1+=g[i];
        }
        else
        {   if(s1.length>0)
            {   
                h.push(s1)
                s1=''
            }
            h.push(g[i])
        }
    }
    if (s1!='')
    h.push(s1);
    stack=[];
    postfix=[];
    precedence={'+':1,'-':1,'*':2,'/':2}
    console.log(h)
    for(i=0;i<h.length;i++)
    {
        if(h[i]!='+' && h[i]!='-' && h[i]!='*' && h[i]!='/' && h[i]!='(' && h[i]!=')')
        {
            h[i]=parseFloat(h[i]);
        }
    }
    console.log(h);
    for(i=0;i<h.length;i++)
    {
        if(h[i]!='+' && h[i]!='-' && h[i]!='*' && h[i]!='/' && h[i]!='(' && h[i]!=')')
        {
            postfix.push(h[i]);
        }
        else if(h[i]=='(')
        {
            stack.push(h[i])
        }
        else if(h[i]==')')
        {
            while(stack.length>0 && stack[(stack.length)-1]!='(')
            {
                x=stack.pop();
                postfix.push(x);
            }
            if(stack.length>0 && stack[(stack.length)-1]=='(')
            stack.pop();
        }
        else
        {
            while(stack.length>0 && stack[(stack.length)-1]!='(' && precedence[h[i]]<=precedence[stack[(stack.length)-1]])
            {
                p=stack.pop();
                postfix.push(p);
            }
            stack.push(h[i]);
        }
    }
    for(i=(stack.length)-1;i>=0;i--)
    {
        postfix.push(stack[i]);
    }
    console.log(postfix)
    result=[];
    for(i=0;i<postfix.length;i++)
    {
        if(typeof postfix[i]=='number')
        {
            result.push(postfix[i]);
        }
        else
        {
            x1=result.pop();
            x2=result.pop();
            if(postfix[i]=='+')
            result.push(x2+x1);
            else if(postfix[i]=='-')
            result.push(x2-x1)
            else if(postfix[i]=='*')
            result.push(x2*x1)
            else if(postfix[i]=='/')
            result.push(x2/x1)
        }
    }
    x=result[0];
    document.getElementById("result").innerHTML="result:"+" "+String(x);
}
function del()
{
    g=document.getElementById("ab").value;
    s=''
    for(i=0;i<(g.length)-1;i++)
    {
        s+=g[i];
    }
    document.getElementById("ab").value=s;
}