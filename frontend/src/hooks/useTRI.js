import { useState, useMemo } from 'react';

const calcBase = (x, min, max, delta, a, b, c) => {
  if (x <= 0) return min;
  let t = x / 45;
  return min + delta * (a * t + b * Math.pow(t, 2) + c * Math.pow(t, 3));
};

const calcVariancia = (x, maxVar) => {
  if (x <= 0 || x >= 45) return 0;
  let t = x / 45;
  return 4 * t * (1 - t) * maxVar;
};

const getScores = (x, min, max, delta, a, b, c, maxVar) => {
  let media = calcBase(x, min, max, delta, a, b, c);
  let v = calcVariancia(x, maxVar);
  return {
    media: media,
    otimista: Math.min(media + v, max),
    pessimista: Math.max(media - v, min)
  };
};

const calcMat = (x) => getScores(x, 334.30, 961.90, 627.60, 0.34, 0, 0.66, 120);
const calcNat = (x) => getScores(x, 308.10, 867.20, 559.10, 0.61, 0.39, 0, 100);
const calcHum = (x) => getScores(x, 283.80, 819.70, 535.90, 0.57, 0.43, 0, 80);
const calcLin = (x) => getScores(x, 294.10, 795.80, 501.70, 0.51, 0, 0.49, 70);

export const useTRI = () => {
  const [acertosMat, setAcertosMat] = useState(0);
  const [acertosNat, setAcertosNat] = useState(0);
  const [acertosHum, setAcertosHum] = useState(0);
  const [acertosLin, setAcertosLin] = useState(0);
  const [notaRedacao, setNotaRedacao] = useState(0);
  const [bonusRegional, setBonusRegional] = useState(false);

  const scores = useMemo(() => {
    const sMat = calcMat(acertosMat);
    const sNat = calcNat(acertosNat);
    const sHum = calcHum(acertosHum);
    const sLin = calcLin(acertosLin);

    const mediaSimples = (sMat.media + sNat.media + sHum.media + sLin.media + notaRedacao) / 5;
    const mediaOtimista = (sMat.otimista + sNat.otimista + sHum.otimista + sLin.otimista + notaRedacao) / 5;

    const finalMedia = bonusRegional ? mediaSimples * 1.10 : mediaSimples;
    const finalOtimista = bonusRegional ? mediaOtimista * 1.10 : mediaOtimista;

    return {
      mat: sMat,
      nat: sNat,
      hum: sHum,
      lin: sLin,
      finalMedia,
      finalOtimista
    };
  }, [acertosMat, acertosNat, acertosHum, acertosLin, notaRedacao, bonusRegional]);

  const handleInputChange = (setter, max) => (e) => {
    const value = parseInt(e.target.value) || 0;
    setter(Math.min(Math.max(value, 0), max));
  };

  return {
    acertosMat, setAcertosMat,
    acertosNat, setAcertosNat,
    acertosHum, setAcertosHum,
    acertosLin, setAcertosLin,
    notaRedacao, setNotaRedacao,
    bonusRegional, setBonusRegional,
    scores,
    handleInputChange
  };
};
