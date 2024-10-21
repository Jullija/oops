import * as Types from "../__generated__/schema.graphql.types";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type SetupSubcategoriesQueryVariables = Types.Exact<{
  [key: string]: never;
}>;

export type SetupSubcategoriesQuery = {
  __typename?: "query_root";
  subcategories: Array<{
    __typename?: "Subcategories";
    categoryId: string;
    editionId?: string | null;
    label: string;
    maxPoints: string;
    ordinalNumber: number;
    subcategoryId: string;
    subcategoryName: string;
  }>;
};

export const SetupSubcategoriesDocument = gql`
  query SetupSubcategories {
    subcategories {
      categoryId
      editionId
      label
      maxPoints
      ordinalNumber
      subcategoryId
      subcategoryName
    }
  }
`;

/**
 * __useSetupSubcategoriesQuery__
 *
 * To run a query within a React component, call `useSetupSubcategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSetupSubcategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSetupSubcategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useSetupSubcategoriesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    SetupSubcategoriesQuery,
    SetupSubcategoriesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    SetupSubcategoriesQuery,
    SetupSubcategoriesQueryVariables
  >(SetupSubcategoriesDocument, options);
}
export function useSetupSubcategoriesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SetupSubcategoriesQuery,
    SetupSubcategoriesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    SetupSubcategoriesQuery,
    SetupSubcategoriesQueryVariables
  >(SetupSubcategoriesDocument, options);
}
export function useSetupSubcategoriesSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    SetupSubcategoriesQuery,
    SetupSubcategoriesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    SetupSubcategoriesQuery,
    SetupSubcategoriesQueryVariables
  >(SetupSubcategoriesDocument, options);
}
export type SetupSubcategoriesQueryHookResult = ReturnType<
  typeof useSetupSubcategoriesQuery
>;
export type SetupSubcategoriesLazyQueryHookResult = ReturnType<
  typeof useSetupSubcategoriesLazyQuery
>;
export type SetupSubcategoriesSuspenseQueryHookResult = ReturnType<
  typeof useSetupSubcategoriesSuspenseQuery
>;
export type SetupSubcategoriesQueryResult = Apollo.QueryResult<
  SetupSubcategoriesQuery,
  SetupSubcategoriesQueryVariables
>;
