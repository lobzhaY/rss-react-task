export type earringsType = {
  id: number;
  imageUrl: string;
  name: string;
  price: string;
  'price-sale': string;
  availability: string[];
};

const earrings: earringsType[] = [
  {
    id: 0,
    imageUrl: 'https://slavia.by/upload/iblock/4b7/4b770ffdcc94c249043859d14e82f0a0.jpg',
    name: 'СЕРЕБРЯНЫЕ СЕРЬГИ С ЯНТАРЁМ',
    price: '325.08',
    'price-sale': '722.40',
    availability: ['Мозырь, Притыцкого С.О., 19А'],
  },
  {
    id: 1,
    imageUrl:
      'https://slavia.by/upload/resize_cache/iblock/442/700_700_2/442d03e111ce2db1e3b599599bc7fe40.jpg',
    name: 'СЕРЕБРЯНЫЕ СЕРЬГИ С БРИЛЛИАНТОМ',
    price: '168.03',
    'price-sale': '186.70',
    availability: ['Брест, Советская, 91', 'Пинск, Партизанская, 42', 'Гродно, Советская, 1'],
  },
  {
    id: 2,
    imageUrl:
      'https://slavia.by/upload/resize_cache/iblock/b95/700_700_2/b9537b56905952aab123d29b5299b36f.jpg',
    name: 'СЕРЕБРЯНЫЕ СЕРЬГИ C ПОДВЕСКОЙ С БРИЛЛИАНТОМ',
    price: '252.01',
    'price-sale': '280.01',
    availability: ['Микашевичи, Первомайская, 17А', 'Лельчицы, Ленина, 45Б'],
  },
  {
    id: 3,
    imageUrl: 'https://slavia.by/upload/iblock/252/2521a7880828cc2af5414ad0fa824b97.jpg',
    name: 'СЕРЕБРЯНЫЕ СЕРЬГИ С ЭМАЛЬЮ',
    price: '193.43',
    'price-sale': '227.77',
    availability: ['Минск, пр-т Держинского, 104', 'Гомель, пр-т Победы, 5'],
  },
  {
    id: 4,
    imageUrl: 'https://slavia.by/upload/iblock/252/2521a7880828cc2af5414ad0fa824b97.jpg',
    name: 'ЗОЛОТЫЕ СЕРЬГИ C ПОДВЕСКОЙ',
    price: '739.98',
    'price-sale': '822.20',
    availability: ['Брест, Советская, 91', 'Житковичи, Школьная, 3'],
  },
  {
    id: 5,
    imageUrl:
      'https://slavia.by/upload/resize_cache/iblock/a20/700_700_2/a205670ccd61bae1009cf21c78d519fb.jpg',
    name: 'СЕРЕБРЯНЫЕ СЕРЬГИ С ЭМАЛЬЮ',
    price: '87.75',
    'price-sale': '195.00',
    availability: ['Калинковичи, Фрунзе, 9'],
  },
  {
    id: 6,
    imageUrl:
      'https://slavia.by/upload/resize_cache/iblock/30e/700_700_2/30edd6978b456b615865af333a905e5b.jpg',
    name: 'СЕРЕБРЯНЫЕ СЕРЬГИ С ГОЛУБЫМ ТОПАЗОМ',
    price: '121.04',
    'price-sale': '134.91',
    availability: [
      'Гродно, Советская, 1',
      'Барановичи, б-р Юности, 95Б',
      'Полоцк, шюВильнюсское, 1, пом. 47 ',
    ],
  },
  {
    id: 7,
    imageUrl:
      'https://slavia.by/upload/resize_cache/iblock/000/700_700_2/000fe8a6eb74171580a5834b6d840c19.jpg',
    name: 'СЕРЕБРЯНЫЕ СЕРЬГИ С ГОЛУБЫМ ТОПАЗОМ',
    price: '171.51',
    'price-sale': '190.57',
    availability: ['Мозырь, б-р Юности, 59А'],
  },
  {
    id: 8,
    imageUrl:
      'https://slavia.by/upload/resize_cache/iblock/63f/700_700_2/63fc552d46ee8886a3b683faa1735a03.jpg',
    name: 'СЕРЕБРЯНЫЕ СЕРЬГИ С ЖЕМЧУГОМ',
    price: '170.16',
    'price-sale': '189.07',
    availability: [
      'Минск, Мстиславца, 11',
      'Лельчицы, Ленина, 45Б',
      'Гродно, пр-т Космонавтов, 81',
    ],
  },
  {
    id: 9,
    imageUrl:
      'https://slavia.by/upload/resize_cache/iblock/6b6/700_700_2/6b689b6622eee537f99bf7da4a74f0e6.jpg',
    name: 'СЕРЕБРЯНЫЕ СЕРЬГИ С АЛЕКСАНДРИТОМ',
    price: '178.79',
    'price-sale': '198.66',
    availability: ['Брест, Советская, 91', 'Ивацевичи, Советская, 1'],
  },
  {
    id: 10,
    imageUrl:
      'https://slavia.by/upload/resize_cache/iblock/651/700_700_2/65184cfd3802a8abda8673e45464dfe2.jpg',
    name: 'ЗОЛОТЫЕ СЕРЬГИ С 2 И БОЛЕЕ БРИЛЛИАНТАМИ',
    price: '2491.89',
    'price-sale': '2768.77',
    availability: ['Могилёв, Ленинская, 32'],
  },
  {
    id: 11,
    imageUrl: 'https://oro.by/image/cache/import_files/3752-210-zoloto/3752-210-500x500.jpg.webp',
    name: 'СЕРЬГИ ИЗ КОМБИНИРОВАННОГО ЗОЛОТА С БРИЛЛИАНТАМИ',
    price: '1753.86',
    'price-sale': '1948.73',
    availability: ['Могилёв, Ленинская, 32'],
  },
];

export default earrings;
