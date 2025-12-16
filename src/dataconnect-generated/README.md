# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*GetPublicRecipes*](#getpublicrecipes)
  - [*GetMyRecipes*](#getmyrecipes)
- [**Mutations**](#mutations)
  - [*CreateNewRecipe*](#createnewrecipe)
  - [*AddCommentToRecipe*](#addcommenttorecipe)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## GetPublicRecipes
You can execute the `GetPublicRecipes` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getPublicRecipes(): QueryPromise<GetPublicRecipesData, undefined>;

interface GetPublicRecipesRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetPublicRecipesData, undefined>;
}
export const getPublicRecipesRef: GetPublicRecipesRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getPublicRecipes(dc: DataConnect): QueryPromise<GetPublicRecipesData, undefined>;

interface GetPublicRecipesRef {
  ...
  (dc: DataConnect): QueryRef<GetPublicRecipesData, undefined>;
}
export const getPublicRecipesRef: GetPublicRecipesRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getPublicRecipesRef:
```typescript
const name = getPublicRecipesRef.operationName;
console.log(name);
```

### Variables
The `GetPublicRecipes` query has no variables.
### Return Type
Recall that executing the `GetPublicRecipes` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetPublicRecipesData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetPublicRecipesData {
  recipes: ({
    id: UUIDString;
    title: string;
    cuisine: string;
    imageUrl?: string | null;
  } & Recipe_Key)[];
}
```
### Using `GetPublicRecipes`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getPublicRecipes } from '@dataconnect/generated';


// Call the `getPublicRecipes()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getPublicRecipes();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getPublicRecipes(dataConnect);

console.log(data.recipes);

// Or, you can use the `Promise` API.
getPublicRecipes().then((response) => {
  const data = response.data;
  console.log(data.recipes);
});
```

### Using `GetPublicRecipes`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getPublicRecipesRef } from '@dataconnect/generated';


// Call the `getPublicRecipesRef()` function to get a reference to the query.
const ref = getPublicRecipesRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getPublicRecipesRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.recipes);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.recipes);
});
```

## GetMyRecipes
You can execute the `GetMyRecipes` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getMyRecipes(): QueryPromise<GetMyRecipesData, undefined>;

interface GetMyRecipesRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetMyRecipesData, undefined>;
}
export const getMyRecipesRef: GetMyRecipesRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getMyRecipes(dc: DataConnect): QueryPromise<GetMyRecipesData, undefined>;

interface GetMyRecipesRef {
  ...
  (dc: DataConnect): QueryRef<GetMyRecipesData, undefined>;
}
export const getMyRecipesRef: GetMyRecipesRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getMyRecipesRef:
```typescript
const name = getMyRecipesRef.operationName;
console.log(name);
```

### Variables
The `GetMyRecipes` query has no variables.
### Return Type
Recall that executing the `GetMyRecipes` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetMyRecipesData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetMyRecipesData {
  recipes: ({
    id: UUIDString;
    title: string;
    cuisine: string;
    imageUrl?: string | null;
  } & Recipe_Key)[];
}
```
### Using `GetMyRecipes`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getMyRecipes } from '@dataconnect/generated';


// Call the `getMyRecipes()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getMyRecipes();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getMyRecipes(dataConnect);

console.log(data.recipes);

// Or, you can use the `Promise` API.
getMyRecipes().then((response) => {
  const data = response.data;
  console.log(data.recipes);
});
```

### Using `GetMyRecipes`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getMyRecipesRef } from '@dataconnect/generated';


// Call the `getMyRecipesRef()` function to get a reference to the query.
const ref = getMyRecipesRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getMyRecipesRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.recipes);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.recipes);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateNewRecipe
You can execute the `CreateNewRecipe` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createNewRecipe(vars: CreateNewRecipeVariables): MutationPromise<CreateNewRecipeData, CreateNewRecipeVariables>;

interface CreateNewRecipeRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateNewRecipeVariables): MutationRef<CreateNewRecipeData, CreateNewRecipeVariables>;
}
export const createNewRecipeRef: CreateNewRecipeRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createNewRecipe(dc: DataConnect, vars: CreateNewRecipeVariables): MutationPromise<CreateNewRecipeData, CreateNewRecipeVariables>;

interface CreateNewRecipeRef {
  ...
  (dc: DataConnect, vars: CreateNewRecipeVariables): MutationRef<CreateNewRecipeData, CreateNewRecipeVariables>;
}
export const createNewRecipeRef: CreateNewRecipeRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createNewRecipeRef:
```typescript
const name = createNewRecipeRef.operationName;
console.log(name);
```

### Variables
The `CreateNewRecipe` mutation requires an argument of type `CreateNewRecipeVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateNewRecipeVariables {
  title: string;
  cuisine: string;
  instructions: string;
  mealType: string;
  isPublic: boolean;
  description?: string | null;
  imageUrl?: string | null;
  cookTime?: number | null;
  prepTime?: number | null;
  servings?: number | null;
}
```
### Return Type
Recall that executing the `CreateNewRecipe` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateNewRecipeData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateNewRecipeData {
  recipe_insert: Recipe_Key;
}
```
### Using `CreateNewRecipe`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createNewRecipe, CreateNewRecipeVariables } from '@dataconnect/generated';

// The `CreateNewRecipe` mutation requires an argument of type `CreateNewRecipeVariables`:
const createNewRecipeVars: CreateNewRecipeVariables = {
  title: ..., 
  cuisine: ..., 
  instructions: ..., 
  mealType: ..., 
  isPublic: ..., 
  description: ..., // optional
  imageUrl: ..., // optional
  cookTime: ..., // optional
  prepTime: ..., // optional
  servings: ..., // optional
};

// Call the `createNewRecipe()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createNewRecipe(createNewRecipeVars);
// Variables can be defined inline as well.
const { data } = await createNewRecipe({ title: ..., cuisine: ..., instructions: ..., mealType: ..., isPublic: ..., description: ..., imageUrl: ..., cookTime: ..., prepTime: ..., servings: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createNewRecipe(dataConnect, createNewRecipeVars);

console.log(data.recipe_insert);

// Or, you can use the `Promise` API.
createNewRecipe(createNewRecipeVars).then((response) => {
  const data = response.data;
  console.log(data.recipe_insert);
});
```

### Using `CreateNewRecipe`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createNewRecipeRef, CreateNewRecipeVariables } from '@dataconnect/generated';

// The `CreateNewRecipe` mutation requires an argument of type `CreateNewRecipeVariables`:
const createNewRecipeVars: CreateNewRecipeVariables = {
  title: ..., 
  cuisine: ..., 
  instructions: ..., 
  mealType: ..., 
  isPublic: ..., 
  description: ..., // optional
  imageUrl: ..., // optional
  cookTime: ..., // optional
  prepTime: ..., // optional
  servings: ..., // optional
};

// Call the `createNewRecipeRef()` function to get a reference to the mutation.
const ref = createNewRecipeRef(createNewRecipeVars);
// Variables can be defined inline as well.
const ref = createNewRecipeRef({ title: ..., cuisine: ..., instructions: ..., mealType: ..., isPublic: ..., description: ..., imageUrl: ..., cookTime: ..., prepTime: ..., servings: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createNewRecipeRef(dataConnect, createNewRecipeVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.recipe_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.recipe_insert);
});
```

## AddCommentToRecipe
You can execute the `AddCommentToRecipe` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
addCommentToRecipe(vars: AddCommentToRecipeVariables): MutationPromise<AddCommentToRecipeData, AddCommentToRecipeVariables>;

interface AddCommentToRecipeRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: AddCommentToRecipeVariables): MutationRef<AddCommentToRecipeData, AddCommentToRecipeVariables>;
}
export const addCommentToRecipeRef: AddCommentToRecipeRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
addCommentToRecipe(dc: DataConnect, vars: AddCommentToRecipeVariables): MutationPromise<AddCommentToRecipeData, AddCommentToRecipeVariables>;

interface AddCommentToRecipeRef {
  ...
  (dc: DataConnect, vars: AddCommentToRecipeVariables): MutationRef<AddCommentToRecipeData, AddCommentToRecipeVariables>;
}
export const addCommentToRecipeRef: AddCommentToRecipeRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the addCommentToRecipeRef:
```typescript
const name = addCommentToRecipeRef.operationName;
console.log(name);
```

### Variables
The `AddCommentToRecipe` mutation requires an argument of type `AddCommentToRecipeVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface AddCommentToRecipeVariables {
  recipeId: UUIDString;
  text: string;
}
```
### Return Type
Recall that executing the `AddCommentToRecipe` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `AddCommentToRecipeData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface AddCommentToRecipeData {
  comment_insert: Comment_Key;
}
```
### Using `AddCommentToRecipe`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, addCommentToRecipe, AddCommentToRecipeVariables } from '@dataconnect/generated';

// The `AddCommentToRecipe` mutation requires an argument of type `AddCommentToRecipeVariables`:
const addCommentToRecipeVars: AddCommentToRecipeVariables = {
  recipeId: ..., 
  text: ..., 
};

// Call the `addCommentToRecipe()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await addCommentToRecipe(addCommentToRecipeVars);
// Variables can be defined inline as well.
const { data } = await addCommentToRecipe({ recipeId: ..., text: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await addCommentToRecipe(dataConnect, addCommentToRecipeVars);

console.log(data.comment_insert);

// Or, you can use the `Promise` API.
addCommentToRecipe(addCommentToRecipeVars).then((response) => {
  const data = response.data;
  console.log(data.comment_insert);
});
```

### Using `AddCommentToRecipe`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, addCommentToRecipeRef, AddCommentToRecipeVariables } from '@dataconnect/generated';

// The `AddCommentToRecipe` mutation requires an argument of type `AddCommentToRecipeVariables`:
const addCommentToRecipeVars: AddCommentToRecipeVariables = {
  recipeId: ..., 
  text: ..., 
};

// Call the `addCommentToRecipeRef()` function to get a reference to the mutation.
const ref = addCommentToRecipeRef(addCommentToRecipeVars);
// Variables can be defined inline as well.
const ref = addCommentToRecipeRef({ recipeId: ..., text: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = addCommentToRecipeRef(dataConnect, addCommentToRecipeVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.comment_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.comment_insert);
});
```

