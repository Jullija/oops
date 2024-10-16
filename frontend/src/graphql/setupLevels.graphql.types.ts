import * as Types from "../__generated__/schema.graphql.types";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type SetupLevelsQueryVariables = Types.Exact<{ [key: string]: never }>;

export type SetupLevelsQuery = {
  __typename?: "query_root";
  levels: Array<{
    __typename?: "Levels";
    editionId: string;
    grade: string;
    highest: boolean;
    imageFileId?: string | null;
    label: string;
    levelId: string;
    maximumPoints: string;
    minimumPoints: string;
    name: string;
    ordinalNumber: number;
  }>;
};

export const SetupLevelsDocument = gql`
  query setupLevels {
    levels {
      editionId
      grade
      highest
      imageFileId
      label
      levelId
      maximumPoints
      minimumPoints
      name
      ordinalNumber
    }
  }
`;

/**
 * __useSetupLevelsQuery__
 *
 * To run a query within a React component, call `useSetupLevelsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSetupLevelsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSetupLevelsQuery({
 *   variables: {
 *   },
 * });
 */
export function useSetupLevelsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    SetupLevelsQuery,
    SetupLevelsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<SetupLevelsQuery, SetupLevelsQueryVariables>(
    SetupLevelsDocument,
    options,
  );
}
export function useSetupLevelsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SetupLevelsQuery,
    SetupLevelsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<SetupLevelsQuery, SetupLevelsQueryVariables>(
    SetupLevelsDocument,
    options,
  );
}
export function useSetupLevelsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    SetupLevelsQuery,
    SetupLevelsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<SetupLevelsQuery, SetupLevelsQueryVariables>(
    SetupLevelsDocument,
    options,
  );
}
export type SetupLevelsQueryHookResult = ReturnType<typeof useSetupLevelsQuery>;
export type SetupLevelsLazyQueryHookResult = ReturnType<
  typeof useSetupLevelsLazyQuery
>;
export type SetupLevelsSuspenseQueryHookResult = ReturnType<
  typeof useSetupLevelsSuspenseQuery
>;
export type SetupLevelsQueryResult = Apollo.QueryResult<
  SetupLevelsQuery,
  SetupLevelsQueryVariables
>;
