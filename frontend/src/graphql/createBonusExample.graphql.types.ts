import * as Types from '../__generated__/schema.graphql.types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CreateBonusMyCustomMutationVariables = Types.Exact<{
  studentId: Types.Scalars['Int']['input'];
  teacherId: Types.Scalars['Int']['input'];
  howMany: Types.Scalars['Int']['input'];
  subcategoryId: Types.Scalars['Int']['input'];
  awardId: Types.Scalars['Int']['input'];
}>;


export type CreateBonusMyCustomMutation = { __typename?: 'mutation_root', createBonus?: { __typename?: 'Bonus', bonusId?: number | null, points?: { __typename?: 'Points', pointsId?: number | null, howMany?: number | null, userId?: { __typename?: 'Users', userId?: number | null, nick?: string | null } | null, fromWho?: { __typename?: 'Users', userId?: number | null, nick?: string | null } | null, subcategory?: { __typename?: 'Subcategories', subcategoryId?: number | null, subcategoryName?: string | null } | null } | null, award?: { __typename?: 'ChestAward', awardId?: number | null, name?: string | null, bonus?: number | null } | null, subcategory?: { __typename?: 'Subcategories', subcategoryId?: number | null, subcategoryName?: string | null } | null } | null };


export const CreateBonusMyCustomDocument = gql`
    mutation CreateBonusMyCustom($studentId: Int!, $teacherId: Int!, $howMany: Int!, $subcategoryId: Int!, $awardId: Int!) {
  createBonus(
    input: {studentId: $studentId, teacherId: $teacherId, howMany: $howMany, subcategoryId: $subcategoryId, awardId: $awardId}
  ) {
    bonusId
    points {
      pointsId
      userId {
        userId
        nick
      }
      fromWho {
        userId
        nick
      }
      howMany
      subcategory {
        subcategoryId
        subcategoryName
      }
    }
    award {
      awardId
      name
      bonus
    }
    subcategory {
      subcategoryId
      subcategoryName
    }
  }
}
    `;
export type CreateBonusMyCustomMutationFn = Apollo.MutationFunction<CreateBonusMyCustomMutation, CreateBonusMyCustomMutationVariables>;

/**
 * __useCreateBonusMyCustomMutation__
 *
 * To run a mutation, you first call `useCreateBonusMyCustomMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBonusMyCustomMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBonusMyCustomMutation, { data, loading, error }] = useCreateBonusMyCustomMutation({
 *   variables: {
 *      studentId: // value for 'studentId'
 *      teacherId: // value for 'teacherId'
 *      howMany: // value for 'howMany'
 *      subcategoryId: // value for 'subcategoryId'
 *      awardId: // value for 'awardId'
 *   },
 * });
 */
export function useCreateBonusMyCustomMutation(baseOptions?: Apollo.MutationHookOptions<CreateBonusMyCustomMutation, CreateBonusMyCustomMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateBonusMyCustomMutation, CreateBonusMyCustomMutationVariables>(CreateBonusMyCustomDocument, options);
      }
export type CreateBonusMyCustomMutationHookResult = ReturnType<typeof useCreateBonusMyCustomMutation>;
export type CreateBonusMyCustomMutationResult = Apollo.MutationResult<CreateBonusMyCustomMutation>;
export type CreateBonusMyCustomMutationOptions = Apollo.BaseMutationOptions<CreateBonusMyCustomMutation, CreateBonusMyCustomMutationVariables>;