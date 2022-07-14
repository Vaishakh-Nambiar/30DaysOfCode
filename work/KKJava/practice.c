// // #include <stdio.h>
// // #include <stdlib.h>
// // #include <string.h>
// // #include <unistd.h>
// // #include <sys/types.h>
// // #include <sys/wait.h>
// // #include <sys/ipc.h>

// // #define MAX 50
// // #define MAX_buf 6000

// // char s[MAX_buf], d[MAX_buf];
// // char source[MAX], dest[MAX];

// // int msgid, length;
// // void send(void);
// // void receive(void);

// // main()
// // {
// //     printf("enter source file \n");
// //     scanf("%s", source);

// //     printf("enter destination file \n");
// //     scanf("%s", dest);

// //     msgid = msgget(IPC_PRIVATE, IPC_CREAT | 0666);
// //     // getting the msgid

// //     send();
// //     receive();

// //     msgctl(msgid, IPC_RMID, NULL);
// //     // msgctl - controls the message
// //     // IPC_RMID - to delete the msgid
// // }

// // void send(void)
// // {
// //     FILE *f;
// //     char c;
// //     int i;

// //     if (f = fopen(source, "r") == NULL)
// //     // opening the file and checking if it is 'readable'
// //     {
// //         printf("no file present \n");
// //         msgctl(msgid, IPC_RMID, NULL);
// //         exit(0);
// //     }
// //     else
// //     {
// //         i = 0;
// //         while ((c = getc(f)) != EOF)
// //         // getting char from source file
// //         {
// //             s[i] = c;
// //             i++;

// //             if (i + 1 > MAX_buf)
// //             {
// //                 printf("too big file \n");
// //                 msgctl(msgid, IPC_RMID, NULL);
// //                 getchar();
// //                 exit(0);
// //             }
// //         }

// //         s[i] = '\0';
// //         length = strlen(s);

// //         msgsnd(msgid, s, length, 0);
// //         // msgsnd - send msg 's' to msgid of size 'length'

// //         fclose(f);
// //         // closing the file
// //     }
// // }

// // void receive(void)
// // {
// //     FILE *f;
// //     int c;
// //     char choice;

// //     if (f = fopen(dest, "r") != NULL)
// //     {
// //         printf("file already there! \n");
// //         getchar();

// //         printf("Continue? : y/n \n");
// //         choice = getc(stdin);

// //         if (choice != y)
// //         {
// //             fclose(f);
// //             msgctl(msgid, IPC_RMID, NULL);
// //             exit(1);
// //         }
// //         else
// //             fclose(f);
// //     }

// //     if ((f = fopen(dest, "w")) == NULL)
// //         printf("the file not found \n");
// //     else
// //     {
// //         msgrcv(msgid, d, length, 0, 0);
// //         fprintf(f, "%s", d);
// //         length = strlen(d);
// //         printf("total no. of characters received = %d\n", length);
// //         fclose(f);
// //     }
// // }

// #include <stdio.h>
// #include <unistd.h>
// #include <stdlib.h>
// #include <sys/ipc.h>
// #include <sys/shm.h>
// #include <sys/types.h>
// void decen(int);
// void ascen(int);
// int main()
// {
//     int pid1, pid2, n;
//     key_t k = 456;
//     int shmid;
//     int i;
//     int *shmptr, *s;
//     shmid = shmget(k, 30 * sizeof(i), IPC_CREAT | 0666);
//     shmptr = shmat(shmid, NULL, 0);
//     s = shmptr;
//     printf("enter n");
//     scanf("%d", &n);
//     int arr[n];
//     for (i = 0; i < n; i++)
//     {
//         scanf("%d", &arr[i]);
//     }
//     for (i = 0; i < n; i++)
//     {
//         *s = arr[i];
//         s++;
//     }
//     *(shmptr + 3 * n) = 0;
//     // *(shmptr + 3 * n + 1) = 0;
//     pid1 = fork();
//     if (pid1 != 0)
//     {
//         int pid2 = fork();
//         if (pid2 != 0)
//         {
//             // while (*(shmptr + 3 * n + 1) == 0 && *(shmptr + 3 * n) == 0)
//             while (*(shmptr + 3 * n + 1) == 0)
//                 sleep(1);
//             s = shmptr + n;
//             for (i = 0; i < n; i++)
//             {
//                 printf("%d", *s);
//                 s++;
//             }
//             s = shmptr + 2 * n;
//             for (i = 0; i < n; i++)
//             {
//                 printf("%d", *s);
//                 s++;
//             }
//             shmdt(shmptr);
//             shmctl(shmid, IPC_RMID, NULL);
//         }
//         else
//         {
//             ascen(n);
//         }
//     }
//     else
//     {
//         decen(n);
//     }
// }
// void ascen(int n)
// {
//     key_t k = 456;
//     int shmid;
//     int i, a[n];
//     int *shmptr, *s;
//     shmid = shmget(k, 30 * sizeof(i), 0666);
//     shmptr = shmat(shmid, NULL, 0);
//     s = shmptr;
//     for (i = 0; i < n; i++)
//     {
//         a[i] = *s;
//         s++;
//     }
//     int j, t;
//     for (i = 0; i < n - 1; i++)
//     {
//         for (j = i + 1; j < n; j++)
//         {
//             if (a[i] > a[j])
//             {
//                 t = a[i];
//                 a[i] = a[j];
//                 a[j] = t;
//             }
//         }
//     }
//     s = shmptr + n;
//     for (i = 0; i < n; i++)
//     {
//         // printf("%d",a[i]);
//         *s = a[i];
//         s++;
//     }
//     // *(shmptr + 3 * n) = 1;
// }
// void decen(int n)
// {
//     key_t k = 456;
//     int shmid;
//     int i, a[n];
//     int *shmptr, *s;
//     shmid = shmget(k, 30 * sizeof(i), 0666);
//     shmptr = shmat(shmid, NULL, 0);
//     s = shmptr;
//     for (i = 0; i < n; i++)
//     {
//         a[i] = *s;
//         s++;
//     }
//     int j, t;
//     for (i = 0; i < n - 1; i++)
//     {
//         for (j = i + 1; j < n; j++)
//         {
//             if (a[i] < a[j])
//             {
//                 t = a[i];
//                 a[i] = a[j];
//                 a[j] = t;
//             }
//         }
//     }
//     s = shmptr + 2 * n;
//     for (i = 0; i < n; i++)
//     {
//         *s = a[i];
//         s++;
//     }
//     *(shmptr + 3 * n + 1) = 1;
// }
