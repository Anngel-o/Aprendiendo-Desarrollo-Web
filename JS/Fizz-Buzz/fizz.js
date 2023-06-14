var numeros = 100;

for (var i = 1; i <= 100; i++)
{
  if (i % 3 == 0)
  {
    document.write("Fizz");//impar
  }

  if (i % 5 == 0)
  {
    document.write("Buzz");//par
  }

  if (i % 3 != 0 && i % 5 != 0)
  {
      document.write(i);
  }
  document.write("<br />");

}
