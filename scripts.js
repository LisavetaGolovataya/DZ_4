//1
let arr = [1, 2, 3, 4, 5];
for (i = 0; i < arr.length; i++) {
   document.write(arr[i]);
}

//2
let arr1 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
arr1.sort((a, b) => a - b);
for (i < -3; i > -10; i--){
    console.log(arr1[i]);
}

//3
let arr3 = [];
let result = 0;
for (let i = 23; i <= 57; i++) {
    arr3.push(i);
    result += i;
 }
 console.log(arr3);
 console.log(result);

//5
let q = ['Пн','Вт', 'Ср', 'Чт', 'Пт', 'Cб', 'Вс'];
for (let i = 7; i <= q.length;  i++) {
    console.log(q[i]);
    document.write(q[0]+'</br>' + q[1] +'</br>' + q[2]+'</br>' +q[3] +'</br>'+ q[4] +'</br>'+'<b>' + q[5]  +'</br>'+ '<b>'+  q[6]+'</br>');
}

//6
let arr5 = [1, 8, 10, 12, 16];
arr5.push('15');
for (let i = 0; i < arr5.length; i++) {
    document.write(arr5[arr5.length-1]);
}