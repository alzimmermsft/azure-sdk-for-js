/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  VirtualMachineExtensionImagesListVersionsOptionalParams,
  ComputeManagementClient
} from "@azure/arm-compute";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Gets a list of virtual machine extension image versions.
 *
 * @summary Gets a list of virtual machine extension image versions.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-11-01/examples/compute/VirtualMachineExtensionImages_ListVersions_MaximumSet_Gen.json
 */
async function virtualMachineExtensionImagesListVersionsMaximumSetGen() {
  const subscriptionId = "{subscription-id}";
  const location = "aaaaaaaaaaaaaaaaaaaaaaaaaa";
  const publisherName = "aaaaaaaaaaaaaaaaaaaa";
  const typeParam = "aaaaaaaaaaaaaaaaaa";
  const filter = "aaaaaaaaaaaaaaaaaaaaaaaaa";
  const top = 22;
  const orderby = "a";
  const options: VirtualMachineExtensionImagesListVersionsOptionalParams = {
    filter,
    top,
    orderby
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.virtualMachineExtensionImages.listVersions(
    location,
    publisherName,
    typeParam,
    options
  );
  console.log(result);
}

virtualMachineExtensionImagesListVersionsMaximumSetGen().catch(console.error);

/**
 * This sample demonstrates how to Gets a list of virtual machine extension image versions.
 *
 * @summary Gets a list of virtual machine extension image versions.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-11-01/examples/compute/VirtualMachineExtensionImages_ListVersions_MinimumSet_Gen.json
 */
async function virtualMachineExtensionImagesListVersionsMinimumSetGen() {
  const subscriptionId = "{subscription-id}";
  const location = "aaaaaaaaa";
  const publisherName = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
  const typeParam = "aaaa";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.virtualMachineExtensionImages.listVersions(
    location,
    publisherName,
    typeParam
  );
  console.log(result);
}

virtualMachineExtensionImagesListVersionsMinimumSetGen().catch(console.error);