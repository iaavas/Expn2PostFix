let MAX=100;function validate(){let e=document.getElementById("expn").value;return!!/^[A-Za-z0-9^/*+()-]+$/.test(e)}function precedence(e){return"("==e||")"==e?0:"+"==e||"-"==e?1:"/"==e||"*"==e?2:"^"==e?3:-1}const isAlphaNumeric=e=>/^[a-z0-9]+$/gi.test(e);class Stack{constructor(){this.top=-1,this.stck=[]}push(e){this.top==MAX-1?console.log("Stack Overflow"):(this.top+=1,this.stck[this.top]=e)}pop(){if(-1==this.top)return"1";{let e=this.stck[this.top];return this.top-=1,e}}giveTop(){return -1==this.top?"#":this.stck[this.top]}isEmpty(){return -1==this.top}}const postfix=e=>{let t=new Stack,p="";for(let i=0;i<e.length;i++)if(isAlphaNumeric(e[i]))p+=e[i];else if("("==e[i])t.push(e[i]);else if(")"==e[i]){for(;"("!=t.giveTop();)p+=t.giveTop(),t.pop();t.pop()}else if(precedence(e[i])>precedence(t.giveTop()))t.push(e[i]);else if(precedence(e[i])==precedence(t.giveTop()))p+=t.giveTop(),t.pop(),t.push(e[i]);else if(precedence(e[i])<precedence(t.giveTop())){for(;precedence(t.giveTop())>=precedence(e[i]);)p+=t.giveTop(),t.pop();t.push(e[i])}for(;!t.isEmpty();)p+=t.giveTop(),t.pop();document.getElementById("ans").innerText=p};document.getElementById("convert").addEventListener("click",()=>{let e=document.getElementById("expn").value;validate()?postfix(e):document.getElementById("ans").innerText="Invalid Expression!!!"});
