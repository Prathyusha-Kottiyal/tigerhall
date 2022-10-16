import { gql } from "@apollo/client";
import { Image, Category, Expert } from './fragments';

export const CONTENT_CARD_QUERY = gql`
${Image}
${Category}
${Expert}
{
    contentCards(filter: {limit: 20, keywords: "", types: [PODCAST]}) {
      edges {
        ... on Podcast {
        name image {
        ...Image }
                categories {
                    ...Category
        } experts {
        ...Expert }
        } }
            meta {
                total
                limit
        offset }
        } }
`;
