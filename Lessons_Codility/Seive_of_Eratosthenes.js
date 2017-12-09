// def sieve(n):  ///// python //////
//   sieve = [True] * (n + 1)
//   sieve[0] = sieve[1] = False
//   i=2
//   while (i * i <= n):
//     if (sieve[i]):
//       k=i * i
//   while (k <= n):
//     sieve[k] = False
//     k += i
//     i += 1
//   return sieve

////Python Factoring ////
// 1 def arrayF(n):
// 2 F = [0] * (n + 1)
// 3 i=2
// 4 while (i * i <= n):
// 5 if (F[i] == 0):
// 6 k=i * i
// 7 while (k <= n):
// 8 if (F[k] == 0):
// 9 F[k] = i;
// 10 k += i
// 11 i += 1