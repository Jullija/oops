import * as Types from "../__generated__/schema.graphql.types";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type EditPointsMutationVariables = Types.Exact<{
  pointsId: Types.Scalars["Int"]["input"];
  teacherId: Types.Scalars["Int"]["input"];
  value: Types.Scalars["Float"]["input"];
}>;

export type EditPointsMutation = {
  __typename?: "mutation_root";
  editPoints?: { __typename?: "PointType"; value: number } | null;
};

export const EditPointsDocument = gql`
  mutation EditPoints($pointsId: Int!, $teacherId: Int!, $value: Float!) {
    editPoints(pointsId: $pointsId, updatedById: $teacherId, value: $value) {
      value
    }
  }
`;
export type EditPointsMutationFn = Apollo.MutationFunction<
  EditPointsMutation,
  EditPointsMutationVariables
>;

/**
 * __useEditPointsMutation__
 *
 * To run a mutation, you first call `useEditPointsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditPointsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editPointsMutation, { data, loading, error }] = useEditPointsMutation({
 *   variables: {
 *      pointsId: // value for 'pointsId'
 *      teacherId: // value for 'teacherId'
 *      value: // value for 'value'
 *   },
 * });
 */
export function useEditPointsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    EditPointsMutation,
    EditPointsMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<EditPointsMutation, EditPointsMutationVariables>(
    EditPointsDocument,
    options,
  );
}
export type EditPointsMutationHookResult = ReturnType<
  typeof useEditPointsMutation
>;
export type EditPointsMutationResult =
  Apollo.MutationResult<EditPointsMutation>;
export type EditPointsMutationOptions = Apollo.BaseMutationOptions<
  EditPointsMutation,
  EditPointsMutationVariables
>;
