import { gql } from '@apollo/client';

export const Image = gql`
  fragment Image on Image {
    uri
  }
`;

export const Category = gql`
  fragment Category on Category {
    name
  }
`;

export const Expert = gql`
  fragment Expert on Expert {
    firstName
    lastName
    title
  company }
`;