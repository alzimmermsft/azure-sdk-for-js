/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { AzureNetworkFabricManagementServiceAPI } = require("@azure/arm-managednetworkfabric");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Create Network Fabric resource.
 *
 * @summary Create Network Fabric resource.
 * x-ms-original-file: specification/managednetworkfabric/resource-manager/Microsoft.ManagedNetworkFabric/preview/2023-02-01-preview/examples/NetworkFabrics_Create_MaximumSet_Gen.json
 */
async function networkFabricsCreateMaximumSetGen() {
  const subscriptionId = process.env["MANAGEDNETWORKFABRIC_SUBSCRIPTION_ID"] || "subscriptionId";
  const resourceGroupName =
    process.env["MANAGEDNETWORKFABRIC_RESOURCE_GROUP"] || "resourceGroupName";
  const networkFabricName = "FabricName";
  const body = {
    annotation: "annotationValue",
    fabricASN: 29249,
    ipv4Prefix: "10.18.0.0/19",
    ipv6Prefix: "3FFE:FFFF:0:CD40::/59",
    location: "eastuseuap",
    managementNetworkConfiguration: {
      infrastructureVpnConfiguration: {
        optionAProperties: {
          mtu: 5892,
          peerASN: 42666,
          primaryIpv4Prefix: "20.0.0.12/30",
          primaryIpv6Prefix: "3FFE:FFFF:0:CD30::a8/126",
          secondaryIpv4Prefix: "20.0.0.13/30",
          secondaryIpv6Prefix: "3FFE:FFFF:0:CD30::ac/126",
          vlanId: 2724,
        },
        optionBProperties: {
          exportRouteTargets: ["65046:10039"],
          importRouteTargets: ["65046:10039"],
        },
        peeringOption: "OptionA",
      },
      workloadVpnConfiguration: {
        optionAProperties: {
          mtu: 5892,
          peerASN: 42666,
          primaryIpv4Prefix: "10.0.0.14/30",
          primaryIpv6Prefix: "2FFE:FFFF:0:CD30::a7/126",
          secondaryIpv4Prefix: "10.0.0.15/30",
          secondaryIpv6Prefix: "2FFE:FFFF:0:CD30::ac/126",
          vlanId: 2724,
        },
        optionBProperties: {
          exportRouteTargets: ["65046:10050"],
          importRouteTargets: ["65046:10050"],
        },
        peeringOption: "OptionA",
      },
    },
    networkFabricControllerId:
      "/subscriptions/subscriptionId/resourceGroups/resourceGroupName/providers/Microsoft.ManagedNetworkFabric/networkFabricControllers/fabricControllerName",
    networkFabricSku: "M4-A400-A100-C16-aa",
    rackCount: 4,
    serverCountPerRack: 8,
    tags: { key6468: "" },
    terminalServerConfiguration: {
      password: "xxxx",
      primaryIpv4Prefix: "20.0.0.12/30",
      primaryIpv6Prefix: "3FFE:FFFF:0:CD30::a8/126",
      secondaryIpv4Prefix: "20.0.0.13/30",
      secondaryIpv6Prefix: "3FFE:FFFF:0:CD30::ac/126",
      serialNumber: "123456",
      username: "username",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureNetworkFabricManagementServiceAPI(credential, subscriptionId);
  const result = await client.networkFabrics.beginCreateAndWait(
    resourceGroupName,
    networkFabricName,
    body
  );
  console.log(result);
}

async function main() {
  networkFabricsCreateMaximumSetGen();
}

main().catch(console.error);
