"use client";

import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { DeviceListItem } from "../interfaces/DeviceListItem";
import { getDevicesList } from "../api/devices";
import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { formatRelativeTime } from "../utils/dateUtils";
import {
  DataGrid,
  GridCellParams,
  GridPaginationModel,
  GridRowParams,
} from "@mui/x-data-grid";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/navigation";
import { AxiosError } from "axios";

const DevicesTable = () => {
  const router = useRouter();

  const [devices, setDevices] = useState<DeviceListItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [error, setError] = useState<AxiosError | null>(null);

  useEffect(() => {
    setIsLoading(true);

    getDevicesList({ page: currentPage + 1, limit: itemsPerPage })
      .then((devices) => {
        setDevices(devices);

        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, [currentPage, itemsPerPage]);

  const columns = [
    {
      field: "name",
      headerName: "Device Name/ID",
      width: 300,
      renderCell: (params: GridCellParams<DeviceListItem>) => {
        const { id, name } = params.row;

        return (
          <div>
            {name ? (
              <>
                <Typography variant="body1">{name}</Typography>
                <Typography variant="body2" sx={{ color: "gray.main" }}>
                  {id}
                </Typography>
              </>
            ) : (
              <Typography variant="body1">{id}</Typography>
            )}
          </div>
        );
      },
    },
    {
      field: "lastReportTime",
      headerName: "Last Report",
      width: 300,
      renderCell: (params: GridCellParams<DeviceListItem>) => {
        const formattedTime = formatRelativeTime(params.row.lastReportTime);

        return <Typography variant="body1">{formattedTime}</Typography>;
      },
    },
    {
      field: "model",
      headerName: "Device Model",
      width: 300,
      renderCell: (params: GridCellParams<DeviceListItem>) => {
        const model = params.row.model;

        return <Typography variant="body1">{model.name}</Typography>;
      },
    },
  ];

  if (isLoading) {
    return (
      <Grid container item xs={9} sx={{ height: "100%" }}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ width: "100%" }}
        >
          <CircularProgress />
        </Box>
      </Grid>
    );
  }

  if (error) {
    return (
      <Grid container item xs={9} sx={{ height: "100%" }}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ width: "100%" }}
        >
          <Typography variant="body1">
            {error.response?.status} Error: An error occurred while loading
            devices, please try again later.
          </Typography>
        </Box>
      </Grid>
    );
  }

  const handlePaginationChange = (paginationModel: GridPaginationModel) => {
    setCurrentPage(paginationModel.page);
    setItemsPerPage(paginationModel.pageSize);
  };

  const handleRowClick = (params: GridRowParams) => {
    const deviceId = params.row.id;

    router.push(`/devices/${deviceId}`);
  };

  return (
    <Grid item xs={9} sx={{ height: "100%" }}>
      <DataGrid
        rows={devices}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: currentPage, pageSize: itemsPerPage },
          },
        }}
        onPaginationModelChange={handlePaginationChange}
        pageSizeOptions={[2, 10]}
        pagination
        checkboxSelection
        onRowClick={handleRowClick}
        disableRowSelectionOnClick
      />
    </Grid>
  );
};

export default DevicesTable;
