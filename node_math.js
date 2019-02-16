let _MATH = ( function () {
let pi = 3.1415926535;
let e = 2.7182818284;
let MATH_ERROR = -1.23456789;0
function pow( x, n)
{
    if(n == 0)
    {
         return 1;
    }
     if(x == 0 && n != 0)
    {
         return 0;
    }
    return x * pow(x, n-1);
}

function negpow( x, n)
{
    //turn n to positive
    n = ( n >= 0 ) ? n : n*-1;
    denominator = pow( x, n);
    return ( denominator != 0 ) ? 1 / denominator : MATH_ERROR;
}

function zpow( x, n )
{
   if( n >= 0)
   {
       return pow( x, n );
   }
   if( n < 0 )
   {
       return negpow( x, n );
   }
   return MATH_ERROR;
}

return {
zpow,
pow,
negpow
}
