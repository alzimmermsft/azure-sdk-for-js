/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  WebTest,
  WebTestsListByResourceGroupOptionalParams,
  WebTestsListOptionalParams,
  WebTestsListByComponentOptionalParams,
  WebTestsGetOptionalParams,
  WebTestsGetResponse,
  WebTestsCreateOrUpdateOptionalParams,
  WebTestsCreateOrUpdateResponse,
  TagsResource,
  WebTestsUpdateTagsOptionalParams,
  WebTestsUpdateTagsResponse,
  WebTestsDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a WebTests. */
export interface WebTests {
  /**
   * Get all Application Insights web tests defined within a specified resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: WebTestsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<WebTest>;
  /**
   * Get all Application Insights web test alerts definitions within a subscription.
   * @param options The options parameters.
   */
  list(
    options?: WebTestsListOptionalParams
  ): PagedAsyncIterableIterator<WebTest>;
  /**
   * Get all Application Insights web tests defined for the specified component.
   * @param componentName The name of the Application Insights component resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByComponent(
    componentName: string,
    resourceGroupName: string,
    options?: WebTestsListByComponentOptionalParams
  ): PagedAsyncIterableIterator<WebTest>;
  /**
   * Get a specific Application Insights web test definition.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param webTestName The name of the Application Insights webtest resource.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    webTestName: string,
    options?: WebTestsGetOptionalParams
  ): Promise<WebTestsGetResponse>;
  /**
   * Creates or updates an Application Insights web test definition.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param webTestName The name of the Application Insights webtest resource.
   * @param webTestDefinition Properties that need to be specified to create or update an Application
   *                          Insights web test definition.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    webTestName: string,
    webTestDefinition: WebTest,
    options?: WebTestsCreateOrUpdateOptionalParams
  ): Promise<WebTestsCreateOrUpdateResponse>;
  /**
   * Creates or updates an Application Insights web test definition.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param webTestName The name of the Application Insights webtest resource.
   * @param webTestTags Updated tag information to set into the web test instance.
   * @param options The options parameters.
   */
  updateTags(
    resourceGroupName: string,
    webTestName: string,
    webTestTags: TagsResource,
    options?: WebTestsUpdateTagsOptionalParams
  ): Promise<WebTestsUpdateTagsResponse>;
  /**
   * Deletes an Application Insights web test.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param webTestName The name of the Application Insights webtest resource.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    webTestName: string,
    options?: WebTestsDeleteOptionalParams
  ): Promise<void>;
}