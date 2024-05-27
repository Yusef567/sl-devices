export interface Device {
  id: string;
  name?: string;
  labels: [];
  owner: {
    id: string;
    name: string;
  };
  model: {
    name: string;
    family: string;
    product: string;
  };
  lastKnownLocation: DeviceLocation;
  firmware: {
    current: string;
    pending: null | boolean;
  };
  statusIndicators: {
    battery: string;
    moving: boolean;
    gpsFailure: boolean;
    lowSignal: boolean;
    charging: boolean;
    externalPower: boolean;
    flightMode: boolean;
    pendingSettings: boolean;
  };
  lastReportTime: string;
  nextReportTime: string;
}

export interface DeviceLocation {
  summary: string;
  type?: string;
  time?: string;
  global: {
    lat: number;
    lon: number;
    cep: number;
  };
  zones: [];
}
