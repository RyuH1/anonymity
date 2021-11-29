// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { DeriveReferendum } from '@polkadot/api-derive/types'
import styled from '@xstyled/styled-components'
import React from 'react'
import { Link } from 'react-router-dom'
import NothingFoundCard from 'src/ui-components/NothingFoundCard'
import uniqid from 'uniqid'

import GovernanceCard from '../GovernanceCard'
// import { LatestReferendaPostsQuery } from '../../generated/graphql'

interface Props {
  className?: string
  // data: LatestReferendaPostsQuery
  data: DeriveReferendum[] | null
}

const Referenda = ({ className, data }: Props) => {
  // const noPost = !data.posts || !data.posts.length
  // const atLeastOneCurrentReferendum = data.posts.some((post) => {
  //   if (post.onchain_link?.onchain_referendum.length) {
  //     // this breaks the loop as soon as
  //     // we find a post that has a referendum.
  //     return true
  //   }
  //   return false
  // })

  const atLeastOneCurrentReferendum = data && data.length

  // if (!atLeastOneCurrentReferendum || noPost)
  if (!atLeastOneCurrentReferendum) {
    return (
      <NothingFoundCard className={className} text="There are currently no active referenda." />
    )
  }

  return (
    <ul className={`${className} referenda__list`}>
      {/* eslint-disable max-len */}
      {/*{data.posts.map((post) => {*/}
      {/*  const onchainId = post.onchain_link?.onchain_referendum_id*/}
      {/**/}
      {/*  return (*/}
      {/*    !!post?.author?.username &&*/}
      {/*    !!post.onchain_link?.onchain_referendum.length && (*/}
      {/*      <li key={post.id} className="referenda__item">*/}
      {/*        {*/}
      {/*          <Link to={`/referendum/${onchainId}`}>*/}
      {/*            <GovernanceCard*/}
      {/*              address={post.onchain_link.proposer_address}*/}
      {/*              comments={*/}
      {/*                post.comments_aggregate.aggregate?.count*/}
      {/*                  ? post.comments_aggregate.aggregate.count.toString()*/}
      {/*                  : 'no'*/}
      {/*              }*/}
      {/*              method={post.onchain_link.onchain_referendum[0]?.preimage?.method}*/}
      {/*              onchainId={onchainId}*/}
      {/*              status={post.onchain_link.onchain_referendum[0]?.referendumStatus?.[0].status}*/}
      {/*              end={post.onchain_link.onchain_referendum[0]?.end}*/}
      {/*              title={post.title}*/}
      {/*              topic={post.topic.name}*/}
      {/*            />*/}
      {/*          </Link>*/}
      {/*        }*/}
      {/*      </li>*/}
      {/*    )*/}
      {/*  )*/}
      {/*})}*/}
      {/* eslint-enable max-len */}
      {data.map((referendum) => {
        const { index, image, status } = referendum

        const onchainId = index.toNumber()
        const address = image && image.proposer.toString()
        const method = image && image.proposal && image.proposal.method
        const end = status && Number(status.end)

        // console.log('proposer', address)
        // console.log('status', referendum.status)
        // console.log('referendum', referendum)
        // console.log('proposal', referendum.image?.proposal?.callIndex.toString())

        if (!address) return null

        return (
          <li key={uniqid('referendum')} className="referenda__item">
            <Link to={`/referendum/${onchainId}`}>
              <GovernanceCard address={address} method={method} onchainId={onchainId} end={end} />
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default styled(Referenda)`
  margin-block-start: 0;
  margin-block-end: 0;

  li {
    list-style-type: none;
  }

  .referenda__item {
    margin: 0 0 1rem 0;
    a:hover {
      text-decoration: none;
    }
  }
`
