function sum(s){return eval(s.join('+'));}
function abc(){
var s1=document.getElementById("a").value;
var s2=document.getElementById("b").value;
var s3=document.getElementById("c").value;
var x=s1.split(",");
var y=s2.split(",");
var X=s3.split(",");
if(x.length==y.length){
    for(i=0;i<x.length;i++){
        x[i]=parseInt(x[i]);
        y[i]=parseInt(y[i]);
    }
    xavg=sum(x)/x.length;
    yavg=sum(y)/y.length;
    if(isNaN(xavg) || isNaN(yavg)){
        window.localStorage.setItem("err","*Please Enter Numeric Value Only.")}
    else{
        var x2=[],y2=[],x3=[],y3=[],xy=[];
        for(i=0;i<x.length;i++){
            x2.push(x[i]-xavg);
            y2.push(y[i]-yavg);
            x3.push(x2[i]**2);
            y3.push(y2[i]**2);
            xy.push(x2[i]*y2[i]);
        }
        var sx3=sum(x3),sy3=sum(y3),sxy=sum(xy);
        var m=sxy/sx3;
        var c=yavg-m*xavg;
        
        var yy=[],y4=[],Y=[];
        for(i=0;i<x.length;i++){
            yy.push(m*x[i]+c);
            y4.push((yy[i]-yavg)**2);
        }
        var sy4=sum(y4);
        var R=sy4/sy3;
        var mse=Math.sqrt(sy4/(x.length-2));
        
        for(i=0;i<X.length;i++){
            Y[i]=m*X[i]+c;
            Y[i]=Y[i].toFixed(2);
        }
        
        window.localStorage.setItem("x",x);
        window.localStorage.setItem("y",y);
        window.localStorage.setItem("e",X);
        window.localStorage.setItem("xmean",xavg.toFixed(2));
        window.localStorage.setItem("ymean",yavg.toFixed(2));
        window.localStorage.setItem("eq","y="+m.toFixed(2)+"x+"+c.toFixed(2));
        window.localStorage.setItem("m",m.toFixed(2));
        window.localStorage.setItem("i",c.toFixed(2));
        window.localStorage.setItem("r",R.toFixed(2));
        window.localStorage.setItem("mse",mse.toFixed(3));
        window.localStorage.setItem("Y",Y.toString());
    }
}else{window.localStorage.setItem("err","*The no. of values of x should be equal to the no. of values of y.");}

}