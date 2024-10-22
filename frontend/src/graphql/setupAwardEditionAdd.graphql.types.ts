import * as Types from "../__generated__/schema.graphql.types";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type SetupAwardEditionAddMutationVariables = Types.Exact<{
  awardName: Types.Scalars["String"]["input"];
  awardType: Types.Scalars["String"]["input"];
  awardValue: Types.Scalars["Float"]["input"];
  categoryId: Types.Scalars["Int"]["input"];
  description: Types.Scalars["String"]["input"];
}>;

export type SetupAwardEditionAddMutation = {
  __typename?: "mutation_root";
  addAward?: {
    __typename?: "AwardType";
    awardId: string;
    awardName: string;
    awardType: Types.AwardTypeType;
    awardValue: string;
    description: string;
    label: string;
    maxUsages: number;
  } | null;
};

export const SetupAwardEditionAddDocument = gql`
  mutation SetupAwardEditionAdd(
    $awardName: String!
    $awardType: String!
    $awardValue: Float!
    $categoryId: Int!
    $description: String!
  ) {
    addAward(
      awardName: $awardName
      awardType: $awardType
      awardValue: $awardValue
      categoryId: $categoryId
      description: $description
    ) {
      awardId
      awardName
      awardType
      awardValue
      description
      label
      maxUsages
    }
  }
`;
export type SetupAwardEditionAddMutationFn = Apollo.MutationFunction<
  SetupAwardEditionAddMutation,
  SetupAwardEditionAddMutationVariables
>;

/**
 * __useSetupAwardEditionAddMutation__
 *
 * To run a mutation, you first call `useSetupAwardEditionAddMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetupAwardEditionAddMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setupAwardEditionAddMutation, { data, loading, error }] = useSetupAwardEditionAddMutation({
 *   variables: {
 *      awardName: // value for 'awardName'
 *      awardType: // value for 'awardType'
 *      awardValue: // value for 'awardValue'
 *      categoryId: // value for 'categoryId'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useSetupAwardEditionAddMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SetupAwardEditionAddMutation,
    SetupAwardEditionAddMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    SetupAwardEditionAddMutation,
    SetupAwardEditionAddMutationVariables
  >(SetupAwardEditionAddDocument, options);
}
export type SetupAwardEditionAddMutationHookResult = ReturnType<
  typeof useSetupAwardEditionAddMutation
>;
export type SetupAwardEditionAddMutationResult =
  Apollo.MutationResult<SetupAwardEditionAddMutation>;
export type SetupAwardEditionAddMutationOptions = Apollo.BaseMutationOptions<
  SetupAwardEditionAddMutation,
  SetupAwardEditionAddMutationVariables
>;
