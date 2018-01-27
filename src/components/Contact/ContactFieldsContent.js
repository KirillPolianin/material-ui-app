import _ from 'lodash';

export const contactFieldsContent = [
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
];
