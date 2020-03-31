export interface Estado {
  uid: number;
  sigla?: string;
  state: string;
  lat?: number;
  lng?: number;
}

export const ESTADOS: Estado[] = [
  { uid: 12, sigla: "AC", state: "Acre", lat: -8.77, lng: -70.55 },
  { uid: 27, sigla: "AL", state: "Alagoas", lat: -9.71, lng: -35.73 },
  { uid: 13, sigla: "AM", state: "Amazonas", lat: -3.07, lng: -61.66 },
  { uid: 16, sigla: "AP", state: "Amapá", lat: 1.41, lng: -51.77 },
  { uid: 29, sigla: "BA", state: "Bahia", lat: -12.96, lng: -38.51 },
  { uid: 23, sigla: "CE", state: "Ceará", lat: -3.71, lng: -38.54 },
  { uid: 53, sigla: "DF", state: "Distrito Federal", lat: -15.83, lng: -47.86 },
  { uid: 32, sigla: "ES", state: "Espírito Santo", lat: -19.19, lng: -40.34 },
  { uid: 52, sigla: "GO", state: "Goiás", lat: -16.64, lng: -49.31 },
  { uid: 21, sigla: "MA", state: "Maranhão", lat: -2.55, lng: -44.3 },
  { uid: 51, sigla: "MT", state: "Mato Grosso", lat: -12.64, lng: -55.42 },
  { uid: 50, sigla: "MS", state: "Mato Grosso do Sul", lat: -20.51, lng: -54.54 },
  { uid: 31, sigla: "MG", state: "Minas Gerais", lat: -18.1, lng: -44.38 },
  { uid: 15, sigla: "PA", state: "Pará", lat: -5.53, lng: -52.29 },
  { uid: 25, sigla: "PB", state: "Paraíba", lat: -7.06, lng: -35.55 },
  { uid: 41, sigla: "PR", state: "Paraná", lat: -24.89, lng: -51.55 },
  { uid: 26, sigla: "PE", state: "Pernambuco", lat: -8.28, lng: -35.07 },
  { uid: 22, sigla: "PI", state: "Piauí", lat: -8.28, lng: -43.68 },
  { uid: 33, sigla: "RJ", state: "Rio de Janeiro", lat: -22.84, lng: -43.15 },
  { uid: 24, sigla: "RN", state: "Rio Grande do Norte", lat: -5.22, lng: -36.52 },
  { uid: 43, sigla: "RS", state: "Rio Grande do Sul", lat: -30.01, lng: -51.22 },
  { uid: 11, sigla: "RO", state: "Rondônia", lat: -11.22, lng: -62.8 },
  { uid: 14, sigla: "RR", state: "Roraima", lat: 1.89, lng: -61.22 },
  { uid: 42, sigla: "SC", state: "Santa Catarina", lat: -27.33, lng: -49.44 },
  { uid: 28, sigla: "SE", state: "Sergipe", lat: -10.9, lng: -37.07 },
  { uid: 35, sigla: "SP", state: "São Paulo", lat: -23.55, lng: -46.64 },
  { uid: 17, sigla: "TO", state: "Tocantins", lat: -10.25, lng: -48.25 }
];

export const LatLonUfs = new Map([
  ["AC", { lat: -8.77, lng: -70.55 }],
  ["AL", { lat: -9.71, lng: -35.73 }],
  ["AM", { lat: -3.07, lng: -61.66 }],
  ["AP", { lat: 1.41, lng: -51.77 }],
  ["BA", { lat: -12.96, lng: -38.51 }],
  ["CE", { lat: -3.71, lng: -38.54 }],
  ["DF", { lat: -15.83, lng: -47.86 }],
  ["ES", { lat: -19.19, lng: -40.34 }],
  ["GO", { lat: -16.64, lng: -49.31 }],
  ["MA", { lat: -2.55, lng: -44.3 }],
  ["MT", { lat: -12.64, lng: -55.42 }],
  ["MS", { lat: -20.51, lng: -54.54 }],
  ["MG", { lat: -18.1, lng: -44.38 }],
  ["PA", { lat: -5.53, lng: -52.29 }],
  ["PB", { lat: -7.06, lng: -35.55 }],
  ["PR", { lat: -24.89, lng: -51.55 }],
  ["PE", { lat: -8.28, lng: -35.07 }],
  ["PI", { lat: -8.28, lng: -43.68 }],
  ["RJ", { lat: -22.84, lng: -43.15 }],
  ["RN", { lat: -5.22, lng: -36.52 }],
  ["RO", { lat: -11.22, lng: -62.8 }],
  ["RS", { lat: -30.01, lng: -51.22 }],
  ["RR", { lat: 1.89, lng: -61.22 }],
  ["SC", { lat: -27.33, lng: -49.44 }],
  ["SE", { lat: -10.9, lng: -37.07 }],
  ["SP", { lat: -23.55, lng: -46.64 }],
  ["TO", { lat: -10.25, lng: -48.25 }]
]);
