// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { DeriveReferendum } from '@polkadot/api-derive/types'
import BN from 'bn.js'
import React, { useContext, useEffect, useState } from 'react'
import { useRouter } from 'src/hooks'

import Post from '../../components/Post/Post'
import { ApiContext } from '../../context/ApiContext'
// import { useReferendumPostAndCommentsQuery } from '../../generated/graphql'
import FilteredError from '../../ui-components/FilteredError'
import Loader from '../../ui-components/Loader'

const ReferendumPost = () => {
  const { query } = useRouter()
  const id = query['id']
  const idNumber = Number(id) || 0
  // const { data, error, refetch } = useReferendumPostAndCommentsQuery({
  //   variables: { id: idNumber }
  // })

  const { api, apiReady } = useContext(ApiContext)
  const [error, setError] = useState<any>(null)
  const [data, setData] = useState<DeriveReferendum | null>(null)
  console.debug(data)

  useEffect(() => {
    if (idNumber === 0) {
      setError({ message: "Sorry, we couldn't find any referendum with this id" })
      return
    }

    if (!api || !apiReady) return

    api.derive.democracy
      .referendumsInfo([new BN(idNumber)])
      .then((referendumInfo) => {
        setData(referendumInfo[0])
      })
      .catch((e) => {
        console.error(e)
        setError(e)
      })

    // let refFinUnsub: () => void
    // api.derive.democracy
    //   .referendumsFinished((refFin) => {
    //     const reffin0 = refFin[0]
    //     console.log(refFin)
    //     api.query.democracy
    //       .preimages(reffin0.hash)
    //       .then((opt) => console.log(opt))
    //       .catch((e) => console.error(e))
    //   })
    //   .then((unsub) => {
    //     refFinUnsub = unsub
    //   })
    //   .catch((e) => {
    //     console.error(e)
    //   })
    //
    // return () => refFinUnsub && refFinUnsub()
  }, [api, apiReady, idNumber])

  if (error?.message) return <FilteredError text={error.message} />

  if (data) return <Post data={data} isReferendum refetch={undefined} />

  return <Loader />
}

export default ReferendumPost
