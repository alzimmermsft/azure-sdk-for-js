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
  ConfigServerSettings,
  AppPlatformManagementClient
} from "@azure/arm-appplatform";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Check if the config server settings are valid.
 *
 * @summary Check if the config server settings are valid.
 * x-ms-original-file: specification/appplatform/resource-manager/Microsoft.AppPlatform/preview/2022-03-01-preview/examples/ConfigServers_Validate.json
 */
async function configServersValidate() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "myResourceGroup";
  const serviceName = "myservice";
  const configServerSettings: ConfigServerSettings = {
    gitProperty: {
      label: "master",
      searchPaths: ["/"],
      uri: "https://github.com/fake-user/fake-repository.git"
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new AppPlatformManagementClient(credential, subscriptionId);
  const result = await client.configServers.beginValidateAndWait(
    resourceGroupName,
    serviceName,
    configServerSettings
  );
  console.log(result);
}

configServersValidate().catch(console.error);