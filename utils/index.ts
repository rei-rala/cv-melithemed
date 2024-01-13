export enum locales {
  ES= 'espanol',
  EN= 'english'
}

type MonthName = {
  [key:number]:{
    [key:string]:string
  }
}

let monthNames: MonthName  = {
  1: {
    [locales.ES]: 'enero',
    [locales.EN]: 'january'
  },
  2: {
    [locales.ES]: 'febrero',
    [locales.EN]: 'february'
  },
  3: {
    [locales.ES]: 'marzo',
    [locales.EN]: 'march'
  },
  4: {
    [locales.ES]: 'abril',
    [locales.EN]: 'april'
  },
  5: {
    [locales.ES]: 'mayo',
    [locales.EN]: 'may'
  },
  6: {
    [locales.ES]: 'junio',
    [locales.EN]: 'june'
  },
  7: {
    [locales.ES]: 'julio',
    [locales.EN]: 'july'
  },
  8: {
    [locales.ES]: 'agosto',
    [locales.EN]: 'august'
  },
  9: {
    [locales.ES]: 'septiembre',
    [locales.EN]: 'september'
  },
  10: {
    [locales.ES]: 'octubre',
    [locales.EN]: 'october'
  },
  11: {
    [locales.ES]: 'noviembre',
    [locales.EN]: 'november'
  },
  12: {
    [locales.ES]: 'diciembre',
    [locales.EN]: 'december'
  }
}

type IFormatDate = (dateLike: Date | string, options: { locale?: locales, sep?: string}) => {[key:string]: string}

export const formatDate: IFormatDate = (dateLike: Date | string, {locale=locales.EN, sep='/'}) => {
  let src = typeof dateLike === "string" ? new Date(dateLike) : dateLike;

  let dd =  `0${src.getDate()}`.slice(-2);
  let mm = `0${src.getMonth() + 1}`.slice(-2);
  let yyyy =  `0000${src.getFullYear()}`.slice(-4);
  let yy = yyyy.slice(-2)
  let MM = monthNames[src.getMonth()+1][locale]
  

  return {
    dd,
    mm,
    yy,
    MM,
    yyyy,
    mmyy: mm + sep + yy,
    MMyy: MM + sep + yy,
    mmyyyy: mm + sep + yyyy,
    MMyyyy: MM + sep + yyyy,
    ddmmYY: dd + sep + mm + sep + yy,
    ddMMyy: dd + sep + MM + sep + yy,
    ddmmyyyy: dd + sep + mm + sep + yyyy,
    ddMMyyyy: dd + sep + MM + sep + yyyy,
  };
};
