// Даден е масив, който съдържа информация за български владетели, и периода на тяхното управление.
// Всеки елемент на масива е масив със следните данни:
//  [<име>, <начална година на управление>, <крайна година на управление>]

var rulers = [
    ["асПАРуХ",681, 700 ],
    ["тЕРвеЛ", 700,718 ],
    ["СеВаР", 738,753],
    ["телЕРИГ", 766,777],
    ["каРДАм", 777, 803],
    ["крум", 803,814 ],
    ["ОмурТАг",814,831],
  ];
  console.log(5)

  // ЗАДАЧА: Изпишете в конзолата имената на онези български владетели, които са управлявали повече от 15 години.
  // Разбира се, искаме да видим имената изписани според конвенциите за имена на съществителни-собствени: за целта може да използвате върху всяко име функцията (), която връща подадения й низ в скобите конвертиран до CamelCase
  // Например:
    //console.log( toCamelCaseCyr('асПАРуХ') ); // Аспарух
  
  // >>>>>>>>>>НАЧАЛО НА ВАШИЯ КОД >>>>>>>>>>

  for (let i=0; i<rulers.length; i++){
    const rulersName = toCamelCase(rulers[i][0]);

   
   if ((rulers[i][2]-rulers[i][1])>15) {
   console.log(rulersName);
}
  }

  function toCamelCase(Name){
    return Name.charAt(0).toUpperCase() + Name.slice(1).toLowerCase();
  }