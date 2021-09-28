/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PrivateLinkResources } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { RedisManagementClientContext } from "../redisManagementClientContext";
import {
  PrivateLinkResource,
  PrivateLinkResourcesListByRedisCacheOptionalParams,
  PrivateLinkResourcesListByRedisCacheResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing PrivateLinkResources operations. */
export class PrivateLinkResourcesImpl implements PrivateLinkResources {
  private readonly client: RedisManagementClientContext;

  /**
   * Initialize a new instance of the class PrivateLinkResources class.
   * @param client Reference to the service client
   */
  constructor(client: RedisManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets the private link resources that need to be created for a redis cache.
   * @param resourceGroupName The name of the resource group.
   * @param cacheName The name of the Redis cache.
   * @param options The options parameters.
   */
  public listByRedisCache(
    resourceGroupName: string,
    cacheName: string,
    options?: PrivateLinkResourcesListByRedisCacheOptionalParams
  ): PagedAsyncIterableIterator<PrivateLinkResource> {
    const iter = this.listByRedisCachePagingAll(
      resourceGroupName,
      cacheName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByRedisCachePagingPage(
          resourceGroupName,
          cacheName,
          options
        );
      }
    };
  }

  private async *listByRedisCachePagingPage(
    resourceGroupName: string,
    cacheName: string,
    options?: PrivateLinkResourcesListByRedisCacheOptionalParams
  ): AsyncIterableIterator<PrivateLinkResource[]> {
    let result = await this._listByRedisCache(
      resourceGroupName,
      cacheName,
      options
    );
    yield result.value || [];
  }

  private async *listByRedisCachePagingAll(
    resourceGroupName: string,
    cacheName: string,
    options?: PrivateLinkResourcesListByRedisCacheOptionalParams
  ): AsyncIterableIterator<PrivateLinkResource> {
    for await (const page of this.listByRedisCachePagingPage(
      resourceGroupName,
      cacheName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets the private link resources that need to be created for a redis cache.
   * @param resourceGroupName The name of the resource group.
   * @param cacheName The name of the Redis cache.
   * @param options The options parameters.
   */
  private _listByRedisCache(
    resourceGroupName: string,
    cacheName: string,
    options?: PrivateLinkResourcesListByRedisCacheOptionalParams
  ): Promise<PrivateLinkResourcesListByRedisCacheResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, cacheName, options },
      listByRedisCacheOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByRedisCacheOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{cacheName}/privateLinkResources",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateLinkResourceListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.cacheName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
