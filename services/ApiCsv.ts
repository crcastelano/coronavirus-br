const urlAPI = "https://api.coronaanalytic.com/brazil/"; //API descontinuada

export const urlCSVCitiesTime =   "https://raw.githubusercontent.com/wcota/covid19br/master/cases-brazil-cities-time.csv";
export const fileCSVCitiesTime = "assets/csv/cases-brazil-cities-time.csv";

export const urlCSVCities =   "https://raw.githubusercontent.com/wcota/covid19br/master/cases-brazil-cities.csv";
export const fileCSVCities = "assets/csv/cases-brazil-cities.csv";

export const urlCSVStates =   "https://raw.githubusercontent.com/wcota/covid19br/master/cases-brazil-states.csv";
export const fileCSVStates = "assets/csv/cases-brazil-states.csv";

export const urlCSVTotal =   "https://raw.githubusercontent.com/wcota/covid19br/master/cases-brazil-total.csv";
export const fileCSVTotal = "assets/csv/cases-brazil-total.csv";

export const urlCSVGPS =   "https://raw.githubusercontent.com/wcota/covid19br/master/cases-gps.csv";
export const fileCSVGPS = "assets/csv/cases-gps.csv";

export const urlCSVGPSCities =   "https://raw.githubusercontent.com/wcota/covid19br/master/gps_cities.csv";
export const fileCSVGPSCities = "assets/csv/gps_cities.csv";

const localCSV = false;

export const APICSV = {
  CitiesTime: (localCSV ? fileCSVCitiesTime : urlCSVCitiesTime),
  Cities: (localCSV ? fileCSVCities : urlCSVCities),
  States: (localCSV ? fileCSVStates : urlCSVStates),
  Total: (localCSV ? fileCSVTotal : urlCSVTotal),
  CitiTotalesTime: (localCSV ? fileCSVTotal : urlCSVTotal),
  GPS: (localCSV ? fileCSVGPS : urlCSVGPS),
  GPSCities: (localCSV ? fileCSVGPSCities : urlCSVGPSCities),
};

export const APICSV2 = {
  0: (localCSV ? fileCSVCitiesTime : urlCSVCitiesTime),
  1: (localCSV ? fileCSVCities : urlCSVCities),
  2: (localCSV ? fileCSVStates : urlCSVStates),
  3: (localCSV ? fileCSVTotal : urlCSVTotal),
  4: (localCSV ? fileCSVTotal : urlCSVTotal),
  5: (localCSV ? fileCSVGPS : urlCSVGPS),
  6: (localCSV ? fileCSVGPSCities : urlCSVGPSCities),
};