interface BillInfo {
  billing: number;
  tai: 'default' | 'shrimp' | null;
  cafeTime: 'default' | 'run' | null;
  cafeCoffee: 'default' | 'mint' | 'cola' | 'shotPlus' | null;
  pizza: 'default' | 'run' | null;
}

interface Petbook {
  성연: BillInfo;
  승연: BillInfo;
  가영: BillInfo;
  선아: BillInfo;
  명규: BillInfo;
  경덕: BillInfo;
  효진: BillInfo;
  은혜: BillInfo;
  솔: BillInfo;
}

interface Ssafy {
  준형님: BillInfo;
  종혁님: BillInfo;
  대구님: BillInfo;
}

interface Goorm {
  상혁: BillInfo;
  민규: BillInfo;
}

interface People extends Petbook, Ssafy, Goorm {}

const peopleInfo: People = {
  성연: {
    billing: 0,
    tai: 'shrimp',
    cafeTime: 'default',
    cafeCoffee: 'default',
    pizza: 'default',
  },
  승연: {
    billing: 0,
    tai: 'default',
    cafeTime: 'run',
    cafeCoffee: 'default',
    pizza: null,
  },
  가영: {
    billing: 0,
    tai: 'default',
    cafeTime: 'default',
    cafeCoffee: 'default',
    pizza: 'run',
  },
  선아: {
    billing: 0,
    tai: 'default',
    cafeTime: 'default',
    cafeCoffee: 'default',
    pizza: 'default',
  },
  명규: {
    billing: 0,
    tai: 'default',
    cafeTime: 'default',
    cafeCoffee: 'default',
    pizza: 'default',
  },
  경덕: {
    billing: 0,
    tai: 'default',
    cafeTime: 'default',
    cafeCoffee: 'mint',
    pizza: 'default',
  },
  효진: {
    billing: 0,
    tai: 'default',
    cafeTime: 'default',
    cafeCoffee: 'cola',
    pizza: 'default',
  },
  은혜: {
    billing: 0,
    tai: 'default',
    cafeTime: null,
    cafeCoffee: null,
    pizza: null,
  },
  솔: {
    billing: 0,
    tai: 'shrimp',
    cafeTime: 'default',
    cafeCoffee: 'cola',
    pizza: null,
  },
  준형님: {
    billing: 0,
    tai: null,
    cafeTime: 'default',
    cafeCoffee: 'default',
    pizza: 'default',
  },
  종혁님: {
    billing: 0,
    tai: null,
    cafeTime: 'default',
    cafeCoffee: 'default',
    pizza: 'default',
  },
  대구님: {
    billing: 0,
    tai: null,
    cafeTime: 'default',
    cafeCoffee: 'default',
    pizza: null,
  },
  상혁: {
    billing: 0,
    tai: null,
    cafeTime: 'default',
    cafeCoffee: 'shotPlus',
    pizza: 'default',
  },
  민규: {
    billing: 0,
    tai: null,
    cafeTime: 'default',
    cafeCoffee: 'default',
    pizza: 'default',
  },
};

// 인덱스는, bill 의 인덱스를 가리킨다
// tai 가 새우면 1번째 인덱스, 아니면 0
// cafeTime 이 run 이면 1번째 인덱스, 아니면 0
// cafeCoffee 가 mint 면 1번째 인덱스, cola 면 2번째 인덱스, shotPlus 면 3번째 인덱스, 아니면 0
// null 은 덧셈에서 제외
// bill 에 들어있는 값을 받아서, 각 사람의 billing 에 더해준다

const calc = (
  people: People,
  taiBill: number[],
  cafeCoffeeBill: number[],
  cafeTimeBill: number[],
  pizzaBill: number[]
) => {
  const peopleList = Object.keys(people);
  const peopleCount = peopleList.length;

  for (let i = 0; i < peopleCount; i++) {
    const person = people[peopleList[i]];
    const { tai, cafeCoffee, cafeTime } = person;
    const taiIndex = tai === 'shrimp' ? 1 : 0;
    const cafeTimeIndex = cafeTime === 'run' ? 1 : 0;
    const cafeCoffeeIndex =
      cafeCoffee === 'mint'
        ? 1
        : cafeCoffee === 'cola'
        ? 2
        : cafeCoffee === 'shotPlus'
        ? 3
        : 0;
    const pizzaIndex = person.pizza === 'run' ? 1 : 0;

    const taiBilling = tai !== null ? taiBill[taiIndex] : 0;

    const cafeBilling = cafeTime !== null ? cafeTimeBill[cafeTimeIndex] : 0;

    const cafeCoffeeBilling =
      cafeCoffee !== null ? cafeCoffeeBill[cafeCoffeeIndex] : 0;

    const pizzaBilling = person.pizza !== null ? pizzaBill[pizzaIndex] : 0;

    person.billing =
      taiBilling + cafeBilling + cafeCoffeeBilling + pizzaBilling;
  }

  return people;
};

const taiBill = [11000, 12000];
const cafeCoffeeBill = [4500, 3500, 3700, 5000];
const cafeTimeBill = [7000, 3000];
const pizzaBill = [22865, 11610];

console.log(calc(peopleInfo, taiBill, cafeCoffeeBill, cafeTimeBill, pizzaBill));

console.log('1');

const func = () => {
  console.log('2');
  return '3';
};

(async () => {
  console.log('4');
  setTimeout(() => {
    console.log('5');
  }, 0);
  const res = await func();
  console.log(res);
})();

console.log('6');
