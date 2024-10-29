import { Layout as DashboardLayout } from "/src/layouts/index.js";
import { CippTablePage } from "/src/components/CippComponents/CippTablePage.jsx";

const Page = () => {
  const pageTitle = "Named Locations";

  const actions = [
    {
      label: "Add location to named location",
      type: "POST",
      url: "/api/ExecNamedLocation",
      data: {
        namedLocationId: "id",
        TenantFilter: "TenantFilter",
        change: "addLocation",
      },
      confirmText: "Enter a two-letter country code, e.g., US.",
    },
    {
      label: "Remove location from named location",
      type: "POST",
      url: "/api/ExecNamedLocation",
      data: {
        namedLocationId: "id",
        TenantFilter: "TenantFilter",
        change: "removeLocation",
      },
      confirmText: "Enter a two-letter country code, e.g., US.",
    },
    {
      label: "Add IP to named location",
      type: "POST",
      url: "/api/ExecNamedLocation",
      data: {
        namedLocationId: "id",
        TenantFilter: "TenantFilter",
        change: "addIp",
      },
      confirmText: "Enter an IP in CIDR format, e.g., 1.1.1.1/32.",
    },
    {
      label: "Remove IP from named location",
      type: "POST",
      url: "/api/ExecNamedLocation",
      data: {
        namedLocationId: "id",
        TenantFilter: "TenantFilter",
        change: "removeIp",
      },
      confirmText: "Enter an IP in CIDR format, e.g., 1.1.1.1/32.",
    },
  ];

  const offCanvas = {
    extendedInfoFields: ["displayName", "type", "rangeOrLocation"],
    actions: actions,
  };

  return (
    <CippTablePage
      title={pageTitle}
      apiUrl="/api/ListNamedLocations"
      apiData={{
        TenantFilter: "TenantFilter",
      }}
      apiDataKey="Results"
      actions={actions}
      offCanvas={offCanvas}
      simpleColumns={[
        "displayName",
        "includeUnknownCountriesAndRegions",
        "type",
        "rangeOrLocation",
        "modifiedDateTime",
      ]}
    />
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;