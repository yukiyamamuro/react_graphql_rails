/**
 * @generated SignedSource<<81594a0fc76791a30f8fd964e3ee8725>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type AppRepositoryFullNameQuery$variables = {};
export type AppRepositoryFullNameQuery$data = {
  readonly users: {
    readonly nodes: ReadonlyArray<{
      readonly lastName: string | null;
      readonly firstName: string | null;
    } | null> | null;
  } | null;
};
export type AppRepositoryFullNameQuery = {
  variables: AppRepositoryFullNameQuery$variables;
  response: AppRepositoryFullNameQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "last",
    "value": 2
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "lastName",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "firstName",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppRepositoryFullNameQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "UserConnection",
        "kind": "LinkedField",
        "name": "users",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "nodes",
            "plural": true,
            "selections": [
              (v1/*: any*/),
              (v2/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": "users(last:2)"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppRepositoryFullNameQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "UserConnection",
        "kind": "LinkedField",
        "name": "users",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "nodes",
            "plural": true,
            "selections": [
              (v1/*: any*/),
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "users(last:2)"
      }
    ]
  },
  "params": {
    "cacheID": "3e50ee63fbb9f85c5030290e8c00f4f9",
    "id": null,
    "metadata": {},
    "name": "AppRepositoryFullNameQuery",
    "operationKind": "query",
    "text": "query AppRepositoryFullNameQuery {\n  users(last: 2) {\n    nodes {\n      lastName\n      firstName\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "cd7ffb8261143550bbdffc309ba52483";

export default node;
