import * as Types from "../__generated__/schema.graphql.types";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type AllCategoriesQueryVariables = Types.Exact<{ [key: string]: never }>;

export type AllCategoriesQuery = {
  __typename?: "query_root";
  categories: Array<{
    __typename?: "Categories";
    categoryId: string;
    categoryName: string;
    categoryEditions: Array<{
      __typename?: "CategoryEdition";
      editionId: string;
    }>;
    subcategories: Array<{
      __typename?: "Subcategories";
      editionId: string;
      subcategoryId: string;
      subcategoryName: string;
      maxPoints: string;
      ordinalNumber: number;
    }>;
  }>;
};

export const AllCategoriesDocument = gql`
  query AllCategories {
    categories(orderBy: { categoryName: ASC }) {
      categoryId
      categoryName
      categoryEditions {
        editionId
      }
      subcategories(orderBy: { ordinalNumber: ASC }) {
        editionId
        subcategoryId
        subcategoryName
        maxPoints
        ordinalNumber
      }
    }
  }
`;

/**
 * __useAllCategoriesQuery__
 *
 * To run a query within a React component, call `useAllCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllCategoriesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    AllCategoriesQuery,
    AllCategoriesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllCategoriesQuery, AllCategoriesQueryVariables>(
    AllCategoriesDocument,
    options,
  );
}
export function useAllCategoriesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AllCategoriesQuery,
    AllCategoriesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AllCategoriesQuery, AllCategoriesQueryVariables>(
    AllCategoriesDocument,
    options,
  );
}
export function useAllCategoriesSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    AllCategoriesQuery,
    AllCategoriesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    AllCategoriesQuery,
    AllCategoriesQueryVariables
  >(AllCategoriesDocument, options);
}
export type AllCategoriesQueryHookResult = ReturnType<
  typeof useAllCategoriesQuery
>;
export type AllCategoriesLazyQueryHookResult = ReturnType<
  typeof useAllCategoriesLazyQuery
>;
export type AllCategoriesSuspenseQueryHookResult = ReturnType<
  typeof useAllCategoriesSuspenseQuery
>;
export type AllCategoriesQueryResult = Apollo.QueryResult<
  AllCategoriesQuery,
  AllCategoriesQueryVariables
>;
