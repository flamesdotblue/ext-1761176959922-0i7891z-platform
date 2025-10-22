const cards = [
  {
    id: 'ce-01',
    tema: 'Circuitos Elétricos',
    titulo: 'Lei de Ohm e potência',
    questao:
      'Uma carga puramente resistiva consome 200 W quando submetida a 100 V. Qual a corrente que percorre a carga e qual o valor da resistência?',
    resposta: 'Corrente: 2,0 A. Resistência: 50 Ω.',
    analise:
      'Para carga resistiva: P = V·I = V²/R = I²·R.\nCom P = 200 W e V = 100 V: I = P/V = 200/100 = 2 A.\nResistência: R = V/I = 100/2 = 50 Ω. Resultados consistentes também por R = V²/P = 10000/200 = 50 Ω.',
    referencia: 'Conceitos fundamentais de circuitos DC',
  },
  {
    id: 'ce-02',
    tema: 'Circuitos Elétricos',
    titulo: 'Divisor de tensão',
    questao:
      'Em um divisor de tensão com R1 = 2 kΩ e R2 = 3 kΩ em série ligados a uma fonte de 25 V, qual é a tensão sobre R2?',
    resposta: 'V_R2 = 15 V.',
    analise:
      'Divisor: V_R2 = V_total · R2/(R1+R2).\nR1+R2 = 5 kΩ.\nV_R2 = 25 · 3/5 = 15 V.',
    referencia: 'Técnicas de análise de circuitos em regime DC',
  },
  {
    id: 'me-01',
    tema: 'Máquinas Elétricas',
    titulo: 'Escorregamento em motores de indução',
    questao:
      'Um motor de indução trifásico de 4 polos, 60 Hz, opera a 1740 rpm. Qual é o escorregamento percentual?',
    resposta: 'Escorregamento s ≈ 3,33%.',
    analise:
      'Velocidade síncrona: n_s = 120·f/P = 120·60/4 = 1800 rpm.\nEscorregamento: s = (n_s - n)/n_s = (1800-1740)/1800 = 60/1800 = 0,0333 = 3,33%.',
    referencia: 'Motores de indução trifásicos',
  },
  {
    id: 'me-02',
    tema: 'Máquinas Elétricas',
    titulo: 'Transformador em vazio',
    questao:
      'Em um transformador monofásico ideal de 13,8 kV/460 V, aplique 13,8 kV no primário. Qual é a tensão no secundário em vazio e a relação de espiras aproximada?',
    resposta: 'Tensão no secundário ≈ 460 V. Relação de espiras a = Np/Ns ≈ 30:1.',
    analise:
      'Transformador ideal: Vp/Vs = Np/Ns.\nSe Vp=13,8 kV e Vs nominal=460 V, então Ns/Np ≈ 460/13800 ≈ 1/30.\nLogo a ≈ 30:1 e em vazio a tensão será ≈ 460 V.',
    referencia: 'Transformadores ideais, relação de espiras',
  },
  {
    id: 'ie-01',
    tema: 'Instalações Elétricas',
    titulo: 'Queda de tensão em circuito de iluminação',
    questao:
      'Um circuito monofásico 127 V alimenta 10 lâmpadas LED de 12 W cada, com 30 m de comprimento (ida) em cabo de cobre 2,5 mm². Corrente aproximada e queda de tensão percentuais? (Resistividade do cobre ≈ 0,0175 Ω·mm²/m)',
    resposta: 'I ≈ 0,95 A. Queda de tensão ≈ 0,4% (atende usualmente a limites de 4% em iluminação).',
    analise:
      'Potência total: P = 10×12 = 120 W. Corrente: I = P/V ≈ 120/127 ≈ 0,945 A.\nResistência do condutor (ida e volta): R = ρ·(2·L)/A = 0,0175·(60)/2,5 = 0,42 Ω.\nQueda: ΔV = I·R ≈ 0,945×0,42 ≈ 0,397 V. Percentual: 0,397/127 ≈ 0,31% (≈0,3–0,4%).\nObservação: Valores dependem de temperatura e agrupamento; cálculo simplificado.',
    referencia: 'NBR 5410 (critérios de queda de tensão)',
  },
  {
    id: 'ie-02',
    tema: 'Instalações Elétricas',
    titulo: 'Dimensionamento de disjuntor',
    questao:
      'Uma carga monofásica com corrente nominal de 18 A em 127 V deve ser protegida por disjuntor termomagnético. Qual a corrente do disjuntor mais adequada dentre 16 A, 20 A e 25 A, assumindo características usuais B/C e cabo corretamente dimensionado?',
    resposta: '20 A é a escolha usual mais adequada.',
    analise:
      'O disjuntor deve conduzir a corrente de serviço sem desarme indevido e proteger contra sobrecarga. 16 A é inferior a 18 A (subdimensionado), 25 A pode não garantir proteção adequada da seção do condutor em sobrecarga. 20 A atende a corrente de serviço com folga moderada, considerando curva C/B e coordenação com cabo.',
    referencia: 'NBR 5410 (proteção contra sobrecorrentes)',
  },
  {
    id: 'se-01',
    tema: 'Sistemas de Potência',
    titulo: 'Fator de potência e potência aparente',
    questao:
      'Uma instalação trifásica consome 90 kW com fator de potência 0,75 indutivo a 380 V. Qual a potência aparente S e a corrente de linha (aprox.)? Assuma sistema equilibrado.',
    resposta: 'S = 120 kVA. Corrente de linha ≈ 182 A.',
    analise:
      'S = P/FP = 90/0,75 = 120 kVA.\nPara trifásico equilibrado: S = √3·V_L·I_L ⇒ I_L = S/(√3·V_L).\nI ≈ 120000/(1,732·380) ≈ 120000/658 ≈ 182 A.',
    referencia: 'Relações trifásicas P, Q, S; fator de potência',
  },
  {
    id: 'se-02',
    tema: 'Sistemas de Potência',
    titulo: 'Regulação de tensão em transformadores',
    questao:
      'Explique qualitativamente o que é regulação de tensão em transformadores e como a impedância equivalente impacta o valor.',
    resposta:
      'Regulação de tensão é a variação percentual de tensão do secundário entre vazio e carga nominal. A impedância equivalente causa queda de tensão sob carga, elevando a regulação.',
    analise:
      'Regulação (%) = [(V_vazio − V_carga) / V_carga] × 100. Quanto maiores a resistência e a reatância de dispersão, maior a queda de tensão sob carga e maior a regulação. Cargas indutivas tendem a aumentar a queda, capacitiva pode reduzir.',
    referencia: 'Transformadores reais: parâmetros equivalentes',
  },
  {
    id: 'ae-01',
    tema: 'Acionamentos e Eletrônica de Potência',
    titulo: 'Retificador monofásico de onda completa',
    questao:
      'Para um retificador monofásico em ponte ideal alimentado por 127 Vca (RMS) e carga resistiva, qual é a tensão média retificada na saída?',
    resposta: 'V_médio ≈ 2·V_p/π ≈ 0,9·V_RMS ≈ 114 V.',
    analise:
      'Para ponte de diodos ideal: Vdc = 2·V_p/π. Como V_p = √2·V_RMS, Vdc = 2·√2/π · V_RMS ≈ 0,9·V_RMS. Para 127 V, ≈ 114 V. Desconsidera queda nos diodos.',
    referencia: 'Retificadores monofásicos ideais',
  },
  {
    id: 'ae-02',
    tema: 'Acionamentos e Eletrônica de Potência',
    titulo: 'Controle escalar V/f',
    questao:
      'No controle escalar V/f de motores de indução, por que mantém-se aproximadamente constante a razão V/f na faixa abaixo da velocidade nominal?',
    resposta:
      'Para manter o fluxo magnético aproximadamente constante e, assim, preservar o torque disponível na faixa de operação.',
    analise:
      'O fluxo φ ∝ V/ω (descontando quedas). Mantendo V/f constante, o fluxo é mantido, evitando saturação em baixas frequências ou perda de torque. Acima da nominal, entra-se em enfraquecimento de campo (V limitado).',
    referencia: 'Acionamentos CA, controle V/f',
  },
]

export default cards
