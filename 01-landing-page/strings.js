// Variables
const { round, random, floor } = Math;
const $ = (selector) => document.querySelector(selector);
const $all = (selector) => document.querySelectorAll(selector);
const replaceCharAt = (str, char, i) =>
  str.substring(0, i) + char + str.substring(i + 1);
const randInt = (max, min = 0) => floor(random() * (max - min)) + min;
const randItem = (arr) => arr[randInt(arr.length)];
const randChar = () => randItem(Chars);

const Emotes =
  `^_~ -_+ U_U O.O O_< ~_~ X_X O_O T_T ¬_¬ +_+ >_< -_- ಠ_ಠ ʕ•ᴥ•ʔ =＾● ⋏ ●＾= ~(˘▾˘~) o_O O.o *-* //_^ ~,~ [¬º-°]¬`.split(
    " "
  );
const LoremWords =
  "lorem ipsum dolor consectetur adipiscing Nullam viverra turpis facilisis iaculis Curabitur felis tempor euismod pretium imperdiet Pellentesque varius hendrerit vitae porttitor Lorem Morbi porta Suspendisse accumsan bibendum laoreet eleifend Aliquam cursus magna augue elementum Proin scelerisque tincidunt rhoncus auctor Donec nulla ultricies faucibus feugiat risus finibus tortor".split(
    " "
  );

const Chars =
  `0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890-=[]\;',./~!@#$%^&*()_+{}|:"<>?`.split(
    ""
  );
