// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { DeriveReferendum } from '@polkadot/api-derive/types'
import React, { useContext, useEffect, useState } from 'react'

import Referenda from '../../../components/Listings/ReferendaListing'
import { ApiContext } from '../../../context/ApiContext'
import FilteredError from '../../../ui-components/FilteredError'
import Loader from '../../../ui-components/Loader'
import LoadMore from '../../../ui-components/LoadMore'
// import { post_type } from 'src/global/post_types'
// import { useAllReferendaPostsQuery } from '../../../generated/graphql'

interface Props {
  className?: string
  limit: number
}

const ReferendaContainer = ({ className, limit }: Props) => {
  const { api, apiReady } = useContext(ApiContext)

  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState<DeriveReferendum[] | null>(null)
  const [error, setError] = useState<any>(null)

  // const { data, error, loading, refetch } = useAllReferendaPostsQuery({
  //   variables: {
  //     limit: limit * page,
  //     postType: post_type.ON_CHAIN
  //   }
  // })
  //
  // useEffect(() => {
  //   refetch()
  // }, [refetch])

  useEffect(() => {
    if (!api || !apiReady) return

    let unsubscribe: () => void

    api.derive.democracy
      .referendumsActive((referendums) => {
        // Only show (n * page)-limit referendum items
        setData(referendums.slice(0, limit * page))
        setLoading(false)
      })
      .then((unsub) => {
        unsubscribe = unsub
      })
      .catch((e) => {
        console.error(e)
        setError(e)
      })

    return () => unsubscribe && unsubscribe()
  }, [api, apiReady, limit, page])

  const loadMore = () => {
    setLoading(true)
    setPage(page + 1)
  }

  if (error?.message) return <FilteredError text={error.message} />

  if (data)
    return (
      <>
        <Referenda className={className} data={data} />
        {/*{(loading || data.posts.length === limit * page) && (*/}
        {(loading || data.length === limit * page) && (
          <LoadMore onClick={loadMore} loading={loading} />
        )}
      </>
    )

  return <Loader />
}

export default ReferendaContainer
