import * as Types from "../__generated__/schema.graphql.types";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type FilesQueryVariables = Types.Exact<{
  paths:
    | Array<Types.Scalars["String"]["input"]>
    | Types.Scalars["String"]["input"];
}>;

export type FilesQuery = {
  __typename?: "query_root";
  getFilesGroupedByTypeBySelectedTypes: Array<{
    __typename?: "FileGroupType";
    fileType: string;
    files: Array<{ __typename?: "FileType"; fileId: string }>;
  }>;
};

export const FilesDocument = gql`
  query Files($paths: [String!]!) {
    getFilesGroupedByTypeBySelectedTypes(fileTypes: $paths) {
      fileType
      files {
        fileId
      }
    }
  }
`;

/**
 * __useFilesQuery__
 *
 * To run a query within a React component, call `useFilesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFilesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFilesQuery({
 *   variables: {
 *      paths: // value for 'paths'
 *   },
 * });
 */
export function useFilesQuery(
  baseOptions: Apollo.QueryHookOptions<FilesQuery, FilesQueryVariables> &
    ({ variables: FilesQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<FilesQuery, FilesQueryVariables>(
    FilesDocument,
    options,
  );
}
export function useFilesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<FilesQuery, FilesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<FilesQuery, FilesQueryVariables>(
    FilesDocument,
    options,
  );
}
export function useFilesSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    FilesQuery,
    FilesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<FilesQuery, FilesQueryVariables>(
    FilesDocument,
    options,
  );
}
export type FilesQueryHookResult = ReturnType<typeof useFilesQuery>;
export type FilesLazyQueryHookResult = ReturnType<typeof useFilesLazyQuery>;
export type FilesSuspenseQueryHookResult = ReturnType<
  typeof useFilesSuspenseQuery
>;
export type FilesQueryResult = Apollo.QueryResult<
  FilesQuery,
  FilesQueryVariables
>;
