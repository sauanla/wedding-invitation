function unicodeVni(text) {
  
  let uniChars = [
    'À',
    'Á',
    'Â',
    'Ã',
    'È',
    'É',
    'Ê',
    'Ì',
    'Í',
    'Ò',
    'Ó',
    'Ô',
    'Õ',
    'Ù',
    'Ú',
    'Ý',
    'à',
    'á',
    'â',
    'ã',
    'è',
    'é',
    'ê',
    'ì',
    'í',
    'ò',
    'ó',
    'ô',
    'õ',
    'ù',
    'ú',
    'ý',
    'Ă',
    'ă',
    'Đ',
    'đ',
    'Ĩ',
    'ĩ',
    'Ũ',
    'ũ',
    'Ơ',
    'ơ',
    'Ư',
    'ư',
    'Ạ',
    'ạ',
    'Ả',
    'ả',
    'Ấ',
    'ấ',
    'Ầ',
    'ầ',
    'Ẩ',
    'ẩ',
    'Ẫ',
    'ẫ',
    'Ậ',
    'ậ',
    'Ắ',
    'ắ',
    'Ằ',
    'ằ',
    'Ẳ',
    'ẳ',
    'Ẵ',
    'ẵ',
    'Ặ',
    'ặ',
    'Ẹ',
    'ẹ',
    'Ẻ',
    'ẻ',
    'Ẽ',
    'ẽ',
    'Ế',
    'ế',
    'Ề',
    'ề',
    'Ể',
    'ể',
    'Ễ',
    'ễ',
    'Ệ',
    'ệ',
    'Ỉ',
    'ỉ',
    'Ị',
    'ị',
    'Ọ',
    'ọ',
    'Ỏ',
    'ỏ',
    'Ố',
    'ố',
    'Ồ',
    'ồ',
    'Ổ',
    'ổ',
    'Ỗ',
    'ỗ',
    'Ộ',
    'ộ',
    'Ớ',
    'ớ',
    'Ờ',
    'ờ',
    'Ở',
    'ở',
    'Ỡ',
    'ỡ',
    'Ợ',
    'ợ',
    'Ụ',
    'ụ',
    'Ủ',
    'ủ',
    'Ứ',
    'ứ',
    'Ừ',
    'ừ',
    'Ử',
    'ử',
    'Ữ',
    'ữ',
    'Ự',
    'ự',
    'Ỳ',
    'ỳ',
    'Ỵ',
    'ỵ',
    'Ỷ',
    'ỷ',
    'Ỹ',
    'ỹ',
  ];
  let vniChars = [
    "AØ",
    "AÙ",
    "AÂ",
    "AÕ",
    "EØ",
    "EÙ",
    "EÂ",
    "Ì",
    "Í",
    "OØ",
    "OÙ",
    "OÂ",
    "OÕ",
    "UØ",
    "UÙ",
    "YÙ",
    "aø",
    "aù",
    "aâ",
    "aõ",
    "eø",
    "eù",
    "eâ",
    "ì",
    "í",
    "oø",
    "où",
    "oâ",
    "oõ",
    "uø",
    "uù",
    "yù",
    "AÊ",
    "aê",
    "Ñ",
    "ñ",
    "Ó",
    "ó",
    "UÕ",
    "uõ",
    "Ô",
    "ô",
    "Ö",
    "ö",
    "AÏ",
    "aï",
    "AÛ",
    "aû",
    "AÁ",
    "aá",
    "AÀ",
    "aà",
    "AÅ",
    "aå",
    "AÃ",
    "aã",
    "AÄ",
    "aä",
    "AÉ",
    "aé",
    "AÈ",
    "aè",
    "AÚ",
    "aú",
    "AÜ",
    "aü",
    "AË",
    "aë",
    "EÏ",
    "eï",
    "EÛ",
    "eû",
    "EÕ",
    "eõ",
    "EÁ",
    "eá",
    "EÀ",
    "eà",
    "EÅ",
    "eå",
    "EÃ",
    "eã",
    "EÄ",
    "eä",
    "Æ",
    "æ",
    "Ò",
    "ò",
    "OÏ",
    "oï",
    "OÛ",
    "oû",
    "OÁ",
    "oá",
    "OÀ",
    "oà",
    "OÅ",
    "oå",
    "OÃ",
    "oã",
    "OÄ",
    "oä",
    "ÔÙ",
    "ôù",
    "ÔØ",
    "ôø",
    "ÔÛ",
    "ôû",
    "ÔÕ",
    "ôõ",
    "ÔÏ",
    "ôï",
    "UÏ",
    "uï",
    "UÛ",
    "uû",
    "ÖÙ",
    "öù",
    "ÖØ",
    "öø",
    "ÖÛ",
    "öû",
    "ÖÕ",
    "öõ",
    "ÖÏ",
    "öï",
    "YØ",
    "yø",
    "Î",
    "î",
    "YÛ",
    "yû",
    "YÕ",
    "yõ",
  ];
  let result = "";
  let res = text.split("");

  for (let j = 0; j < res.length; j++) {
    let current = res[j];
    let changeText = "";

    for (let i = 0; i < uniChars.length; i++) {
      changeText = current.replace(new RegExp(uniChars[i], 'g'), vniChars[i]);
      if(current !== changeText){
       break;
      }
    }
    result+=changeText;
  }

  

  return result;
}

$(document).ready(function () {
  const unicodeTexts = $('.vni');

  if (!unicodeTexts && unicodeTexts.length === 0) return;
  for (let i = 0; i < unicodeTexts.length; i++) {
    const element = unicodeTexts[i];
    let text = element.textContent; 
    $(element).text(unicodeVni(text.trim()));
  }
});
