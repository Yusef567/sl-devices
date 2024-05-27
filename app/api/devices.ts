import { Device } from "../interfaces/Device";
import { DeviceListItem } from "../interfaces/DeviceListItem";
import { api } from "./apiClient";

export const getDevicesList = async ({ page = 1, limit = 5 }) => {
  try {
    const res = await api.get<{ results: DeviceListItem[] }>(`/listDevices`, {
      params: { page, limit },
    });

    return res.data.results;
  } catch (err) {
    console.error("Error fetching devices", err);
    throw err;
  }
};

export const getDeviceDetails = async (deviceId: string) => {
  try {
    const res = await api.get<Device>(`/device/${deviceId}`);

    return res.data;
  } catch (err) {
    console.error("Error fetching device details", err);
    throw err;
  }
};
