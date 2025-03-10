/*
 * CMSDS Color Tokens, organized by hue
 */

import { to, ColorTokens } from '../lib/types';

const color = to<ColorTokens>()({
  'transparent':     '#ffffff00',

  // White
  'white-alpha25':   '#ffffff40',
  'white-alpha50':   '#ffffff80',
  'white-alpha80':   '#ffffffCC',
  'white-solid':     '#ffffff',

  // Black
  'black-alpha25':   '#00000040',
  'black-alpha50':   '#00000080',
  'black-alpha80':   '#000000CC',
  'black-solid':     '#000000',

  // Neutrals
  'granite-50':      '#f2f2f2',
  'granite-100':     '#d9d9d9',
  'granite-200':     '#c0c0c0',
  'granite-300':     '#a6a6a6',
  'granite-400':     '#8d8d8d',
  'granite-500':     '#808080',
  'granite-600':     '#737373',
  'granite-700':     '#5a5a5a',
  'granite-800':     '#404040',
  'granite-900':     '#262626',
  'granite-1000':    '#0d0d0d',
  
  // Blues
  'ocean-50':        '#e6f1f8',
  'ocean-100':       '#b3d4eb',
  'ocean-200':       '#80b8de',
  'ocean-300':       '#4d9cd0',
  'ocean-400':       '#1a7fc3',
  'ocean-500':       '#0071bc',
  'ocean-600':       '#0066a9',
  'ocean-700':       '#004f84',
  'ocean-800':       '#00395e',
  'ocean-900':       '#002238',
  'ocean-1000':      '#000b13',

  'sapphire-50':     '#e6f0f4',
  'sapphire-100':    '#b4d1de',
  'sapphire-200':    '#82b3c8',
  'sapphire-300':    '#4f95b2',
  'sapphire-400':    '#1d769c',
  'sapphire-500':    '#046791',
  'sapphire-600':    '#045d83',
  'sapphire-700':    '#034866',
  'sapphire-800':    '#023449',
  'sapphire-900':    '#011f2b',
  'sapphire-1000':   '#000a0e',

  'cerulean-50':     '#eaf8fe',
  'cerulean-100':    '#c0e9fb',
  'cerulean-200':    '#97daf8',
  'cerulean-300':    '#6dcbf5',
  'cerulean-400':    '#43bcf2',
  'cerulean-500':    '#2eb4f0',
  'cerulean-600':    '#29a2d8',
  'cerulean-700':    '#207ea8',
  'cerulean-800':    '#175a78',
  'cerulean-900':    '#0e3648',
  'cerulean-1000':   '#051218',

  'sky-50':          '#e6f9fd',
  'sky-100':         '#b3ecf8',
  'sky-200':         '#81dff3',
  'sky-300':         '#4ed2ee',
  'sky-400':         '#1bc5e9',
  'sky-500':         '#02bfe7',
  'sky-600':         '#02acd0',
  'sky-700':         '#0186a2',
  'sky-800':         '#016074',
  'sky-900':         '#013945',
  'sky-1000':        '#001317',

  'darksky-50':      '#ecf4fa',
  'darksky-100':     '#c5dff1',
  'darksky-200':     '#9fcae7',
  'darksky-300':     '#78b4dd',
  'darksky-400':     '#519fd4',
  'darksky-500':     '#3e94cf',
  'darksky-600':     '#3885ba',
  'darksky-700':     '#2b6891',
  'darksky-800':     '#1f4a68',
  'darksky-900':     '#132c3e',
  'darksky-1000':    '#060f15',

  'lapis-50':        '#e9ecf1',
  'lapis-100':       '#bcc5d4',
  'lapis-200':       '#8f9eb8',
  'lapis-300':       '#62779b',
  'lapis-400':       '#35507e',
  'lapis-500':       '#1e3c70',
  'lapis-600':       '#1b3665',
  'lapis-700':       '#152a4e',
  'lapis-800':       '#0f1e38',
  'lapis-900':       '#091222',
  'lapis-1000':      '#03060b',

  'deepsea-50':      '#e7e9f5',
  'deepsea-100':     '#b6bde0',
  'deepsea-200':     '#8692cc',
  'deepsea-300':     '#5666b8',
  'deepsea-400':     '#253aa3',
  'deepsea-500':     '#0d2499',
  'deepsea-600':     '#0c208a',
  'deepsea-700':     '#09196b',
  'deepsea-800':     '#07124d',
  'deepsea-900':     '#040b2e',
  'deepsea-1000':    '#01040f',

  // Greens
  'spring-50':       '#e7f3e7',
  'spring-100':      '#b8dcb7',
  'spring-200':      '#89c487',
  'spring-300':      '#59ac56',
  'spring-400':      '#2a9526',
  'spring-500':      '#12890e',
  'spring-600':      '#107b0d',
  'spring-700':      '#0d600a',
  'spring-800':      '#094507',
  'spring-900':      '#052904',
  'spring-1000':     '#020e01',

  'teal-50':         '#e8f0ef',
  'teal-100':        '#b9d2ce',
  'teal-200':        '#8ab5ae',
  'teal-300':        '#5b978e',
  'teal-400':        '#2c796d',
  'teal-500':        '#146a5d',
  'teal-600':        '#125f54',
  'teal-700':        '#0e4a41',
  'teal-800':        '#0a352f',
  'teal-900':        '#06201c',
  'teal-1000':       '#020b09',

  'emerald-50':      '#ecfcf3',
  'emerald-100':     '#c6f6db',
  'emerald-200':     '#a1f1c4',
  'emerald-300':     '#7bebac',
  'emerald-400':     '#55e594',
  'emerald-500':     '#42e288',
  'emerald-600':     '#3bcb7a',
  'emerald-700':     '#2e9e5f',
  'emerald-800':     '#217144',
  'emerald-900':     '#144429',
  'emerald-1000':    '#07170e',
  
  // Reds
  'rose-50':         '#fce8ec',
  'rose-100':        '#f7bbc5',
  'rose-200':        '#f18e9e',
  'rose-300':        '#eb6077',
  'rose-400':        '#e63350',
  'rose-500':        '#e31c3d',
  'rose-600':        '#cc1937',
  'rose-700':        '#9f142b',
  'rose-800':        '#720e1f',
  'rose-900':        '#440812',
  'rose-1000':       '#170306',

  'crimson-50':      '#f7e6e6',
  'crimson-100':     '#e8b3b3',
  'crimson-200':     '#d98080',
  'crimson-300':     '#c94d4d',
  'crimson-400':     '#ba1a1a',
  'crimson-500':     '#b20000',
  'crimson-600':     '#a00000',
  'crimson-700':     '#7d0000',
  'crimson-800':     '#590000',
  'crimson-900':     '#350000',
  'crimson-1000':    '#120000',
  
  // Yellows
  'goldenrod-50':    '#fef9e9',
  'goldenrod-100':   '#fdedbc',
  'goldenrod-200':   '#fce28f',
  'goldenrod-300':   '#fad662',
  'goldenrod-400':   '#f9ca35',
  'goldenrod-500':   '#f8c41f',
  'goldenrod-600':   '#dfb01c',
  'goldenrod-700':   '#ae8916',
  'goldenrod-800':   '#7c6210',
  'goldenrod-900':   '#4a3b09',
  'goldenrod-1000':  '#191403',

  'dandelion-50':    '#fffce6',
  'dandelion-100':   '#fff7b5',
  'dandelion-200':   '#fff284',
  'dandelion-300':   '#ffec52',
  'dandelion-400':   '#ffe721',
  'dandelion-500':   '#ffe400',
  'dandelion-600':   '#e6cd07',
  'dandelion-700':   '#b3a006',
  'dandelion-800':   '#807204',
  'dandelion-900':   '#4c4402',
  'dandelion-1000':  '#191701',

  // Purples
  'windsor-50':      '#edeaf4',
  'windsor-100':     '#c9c0de',
  'windsor-200':     '#a696c9',
  'windsor-300':     '#826bb3',
  'windsor-400':     '#5e419d',
  'windsor-500':     '#4c2c92',
  'windsor-600':     '#442883',
  'windsor-700':     '#351f66',
  'windsor-800':     '#261649',
  'windsor-900':     '#170d2c',
  'windsor-1000':    '#08040f',

  'orchid-50':       '#f8e7f8',
  'orchid-100':      '#ebb8ea',
  'orchid-200':      '#de89dc',
  'orchid-300':      '#d15acd',
  'orchid-400':      '#c42bbf',
  'orchid-500':      '#bd13b8',
  'orchid-600':      '#aa11a6',
  'orchid-700':      '#840d81',
  'orchid-800':      '#5f0a5c',
  'orchid-900':      '#390637',
  'orchid-1000':     '#130212',

  // Oranges
  'persimmon-50':    '#fcebe6',
  'persimmon-100':   '#f5c3b3',
  'persimmon-200':   '#ee9b81',
  'persimmon-300':   '#e7724f',
  'persimmon-400':   '#e04a1c',
  'persimmon-500':   '#dd3603',
  'persimmon-600':   '#c73103',
  'persimmon-700':   '#9b2602',
  'persimmon-800':   '#6f1b02',
  'persimmon-900':   '#421001',
  'persimmon-1000':  '#160500',

  'copper-50':       '#faf1eb',
  'copper-100':      '#efd6c2',
  'copper-200':      '#e4ba99',
  'copper-300':      '#d99e70',
  'copper-400':      '#ce8347',
  'copper-500':      '#c97532',
  'copper-600':      '#b5692d',
  'copper-700':      '#8d5223',
  'copper-800':      '#653b19',
  'copper-900':      '#3c230f',
  'copper-1000':     '#140c05',

});

export default color;
