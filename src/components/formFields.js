import _ from 'lodash';

export const valuationFormFields = [
  {
    label: 'Osoite',
    name: 'address',
    type: 'text',
    hintText: 'esim. Mannerheimintie 1'
  },
  {
    label: 'Postinumero',
    name: 'postcode',
    type: 'text',
    hintText: 'esim. 00100'
  },
  {
    label: 'Asuinkerros',
    name: 'floorNumber',
    type: 'slider',
    value: { minValue: 1, maxValue: 9 }
  },
  {
    label: 'Kerroksia yhteensä',
    name: 'floorCount',
    type: 'slider',
    value: { minValue: 1, maxValue: 9 }
  },
  { label: 'Neliöt', name: 'size', type: 'text', hintText: 'esim. 45' },
  {
    label: 'Huoneiden määrä',
    name: 'roomCount',
    type: 'selectField',
    list: [
      { value: 1, label: 1 },
      { value: 2, label: 2 },
      { value: 3, label: 3 },
      { value: 4, label: 4 },
      { value: 5, label: '5+' }
    ]
  },
  {
    label: 'Rakennusvuosi',
    name: 'year',
    type: 'selectField',
    list: _.range(1800, 2019)
      .map(year => ({ value: year, label: year }))
      .reverse()
  },
  {
    label: 'Hoitovastike (€/kk)',
    name: 'cost',
    type: 'text',
    hintText: 'esim. 250'
  },
  {
    label: 'Tontin omistus',
    name: 'landOwnership',
    type: 'radioButton',
    buttons: [
      { value: 'yes', label: 'Oma' },
      { value: 'no', label: 'Vuokrattu' }
    ]
  },
  {
    label: 'Onko rapussa hissi',
    name: 'elevator',
    type: 'radioButton',
    buttons: [{ value: 'yes', label: 'Kyllä' }, { value: 'no', label: 'Ei' }]
  },
  {
    label: 'Onko asunnossa parveke',
    name: 'balcony',
    type: 'radioButton',
    buttons: [{ value: 'yes', label: 'Kyllä' }, { value: 'no', label: 'Ei' }]
  },
  {
    label: 'Onko yhtiöön tulossa putkiremontti seuraavan 10 vuoden kuluessa',
    name: 'pipeRenovation',
    type: 'radioButton',
    buttons: [{ value: 'yes', label: 'Kyllä' }, { value: 'no', label: 'Ei' }]
  },
  {
    label: 'Onko yhtiöön tulossa julkisivuremontti seuraavan 5 vuoden kuluessa',
    name: 'facadeRenovation',
    type: 'radioButton',
    buttons: [{ value: 'yes', label: 'Kyllä' }, { value: 'no', label: 'Ei' }]
  },
  {
    label: 'Huoneiston yleiskunto',
    name: 'condition',
    type: 'selectField',
    list: [
      { value: 5, label: 'Erinomainen' },
      { value: 4, label: 'Hyvä' },
      { value: 3, label: 'Tyydyttävä' },
      { value: 2, label: 'Huono' }
    ]
  }
];

export const contactFormFields = [
  // {
  //   label: 'Oliko hinta arvio mielestäsi?',
  //   name: 'priceFeedback',
  //   type: 'radioButton',
  //   buttons: [
  //     { value: 'priceIsHigh', label: 'Liian korkea' },
  //     { value: 'priceIsOk', label: 'Hyvä' },
  //     { value: 'priceIsLow', label: 'Liian alhainen' }
  //   ]
  // },
  {
    label: 'Nimi',
    name: 'name',
    type: 'text',
    hintText: 'esim. Essi Merkki'
  },
  {
    label: 'Osoite',
    name: 'address',
    type: 'text',
    hintText: 'esim. Mannerheimintie 1 A 15 00100 Helsinki'
  },
  {
    label: 'Puhelin',
    name: 'phone',
    type: 'text',
    hintText: 'esim. 040 1234567'
  },
  {
    label: 'Sähkoposti',
    name: 'email',
    type: 'text',
    hintText: 'esim. essi@merkki@ki.fi'
  }
];
