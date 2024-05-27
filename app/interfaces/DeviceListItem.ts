export interface DeviceListItem {
  id: string;
  name?: string;
  model: {
    name: string;
    family: string;
    product: string;
  };
  lastReportTime: string;
  nextReportTime: string;
}
