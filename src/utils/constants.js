/**Регулярные выражения для валидаторов */

const regEmail =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;

const regName = /[^a-zа-яё -]/iu;

/**Константы параметров */
const BASE_URL = "http://localhost:3000";

const SHORT_DUR = 40;

const MOVIES_PER_PAGE_WIDE = 16;
const MOVIES_PER_PAGE_STAN = 12;
const MOVIES_PER_PAGE_TAB = 8;
const MOVIES_PER_PAGE_MOB = 5;

const MOVIES_PER_LOAD_WIDE = 4;
const MOVIES_PER_LOAD_STAN = 3;
const MOVIES_PER_LOAD_TAB = 2;

const RES_WIDE = 1280;
const RES_STAN = 990;
const RES_TAB = 768;

export {
  regEmail,
  regName,
  BASE_URL,
  SHORT_DUR,
  MOVIES_PER_PAGE_WIDE,
  MOVIES_PER_PAGE_STAN,
  MOVIES_PER_PAGE_TAB,
  MOVIES_PER_PAGE_MOB,
  MOVIES_PER_LOAD_WIDE,
  MOVIES_PER_LOAD_STAN,
  MOVIES_PER_LOAD_TAB,
  RES_WIDE,
  RES_STAN,
  RES_TAB,
};
