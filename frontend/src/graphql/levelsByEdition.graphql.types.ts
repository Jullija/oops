import * as Types from "../__generated__/schema.graphql.types";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type LevelsByEditionQueryVariables = Types.Exact<{
  editionId: Types.Scalars["bigint"]["input"];
}>;

export type LevelsByEditionQuery = {
  __typename?: "query_root";
  editionByPk?: {
    __typename?: "Edition";
    levels: Array<{
      __typename?: "Levels";
      grade: string;
      highest: boolean;
      imageFileId?: string | null;
      label: string;
      levelId: string;
      maximumPoints?: string | null;
      minimumPoints: string;
      name: string;
    }>;
  } | null;
};

export const LevelsByEditionDocument = gql`
  query LevelsByEdition($editionId: bigint!) {
    editionByPk(editionId: $editionId) {
      levels {
        grade
        highest
        imageFileId
        label
        levelId
        maximumPoints
        minimumPoints
        name
      }
    }
  }
`;

/**
 * __useLevelsByEditionQuery__
 *
 * To run a query within a React component, call `useLevelsByEditionQuery` and pass it any options that fit your needs.
 * When your component renders, `useLevelsByEditionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLevelsByEditionQuery({
 *   variables: {
 *      editionId: // value for 'editionId'
 *   },
 * });
 */
export function useLevelsByEditionQuery(
  baseOptions: Apollo.QueryHookOptions<
    LevelsByEditionQuery,
    LevelsByEditionQueryVariables
  > &
    (
      | { variables: LevelsByEditionQueryVariables; skip?: boolean }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<LevelsByEditionQuery, LevelsByEditionQueryVariables>(
    LevelsByEditionDocument,
    options,
  );
}
export function useLevelsByEditionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    LevelsByEditionQuery,
    LevelsByEditionQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    LevelsByEditionQuery,
    LevelsByEditionQueryVariables
  >(LevelsByEditionDocument, options);
}
export function useLevelsByEditionSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    LevelsByEditionQuery,
    LevelsByEditionQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    LevelsByEditionQuery,
    LevelsByEditionQueryVariables
  >(LevelsByEditionDocument, options);
}
export type LevelsByEditionQueryHookResult = ReturnType<
  typeof useLevelsByEditionQuery
>;
export type LevelsByEditionLazyQueryHookResult = ReturnType<
  typeof useLevelsByEditionLazyQuery
>;
export type LevelsByEditionSuspenseQueryHookResult = ReturnType<
  typeof useLevelsByEditionSuspenseQuery
>;
export type LevelsByEditionQueryResult = Apollo.QueryResult<
  LevelsByEditionQuery,
  LevelsByEditionQueryVariables
>;
