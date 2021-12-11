(this["webpackJsonpgovernance-platform"]=this["webpackJsonpgovernance-platform"]||[]).push([[0],{1147:function(e,t){},1148:function(e,t){},1149:function(e,t){},1245:function(e,t,o){},1246:function(e,t,o){"use strict";o.r(t);var n=o(2),a=o.n(n),s=o(142),r=o.n(s),i=o(48),c=o(36),d=o(53),l=o(1300),m=o(67),u=o(645),h=o(130),p=o(77),b=o(647),g=o(644),j=o(643),y=o(143),f=o.n(y);const x={KUSAMA:"kusama",POLKADOT:"polkadot"},_={[x.KUSAMA]:{blockTime:6e3,ss58Format:2,tokenDecimals:12,tokenSymbol:"KSM"},[x.POLKADOT]:{blockTime:6e3,ss58Format:0,tokenDecimals:18,tokenSymbol:"DOT"}};var O=function(){const e="polkadot";const t=Object.values(x);if(!t.includes(e))throw Error(`REACT_APP_NETWORK environment variable must be one of ${t} `);return e};function v(e){const t=e.replace(/"|{|}/g,"");return t.length>1||t[0]?t.split(","):[]}const w=O(),S=()=>localStorage.getItem("Authorization")||null,C=(e,t)=>{e&&(e=>{localStorage.setItem("Authorization",e)})(e);try{const o=e&&f.a.decode(e);if(o&&o.sub){const{sub:e,username:n,email:a,email_verified:s,notification:r,"https://hasura.io/jwt/claims":i,web3signup:c}=o;t.setUserDetailsContextState((t=>{let o="",d="";return w===x.KUSAMA&&(o=i["x-hasura-kusama"],d=i["x-hasura-kusama-default"]),w===x.POLKADOT&&(o=i["x-hasura-polkadot"],d=i["x-hasura-polkadot-default"]),{...t,addresses:v(o),defaultAddress:d,email:a,email_verified:s,id:Number(e),notification:r,username:n,web3signup:c}}))}}catch(o){console.error(o)}},k=e=>{localStorage.removeItem("Authorization"),e((e=>({...e,addresses:[],defaultAddress:null,email:null,email_verified:!1,id:null,notification:null,username:null,web3signup:!1})))};var $=o(1);const A=O(),N={addresses:[],defaultAddress:"",email:null,email_verified:!1,id:null,notification:{newProposal:!1,ownProposal:!0,postCreated:!0,postParticipated:!0},picture:null,setUserDetailsContextState:()=>{throw new Error("setUserDetailsContextState function must be overridden")},username:null,web3signup:!1},E=S();try{const e=E&&f.a.decode(E);if(e&&e.sub){const{sub:t,username:o,email:n,email_verified:a,notification:s,"https://hasura.io/jwt/claims":r,web3signup:i}=e;t&&(N.id=Number(t)),o&&(N.username=o),n&&(N.email=n),s&&(N.notification=s),N.email_verified=a||!1,N.addresses=v(r[`x-hasura-${A}`]),N.defaultAddress=r[`x-hasura-${A}-default`],N.web3signup=i||!1}}catch{}const D=Object(n.createContext)(N),I=({children:e})=>{const[t,o]=Object(n.useState)(N);return Object($.jsx)(D.Provider,{value:{...t,setUserDetailsContextState:o},children:e})},P=()=>fetch(`${Object({NODE_ENV:"production",PUBLIC_URL:"/polkadot-hackathon",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_WS_PROVIDER:"wss://hackathon-api.ata.network",REACT_APP_NETWORK:"polkadot"}).REACT_APP_HASURA_GRAPHQL_URL}`,{body:JSON.stringify({operationName:null,query:"query get_new_token { token { token }}"}),credentials:"same-origin",headers:{"Content-Type":"application/json"},method:"POST"}),T=()=>async e=>{if(e.ok){const t=await e.json();if(t&&t.data)return t.data.token;throw new Error("The auth server did not answer with an expected refreshed token.")}throw new Error("The auth server did not answer successfully to the refresh token call.")},R=()=>{const e=localStorage.getItem("Authorization")||null;if(e){const t=f.a.decode(e);return!!t&&t.exp>Date.now()/1e3}return!0},F=Object(b.a)((()=>{const e=S();return e?{headers:{authorization:`Bearer ${e}`}}:null}));var q=({children:e})=>{const t=Object(n.useContext)(D),o=Object({NODE_ENV:"production",PUBLIC_URL:"/polkadot-hackathon",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_WS_PROVIDER:"wss://hackathon-api.ata.network",REACT_APP_NETWORK:"polkadot"}).REACT_APP_JWT_PUBLIC_KEY,a=new g.a({uri:Object({NODE_ENV:"production",PUBLIC_URL:"/polkadot-hackathon",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_WS_PROVIDER:"wss://hackathon-api.ata.network",REACT_APP_NETWORK:"polkadot"}).REACT_APP_HASURA_GRAPHQL_URL}),s=new j.a({accessTokenField:"token",fetchAccessToken:P,handleError:e=>{k(t.setUserDetailsContextState),console.error("There has been a problem getting a new access token: ",e)},handleFetch:e=>{try{e&&o&&f.a.verify(e,o),C(e,t)}catch(n){console.log("Invalid jwt received.",n)}},handleResponse:T,isTokenValidOrUndefined:R}),r=p.a.from([s,F,a]),i=new h.a({cache:new u.a,link:r});return Object($.jsx)(m.a,{client:i,children:e})},L=o(7),z=o(167),U=o(1311);var W=Object(L.b)((({className:e})=>Object($.jsx)("footer",{className:e,children:Object($.jsxs)(U.a,{children:[Object($.jsxs)(U.a.Item,{children:["\xa9 ",z.utc().year()," Premiurly"]}),Object($.jsx)(U.a.Item,{as:c.b,to:"/terms-and-conditions",children:"Terms & conditions"}),Object($.jsx)(U.a.Item,{as:c.b,to:"/terms-of-website",children:"Terms of website"}),Object($.jsx)(U.a.Item,{as:c.b,to:"/privacy",children:"Privacy policy"}),Object($.jsx)(U.a.Item,{children:Object($.jsx)("a",{href:"https://github.com/premiurly/polkassembly/issues",target:"blank",children:"Report an issue"})})]})})))`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 4rem;

  .ui.menu {
    background-color: black_full;
    font-family: font_default;
    padding: 1rem 3rem;
    border-radius: 0rem;
    height: 100%;

    a {
      color: ${({theme:e})=>e.colors.grey_secondary}
      &:hover {
        color: white;
      }
    }

    .item {
      color: ${({theme:e})=>e.colors.grey_secondary}
      font-size: ${({theme:e})=>e.fontSizes.sm};
      padding: 1rem;
      &:hover {
        color: white;
      }
    }

    @media only screen and (max-width: 768px) {
      flex-direction: column;
      height: auto;
    }
  }
`,M=o(589);const B=O(),G={description:`polkassembly, discussion platform for ${B} governance`,image:`https://${B}.polkassembly.io/static/media/polkassembly-logo.aa0e69ae.png`,setMetaContextState:()=>{throw new Error("setMetaContextState function must be overridden")},title:`Polkassembly | ${B}`,type:"website",url:`https://${B}.polkassembly.io/`},V=Object(n.createContext)(G),H=({children:e})=>{const[t,o]=Object(n.useState)(G);return Object($.jsx)(V.Provider,{value:{...t,setMetaContextState:o},children:e})};var Y=()=>{const{description:e,image:t,title:o,type:a,url:s}=Object(n.useContext)(V);return Object($.jsxs)(M.a,{children:[Object($.jsx)("title",{children:o}),Object($.jsx)("meta",{name:"description",content:e}),Object($.jsx)("meta",{property:"og:title",content:o}),Object($.jsx)("meta",{property:"og:type",content:a}),Object($.jsx)("meta",{property:"og:url",content:s}),Object($.jsx)("meta",{property:"og:image",content:t}),Object($.jsx)("meta",{property:"og:description",content:e})]})},K=o(279),J=o(147),Q=o(1318),X=o(1319),Z=o(1308),ee=o(608),te=o(223),oe=o.p+"static/media/polkadot-logo.35926d41.svg";const ne=O(),ae=L.b.div`
  display: flex;
  align-items: center;
  text-transform: capitalize;

  img {
    width: 3rem;
    border-radius: 50%;
    margin-right: 0.5rem;
  }
`,se=({showNetwork:e})=>Object($.jsxs)(ae,{children:[Object($.jsx)("img",{src:e===x.KUSAMA?"data:image/gif;base64,R0lGODlhgACAAOMPAAAAAP///0ADIkcyPWddYtcMcp2Ym5R0hcjFx+zq68+TsvGv0uZlp9g0ifrS5jczMyH+EUNyZWF0ZWQgd2l0aCBHSU1QACH5BAEDAA8ALAAAAACAAIAAAAT+EMhJq7046827/2AojmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/C4fE6vKwmIPOIgsIfwAYGCCQR+HQMIgoqCBoYaBAmLkgEIA44WkJOTCZaXEgeaoYSeBqGmnIaIppoJBp1Ar0EDBpGriwl8E30+A7G8tLaSjRW7PcW8CLXBisNEvjuzysuCCEcEBs06wNOShXSZ3JLVc6rhkwdzB9Lmg89r5ezicdvx3W+A9ZPjbNH5mtlpwPmThEoNvIHy1KhDyMqdmIMMFwEkQy/ion1l8FlMaKbiRkbmZwR+HOSNDMSRrY6NuYbNI8IEld4l+xjToMuBCEqi6bcx57ub/nCtEQA0qMMxRUUlgJlnnSB0aRZOg2mAwKtZiQi+OApEqi2qDgcQYJk1EEYWvYocKGsKQdU/is6y0PlDIyu3XDcoS/DibRC7BN2qHAFKEF0ueJyadcWiLILBWk62ylvC8RdwS1sddiF1IpYD2A70ggwDnFxPGwbU8om6g123rTUgcmsAtAHBsXPr3s27d40BAgRQdiGgQHDhx30rX868ufPn0KNLn069uvXr2LNr3869u/fv4MOLH0++vPnz6NPviAAAOw==":oe,alt:e}),e]}),re=[{children:Object($.jsx)(se,{showNetwork:x.KUSAMA}),value:x.KUSAMA},{children:Object($.jsx)(se,{showNetwork:x.POLKADOT}),value:x.POLKADOT}];var ie=Object(L.b)((({className:e})=>Object($.jsx)(te.a,{className:e,pointing:"top",onChange:(e,t)=>(t.value===ne||(window.location.href=`https://${t.value}.polkassembly.io`),null),options:re,trigger:Object($.jsx)(se,{showNetwork:ne}),value:ne})))`
  color: ${({theme:e})=>e.colors.grey_secondary};
  display: flex !important;
  align-items: center;
  &:hover {
    color: white;
  }
  margin: 0 1.2rem;
`,ce=o(15),de=o(12);let le,me,ue,he,pe,be,ge,je,ye,fe,xe,_e,Oe,ve,we,Se,Ce,ke,$e,Ae,Ne,Ee,De,Ie,Pe,Te,Re,Fe,qe,Le,ze,Ue,We,Me,Be,Ge,Ve,He,Ye,Ke,Je,Qe,Xe,Ze,et,tt,ot,nt,at,st,rt,it,ct,dt,lt,mt,ut,ht,pt,bt,gt,jt,yt,ft,xt,_t,Ot,vt,wt,St,Ct;!function(e){e.IdAsc="id_ASC",e.IdDesc="id_DESC",e.IdentifierAsc="identifier_ASC",e.IdentifierDesc="identifier_DESC",e.IndexAsc="index_ASC",e.IndexDesc="index_DESC",e.StartFromAsc="startFrom_ASC",e.StartFromDesc="startFrom_DESC"}(le||(le={})),function(e){e.AuthoredByAsc="authoredBy_ASC",e.AuthoredByDesc="authoredBy_DESC",e.HashAsc="hash_ASC",e.HashDesc="hash_DESC",e.IdAsc="id_ASC",e.IdDesc="id_DESC",e.NumberAsc="number_ASC",e.NumberDesc="number_DESC",e.StartDateTimeAsc="startDateTime_ASC",e.StartDateTimeDesc="startDateTime_DESC"}(me||(me={})),function(e){e.BeneficiaryAsc="beneficiary_ASC",e.BeneficiaryDesc="beneficiary_DESC",e.BondAsc="bond_ASC",e.BondDesc="bond_DESC",e.BountyIdAsc="bountyId_ASC",e.BountyIdDesc="bountyId_DESC",e.CuratorDepositAsc="curatorDeposit_ASC",e.CuratorDepositDesc="curatorDeposit_DESC",e.CuratorAsc="curator_ASC",e.CuratorDesc="curator_DESC",e.FeeAsc="fee_ASC",e.FeeDesc="fee_DESC",e.IdAsc="id_ASC",e.IdDesc="id_DESC",e.ProposerAsc="proposer_ASC",e.ProposerDesc="proposer_DESC",e.ValueAsc="value_ASC",e.ValueDesc="value_DESC"}(ue||(ue={})),function(e){e.IdAsc="id_ASC",e.IdDesc="id_DESC",e.StatusAsc="status_ASC",e.StatusDesc="status_DESC",e.UniqueStatusAsc="uniqueStatus_ASC",e.UniqueStatusDesc="uniqueStatus_DESC"}(he||(he={})),function(e){e.Private="PRIVATE",e.Public="PUBLIC"}(pe||(pe={})),function(e){e.AddressAsc="address_ASC",e.AddressDesc="address_DESC",e.IdAsc="id_ASC",e.IdDesc="id_DESC"}(be||(be={})),function(e){e.IdAsc="id_ASC",e.IdDesc="id_DESC"}(ge||(ge={})),function(e){e.IdAsc="id_ASC",e.IdDesc="id_DESC",e.IndexAsc="index_ASC",e.IndexDesc="index_DESC",e.TotalPointsAsc="totalPoints_ASC",e.TotalPointsDesc="totalPoints_DESC"}(je||(je={})),function(e){e.AuthorityIdAsc="authorityId_ASC",e.AuthorityIdDesc="authorityId_DESC",e.IdAsc="id_ASC",e.IdDesc="id_DESC"}(ye||(ye={})),function(e){e.AuthorAsc="author_ASC",e.AuthorDesc="author_DESC",e.IdAsc="id_ASC",e.IdDesc="id_DESC",e.MemberCountAsc="memberCount_ASC",e.MemberCountDesc="memberCount_DESC",e.MetaDescriptionAsc="metaDescription_ASC",e.MetaDescriptionDesc="metaDescription_DESC",e.MethodAsc="method_ASC",e.MethodDesc="method_DESC",e.MotionProposalHashAsc="motionProposalHash_ASC",e.MotionProposalHashDesc="motionProposalHash_DESC",e.MotionProposalIdAsc="motionProposalId_ASC",e.MotionProposalIdDesc="motionProposalId_DESC",e.PreimageHashAsc="preimageHash_ASC",e.PreimageHashDesc="preimageHash_DESC",e.SectionAsc="section_ASC",e.SectionDesc="section_DESC"}(fe||(fe={})),function(e){e.IdAsc="id_ASC",e.IdDesc="id_DESC",e.NameAsc="name_ASC",e.NameDesc="name_DESC",e.ValueAsc="value_ASC",e.ValueDesc="value_DESC"}(xe||(xe={})),function(e){e.IdAsc="id_ASC",e.IdDesc="id_DESC",e.StatusAsc="status_ASC",e.StatusDesc="status_DESC",e.UniqueStatusAsc="uniqueStatus_ASC",e.UniqueStatusDesc="uniqueStatus_DESC"}(_e||(_e={})),function(e){e.Created="CREATED",e.Deleted="DELETED",e.Updated="UPDATED"}(Oe||(Oe={})),function(e){e.IdAsc="id_ASC",e.IdDesc="id_DESC",e.NominatorControllerAsc="nominatorController_ASC",e.NominatorControllerDesc="nominatorController_DESC",e.NominatorStashAsc="nominatorStash_ASC",e.NominatorStashDesc="nominatorStash_DESC",e.StakedAmountAsc="stakedAmount_ASC",e.StakedAmountDesc="stakedAmount_DESC",e.ValidatorControllerAsc="validatorController_ASC",e.ValidatorControllerDesc="validatorController_DESC",e.ValidatorStashAsc="validatorStash_ASC",e.ValidatorStashDesc="validatorStash_DESC"}(ve||(ve={})),function(e){e.IdAsc="id_ASC",e.IdDesc="id_DESC",e.OwnAsc="own_ASC",e.OwnDesc="own_DESC",e.TotalAsc="total_ASC",e.TotalDesc="total_DESC",e.ValidatorIdAsc="validatorId_ASC",e.ValidatorIdDesc="validatorId_DESC"}(we||(we={})),function(e){e.IdAsc="id_ASC",e.IdDesc="id_DESC",e.NameAsc="name_ASC",e.NameDesc="name_DESC",e.ValueAsc="value_ASC",e.ValueDesc="value_DESC"}(Se||(Se={})),function(e){e.AuthorAsc="author_ASC",e.AuthorDesc="author_DESC",e.DepositAmountAsc="depositAmount_ASC",e.DepositAmountDesc="depositAmount_DESC",e.HashAsc="hash_ASC",e.HashDesc="hash_DESC",e.IdAsc="id_ASC",e.IdDesc="id_DESC",e.MetaDescriptionAsc="metaDescription_ASC",e.MetaDescriptionDesc="metaDescription_DESC",e.MethodAsc="method_ASC",e.MethodDesc="method_DESC",e.SectionAsc="section_ASC",e.SectionDesc="section_DESC"}(Ce||(Ce={})),function(e){e.IdAsc="id_ASC",e.IdDesc="id_DESC",e.StatusAsc="status_ASC",e.StatusDesc="status_DESC"}(ke||(ke={})),function(e){e.Default="default"}($e||($e={})),function(e){e.AuthorAsc="author_ASC",e.AuthorDesc="author_DESC",e.DepositAmountAsc="depositAmount_ASC",e.DepositAmountDesc="depositAmount_DESC",e.IdAsc="id_ASC",e.IdDesc="id_DESC",e.PreimageHashAsc="preimageHash_ASC",e.PreimageHashDesc="preimageHash_DESC",e.ProposalIdAsc="proposalId_ASC",e.ProposalIdDesc="proposalId_DESC"}(Ae||(Ae={})),function(e){e.IdAsc="id_ASC",e.IdDesc="id_DESC",e.StatusAsc="status_ASC",e.StatusDesc="status_DESC",e.UniqueStatusAsc="uniqueStatus_ASC",e.UniqueStatusDesc="uniqueStatus_DESC"}(Ne||(Ne={})),function(e){e.DelayAsc="delay_ASC",e.DelayDesc="delay_DESC",e.EndAsc="end_ASC",e.EndDesc="end_DESC",e.IdAsc="id_ASC",e.IdDesc="id_DESC",e.PreimageHashAsc="preimageHash_ASC",e.PreimageHashDesc="preimageHash_DESC",e.ReferendumIdAsc="referendumId_ASC",e.ReferendumIdDesc="referendumId_DESC",e.VoteThresholdAsc="voteThreshold_ASC",e.VoteThresholdDesc="voteThreshold_DESC"}(Ee||(Ee={})),function(e){e.IdAsc="id_ASC",e.IdDesc="id_DESC",e.StatusAsc="status_ASC",e.StatusDesc="status_DESC",e.UniqueStatusAsc="uniqueStatus_ASC",e.UniqueStatusDesc="uniqueStatus_DESC"}(De||(De={})),function(e){e.IdAsc="id_ASC",e.IdDesc="id_DESC",e.TreasuryRewardAsc="treasuryReward_ASC",e.TreasuryRewardDesc="treasuryReward_DESC",e.ValidatorRewardAsc="validatorReward_ASC",e.ValidatorRewardDesc="validatorReward_DESC"}(Ie||(Ie={})),function(e){e.IdAsc="id_ASC",e.IdDesc="id_DESC",e.IndexAsc="index_ASC",e.IndexDesc="index_DESC"}(Pe||(Pe={})),function(e){e.AmountAsc="amount_ASC",e.AmountDesc="amount_DESC",e.IdAsc="id_ASC",e.IdDesc="id_DESC",e.WhoAsc="who_ASC",e.WhoDesc="who_DESC"}(Te||(Te={})),function(e){e.IdAsc="id_ASC",e.IdDesc="id_DESC",e.TotalStakeAsc="totalStake_ASC",e.TotalStakeDesc="totalStake_DESC"}(Re||(Re={})),function(e){e.IdAsc="id_ASC",e.IdDesc="id_DESC",e.NameAsc="name_ASC",e.NameDesc="name_DESC",e.ValueAsc="value_ASC",e.ValueDesc="value_DESC"}(Fe||(Fe={})),function(e){e.AuthorAsc="author_ASC",e.AuthorDesc="author_DESC",e.IdAsc="id_ASC",e.IdDesc="id_DESC",e.MemberCountAsc="memberCount_ASC",e.MemberCountDesc="memberCount_DESC",e.MetaDescriptionAsc="metaDescription_ASC",e.MetaDescriptionDesc="metaDescription_DESC",e.MethodAsc="method_ASC",e.MethodDesc="method_DESC",e.PreimageHashAsc="preimageHash_ASC",e.PreimageHashDesc="preimageHash_DESC",e.ProposalHashAsc="proposalHash_ASC",e.ProposalHashDesc="proposalHash_DESC",e.ProposalIdAsc="proposalId_ASC",e.ProposalIdDesc="proposalId_DESC",e.SectionAsc="section_ASC",e.SectionDesc="section_DESC"}(qe||(qe={})),function(e){e.IdAsc="id_ASC",e.IdDesc="id_DESC",e.StatusAsc="status_ASC",e.StatusDesc="status_DESC",e.UniqueStatusAsc="uniqueStatus_ASC",e.UniqueStatusDesc="uniqueStatus_DESC"}(Le||(Le={})),function(e){e.ClosesAsc="closes_ASC",e.ClosesDesc="closes_DESC",e.FinderFeeAsc="finderFee_ASC",e.FinderFeeDesc="finderFee_DESC",e.FinderAsc="finder_ASC",e.FinderDesc="finder_DESC",e.HashAsc="hash_ASC",e.HashDesc="hash_DESC",e.IdAsc="id_ASC",e.IdDesc="id_DESC",e.ReasonAsc="reason_ASC",e.ReasonDesc="reason_DESC",e.WhoAsc="who_ASC",e.WhoDesc="who_DESC"}(ze||(ze={})),function(e){e.IdAsc="id_ASC",e.IdDesc="id_DESC",e.StatusAsc="status_ASC",e.StatusDesc="status_DESC",e.UniqueStatusAsc="uniqueStatus_ASC",e.UniqueStatusDesc="uniqueStatus_DESC"}(Ue||(Ue={})),function(e){e.AmountAsc="amount_ASC",e.AmountDesc="amount_DESC",e.IdAsc="id_ASC",e.IdDesc="id_DESC"}(We||(We={})),function(e){e.BeneficiaryAsc="beneficiary_ASC",e.BeneficiaryDesc="beneficiary_DESC",e.BondAsc="bond_ASC",e.BondDesc="bond_DESC",e.IdAsc="id_ASC",e.IdDesc="id_DESC",e.ProposerAsc="proposer_ASC",e.ProposerDesc="proposer_DESC",e.TreasuryProposalIdAsc="treasuryProposalId_ASC",e.TreasuryProposalIdDesc="treasuryProposalId_DESC",e.ValueAsc="value_ASC",e.ValueDesc="value_DESC"}(Me||(Me={})),function(e){e.IdAsc="id_ASC",e.IdDesc="id_DESC",e.StatusAsc="status_ASC",e.StatusDesc="status_DESC",e.UniqueStatusAsc="uniqueStatus_ASC",e.UniqueStatusDesc="uniqueStatus_DESC"}(Be||(Be={})),function(e){e.ControllerAsc="controller_ASC",e.ControllerDesc="controller_DESC",e.IdAsc="id_ASC",e.IdDesc="id_DESC",e.PreferencesAsc="preferences_ASC",e.PreferencesDesc="preferences_DESC",e.StashAsc="stash_ASC",e.StashDesc="stash_DESC"}(Ge||(Ge={})),function(e){e.CommentReactionsCommentIdUserIdReactionKey="comment_reactions_comment_id_user_id_reaction_key",e.CommentReactionsPkey="comment_reactions_pkey"}(Ve||(Ve={})),function(e){e.CommentId="comment_id",e.CreatedAt="created_at",e.Id="id",e.Reaction="reaction",e.UpdatedAt="updated_at",e.UserId="user_id"}(He||(He={})),function(e){e.CommentId="comment_id",e.CreatedAt="created_at",e.Id="id",e.Reaction="reaction",e.UpdatedAt="updated_at",e.UserId="user_id"}(Ye||(Ye={})),function(e){e.CommentsPkey="comments_pkey"}(Ke||(Ke={})),function(e){e.AuthorId="author_id",e.Content="content",e.CreatedAt="created_at",e.Id="id",e.PostId="post_id",e.UpdatedAt="updated_at"}(Je||(Je={})),function(e){e.AuthorId="author_id",e.Content="content",e.CreatedAt="created_at",e.Id="id",e.PostId="post_id",e.UpdatedAt="updated_at"}(Qe||(Qe={})),function(e){e.OnchainLinksOnchainBountyIdKey="onchain_links_onchain_bounty_id_key",e.OnchainLinksOnchainMotionIdKey="onchain_links_onchain_motion_id_key",e.OnchainLinksOnchainReferendumIdKey="onchain_links_onchain_referendum_id_key",e.OnchainLinksOnchainTechCommitteeProposalIdKey="onchain_links_onchain_tech_committee_proposal_id_key",e.OnchainLinksOnchainTipIdKey="onchain_links_onchain_tip_id_key",e.OnchainProposalsChainDbIdKey="onchain_proposals_chain_db_id_key",e.ProposalsPkey="proposals_pkey",e.ProposalsPostIdKey="proposals_post_id_key"}(Xe||(Xe={})),function(e){e.CreatedAt="created_at",e.Id="id",e.OnchainBountyId="onchain_bounty_id",e.OnchainMotionId="onchain_motion_id",e.OnchainProposalId="onchain_proposal_id",e.OnchainReferendumId="onchain_referendum_id",e.OnchainTechCommitteeProposalId="onchain_tech_committee_proposal_id",e.OnchainTipId="onchain_tip_id",e.OnchainTreasuryProposalId="onchain_treasury_proposal_id",e.PostId="post_id",e.ProposerAddress="proposer_address"}(Ze||(Ze={})),function(e){e.CreatedAt="created_at",e.Id="id",e.OnchainBountyId="onchain_bounty_id",e.OnchainMotionId="onchain_motion_id",e.OnchainProposalId="onchain_proposal_id",e.OnchainReferendumId="onchain_referendum_id",e.OnchainTechCommitteeProposalId="onchain_tech_committee_proposal_id",e.OnchainTipId="onchain_tip_id",e.OnchainTreasuryProposalId="onchain_treasury_proposal_id",e.PostId="post_id",e.ProposerAddress="proposer_address"}(et||(et={})),function(e){e.OptionPollPkey="option_poll_pkey"}(tt||(tt={})),function(e){e.CreatedAt="created_at",e.EndAt="end_at",e.Id="id",e.Options="options",e.PostId="post_id",e.Question="question",e.UpdatedAt="updated_at"}(ot||(ot={})),function(e){e.CreatedAt="created_at",e.EndAt="end_at",e.Id="id",e.Options="options",e.PostId="post_id",e.Question="question",e.UpdatedAt="updated_at"}(nt||(nt={})),function(e){e.OptionPollVotesPkey="option_poll_votes_pkey"}(at||(at={})),function(e){e.CreatedAt="created_at",e.Id="id",e.Option="option",e.OptionPollId="option_poll_id",e.UpdatedAt="updated_at",e.UserId="user_id"}(st||(st={})),function(e){e.CreatedAt="created_at",e.Id="id",e.Option="option",e.OptionPollId="option_poll_id",e.UpdatedAt="updated_at",e.UserId="user_id"}(rt||(rt={})),function(e){e.Asc="asc",e.AscNullsFirst="asc_nulls_first",e.AscNullsLast="asc_nulls_last",e.Desc="desc",e.DescNullsFirst="desc_nulls_first",e.DescNullsLast="desc_nulls_last"}(it||(it={})),function(e){e.PollPkey="poll_pkey"}(ct||(ct={})),function(e){e.BlockEnd="block_end",e.CreatedAt="created_at",e.Id="id",e.PostId="post_id",e.UpdatedAt="updated_at"}(dt||(dt={})),function(e){e.BlockEnd="block_end",e.CreatedAt="created_at",e.Id="id",e.PostId="post_id",e.UpdatedAt="updated_at"}(lt||(lt={})),function(e){e.PollVotesPkey="poll_votes_pkey",e.PollVotesPollIdUserIdKey="poll_votes_poll_id_user_id_key"}(mt||(mt={})),function(e){e.CreatedAt="created_at",e.Id="id",e.PollId="poll_id",e.UpdatedAt="updated_at",e.UserId="user_id",e.Vote="vote"}(ut||(ut={})),function(e){e.CreatedAt="created_at",e.Id="id",e.PollId="poll_id",e.UpdatedAt="updated_at",e.UserId="user_id",e.Vote="vote"}(ht||(ht={})),function(e){e.CommentId="comment_id",e.LastUpdate="last_update",e.PostId="post_id"}(pt||(pt={})),function(e){e.PostReactionsPkey="post_reactions_pkey",e.PostReactionsPostIdUserIdReactionKey="post_reactions_post_id_user_id_reaction_key"}(bt||(bt={})),function(e){e.CreatedAt="created_at",e.Id="id",e.PostId="post_id",e.Reaction="reaction",e.UpdatedAt="updated_at",e.UserId="user_id"}(gt||(gt={})),function(e){e.CreatedAt="created_at",e.Id="id",e.PostId="post_id",e.Reaction="reaction",e.UpdatedAt="updated_at",e.UserId="user_id"}(jt||(jt={})),function(e){e.CategoriesNameKey="categories_name_key",e.CategoriesPkey="categories_pkey"}(yt||(yt={})),function(e){e.Id="id",e.Name="name"}(ft||(ft={})),function(e){e.Id="id",e.Name="name"}(xt||(xt={})),function(e){e.PostTypesNameKey="post_types_name_key",e.PostTypesPkey="post_types_pkey"}(_t||(_t={})),function(e){e.Id="id",e.Name="name"}(Ot||(Ot={})),function(e){e.Id="id",e.Name="name"}(vt||(vt={})),function(e){e.MessagesPkey="messages_pkey"}(wt||(wt={})),function(e){e.AuthorId="author_id",e.Content="content",e.CreatedAt="created_at",e.Id="id",e.Title="title",e.TopicId="topic_id",e.TypeId="type_id",e.UpdatedAt="updated_at"}(St||(St={})),function(e){e.AuthorId="author_id",e.Content="content",e.CreatedAt="created_at",e.Id="id",e.Title="title",e.TopicId="topic_id",e.TypeId="type_id",e.UpdatedAt="updated_at"}(Ct||(Ct={}));const kt=ce.a`
    fragment optionPollFields on option_poll {
  id
  post_id
  question
  options
  end_at
  created_at
  updated_at
}
    `,$t=ce.a`
    fragment optionPollVotesFields on option_poll_votes {
  id
  option_poll_voter {
    id
    username
  }
  option
  created_at
  updated_at
}
    `,At=ce.a`
    fragment pollFields on poll {
  id
  block_end
  created_at
  updated_at
}
    `,Nt=ce.a`
    fragment pollVotesFields on poll_votes {
  id
  voter {
    id
    username
    kusama_default_address
    polkadot_default_address
  }
  vote
  created_at
  updated_at
}
    `,Et=ce.a`
    fragment postReactionFields on post_reactions {
  id
  reacting_user {
    id
    username
  }
  reaction
  created_at
  updated_at
}
    `,Dt=ce.a`
    fragment commentReactionFields on comment_reactions {
  id
  reacting_user {
    id
    username
  }
  reaction
  created_at
  updated_at
}
    `,It=ce.a`
    fragment authorFields on User {
  id
  kusama_default_address
  polkadot_default_address
  username
}
    `,Pt=ce.a`
    fragment commentFields on comments {
  id
  author {
    ...authorFields
  }
  content
  created_at
  updated_at
}
    ${It}`,Tt=ce.a`
    fragment onchainLinkBounty on onchain_links {
  id
  proposer_address
  onchain_bounty_id
  onchain_bounty(where: {}) {
    id
    proposer
    value
    fee
    curatorDeposit
    bond
    bountyId
    curator
    beneficiary
    bountyStatus(orderBy: id_DESC) {
      id
      status
      blockNumber {
        startDateTime
        number
      }
    }
  }
}
    `,Rt=ce.a`
    fragment bountyPost on posts {
  author {
    ...authorFields
  }
  content
  created_at
  id
  updated_at
  comments(order_by: {created_at: asc}) {
    ...commentFields
  }
  onchain_link {
    ...onchainLinkBounty
  }
  title
  topic {
    id
    name
  }
  type {
    id
    name
  }
}
    ${It}
${Pt}
${Tt}`,Ft=ce.a`
    fragment topic on post_topics {
  id
  name
}
    `,qt=ce.a`
    fragment onchainLinkDiscussion on onchain_links {
  id
  onchain_referendum_id
  onchain_motion_id
  onchain_proposal_id
  onchain_treasury_proposal_id
}
    `,Lt=ce.a`
    fragment discussionPost on posts {
  author {
    ...authorFields
  }
  content
  created_at
  id
  updated_at
  comments(order_by: {created_at: asc}) {
    ...commentFields
  }
  onchain_link {
    ...onchainLinkDiscussion
  }
  title
  topic {
    id
    name
  }
  type {
    id
    name
  }
}
    ${It}
${Pt}
${qt}`,zt=ce.a`
    fragment postFields on posts {
  id
  title
  author {
    ...authorFields
  }
  created_at
  updated_at
  comments_aggregate {
    aggregate {
      count
    }
  }
  type {
    name
    id
  }
  last_update {
    last_update
  }
}
    ${It}`,Ut=ce.a`
    fragment onchainLinkMotionPreimage on Preimage {
  hash
  id
  metaDescription
  method
  preimageArguments {
    id
    name
    value
  }
}
    `,Wt=ce.a`
    fragment onchainLinkMotionTreasury on TreasurySpendProposal {
  beneficiary
  bond
  value
}
    `,Mt=ce.a`
    fragment onchainLinkMotion on onchain_links {
  id
  proposer_address
  onchain_referendum_id
  onchain_motion_id
  onchain_motion(where: {}) {
    id
    motionStatus(orderBy: id_DESC) {
      id
      status
      blockNumber {
        number
      }
    }
    memberCount
    method
    motionProposalHash
    motionProposalArguments {
      name
      value
    }
    preimage {
      ...onchainLinkMotionPreimage
    }
    treasurySpendProposal {
      ...onchainLinkMotionTreasury
    }
  }
}
    ${Ut}
${Wt}`,Bt=ce.a`
    fragment motionPost on posts {
  author {
    ...authorFields
  }
  content
  created_at
  id
  updated_at
  comments(order_by: {created_at: asc}) {
    ...commentFields
  }
  onchain_link {
    ...onchainLinkMotion
  }
  title
  topic {
    id
    name
  }
  type {
    id
    name
  }
}
    ${It}
${Pt}
${Mt}`,Gt=ce.a`
    fragment onchainLinkProposal on onchain_links {
  id
  proposer_address
  onchain_proposal_id
  onchain_referendum_id
  onchain_proposal(where: {}) {
    id
    depositAmount
    proposalStatus(orderBy: id_DESC) {
      id
      status
      blockNumber {
        number
      }
    }
    preimage {
      hash
      id
      metaDescription
      method
      preimageArguments {
        id
        name
        value
      }
    }
  }
}
    `,Vt=ce.a`
    fragment proposalPost on posts {
  author {
    ...authorFields
  }
  content
  created_at
  id
  updated_at
  comments(order_by: {created_at: asc}) {
    ...commentFields
  }
  onchain_link {
    ...onchainLinkProposal
  }
  title
  topic {
    id
    name
  }
  type {
    id
    name
  }
}
    ${It}
${Pt}
${Gt}`,Ht=ce.a`
    fragment onchainLinkReferendum on onchain_links {
  id
  proposer_address
  onchain_referendum_id
  onchain_referendum(where: {}) {
    id
    delay
    end
    voteThreshold
    referendumStatus(orderBy: id_DESC) {
      blockNumber {
        startDateTime
        number
      }
      status
      id
    }
    preimage {
      hash
      id
      metaDescription
      method
      preimageArguments {
        id
        name
        value
      }
    }
  }
}
    `,Yt=ce.a`
    fragment referendumPost on posts {
  author {
    ...authorFields
  }
  content
  created_at
  id
  updated_at
  comments(order_by: {created_at: asc}) {
    ...commentFields
  }
  onchain_link {
    ...onchainLinkReferendum
  }
  title
  topic {
    id
    name
  }
  type {
    id
    name
  }
}
    ${It}
${Pt}
${Ht}`,Kt=ce.a`
    fragment searchPostFields on posts {
  id
  title
  author {
    ...authorFields
  }
  created_at
  updated_at
  comments_aggregate {
    aggregate {
      count
    }
  }
  type {
    name
    id
  }
  last_update {
    last_update
  }
}
    ${It}`,Jt=ce.a`
    fragment onchainLinkTechCommitteeProposalPreimage on Preimage {
  hash
  id
  metaDescription
  method
  preimageArguments {
    id
    name
    value
  }
}
    `,Qt=ce.a`
    fragment onchainLinkTechCommitteeProposal on onchain_links {
  id
  proposer_address
  onchain_tech_committee_proposal_id
  onchain_tech_committee_proposal(where: {}) {
    id
    status(orderBy: id_DESC) {
      id
      status
      blockNumber {
        number
      }
    }
    metaDescription
    memberCount
    method
    proposalHash
    proposalArguments {
      name
      value
    }
    preimage {
      ...onchainLinkTechCommitteeProposalPreimage
    }
  }
}
    ${Jt}`,Xt=ce.a`
    fragment techCommitteeProposalPost on posts {
  author {
    ...authorFields
  }
  content
  created_at
  id
  updated_at
  comments(order_by: {created_at: asc}) {
    ...commentFields
  }
  onchain_link {
    ...onchainLinkTechCommitteeProposal
  }
  title
  topic {
    id
    name
  }
  type {
    id
    name
  }
}
    ${It}
${Pt}
${Qt}`,Zt=ce.a`
    fragment onchainLinkTip on onchain_links {
  id
  proposer_address
  onchain_tip_id
  onchain_tip(where: {}) {
    id
    hash
    reason
    who
    finder
    finderFee
    closes
    tipStatus(orderBy: id_DESC) {
      id
      status
      blockNumber {
        startDateTime
        number
      }
    }
  }
}
    `,eo=ce.a`
    fragment tipPost on posts {
  author {
    ...authorFields
  }
  content
  created_at
  id
  updated_at
  comments(order_by: {created_at: asc}) {
    ...commentFields
  }
  onchain_link {
    ...onchainLinkTip
  }
  title
  topic {
    id
    name
  }
  type {
    id
    name
  }
}
    ${It}
${Pt}
${Zt}`,to=ce.a`
    fragment onchainLinkTreasuryProposal on onchain_links {
  id
  proposer_address
  onchain_treasury_proposal_id
  onchain_motion_id
  onchain_treasury_spend_proposal(where: {}) {
    id
    beneficiary
    value
    bond
    treasuryStatus(orderBy: id_DESC) {
      id
      status
      blockNumber {
        number
      }
    }
  }
}
    `,oo=ce.a`
    fragment treasuryProposalPost on posts {
  author {
    ...authorFields
  }
  content
  created_at
  id
  updated_at
  comments(order_by: {created_at: asc}) {
    ...commentFields
  }
  onchain_link {
    ...onchainLinkTreasuryProposal
  }
  title
  topic {
    id
    name
  }
  type {
    id
    name
  }
}
    ${It}
${Pt}
${to}`;ce.a`
    mutation EditComment($id: uuid!, $content: String!) {
  update_comments(where: {id: {_eq: $id}}, _set: {content: $content}) {
    affected_rows
  }
}
    `;ce.a`
    mutation DeleteComment($id: uuid!) {
  delete_comments(where: {id: {_eq: $id}}) {
    affected_rows
  }
}
    `;ce.a`
    mutation LOGIN($password: String!, $username: String!) {
  login(password: $password, username: $username) {
    token
  }
}
    `;ce.a`
    mutation AddressLoginStart($address: String!) {
  addressLoginStart(address: $address) {
    message
    signMessage
  }
}
    `;ce.a`
    mutation AddressLogin($address: String!, $signature: String!) {
  addressLogin(address: $address, signature: $signature) {
    token
  }
}
    `;const no=ce.a`
    mutation LOGOUT {
  logout {
    message
  }
}
    `;function ao(e){return de.b(no,e)}ce.a`
    query FetchLatestBlockNumber {
  blockNumbers(last: 1) {
    number
  }
}
    `;ce.a`
    mutation createOptionPoll($postId: Int!, $question: String!, $options: String!, $endAt: Int!) {
  __typename
  insert_option_poll(
    objects: {post_id: $postId, question: $question, options: $options, end_at: $endAt}
  ) {
    affected_rows
  }
}
    `;ce.a`
    query OptionPoll($postId: Int!) {
  option_poll(where: {post_id: {_eq: $postId}}) {
    ...optionPollFields
  }
}
    ${kt}`;ce.a`
    query OptionPollVotes($optionPollId: Int!) {
  option_poll_votes(where: {option_poll_id: {_eq: $optionPollId}}) {
    ...optionPollVotesFields
  }
}
    ${$t}`;ce.a`
    mutation AddOptionPollVote($optionPollId: Int!, $userId: Int!, $option: String!) {
  __typename
  insert_option_poll_votes_one(
    object: {option_poll_id: $optionPollId, user_id: $userId, option: $option}
  ) {
    id
  }
}
    `;ce.a`
    mutation DeleteOptionPollVote($optionPollId: Int!, $userId: Int!) {
  delete_option_poll_votes(
    where: {_and: [{option_poll_id: {_eq: $optionPollId}}, {user_id: {_eq: $userId}}]}
  ) {
    affected_rows
  }
}
    `;ce.a`
    query getCouncilMembers {
  councils(last: 1) {
    members {
      id
      address
    }
  }
}
    `;ce.a`
    query Poll($postId: Int!) {
  poll(where: {post_id: {_eq: $postId}}) {
    ...pollFields
  }
}
    ${At}`;ce.a`
    query PollVotes($pollId: Int!) {
  poll_votes(where: {poll_id: {_eq: $pollId}}) {
    ...pollVotesFields
  }
}
    ${Nt}`;ce.a`
    mutation AddPollVote($pollId: Int!, $userId: Int!, $vote: bpchar!) {
  __typename
  insert_poll_votes_one(object: {poll_id: $pollId, user_id: $userId, vote: $vote}) {
    id
  }
}
    `;ce.a`
    mutation DeleteVote($pollId: Int!, $userId: Int!) {
  delete_poll_votes(
    where: {_and: [{poll_id: {_eq: $pollId}}, {user_id: {_eq: $userId}}]}
  ) {
    affected_rows
  }
}
    `;ce.a`
    query councilAtBlockNumber($blockNumber: Int!) {
  councils(
    where: {blockNumber: {number_lte: $blockNumber}}
    orderBy: id_DESC
    first: 1
  ) {
    members {
      address
    }
  }
}
    `;ce.a`
    mutation EditPoll($id: Int!, $blockEnd: Int!) {
  update_poll(where: {id: {_eq: $id}}, _set: {block_end: $blockEnd}) {
    affected_rows
  }
}
    `;ce.a`
    mutation EditPost($id: Int!, $content: String!, $title: String!) {
  update_posts(where: {id: {_eq: $id}}, _set: {content: $content, title: $title}) {
    affected_rows
  }
}
    `;ce.a`
    mutation AddPostComment($authorId: Int!, $content: String!, $postId: Int!) {
  __typename
  insert_comments(
    objects: {author_id: $authorId, content: $content, post_id: $postId}
  ) {
    affected_rows
  }
}
    `;ce.a`
    query PostReactions($postId: Int!) {
  post_reactions(where: {post_id: {_eq: $postId}}) {
    ...postReactionFields
  }
}
    ${Et}`;ce.a`
    query CommentReactions($commentId: uuid!) {
  comment_reactions(where: {comment_id: {_eq: $commentId}}) {
    ...commentReactionFields
  }
}
    ${Dt}`;ce.a`
    mutation AddPostReaction($postId: Int!, $userId: Int!, $reaction: bpchar!) {
  __typename
  insert_post_reactions(
    objects: {post_id: $postId, user_id: $userId, reaction: $reaction}
  ) {
    affected_rows
  }
}
    `;ce.a`
    mutation AddCommentReaction($commentId: uuid!, $userId: Int!, $reaction: bpchar!) {
  __typename
  insert_comment_reactions(
    objects: {comment_id: $commentId, user_id: $userId, reaction: $reaction}
  ) {
    affected_rows
  }
}
    `;ce.a`
    mutation DeletePostReaction($postId: Int!, $userId: Int!, $reaction: bpchar!) {
  delete_post_reactions(
    where: {_and: [{post_id: {_eq: $postId}}, {user_id: {_eq: $userId}}, {reaction: {_eq: $reaction}}]}
  ) {
    affected_rows
  }
}
    `;ce.a`
    mutation DeleteCommentReaction($commentId: uuid!, $userId: Int!, $reaction: bpchar!) {
  delete_comment_reactions(
    where: {_and: [{comment_id: {_eq: $commentId}}, {user_id: {_eq: $userId}}, {reaction: {_eq: $reaction}}]}
  ) {
    affected_rows
  }
}
    `;ce.a`
    mutation ReportContent($network: String!, $type: String!, $content_id: String!, $reason: String!, $comments: String!) {
  reportContent(
    network: $network
    type: $type
    content_id: $content_id
    reason: $reason
    comments: $comments
  ) {
    message
  }
}
    `;ce.a`
    mutation SIGNUP($email: String, $password: String!, $username: String!) {
  signup(email: $email, password: $password, username: $username) {
    token
  }
}
    `;ce.a`
    mutation AddressSignupStart($address: String!) {
  addressSignupStart(address: $address) {
    message
    signMessage
  }
}
    `;ce.a`
    mutation AddressSignupConfirm($network: String!, $address: String!, $signature: String!) {
  addressSignupConfirm(
    network: $network
    address: $address
    signature: $signature
  ) {
    token
  }
}
    `;ce.a`
    mutation PostSubscribe($postId: Int!) {
  postSubscribe(post_id: $postId) {
    message
  }
}
    `;ce.a`
    mutation PostUnsubscribe($postId: Int!) {
  postUnsubscribe(post_id: $postId) {
    message
  }
}
    `;ce.a`
    query Subscription($postId: Int!) {
  subscription(post_id: $postId) {
    subscribed
  }
}
    `;ce.a`
    query GET_REFRESH_TOKEN {
  token {
    token
  }
}
    `;const so=ce.a`
    query AllBountyPosts($postType: Int!, $postTopic: Int!, $limit: Int! = 5) {
  posts(
    limit: $limit
    where: {type: {id: {_eq: $postType}}, topic: {id: {_eq: $postTopic}}, onchain_link: {onchain_bounty_id: {_is_null: false}}}
    order_by: {onchain_link: {id: desc}}
  ) {
    id
    title
    author {
      ...authorFields
    }
    created_at
    updated_at
    comments_aggregate {
      aggregate {
        count
      }
    }
    type {
      name
      id
    }
    topic {
      id
      name
    }
    onchain_link {
      id
      onchain_bounty_id
      onchain_bounty(where: {}) {
        id
        value
        bountyStatus(last: 1) {
          id
          status
        }
      }
      proposer_address
    }
  }
}
    ${It}`;const ro=ce.a`
    query BountyPostAndComments($id: Int!) {
  posts(where: {onchain_link: {onchain_bounty_id: {_eq: $id}}}) {
    ...bountyPost
  }
}
    ${Rt}`;const io=ce.a`
    query AllMotionPosts($postType: Int!, $limit: Int! = 5) {
  posts(
    limit: $limit
    where: {type: {id: {_eq: $postType}}, onchain_link: {onchain_motion_id: {_is_null: false}}}
    order_by: {onchain_link: {onchain_motion_id: desc}}
  ) {
    id
    title
    author {
      ...authorFields
    }
    created_at
    updated_at
    comments_aggregate {
      aggregate {
        count
      }
    }
    type {
      name
      id
    }
    topic {
      id
      name
    }
    onchain_link {
      id
      onchain_motion_id
      onchain_motion(where: {}) {
        id
        motionStatus(last: 1) {
          id
          status
        }
        preimage {
          id
          method
        }
      }
      proposer_address
    }
  }
}
    ${It}`;ce.a`
    mutation createPost($userId: Int!, $content: String!, $topicId: Int!, $title: String!) {
  __typename
  insert_posts(
    objects: {author_id: $userId, content: $content, title: $title, topic_id: $topicId}
  ) {
    affected_rows
    returning {
      id
    }
  }
}
    `;ce.a`
    mutation createPoll($postId: Int!, $blockEnd: Int!) {
  __typename
  insert_poll(objects: {post_id: $postId, block_end: $blockEnd}) {
    affected_rows
  }
}
    `;ce.a`
    query Post_topics {
  post_topics {
    ...topic
  }
}
    ${Ft}`;ce.a`
    query DiscussionPostAndComments($id: Int!) {
  posts(where: {id: {_eq: $id}}) {
    ...discussionPost
  }
}
    ${Lt}`;ce.a`
    query LatestDiscussionPosts($limit: Int! = 20) {
  posts(
    order_by: {last_update: {last_update: desc}}
    limit: $limit
    where: {type: {id: {_eq: 1}}}
  ) {
    ...postFields
  }
}
    ${zt}`;ce.a`
    query DiscussionPostsIdDesc($limit: Int! = 20) {
  posts(order_by: {id: desc}, limit: $limit, where: {type: {id: {_eq: 1}}}) {
    ...postFields
  }
}
    ${zt}`;ce.a`
    query DiscussionPostsIdAsc($limit: Int! = 20) {
  posts(order_by: {id: asc}, limit: $limit, where: {type: {id: {_eq: 1}}}) {
    ...postFields
  }
}
    ${zt}`;const co=ce.a`
    query MotionPostAndComments($id: Int!) {
  posts(where: {onchain_link: {onchain_motion_id: {_eq: $id}}}) {
    ...motionPost
  }
}
    ${Bt}`;const lo=ce.a`
    mutation changeNotificationPreference($postParticipated: Boolean, $postCreated: Boolean, $newProposal: Boolean, $ownProposal: Boolean) {
  changeNotificationPreference(
    notificationPreferences: {postParticipated: $postParticipated, postCreated: $postCreated, newProposal: $newProposal, ownProposal: $ownProposal}
  ) {
    message
    token
  }
}
    `;ce.a`
    query LatestBountyPosts($postType: Int!, $limit: Int! = 5) {
  posts(
    limit: $limit
    where: {type: {id: {_eq: $postType}}, onchain_link: {onchain_bounty_id: {_is_null: false}}}
    order_by: {onchain_link: {onchain_bounty_id: desc}}
  ) {
    id
    title
    author {
      ...authorFields
    }
    created_at
    updated_at
    comments_aggregate {
      aggregate {
        count
      }
    }
    type {
      name
      id
    }
    topic {
      id
      name
    }
    onchain_link {
      id
      onchain_bounty_id
      onchain_bounty(
        where: {NOT: {bountyStatus_some: {OR: [{status: "BountyCanceled"}, {status: "BountyRejected"}, {status: "BountyAwarded"}, {status: "BountyClaimed"}]}}}
      ) {
        id
        bountyStatus(last: 1) {
          id
          status
        }
      }
      proposer_address
    }
  }
}
    ${It}`;ce.a`
    query LatestMotionPosts($postType: Int!, $limit: Int! = 5) {
  posts(
    limit: $limit
    where: {type: {id: {_eq: $postType}}, onchain_link: {onchain_motion_id: {_is_null: false}, onchain_referendum_id: {_is_null: true}}}
    order_by: {onchain_link: {onchain_motion_id: desc}}
  ) {
    id
    title
    author {
      ...authorFields
    }
    created_at
    updated_at
    comments_aggregate {
      aggregate {
        count
      }
    }
    type {
      name
      id
    }
    topic {
      id
      name
    }
    onchain_link {
      id
      onchain_motion_id
      onchain_motion(
        where: {NOT: {motionStatus_some: {OR: [{status: "Executed"}, {status: "Disapproved"}]}}}
      ) {
        id
        motionStatus(last: 1) {
          id
          status
        }
        preimage {
          id
          method
        }
      }
      proposer_address
    }
  }
}
    ${It}`;ce.a`
    query LatestDemocracyProposalPosts($postType: Int!, $postTopic: Int!, $limit: Int! = 5) {
  posts(
    limit: $limit
    where: {type: {id: {_eq: $postType}}, topic: {id: {_eq: $postTopic}}, onchain_link: {onchain_proposal_id: {_is_null: false}, onchain_referendum_id: {_is_null: true}}}
    order_by: {onchain_link: {onchain_proposal_id: desc}}
  ) {
    id
    title
    author {
      ...authorFields
    }
    created_at
    updated_at
    comments_aggregate {
      aggregate {
        count
      }
    }
    type {
      name
      id
    }
    topic {
      id
      name
    }
    onchain_link {
      id
      onchain_proposal_id
      onchain_proposal(
        where: {NOT: {proposalStatus_some: {OR: [{status: "Tabled"}, {status: "Cleared"}]}}}
      ) {
        id
        proposalStatus(last: 1) {
          id
          status
        }
        preimage {
          id
          method
        }
      }
      proposer_address
    }
  }
}
    ${It}`;ce.a`
    query LatestReferendaPosts($postType: Int!, $limit: Int! = 5) {
  posts(
    limit: $limit
    where: {type: {id: {_eq: $postType}}, onchain_link: {onchain_referendum_id: {_is_null: false}}}
    order_by: {onchain_link: {onchain_referendum_id: desc}}
  ) {
    id
    title
    author {
      ...authorFields
    }
    created_at
    updated_at
    comments_aggregate {
      aggregate {
        count
      }
    }
    type {
      name
      id
    }
    topic {
      id
      name
    }
    onchain_link {
      id
      onchain_referendum_id
      onchain_referendum(
        where: {NOT: {referendumStatus_some: {OR: [{status: "Passed"}, {status: "Executed"}, {status: "NotPassed"}, {status: "Cancelled"}, {status: "Vetoed"}]}}}
      ) {
        id
        end
        referendumStatus(last: 1) {
          id
          status
        }
        preimage {
          id
          method
        }
      }
      proposer_address
    }
  }
}
    ${It}`;ce.a`
    query LatestTechCommitteeProposalPosts($postType: Int!, $limit: Int! = 5) {
  posts(
    limit: $limit
    where: {type: {id: {_eq: $postType}}, onchain_link: {onchain_tech_committee_proposal_id: {_is_null: false}}}
    order_by: {onchain_link: {onchain_tech_committee_proposal_id: desc}}
  ) {
    id
    title
    author {
      ...authorFields
    }
    created_at
    updated_at
    comments_aggregate {
      aggregate {
        count
      }
    }
    type {
      name
      id
    }
    topic {
      id
      name
    }
    onchain_link {
      id
      onchain_tech_committee_proposal_id
      onchain_tech_committee_proposal(
        where: {NOT: {status_some: {OR: [{status: "Closed"}, {status: "Approved"}, {status: "Executed"}, {status: "Disapproved"}]}}}
      ) {
        id
        status(last: 1) {
          id
          status
        }
        preimage {
          id
          method
        }
      }
      proposer_address
    }
  }
}
    ${It}`;ce.a`
    query LatestTipPosts($postType: Int!, $postTopic: Int!, $limit: Int! = 5) {
  posts(
    limit: $limit
    where: {type: {id: {_eq: $postType}}, topic: {id: {_eq: $postTopic}}, onchain_link: {onchain_tip_id: {_is_null: false}}}
    order_by: {onchain_link: {id: desc}}
  ) {
    id
    title
    author {
      ...authorFields
    }
    created_at
    updated_at
    comments_aggregate {
      aggregate {
        count
      }
    }
    type {
      name
      id
    }
    topic {
      id
      name
    }
    onchain_link {
      id
      onchain_tip_id
      onchain_tip(
        where: {NOT: {tipStatus_some: {OR: [{status: "TipClosed"}, {status: "TipClosing"}, {status: "TipRetracted"}]}}}
      ) {
        id
        reason
        tipStatus(last: 1) {
          id
          status
        }
      }
      proposer_address
    }
  }
}
    ${It}`;ce.a`
    query LatestDemocracyTreasuryProposalPosts($postType: Int!, $postTopic: Int!, $limit: Int! = 5) {
  posts(
    limit: $limit
    where: {type: {id: {_eq: $postType}}, topic: {id: {_eq: $postTopic}}, onchain_link: {onchain_treasury_proposal_id: {_is_null: false}, onchain_motion_id: {_is_null: true}}}
    order_by: {onchain_link: {onchain_treasury_proposal_id: desc}}
  ) {
    id
    title
    author {
      ...authorFields
    }
    created_at
    updated_at
    comments_aggregate {
      aggregate {
        count
      }
    }
    type {
      name
      id
    }
    topic {
      id
      name
    }
    onchain_link {
      id
      onchain_treasury_proposal_id
      onchain_treasury_spend_proposal(where: {}) {
        id
        treasuryStatus(last: 1) {
          id
          status
        }
      }
      proposer_address
    }
  }
}
    ${It}`;const mo=ce.a`
    query ABOUT($network: String!, $address: String!) {
  about(network: $network, address: $address) {
    network
    address
    title
    description
    image
  }
}
    `;const uo=ce.a`
    mutation changeAbout($network: String!, $address: String!, $title: String!, $description: String!, $image: String!, $signature: String!) {
  changeAbout(
    network: $network
    address: $address
    title: $title
    description: $description
    image: $image
    signature: $signature
  ) {
    message
  }
}
    `;const ho=ce.a`
    query ProposalPostAndComments($id: Int!) {
  posts(where: {onchain_link: {onchain_proposal_id: {_eq: $id}}}) {
    ...proposalPost
  }
}
    ${Vt}`;const po=ce.a`
    query AllDemocracyProposalPosts($postType: Int!, $postTopic: Int!, $limit: Int! = 5) {
  posts(
    limit: $limit
    where: {type: {id: {_eq: $postType}}, topic: {id: {_eq: $postTopic}}, onchain_link: {onchain_proposal_id: {_is_null: false}}}
    order_by: {onchain_link: {onchain_proposal_id: desc}}
  ) {
    id
    title
    author {
      ...authorFields
    }
    created_at
    updated_at
    comments_aggregate {
      aggregate {
        count
      }
    }
    type {
      name
      id
    }
    topic {
      id
      name
    }
    onchain_link {
      id
      onchain_proposal_id
      onchain_proposal(where: {}) {
        id
        proposalStatus(last: 1) {
          id
          status
        }
        preimage {
          id
          method
        }
      }
      proposer_address
    }
  }
}
    ${It}`;ce.a`
    query AllReferendaPosts($postType: Int!, $limit: Int! = 5) {
  posts(
    limit: $limit
    where: {type: {id: {_eq: $postType}}, onchain_link: {onchain_referendum_id: {_is_null: false}}}
    order_by: {onchain_link: {onchain_referendum_id: desc}}
  ) {
    id
    title
    author {
      ...authorFields
    }
    created_at
    updated_at
    comments_aggregate {
      aggregate {
        count
      }
    }
    type {
      name
      id
    }
    topic {
      id
      name
    }
    onchain_link {
      id
      onchain_referendum_id
      onchain_referendum(where: {}) {
        id
        end
        referendumStatus(last: 1) {
          id
          status
        }
        preimage {
          id
          method
        }
      }
      proposer_address
    }
  }
}
    ${It}`;ce.a`
    query ReferendumPostAndComments($id: Int!) {
  posts(where: {onchain_link: {onchain_referendum_id: {_eq: $id}}}) {
    ...referendumPost
  }
}
    ${Yt}`;const bo=ce.a`
    mutation requestResetPassword($email: String!) {
  requestResetPassword(email: $email) {
    message
  }
}
    `;const go=ce.a`
    mutation resetPassword($newPassword: String!, $userId: Int!, $token: String!) {
  resetPassword(newPassword: $newPassword, userId: $userId, token: $token) {
    message
  }
}
    `;const jo=ce.a`
    query SearchPosts($term: String!) {
  posts(
    order_by: {id: desc}
    limit: 20
    where: {_or: [{title: {_ilike: $term}}, {content: {_ilike: $term}}]}
  ) {
    ...searchPostFields
  }
}
    ${Kt}`;const yo=ce.a`
    mutation changeUsername($username: String!, $password: String!) {
  changeUsername(username: $username, password: $password) {
    message
    token
  }
}
    `;const fo=ce.a`
    mutation changeEmail($email: String!, $password: String!) {
  changeEmail(email: $email, password: $password) {
    message
    token
  }
}
    `;const xo=ce.a`
    mutation changePassword($oldPassword: String!, $newPassword: String!) {
  changePassword(oldPassword: $oldPassword, newPassword: $newPassword) {
    message
  }
}
    `;const _o=ce.a`
    mutation addressLinkStart($network: String!, $address: String!) {
  addressLinkStart(network: $network, address: $address) {
    sign_message
    message
    address_id
  }
}
    `;const Oo=ce.a`
    mutation addressLinkConfirm($address_id: Int!, $signature: String!) {
  addressLinkConfirm(address_id: $address_id, signature: $signature) {
    message
    token
  }
}
    `;const vo=ce.a`
    mutation addressUnlink($address: String!) {
  addressUnlink(address: $address) {
    message
    token
  }
}
    `;const wo=ce.a`
    mutation resendVerifyEmailToken {
  resendVerifyEmailToken {
    message
  }
}
    `;const So=ce.a`
    mutation setDefaultAddress($address: String!) {
  setDefaultAddress(address: $address) {
    message
    token
  }
}
    `;const Co=ce.a`
    mutation setCredentialsStart($address: String!) {
  setCredentialsStart(address: $address) {
    message
    signMessage
  }
}
    `;const ko=ce.a`
    mutation setCredentialsConfirm($address: String!, $email: String, $signature: String!, $username: String!, $password: String!) {
  setCredentialsConfirm(
    address: $address
    email: $email
    signature: $signature
    username: $username
    password: $password
  ) {
    message
    token
  }
}
    `;const $o=ce.a`
    mutation deleteAccount($password: String!) {
  deleteAccount(password: $password) {
    message
  }
}
    `;const Ao=ce.a`
    query TechCommitteeProposalPostAndComments($id: Int!) {
  posts(where: {onchain_link: {onchain_tech_committee_proposal_id: {_eq: $id}}}) {
    ...techCommitteeProposalPost
  }
}
    ${Xt}`;const No=ce.a`
    query AllTechCommitteeProposalPosts($postType: Int!, $limit: Int! = 5) {
  posts(
    limit: $limit
    where: {type: {id: {_eq: $postType}}, onchain_link: {onchain_tech_committee_proposal_id: {_is_null: false}}}
    order_by: {onchain_link: {onchain_tech_committee_proposal_id: desc}}
  ) {
    id
    title
    author {
      ...authorFields
    }
    created_at
    updated_at
    comments_aggregate {
      aggregate {
        count
      }
    }
    type {
      name
      id
    }
    topic {
      id
      name
    }
    onchain_link {
      id
      onchain_tech_committee_proposal_id
      onchain_tech_committee_proposal(where: {}) {
        id
        method
        status(last: 1) {
          id
          status
        }
        preimage {
          id
          method
        }
      }
      proposer_address
    }
  }
}
    ${It}`;const Eo=ce.a`
    query TipPostAndComments($hash: String!) {
  posts(where: {onchain_link: {onchain_tip_id: {_eq: $hash}}}) {
    ...tipPost
  }
}
    ${eo}`;const Do=ce.a`
    query AllTipPosts($postType: Int!, $postTopic: Int!, $limit: Int! = 5) {
  posts(
    limit: $limit
    where: {type: {id: {_eq: $postType}}, topic: {id: {_eq: $postTopic}}, onchain_link: {onchain_tip_id: {_is_null: false}}}
    order_by: {onchain_link: {id: desc}}
  ) {
    id
    title
    author {
      ...authorFields
    }
    created_at
    updated_at
    comments_aggregate {
      aggregate {
        count
      }
    }
    type {
      name
      id
    }
    topic {
      id
      name
    }
    onchain_link {
      id
      onchain_tip_id
      onchain_tip(where: {}) {
        id
        reason
        tipStatus(last: 1) {
          id
          status
        }
      }
      proposer_address
    }
  }
}
    ${It}`;ce.a`
    query TrackerBountyPosts($postType: Int!, $onchainBountyIds: [Int!]!) {
  posts(
    where: {type: {id: {_eq: $postType}}, onchain_link: {onchain_bounty_id: {_in: $onchainBountyIds}}}
    order_by: {onchain_link: {onchain_bounty_id: desc}}
  ) {
    id
    title
    author {
      ...authorFields
    }
    created_at
    updated_at
    comments_aggregate {
      aggregate {
        count
      }
    }
    type {
      name
      id
    }
    topic {
      id
      name
    }
    onchain_link {
      id
      onchain_bounty_id
      onchain_bounty(where: {}) {
        id
        bountyStatus(last: 1) {
          id
          status
        }
      }
      proposer_address
    }
  }
}
    ${It}`;ce.a`
    query TrackerMotionPosts($postType: Int!, $onchainMotionIds: [Int!]!) {
  posts(
    where: {type: {id: {_eq: $postType}}, onchain_link: {onchain_motion_id: {_in: $onchainMotionIds}}}
    order_by: {onchain_link: {onchain_motion_id: desc}}
  ) {
    id
    title
    author {
      ...authorFields
    }
    created_at
    updated_at
    comments_aggregate {
      aggregate {
        count
      }
    }
    type {
      name
      id
    }
    topic {
      id
      name
    }
    onchain_link {
      id
      onchain_motion_id
      onchain_motion(where: {}) {
        id
        motionStatus(last: 1) {
          id
          status
        }
        preimage {
          id
          method
        }
      }
      proposer_address
    }
  }
}
    ${It}`;ce.a`
    query TrackerDemocracyProposalPosts($postType: Int!, $onchainProposalIds: [Int!]!) {
  posts(
    where: {type: {id: {_eq: $postType}}, onchain_link: {onchain_proposal_id: {_in: $onchainProposalIds}}}
    order_by: {onchain_link: {onchain_proposal_id: desc}}
  ) {
    id
    title
    author {
      ...authorFields
    }
    created_at
    updated_at
    comments_aggregate {
      aggregate {
        count
      }
    }
    type {
      name
      id
    }
    topic {
      id
      name
    }
    onchain_link {
      id
      onchain_proposal_id
      onchain_proposal(where: {}) {
        id
        proposalStatus(last: 1) {
          id
          status
        }
        preimage {
          id
          method
        }
      }
      proposer_address
    }
  }
}
    ${It}`;ce.a`
    query TrackerReferendaPosts($postType: Int!, $onchainReferendumIds: [Int!]!) {
  posts(
    where: {type: {id: {_eq: $postType}}, onchain_link: {onchain_referendum_id: {_in: $onchainReferendumIds}}}
    order_by: {onchain_link: {onchain_referendum_id: desc}}
  ) {
    id
    title
    author {
      ...authorFields
    }
    created_at
    updated_at
    comments_aggregate {
      aggregate {
        count
      }
    }
    type {
      name
      id
    }
    topic {
      id
      name
    }
    onchain_link {
      id
      onchain_referendum_id
      onchain_referendum(where: {}) {
        id
        end
        referendumStatus(last: 1) {
          id
          status
        }
        preimage {
          id
          method
        }
      }
      proposer_address
    }
  }
}
    ${It}`;ce.a`
    query TrackerTechCommitteeProposalPosts($postType: Int!, $onchainTechCommitteeProposalIds: [Int!]!) {
  posts(
    where: {type: {id: {_eq: $postType}}, onchain_link: {onchain_tech_committee_proposal_id: {_in: $onchainTechCommitteeProposalIds}}}
    order_by: {onchain_link: {onchain_tech_committee_proposal_id: desc}}
  ) {
    id
    title
    author {
      ...authorFields
    }
    created_at
    updated_at
    comments_aggregate {
      aggregate {
        count
      }
    }
    type {
      name
      id
    }
    topic {
      id
      name
    }
    onchain_link {
      id
      onchain_tech_committee_proposal_id
      onchain_tech_committee_proposal(where: {}) {
        id
        status(last: 1) {
          id
          status
        }
        preimage {
          id
          method
        }
      }
      proposer_address
    }
  }
}
    ${It}`;ce.a`
    query TrackerTipPosts($postType: Int!, $onchainTipIds: [String!]!) {
  posts(
    where: {type: {id: {_eq: $postType}}, onchain_link: {onchain_tip_id: {_in: $onchainTipIds}}}
    order_by: {onchain_link: {id: desc}}
  ) {
    id
    title
    author {
      ...authorFields
    }
    created_at
    updated_at
    comments_aggregate {
      aggregate {
        count
      }
    }
    type {
      name
      id
    }
    topic {
      id
      name
    }
    onchain_link {
      id
      onchain_tip_id
      onchain_tip(where: {}) {
        id
        reason
        tipStatus(last: 1) {
          id
          status
        }
      }
      proposer_address
    }
  }
}
    ${It}`;ce.a`
    query TrackerDemocracyTreasuryProposalPosts($postType: Int!, $onchainTreasuryProposalIds: [Int!]!) {
  posts(
    where: {type: {id: {_eq: $postType}}, onchain_link: {onchain_treasury_proposal_id: {_in: $onchainTreasuryProposalIds}}}
    order_by: {onchain_link: {onchain_treasury_proposal_id: desc}}
  ) {
    id
    title
    author {
      ...authorFields
    }
    created_at
    updated_at
    comments_aggregate {
      aggregate {
        count
      }
    }
    type {
      name
      id
    }
    topic {
      id
      name
    }
    onchain_link {
      id
      onchain_treasury_proposal_id
      onchain_treasury_spend_proposal(where: {}) {
        id
        treasuryStatus(last: 1) {
          id
          status
        }
      }
      proposer_address
    }
  }
}
    ${It}`;const Io=ce.a`
    query AllDemocracyTreasuryProposalPosts($postType: Int!, $postTopic: Int!, $limit: Int! = 5) {
  posts(
    limit: $limit
    where: {type: {id: {_eq: $postType}}, topic: {id: {_eq: $postTopic}}, onchain_link: {onchain_treasury_proposal_id: {_is_null: false}}}
    order_by: {onchain_link: {onchain_treasury_proposal_id: desc}}
  ) {
    id
    title
    author {
      ...authorFields
    }
    created_at
    updated_at
    comments_aggregate {
      aggregate {
        count
      }
    }
    type {
      name
      id
    }
    topic {
      id
      name
    }
    onchain_link {
      id
      onchain_treasury_proposal_id
      onchain_treasury_spend_proposal(where: {}) {
        id
        treasuryStatus(last: 1) {
          id
          status
        }
      }
      proposer_address
    }
  }
}
    ${It}`;const Po=ce.a`
    query TreasuryProposalPostAndComments($id: Int!) {
  posts(where: {onchain_link: {onchain_treasury_proposal_id: {_eq: $id}}}) {
    ...treasuryProposalPost
  }
}
    ${oo}`;const To=ce.a`
    mutation undoEmailChange($token: String!) {
  undoEmailChange(token: $token) {
    message
    token
    email
  }
}
    `;const Ro=ce.a`
    query PROFILE($username: String!) {
  profile(username: $username) {
    id
    username
    kusama_default_address
    polkadot_default_address
  }
}
    `;const Fo=ce.a`
    mutation verifyEmail($token: String!) {
  verifyEmail(token: $token) {
    message
    token
  }
}
    `;var qo=o(596),Lo=o.n(qo),zo=function(){const e=Object(d.h)(),t=Object(d.g)(),o=Object(d.f)(),a=Object(d.i)();return Object(n.useMemo)((()=>{const n={...Lo.a.parse(t.search),...e};return{history:o,location:t,match:a,pathname:t.pathname,query:n}}),[e,a,t,o])},Uo=o(1307),Wo=o(1301);const Mo=a.a.createContext({});function Bo(e){const{children:t=null}=e,[o,a]=Object(n.useState)(),[s,r]=Object(n.useState)(!1);return Object(n.useEffect)((()=>{const e=new Uo.a("wss://hackathon-api.ata.network");r(!1),a(new Wo.a({provider:e}))}),[]),Object(n.useEffect)((()=>{o&&o.isReady.then((()=>{r(!0),console.log("API ready")})).catch((e=>{console.error(e)}))}),[o]),Object($.jsx)(Mo.Provider,{value:{api:o,apiReady:s},children:t})}var Go;const Vo=O(),Ho=null===_||void 0===_||null===(Go=_[Vo])||void 0===Go?void 0:Go.blockTime;var Yo=function(){const{api:e,apiReady:t}=Object(n.useContext)(Mo);return Object(n.useMemo)((()=>{var o;return e&&t?{blocktime:null===(o=e.consts.babe)||void 0===o?void 0:o.expectedBlockTime.toNumber()}:{blocktime:Ho}}),[e,t])},Ko=function(){const[e,t]=Object(n.useState)(void 0),{api:o,apiReady:a}=Object(n.useContext)(Mo);return Object(n.useEffect)((()=>{if(!o)return;if(!a)return;let e;return o.derive.chain.bestNumber((e=>{t(e)})).then((t=>{e=t})).catch((e=>console.error(e))),()=>e&&e()}),[o,a]),Object(n.useMemo)((()=>e),[e])};var Jo=()=>{const[e,t]=Object(n.useState)(),{api:o,apiReady:a}=Object(n.useContext)(Mo);return Object(n.useEffect)((()=>{if(!o||!a)return;let e;return o.derive.chain.bestNumberFinalized((e=>{t(e)})).then((t=>{e=t})).catch((e=>console.error(e))),()=>e&&e()}),[o,a]),Object(n.useMemo)((()=>e),[e])};const Qo=O();var Xo=Object(L.b)((({className:e})=>{const t=Object(n.useContext)(D),[o]=ao(),{history:a}=zo(),{setUserDetailsContextState:s,username:r}=t,i=Jo(),d=[{content:"Overview",to:"/onchain"},{content:"Referenda",to:"/referenda"}],l=[{content:"Notifications",icon:"bell",to:"/notification-settings"},{content:"Settings",icon:"cog",to:"/settings"},{content:"Tracker",icon:"bookmark",to:"/tracker"},{content:"Logout",icon:"sign-out",onClick:async()=>{try{await o()}catch(e){console.error(e)}k(s),a.push("/")},to:"/"}],m=Object($.jsx)(J.a,{name:"caret down",inverted:!0}),[u,h]=Object(n.useState)(!1),[p,b]=Object(n.useState)("0rem"),[g,j]=Object(n.useState)(!1),y=()=>{h(!1),b("0rem")};return Object($.jsxs)($.Fragment,{children:[Object($.jsxs)(Q.a,{maxWidth:Q.a.onlyTablet.maxWidth,children:[Object($.jsxs)(U.a,{className:`${e} ${Qo}`,inverted:!0,widths:2,id:"menubar",children:[Object($.jsx)(U.a.Item,{as:c.c,to:"/",className:"logo",id:"title",onClick:y}),Object($.jsxs)(U.a.Menu,{position:"right",children:[Object($.jsx)(ie,{}),Object($.jsx)(U.a.Item,{onClick:()=>{h(!u),b(u?"0rem":"100%")},id:"rightmenu",children:u?Object($.jsx)(K.a,{}):Object($.jsx)(J.a,{name:"sidebar"})})]})]}),Object($.jsxs)(X.a.Pushable,{className:e,style:{height:p},children:[Object($.jsx)(X.a,{as:U.a,direction:"top",icon:"labeled",inverted:!0,stackable:!0,vertical:!0,visible:u,children:Object($.jsxs)(Z.a,{children:[[{content:"Discussions",icon:"comments",to:"/discussions"}].map(((e,t)=>Object($.jsx)(U.a.Item,{as:c.c,onClick:y,...e},t))),Object($.jsx)(Z.a.Title,{active:g,index:0,onClick:()=>{j(!g)},children:Object($.jsx)(U.a.Item,{as:c.c,content:"On-chain",icon:"chain",to:"#"})}),Object($.jsx)(Z.a.Content,{active:g,children:d.map(((e,t)=>Object($.jsx)(U.a.Item,{as:c.c,onClick:y,...e},t)))}),r?Object($.jsx)($.Fragment,{children:l.map(((e,t)=>Object($.jsx)(U.a.Item,{as:c.c,...e},t)))}):Object($.jsx)($.Fragment,{children:[{content:"Login",icon:"sign in",to:"/login"},{content:"Sign-up",icon:"plus circle",to:"/signup"}].map(((e,t)=>Object($.jsx)(U.a.Item,{as:c.c,onClick:y,...e},t)))}),i?Object($.jsxs)(U.a.Item,{children:[Object($.jsx)(J.a,{name:"cube"}),` ${i}`]}):null]})}),Object($.jsx)(ee.a,{})]})]}),Object($.jsx)(Q.a,{minWidth:Q.a.onlyComputer.minWidth,children:Object($.jsxs)(U.a,{className:`${e} ${Qo}`,stackable:!0,inverted:!0,borderless:!0,children:[Object($.jsx)(U.a.Item,{as:c.c,to:"/",className:"logo",id:"title"}),Object($.jsx)(U.a.Item,{className:"desktop_items",children:Object($.jsx)(te.a,{trigger:Object($.jsx)($.Fragment,{children:"On-chain"}),icon:m,item:!0,children:Object($.jsx)(te.a.Menu,{children:d.map(((e,t)=>Object($.jsx)(U.a.Item,{as:c.c,...e},t)))})})}),i?Object($.jsxs)(U.a.Item,{children:[Object($.jsx)(J.a,{name:"cube",style:{marginRight:"10px"}}),` ${null===i||void 0===i?void 0:i.toNumber()}`]}):null,Object($.jsx)(U.a.Menu,{position:"right",children:Object($.jsx)(U.a.Item,{as:c.c,to:"/delegation",children:"Manage Delegation"})})]})})]})}))`
  &.polkadot {
    border-top: solid !important;
    border-top-color: ${({theme:e})=>e.colors.pink_primary} !important;
  }

  &.ui.menu,
  .ui.inverted.menu {
    font-family: ${({theme:e})=>e.fonts.font_default};
    background-color: ${({theme:e})=>e.colors.black_full};
    border-radius: 0rem;
    letter-spacing: 0.2px;

    & a.active {
      outline: none;
      background-color: ${({theme:e})=>e.colors.black_full} !important;
    }
    .item {
      color: ${({theme:e})=>e.colors.grey_secondary};
      font-weight: 500;
      &:hover {
        color: white;
      }
    }

    i.icon {
      color: ${({theme:e})=>e.colors.grey_secondary};
    }

    .logo {
      img {
        width: 16rem;

        @media only screen and (max-width: 992px) {
          width: 10rem;
        }
      }
      background-color: ${({theme:e})=>e.colors.black_full} !important;
    }
  }

  @media only screen and (max-width: 992px) {
    &.pushable {
      position: relative;
    }

    &.ui.menu,
    .ui.inverted.menu {
      min-height: 5rem;
      border-bottom-style: solid;
      border-bottom-width: 1px;
      border-bottom-color: ${({theme:e})=>e.colors.grey_primary};
      margin: 0rem !important;

      .desktop_items,
      #title {
        position: absolute;
      }

      .desktop_items,
      #title {
        text-align: left;
        margin: auto 0;
        left: 2rem;
        top: 0.3rem;
        padding-top: 1rem;
        padding-bottom: 0;
        border-radius: 0.8rem !important;
      }

      #rightmenu {
        font-size: ${({theme:e})=>e.fontSizes.lg};
        max-width: 2rem;
        margin-right: 2rem !important;
        margin-left: 2rem !important;
      }

      .item {
        font-size: ${({theme:e})=>e.fontSizes.md};
        display: inline-block;
        &:before {
          width: 0rem;
        }
      }

      a.item:hover {
        background: none;
        color: ${({theme:e})=>e.colors.grey_secondary};
      }
    }

    .ui.top.sidebar {
      padding: 1rem;
      border-radius: 0rem !important;
      position: relative;
      .item {
        float: left;
        clear: both;
        text-align: left;
        border-radius: 0.8rem !important;
      }
    }

    .ui.icon.menu .item {
      text-align: left;
      padding: 1.5rem 1rem;
      & > .icon:not(.dropdown) {
        font-size: 1.6rem !important;
        display: inline-block;
        margin: 0 1.2rem auto 0 !important;
      }
    }
  }

  @media only screen and (min-width: 992px) {
    &.ui.menu {
      padding: 0.5rem 2rem;
      font-size: ${({theme:e})=>e.fontSizes.md};
      .item {
        padding: 0.5rem 0.5rem;
        margin: 0 1.2rem;
        :hover {
          background-color: ${({theme:e})=>e.colors.black_full} !important;
        }
      }

      .ui.dropdown .menu > .item,
      .ui.dropdown .menu > .active.item {
        font-size: ${({theme:e})=>e.fontSizes.md}!important;
        font-weight: 400 !important;
      }
    }

    .desktop_items,
    .user_items,
    #title {
      i.icon {
        display: none;
      }
      i.icon.caret {
        display: block;
      }
    }
  }

  &.ui.inverted.menu a.item:hover,
  &.ui.inverted.menu .dropdown.item:hover {
    border-radius: 0.5rem;
  }
`;const Zo={dismissModal:()=>{throw new Error("dismissModal function must be overridden")},modal:{},setModal:()=>{throw new Error("setModal function must be overridden")}},en=Object(n.createContext)(Zo),tn=({children:e})=>{const[t,o]=Object(n.useState)({});return Object($.jsx)(en.Provider,{value:{dismissModal:()=>o({}),modal:t,setModal:o},children:e})};var on=o(1249);var nn=Object(L.b)((e=>Object($.jsx)(on.a,{...e})))`
  &.ui.button,
  &.active,
  &:active {
    font-family: ${({theme:e})=>e.fonts.font_default};
    font-size: ${({theme:e})=>e.fontSizes.md};
    font-weight: 500;
    letter-spacing: 0.06rem;
    line-height: 1.6rem;
    border-radius: ${({theme:e})=>e.radii.button_radius};
    border: none;
    padding: 0.8rem 1.6rem;
    transition-property: background-color;
    transition-duration: 0.2s;
    &.ui.tiny.button {
      font-size: ${({theme:e})=>e.fontSizes.sm};
      padding: 0.6rem 1.2rem;
    }
    &.ui.small.button {
      font-size: ${({theme:e})=>e.fontSizes.md};
      padding: 0.6rem 1.2rem;
    }
    &.ui.medium.button {
      font-size: ${({theme:e})=>e.fontSizes.md};
      padding: 0.8rem 1.6rem;
    }
    &.ui.large.button {
      font-size: ${({theme:e})=>e.fontSizes.lg};
      padding: 1.2rem 2rem;
    }
    &.ui.primary.button {
      background-color: ${({theme:e})=>e.colors.pink_primary};
      color: white;
      &:hover,
      &:focus {
        background-color: ${({theme:e})=>e.colors.pink_secondary};
        outline: none;
      }
    }
    &.ui.primary.positive.button {
      background-color: ${({theme:e})=>e.colors.green_primary} !important;
      color: white !important;
      &:hover,
      &:focus {
        background-color: ${({theme:e})=>e.colors.green_secondary} !important;
        color: white !important;
        box-shadow: none !important;
        outline: none;
      }
    }
    &.ui.primary.negative.button {
      background-color: ${({theme:e})=>e.colors.red_primary} !important;
      color: white !important;
      box-shadow: none !important;
      &:hover,
      &:focus {
        background-color: ${({theme:e})=>e.colors.red_secondary} !important;
        color: white !important;
        box-shadow: none !important;
        outline: none;
      }
    }
    &.ui.secondary.button {
      background-color: white;
      color: ${({theme:e})=>e.colors.grey_primary};
      box-shadow: 0 0 0 1px inset !important;
      &:hover,
      &:focus {
        color: ${({theme:e})=>e.colors.black_text};
        background-color: ${({theme:e})=>e.colors.grey_light};
        box-shadow: ${({theme:e})=>e.colors.box_shadow_sec_btn} !important;
        outline: none;
      }
    }
    &.ui.secondary.negative.button {
      background-color: white;
      color: ${({theme:e})=>e.colors.grey_primary};
      box-shadow: 0 0 0 1px inset !important;
      &:hover,
      &:focus {
        background-color: ${({theme:e})=>e.colors.red_secondary};
        color: white;
        box-shadow: ${({theme:e})=>e.colors.box_shadow_sec_btn_neg};
        outline: none;
      }
    }
    &.ui.social.button {
      background-color: white;
      color: ${({theme:e})=>e.colors.grey_primary};
      font-size: ${({theme:e})=>e.fontSizes.sm};
      border: none;
      padding: 0.7rem 0.7rem;
      margin: 0 0.4rem 0 0;
      text-transform: none;
      letter-spacing: 0;
      border-radius: 0.2rem;
      &:hover {
        background-color: ${({theme:e})=>e.colors.grey_light};
        border: none;
      }
    }
    &.ui.button > .icon:not(.button) {
      opacity: 1;
    }
    &.ui.social.negative.button {
      background-color: white;
      color: ${({theme:e})=>e.colors.red_primary};
      font-size: ${({theme:e})=>e.fontSizes.sm};
      border: none;
      padding: 0.7rem 0.7rem;
      text-transform: none;
      letter-spacing: 0;
      &:hover {
        background-color: ${({theme:e})=>e.colors.red_light};
        border: none;
      }
    }
  }

  &.ui.button > .icon:not(.button),
  &.ui.button:not(.icon) > .icon:not(.button):not(.dropdown) {
    margin: 0 0.4rem 0 0;
    height: 1.6rem;
  }

  .icon {
    vertical-align: middle;
    font-size: ${({theme:e})=>e.fontSizes.md};
  }
`,an=o(1303);var sn=Object(L.b)((e=>{const{buttons:t,children:o,className:n,title:a,...s}=e;return Object($.jsxs)(an.a,{className:n,centered:!0,dimmer:"inverted",open:!0,size:"tiny",...s,children:[Object($.jsx)(an.a.Header,{children:a}),Object($.jsx)(an.a.Content,{children:Object($.jsx)(an.a.Description,{children:Object($.jsx)("div",{children:o})})}),Object($.jsx)(an.a.Actions,{children:t})]})}))`
  &.ui.modal {
    left: auto;
    height: auto;
    top: 25%;
    font-size: 1.2rem;
    border-radius: 0rem;

    > .actions {
      border-top: 0px !important;
      background-color: white !important;
      padding: 0 3rem 3rem 3rem;
      margin-top: 2rem;
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    > .header {
      border-bottom: 0px !important;
      font-family: ${({theme:e})=>e.fonts.font_default} !important;
      font-weight: 400 !important;
      font-size: ${({theme:e})=>e.fontSizes.xl} !important;
      padding: 2rem 3rem 0 3rem !important;
    }

    > .content {
      padding: 0 3rem;
      margin-top: 2rem;
    }
  }
`;var rn=({className:e})=>{const{modal:t,dismissModal:o}=Object(n.useContext)(en),{content:a,title:s}=t;if(!t.content)return null;return Object($.jsx)("div",{className:e,children:a?Object($.jsx)(sn,{buttons:Object($.jsx)(nn,{content:"Got it",icon:"check",primary:!0,onClick:o}),className:e,centered:!0,dimmer:"inverted",open:!0,onClose:o,size:"tiny",title:s,children:a}):null})};const cn={deQueueNotification:()=>{throw new Error("setNotificationContextState function must be overridden")},notificationsQueue:new Map,queueNotification:()=>{throw new Error("setNotificationContextState function must be overridden")}},dn=Object(n.createContext)(cn),ln=({children:e})=>{const[t,o]=Object(n.useState)(0),[a,s]=Object(n.useState)(new Map),r=Object(n.useRef)(new Map),i=e=>{r.current.has(e)&&(r.current.delete(e),s(new Map(r.current)))};return Object($.jsx)(dn.Provider,{value:{deQueueNotification:i,notificationsQueue:a,queueNotification:e=>{r.current.set(t,e),s(new Map(r.current)),setTimeout((()=>i(t)),5e3),o(t+1)}},children:e})};var mn=o(1309);let un,hn,pn,bn,gn;!function(e){e.ANONYMOUS="anonymous",e.ADMIN="admin",e.PROPOSAL_BOT="proposal_bot",e.USER="user"}(un||(un={})),function(e){e[e.SUCCESS=0]="SUCCESS",e[e.ERROR=1]="ERROR",e[e.WARNING=2]="WARNING"}(hn||(hn={})),function(e){e.Supermajorityapproval="Supermajorityapproval",e.Supermajorityrejection="Supermajorityrejection",e.Simplemajority="Simplemajority"}(pn||(pn={})),function(e){e.AYE="AYE",e.NAY="NAY"}(bn||(bn={})),function(e){e.SUCCESS="Success",e.INVALID_SENDER="InvalidSender",e.INVALID_SIGNATURE="InvalidSignature",e.INVALID_INDEX="InvalidIndex",e.INVALID_MESSAGE="InvalidMsg",e.REFERENDUM_FINISHED="ReferendumFinished",e.DEADLINE_EXCEEDED="DeadlineExceeded",e.NOT_DELEGATED="NotDelegated"}(gn||(gn={}));var jn=Object(L.b)((({className:e,notification:t,onDismiss:o})=>{const{ERROR:n,SUCCESS:a,WARNING:s}=hn,{header:r,message:i,status:c}=t;let d="green",l="check";switch(c){case n:d="red",l="times circle";break;case s:d="orange",l="warning circle";break;case a:d="green",l="check circle"}return Object($.jsx)("div",{className:e,children:Object($.jsx)(mn.a,{color:d,icon:l,content:i,header:r,onClick:o,onDismiss:o})})}))`
  margin: 1rem 0;
  cursor: pointer;

  .ui.message {
    font-family: ${({theme:e})=>e.fonts.font_default};
    background-color: white;
    border: none;
    outline: none;
    box-shadow: 0px 0.2rem 0.2rem rgba(0, 0, 0, 0.05);
    .header {
      font-family: ${({theme:e})=>e.fonts.font_default};
      font-weight: 500;
      font-size: ${({theme:e})=>e.fontSizes.md};
      color: ${({theme:e})=>e.colors.black_text};
    }
    p {
      opacity: 1;
      font-size: ${({theme:e})=>e.fontSizes.sm};
      color: ${({theme:e})=>e.colors.black_text};
    }
    .close {
      text-shadow: none;
      font-size: 1.8rem;
      margin-right: 1rem !important;
      color: ${({theme:e})=>e.colors.grey_secondary};
    }
  }

  .ui.icon.message > .icon:not(.close) {
    opacity: 1;
  }
`;var yn=Object(L.b)((({className:e})=>{const{deQueueNotification:t,notificationsQueue:o}=Object(n.useContext)(dn);return Object($.jsx)("div",{className:e,children:o.size?Array.from(o).map((([e,o])=>Object($.jsx)(jn,{notification:o,onDismiss:()=>t(e)},e))):null})}))`
  position: fixed;
  z-index: 1;

  @media only screen and (max-width: 576px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  @media only screen and (min-width: 576px) {
    right: 1rem;
    width: 40rem;
  }
`,fn=o(40),xn=o.n(fn);var _n=Object(L.b)((({children:e,className:t,content:o,dismissable:a,name:s,title:r})=>{const i=s+"Visible",c=localStorage.getItem(i),[d,l]=Object(n.useState)("true"===c);null===c&&(localStorage.setItem(i,"true"),l(!0));return Object($.jsx)($.Fragment,{children:d&&Object($.jsxs)("div",{className:t,children:[Object($.jsx)("h4",{children:r}),a&&Object($.jsx)("div",{className:"close",children:Object($.jsx)(K.a,{onClick:()=>{localStorage.setItem(i,"false"),l(!1)}})}),Object($.jsx)("p",{children:o}),e]})})}))`
  background-color: white;
  color: ${({theme:e})=>e.colors.black_text};
  font-size: ${({theme:e})=>e.fontSizes.sm};
  border-radius: 6px;
  box-shadow: ${({theme:e})=>e.colors.box_shadow_card};
  padding: 2rem 3rem;
  position: relative;
  margin-bottom: 2rem;

  h4 {
    margin-bottom: 1.2rem;
  }

  .close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: ${({theme:e})=>e.fontSizes.lg};
    &:hover {
      color: ${({theme:e})=>e.colors.grey_secondary};
      cursor: pointer;
    }
  }

  a {
    color: ${({theme:e})=>e.colors.black_text};
    text-decoration: underline;
    &:hover {
      color: ${({theme:e})=>e.colors.grey_primary};
      text-decoration: underline;
    }
  }
`,On=o(615);var vn=Object(L.b)((({className:e,text:t})=>Object($.jsxs)("div",{className:e,children:[Object($.jsx)(On.a,{className:"icon"}),t]})))`
  background-color: grey_border;
  padding: 2rem 3rem 3rem 3rem;
  border-radius: 3px;
  font-size: md;
  margin-bottom: 1rem;
  text-align: center;
  @media only screen and (max-width: 768px) {
    padding: 2rem;
    font-size: ${({theme:e})=>e.fontSizes.sm};
  }

  .icon {
    display: block;
    font-size: xl;
    margin: 1rem auto;
    @media only screen and (max-width: 768px) {
      margin: 0.5rem auto;
    }
  }
`,wn=o(1313),Sn=o(37),Cn=o.n(Sn),kn=o(1305);function $n(e,t){const o=O();var n;t?t/=1e3:t=(null===_||void 0===_||null===(n=_[o])||void 0===n?void 0:n.blockTime)/1e3;"number"!==typeof e&&(e=e.toNumber());var a;return a=e*t,a=Number(a),Math.floor(a/86400)+"d "+Math.floor(a%86400/3600)+"h "+(a<60?1:Math.floor(a%3600/60))+"m"}const An=L.b.span`
  font-size: ${({theme:e})=>e.fontSizes.xs};
  color: ${({theme:e})=>e.colors.black_text};
`;var Nn=({className:e,endBlock:t})=>{const o=new Cn.a(0),n=t-(Ko()||o).toNumber(),{blocktime:a}=Yo();return n!==t&&n>0?Object($.jsx)(kn.a,{className:e,trigger:Object($.jsx)("span",{className:"blockCountdown",children:$n(n,a)}),content:Object($.jsx)(An,{children:`#${t}`}),hoverable:!0,position:"top left"}):Object($.jsxs)($.Fragment,{children:["#",t]})};var En=o(642),Dn=e=>!e||e.length<8?e:`${e.substring(0,4)}...${e.substring(e.length-4)}`;const In=L.b.div`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.black_text};
  list-style: none;
  padding: 1rem;

  li {
    margin-bottom: 0.3rem;
  }

  .desc {
    font-weight: 500;
    margin-right: 0.3rem;
  }

  .judgments {
    display: inline list-item;
  }
`;var Pn=Object(L.b)((({className:e,identity:t,flags:o})=>{var n;const a=t.judgements.filter((([,e])=>!e.isFeePaid)),s=a.some((([,e])=>e.isKnownGood||e.isReasonable)),r=a.some((([,e])=>e.isErroneous||e.isLowQuality)),i=s?"green":r?"brown":"grey",c=s?"check circle":"minus circle",d=()=>Object($.jsx)("span",{"aria-label":"council member",className:"councilMember",role:"img",children:"\ud83d\udc51"}),l=Object($.jsxs)("span",{children:[Object($.jsx)(J.a,{name:c,color:i}),(null===o||void 0===o?void 0:o.isCouncil)&&Object($.jsx)(d,{})]}),m=JSON.stringify(a.map((([,e])=>e.toString()))),u=Object($.jsxs)(In,{children:[(null===t||void 0===t?void 0:t.legal)&&Object($.jsxs)("li",{children:[Object($.jsx)("span",{className:"desc",children:"legal:"}),t.legal]}),(null===t||void 0===t?void 0:t.email)&&Object($.jsxs)("li",{children:[Object($.jsx)("span",{className:"desc",children:"email:"}),t.email]}),(null===t||void 0===t||null===(n=t.judgements)||void 0===n?void 0:n.length)>0&&Object($.jsxs)("li",{children:[Object($.jsx)("span",{className:"desc",children:"judgements:"}),Object($.jsx)("span",{className:"judgments",children:m})]}),(null===t||void 0===t?void 0:t.pgp)&&Object($.jsxs)("li",{children:[Object($.jsx)("span",{className:"desc",children:"pgp:"}),t.pgp]}),(null===t||void 0===t?void 0:t.riot)&&Object($.jsxs)("li",{children:[Object($.jsx)("span",{className:"desc",children:"riot:"}),t.riot]}),(null===t||void 0===t?void 0:t.twitter)&&Object($.jsxs)("li",{children:[Object($.jsx)("span",{className:"desc",children:"twitter:"}),t.twitter]}),(null===t||void 0===t?void 0:t.web)&&Object($.jsxs)("li",{children:[Object($.jsx)("span",{className:"desc",children:"web:"}),t.web]}),(null===o||void 0===o?void 0:o.isCouncil)&&Object($.jsxs)("li",{children:[Object($.jsx)("span",{className:"desc",children:"Council member"}),Object($.jsx)(d,{})]})]});return Object($.jsx)("div",{className:e,children:Object($.jsx)(kn.a,{trigger:l,content:u,hoverable:!0,position:"top center"})})}))`
  display: inline;

  i.green.circle.icon {
    color: ${({theme:e})=>e.colors.green_primary} !important;
  }

  i.grey.circle.icon {
    color: ${({theme:e})=>e.colors.grey_primary} !important;
  }

  .councilMember {
    margin-right: 0.25rem;
  }
`;var Tn=Object(L.b)((({address:e,className:t,displayInline:o,extensionName:a,popupContent:s})=>{const{api:r,apiReady:i}=Object(n.useContext)(Mo),[c,d]=Object(n.useState)(""),[l,m]=Object(n.useState)(null),[u,h]=Object(n.useState)(null),[p,b]=Object(n.useState)(void 0);return Object(n.useEffect)((()=>{if(!r)return;if(!i)return;let t;return r.derive.accounts.info(e,(e=>{h(e.identity),e.identity.displayParent&&e.identity.display?(d(e.identity.displayParent),m(e.identity.display)):d(e.identity.displayParent||e.identity.display||e.nickname||"")})).then((e=>{t=e})).catch((e=>console.error(e))),()=>t&&t()}),[e,r,i]),Object(n.useEffect)((()=>{if(!r)return;if(!i)return;let t;return r.derive.accounts.flags(e,(e=>{b(e)})).then((e=>{t=e})).catch((e=>console.error(e))),()=>t&&t()}),[e,r,i]),Object($.jsxs)("div",{className:o?`${t} inline`:t,children:[Object($.jsx)(En.a,{className:"image identicon",value:e,size:o?20:32,theme:"polkadot"}),Object($.jsx)("div",{className:"content",children:o?s?Object($.jsxs)($.Fragment,{children:[u&&c&&Object($.jsx)(Pn,{identity:u,flags:p}),Object($.jsx)(kn.a,{trigger:Object($.jsxs)("div",{className:"header inline identityName",children:[c||Dn(e),l&&Object($.jsxs)("span",{className:"sub",children:["/",l]})]}),content:s,hoverable:!0,position:"top center"})]}):Object($.jsx)($.Fragment,{children:Object($.jsxs)("div",{className:"description inline",children:[u&&c&&Object($.jsx)(Pn,{identity:u,flags:p}),Object($.jsxs)("span",{className:"identityName",children:[c||Dn(e),l&&Object($.jsxs)("span",{className:"sub",children:["/",l]})]})]})}):a||c?s?Object($.jsx)(kn.a,{trigger:Object($.jsxs)($.Fragment,{children:[Object($.jsxs)("div",{className:"header",children:[u&&c&&!a&&Object($.jsx)(Pn,{identity:u,flags:p}),Object($.jsxs)("span",{className:"identityName",children:[a||c,!a&&l&&Object($.jsxs)("span",{className:"sub",children:["/",l]})]})]}),Object($.jsx)("div",{className:"description inline",children:Dn(e)})]}),content:s,hoverable:!0,position:"top center"}):Object($.jsxs)($.Fragment,{children:[Object($.jsxs)("div",{className:"header",children:[u&&c&&!a&&Object($.jsx)(Pn,{identity:u,flags:p}),Object($.jsxs)("span",{className:"identityName",children:[a||c,!a&&l&&Object($.jsxs)("span",{className:"sub",children:["/",l]})]})]}),Object($.jsx)("div",{className:"description",children:Dn(e)})]}):Object($.jsx)("div",{className:"description",children:Dn(e)})})]})}))`
  position: relative;
  display: flex;
  align-items: center;

  .content {
    display: inline-block;
  }

  .identicon {
    margin-right: 0.25rem;
  }

  .identityName {
    filter: grayscale(100%);
  }

  .header {
    color: ${({theme:e})=>e.colors.black_text};
    font-weight: 500;
    font-size: ${({theme:e})=>e.fontSizes.sm};
    margin-right: 0.4rem;
  }

  .description {
    color: ${({theme:e})=>e.colors.grey_primary};
    font-size: ${({theme:e})=>e.fontSizes.xs};
    margin-right: 0.4rem;
  }

  .inline {
    display: inline-flex !important;
    font-size: ${({theme:e})=>e.fontSizes.sm} !important;
  }

  .sub {
    color: ${({theme:e})=>e.colors.grey_secondary};
    line-height: inherit;
  }
`,Rn=o(221);var Fn=Object(L.b)((({className:e,topic:t})=>Object($.jsx)(Rn.a,{className:`${e} ${t}`,content:t})))`
  &.ui.label {
    font-size: ${({theme:e})=>e.fontSizes.xs};
    font-weight: 500;
    background-color: ${({theme:e})=>e.colors.grey_primary};
    color: ${({theme:e})=>e.colors.grey_text};
    border-style: solid;
    border-width: 1px;
    border-radius: 0.2rem;
    letter-spacing: 0.05rem;
    text-transform: capitalize;
    padding: 0.4rem 0.6rem;

    @media only screen and (max-width: 576px) {
      padding: 0.2rem 0.4rem;
    }
  }
  &.Democracy {
    background-color: ${({theme:e})=>e.colors.blue_primary} !important;
    color: white;
  }
  &.Council {
    background-color: ${({theme:e})=>e.colors.pink_secondary} !important;
    color: white;
  }
  &.Treasury {
    background-color: ${({theme:e})=>e.colors.pink_primary} !important;
    color: white;
  }
  &.Tech {
    background-color: ${({theme:e})=>e.colors.pink_primary} !important;
    color: white;
  }
`;var qn=Object(L.b)((({address:e,className:t,topic:o})=>Object($.jsxs)("div",{className:t,children:["by",Object($.jsx)(Tn,{address:e,className:"address",displayInline:!0}),o&&Object($.jsxs)($.Fragment,{children:["from ",Object($.jsx)(Fn,{className:"topic-tag",topic:o})]})]})))`
  display: inline-flex;
  align-items: center;
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.black_text};

  .topic-tag {
    margin-left: 0.6rem;
  }
`;const Ln={CLEARED:"Cleared",PROPOSED:"Proposed",TABLED:"Tabled"},zn={CANCELLED:"Cancelled",EXECUTED:"Executed",NOTPASSED:"NotPassed",PASSED:"Passed",STARTED:"Started",VETOED:"Vetoed"},Un={APPROVED:"Approved",CLOSED:"Closed",DISAPPROVED:"Disapproved",EXECUTED:"Executed",PROPOSED:"Proposed",VOTED:"Voted"},Wn={CLOSED:"TipClosed",CLOSING:"TipClosing",OPENED:"TipOpened",RETRACTED:"TipRetracted"},Mn={[Wn.OPENED]:"Opened",[Wn.CLOSING]:"Closing",[Wn.CLOSED]:"Closed",[Wn.RETRACTED]:"Retracted"},Bn={AWARDED:"BountyAwarded",BECAME_ACTIVE:"BountyBecameActive",CANCELED:"BountyCanceled",CLAIMED:"BountyClaimed",EXTENDED:"BountyExtended",PROPOSED:"BountyProposed",REJECTED:"BountyRejected"},Gn={[Bn.AWARDED]:"Awarded",[Bn.BECAME_ACTIVE]:"BecameActive",[Bn.CANCELED]:"Canceled",[Bn.CLAIMED]:"Claimed",[Bn.EXTENDED]:"Extended",[Bn.PROPOSED]:"Proposed",[Bn.REJECTED]:"Rejected"};var Vn=Object(L.b)((({children:e,className:t,content:o,status:n})=>{let a="circle";return[zn.PASSED,zn.STARTED,Ln.PROPOSED,Un.PROPOSED,Un.APPROVED,Wn.OPENED,Wn.CLOSING,Bn.PROPOSED,Bn.AWARDED,Bn.BECAME_ACTIVE,Bn.EXTENDED,"prime"].includes(n)&&(a="circle"),[Ln.CLEARED,zn.CANCELLED,zn.NOTPASSED,zn.VETOED,Un.DISAPPROVED,Wn.RETRACTED,Bn.CANCELED,Bn.REJECTED].includes(n)&&(a="times"),[Ln.TABLED,zn.EXECUTED,Un.APPROVED,Un.EXECUTED,Un.CLOSED,Wn.CLOSED,Bn.AWARDED,Bn.CLAIMED].includes(n)&&(a="check"),o&&Mn[o]&&(o=Mn[o]),o&&Gn[o]&&(o=Gn[o]),Object($.jsx)(Rn.a,{className:t,icon:a,content:o,status:n,children:e})})).attrs((({status:e})=>({className:e,content:e})))`
  &.ui.label {
    font-size: xs;
    font-weight: 500;
    background-color: white;
    color: ${({theme:e})=>e.colors.grey_primary};
    border-style: solid;
    border-width: 1px;
    border-radius: 0.2rem;
    letter-spacing: 0.05rem;
    text-transform: capitalize;
    padding: 0.5rem 1rem;
    &.${zn.STARTED},
      &.${Ln.PROPOSED},
      &.${Un.PROPOSED},
      &.${Wn.OPENED},
      &.${Wn.CLOSING},
      &.${Bn.PROPOSED},
      &.${Bn.AWARDED},
      &.${Bn.BECAME_ACTIVE},
      &.${Bn.EXTENDED} {
      border-color: blue_primary;
      color: blue_primary;
    }
    &.${Ln.TABLED},
      &.${zn.PASSED},
      &.${zn.EXECUTED},
      &.${Un.EXECUTED},
      &.${Un.APPROVED},
      &.${Un.CLOSED},
      &.${Wn.CLOSED},
      &.${Bn.AWARDED},
      &.${Bn.CLAIMED},
      &.prime {
      border-color: ${({theme:e})=>e.colors.green_primary};
      color: ${({theme:e})=>e.colors.green_primary};
    }
    &.${Ln.CLEARED},
      &.${zn.CANCELLED},
      &.${zn.NOTPASSED},
      &.${zn.VETOED},
      &.${Un.DISAPPROVED},
      &.${Wn.RETRACTED},
      &.${Bn.CANCELED},
      &.${Bn.REJECTED} {
      border-color: red_primary;
      color: red_primary;
    }
  }
`;var Hn=Object(L.b)((function({address:e,className:t,comments:o,end:a=0,method:s,onchainId:r,status:i,tipReason:c,title:d,topic:l}){var m,u;const h=Object(n.useContext)(D),p=Object($.jsx)("h4",{className:c?"tipTitle":"",children:Object($.jsx)("div",{children:s||c||d||"Title not edited"})}),b=d&&c&&s&&Object($.jsx)("h5",{children:d}),g=(null===(m=Ko())||void 0===m?void 0:m.toNumber())||0,j=null===h||void 0===h||null===(u=h.addresses)||void 0===u?void 0:u.includes(e);return Object($.jsx)("div",{className:t+(j?" own-proposal":""),children:Object($.jsxs)(wn.a.Group,{horizontal:!0,children:[!c&&Object($.jsx)(wn.a,{className:"onchain_id",children:Object($.jsxs)("h5",{children:["#",r]})}),Object($.jsxs)(wn.a,{children:[Object($.jsxs)(Q.a,{maxWidth:Q.a.onlyMobile.maxWidth,children:[Object($.jsxs)("div",{className:"title-wrapper",children:[p,b]}),Object($.jsx)(qn,{address:e,topic:l}),i&&Object($.jsx)(Vn,{className:"statusTag",status:i})]}),Object($.jsxs)(Q.a,{minWidth:Q.a.onlyTablet.minWidth,children:[Object($.jsxs)("div",{className:"title-wrapper",children:[p,Object($.jsx)(qn,{address:e,topic:l})]}),i&&Object($.jsx)(Vn,{className:"statusTag",status:i}),b]}),Object($.jsxs)("ul",{children:[!!a&&!!g&&Object($.jsxs)("li",{children:[Object($.jsx)(J.a,{name:"clock"}),a>g?Object($.jsxs)("span",{children:[Object($.jsx)(Nn,{endBlock:a})," remaining"]}):Object($.jsxs)("span",{children:["ended ",Object($.jsx)(Nn,{endBlock:a})]})]}),o&&Object($.jsxs)("li",{children:[Object($.jsx)(J.a,{name:"comment"}),o," comments"]})]})]})]})})}))`
  padding: 2rem 3rem 1.5rem 3rem;
  background-color: white;
  border-radius: 3px;
  box-shadow: ${({theme:e})=>e.colors.box_shadow_card};
  transition: box-shadow 0.1s ease-in-out;

  &.own-proposal {
    border-left-width: 4px;
    border-left-style: solid;
    border-left-color: ${({theme:e})=>e.colors.pink_primary};
    padding: calc(2rem - 4px);
  }

  &:hover {
    box-shadow: ${({theme:e})=>e.colors.box_shadow_card_hover};
    text-decoration: none;
  }
  overflow-wrap: break-word;

  .ui.horizontal.segments {
    box-shadow: none;
    border: none;
    margin: 0.5rem 0;
    background-color: rgba(0, 0, 0, 0);
  }
  .ui.segment {
    padding: 0;
  }
  .ui.horizontal.segments > .segment {
    border-left: none;
  }

  .onchain_id {
    min-width: 4rem !important;
    max-width: 6rem;
  }

  .statusTag {
    position: absolute;
    top: 0;
    right: 0;
  }

  .title-wrapper {
    max-width: calc(100% - 10rem);
  }

  h4,
  h5 {
    font-family: ${({theme:e})=>e.fonts.font_default};
    display: block;
    margin-bottom: 0.6rem;
  }

  h4 {
    font-size: ${({theme:e})=>e.fontSizes.lg};
    display: inline-flex;
    margin-right: 0.6rem;
    line-height: 1.2;
  }

  h4.tipTitle {
    max-width: 55%;

    & > div {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  h5 {
    font-size: ${({theme:e})=>e.fontSizes.md};
    line-height: 1.4;
  }

  .originLabel {
    display: inline-flex;
    font-size: ${({theme:e})=>e.fontSizes.sm};
    color: ${({theme:e})=>e.colors.black_text};
  }

  .address,
  .topic {
    margin-left: 0.6rem;
  }

  ul {
    color: ${({theme:e})=>e.colors.grey_secondary};
    font-size: ${({theme:e})=>e.fontSizes.xs};
    font-weight: 500;
    margin-top: 0.8rem;
    li {
      display: inline;
      margin-right: 1.5rem;
    }
  }

  @media only screen and (max-width: 576px) {
    & {
      padding: 1.2rem 1.5rem;
    }

    h4 {
      font-size: ${({theme:e})=>e.fontSizes.md};
    }

    h4.tipTitle {
      max-width: 100%;
    }

    h5 {
      font-size: ${({theme:e})=>e.fontSizes.sm};
      line-height: 1.2;
    }

    .statusTag {
      padding: 0.2rem 0.4rem !important;
      font-size: 1rem !important;
    }

    .title-wrapper {
      max-width: calc(100% - 9rem);
    }
  }
`;var Yn=Object(L.b)((({className:e,data:t})=>{const o=!t.posts||!t.posts.length,n=t.posts.some((e=>{var t;return!!(null===(t=e.onchain_link)||void 0===t?void 0:t.onchain_bounty.length)}));return o||!n?Object($.jsx)(vn,{className:e,text:"There are currently no active bounties."}):Object($.jsx)("ul",{className:`${e} bounties__list`,children:t.posts.map((e=>{var t,o,n,a,s,r;const i=null===(t=e.onchain_link)||void 0===t?void 0:t.onchain_bounty_id;return!!(null===e||void 0===e||null===(o=e.author)||void 0===o?void 0:o.username)&&!!(null===(n=e.onchain_link)||void 0===n?void 0:n.onchain_bounty.length)&&Object($.jsx)("li",{className:"bounties__item",children:Object($.jsx)(c.b,{to:`/bounty/${i}`,children:Object($.jsx)(Hn,{address:e.onchain_link.proposer_address,comments:(null===(a=e.comments_aggregate.aggregate)||void 0===a?void 0:a.count)?e.comments_aggregate.aggregate.count.toString():"no",onchainId:i,status:null===(s=e.onchain_link.onchain_bounty[0])||void 0===s||null===(r=s.bountyStatus)||void 0===r?void 0:r[0].status,title:e.title,topic:e.topic.name})})},e.id)}))})}))`
  margin-block-start: 0;
  margin-block-end: 0;

  li {
    list-style-type: none;
  }

  .bounties__item {
    margin: 0 0 1rem 0;
    a:hover {
      text-decoration: none;
    }
  }
`;const Kn=1,Jn=4,Qn=2;var Xn=function(e){return e.replace(/Network error: |GraphQL error: /g,"")};var Zn=Object(L.b)((({className:e,text:t})=>Object($.jsx)("div",{className:e,children:Xn(t)})))`
  color: red_secondary;
  font-size: ${({theme:e})=>e.fontSizes.sm};
`,ea=o(1312),ta=o(1292);var oa=Object(L.b)((({className:e,text:t="Loading",timeout:o,timeoutText:a="Process timeout"})=>{const[s,r]=Object(n.useState)(!0);return Object(n.useEffect)((()=>{if(o){const e=setTimeout((()=>{r(!1)}),o);return()=>clearTimeout(e)}}),[o]),Object($.jsx)($.Fragment,{children:s?Object($.jsx)(ea.a,{inverted:!0,active:!0,className:e,children:Object($.jsx)(ta.a,{inverted:!0,children:t})}):Object($.jsx)("div",{className:`${e} error-text`,children:a})})}))`
  background-color: inherit !important;

  &.ui.inverted.dimmer {
    border-radius: 3px;
  }

  .error-text {
    color: ${({theme:e})=>e.colors.red_secondary};
  }
`;const na=L.b.div`
  padding: 2rem 3rem 1.5rem 3rem;
  background-color: white;
  border-radius: 3px;
  box-shadow: box_shadow_card;
  transition: box-shadow 0.1s ease-in-out;
  font-family: font_default;
  font-size: md;
  font-weight: bold;
  color: ${({theme:e})=>e.colors.grey_primary};
  margin-bottom: 0.3rem;
  text-align: center;

  &:hover {
    box-shadow: box_shadow_card_hover;
    text-decoration: none;
    cursor: pointer;
  }

  @media only screen and (max-width: 576px) {
    & {
      padding: 1.2rem 1.5rem;
    }
  }
`;var aa=({onClick:e,loading:t})=>Object($.jsx)(na,{onClick:e,children:t?Object($.jsx)(ta.a,{active:!0,inline:!0}):"LOAD MORE"});var sa=({className:e,limit:t})=>{const[o,a]=Object(n.useState)(1),{data:s,error:r,loading:i,refetch:c}=(d={variables:{limit:t,postTopic:Jn,postType:Qn}},de.c(so,d));var d;Object(n.useEffect)((()=>{c()}),[c]);return(null===r||void 0===r?void 0:r.message)?Object($.jsx)(Zn,{text:r.message}):s?Object($.jsxs)($.Fragment,{children:[Object($.jsx)(Yn,{className:e,data:s}),(i||s.posts.length===t*o)&&Object($.jsx)(aa,{onClick:()=>{a(o+1)},loading:i})]}):Object($.jsx)(oa,{})};var ra=Object(L.b)((({className:e})=>Object($.jsxs)("div",{className:e,children:[Object($.jsx)("h1",{children:"On-chain bounty"}),Object($.jsxs)(xn.a,{stackable:!0,reversed:"mobile tablet",children:[Object($.jsx)(xn.a.Column,{mobile:16,tablet:16,computer:10,children:Object($.jsx)(sa,{limit:25})}),Object($.jsx)(xn.a.Column,{mobile:16,tablet:16,computer:6,children:Object($.jsx)(_n,{dismissable:!0,content:"This is the place to discuss on-chain bounties. Bounty posts are automatically generated as soon as they are created on-chain. Only the proposer is able to edit them.",name:"onchainInfo",title:"About On-chain bounties"})})]})]})))`
  h1 {
    @media only screen and (max-width: 576px) {
      margin: 3rem 1rem 1rem 1rem;
    }

    @media only screen and (max-width: 768px) and (min-width: 576px) {
      margin-left: 1rem;
    }

    @media only screen and (max-width: 991px) and (min-width: 768px) {
      margin-left: 1rem;
    }
  }

  @media only screen and (max-width: 991px) and (min-width: 768px) {
    .ui[class*='tablet reversed'].grid {
      flex-direction: column-reverse;
    }
  }
`,ia=o(1314);var ca=Object(L.b)((({className:e})=>{const[t,o]=Object(n.useState)(!1);Object(n.useLayoutEffect)((()=>{const e=()=>{window.pageYOffset>300?o(!0):o(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)}),[]);return t?Object($.jsx)("div",{className:e,children:Object($.jsx)("button",{className:"scroll-arrow",onClick:()=>{window.scrollTo({top:0})},children:Object($.jsx)(J.a,{name:"angle up"})})}):null}))`
  position: sticky;
  top: calc(100vh - 60px);

  .scroll-arrow {
    display: flex;
    border-radius: 50%;
    width: 5rem;
    height: 5rem;
    background-color: white;
    color: ${({theme:e})=>e.colors.grey_primary};
    font-size: xl;
    text-align: center;
    transition: all 0.2s ease;
    border: none;
    box-shadow: 0 0.2rem 0.4rem rgba(83, 89, 92, 0.25);
    line-height: 2.4rem;
    i.icon {
      margin: auto;
      transition: all 0.2s ease;
    }
    &:hover {
      cursor: pointer;
      background-color: ${({theme:e})=>e.colors.grey_light};
    }
    &:focus {
      outline: none;
    }
  }
`;var da=({isMotion:e=!1,isProposal:t=!1,isReferendum:o=!1,isTreasuryProposal:n=!1,isTipProposal:a=!1,isBounty:s=!1,isTechCommitteeProposal:r=!1})=>{const i=e?"motion":t?"proposal":o?"referendum":n?"treasury proposal":a?"tip proposal":s?"bounty":r?"tech committee proposal":"post";return Object($.jsxs)("div",{children:[" Sorry, we couldn't find any ",i," with this id"]})},la=o(46);const ma="polkassembly";var ua=o(1304);var ha=Object(L.b)((function(e){return Object($.jsx)(ua.a.Field,{...e})}))`
  margin-bottom: 1.2rem;
`;var pa=Object(L.b)((function(e){return Object($.jsx)(ua.a.Group,{...e})}))`
  margin-bottom: 1.25rem;
`;var ba=Object(L.b)((function({className:e,invalid:t=!1,...o}){return Object($.jsx)(ua.a.Input,{className:t?e:`${e} invalid`,...o})}))`
  .ui.input > input {
    font-family: ${({theme:e})=>e.fonts.font_default};
    font-size: ${({theme:e})=>e.fontSizes.input_text_size};
    border-width: 1px;
    border-color: ${({theme:e})=>e.colors.grey_light};
    border-radius: ${({theme:e})=>e.colors.input_border_radius};
    text-indent: 0;
    padding: 1rem;
    margin-bottom: 1.2rem;
    &:focus {
      font-family: ${({theme:e})=>e.fonts.font_default};
      font-size: ${({theme:e})=>e.fontSizes.input_text_size};
      color: ${({theme:e})=>e.colors.black_text};
      border-color: ${({theme:e})=>e.colors.grey_primary};
      border-radius: ${({theme:e})=>e.radii.input_border_radius};
    }
    &:hover {
      border-color: ${({theme:e})=>e.colors.grey_secondary};
    }
  }

  &.invalid > .ui.input > input {
    color: ${({theme:e})=>`${e.colors.red_primary} !important`};
    border-color: ${({theme:e})=>`${e.colors.red_primary} !important`};
  }
`;function ga({className:e,standalone:t=!0,...o}){return Object($.jsx)(ja,{className:t?`${e} standalone`:e,...o})}ga.Input=ba,ga.Field=ha,ga.Group=pa;const ja=Object(L.b)(ua.a)`
  &.standalone {
    background-color: white;
    padding: 2rem 3rem 3rem 3rem;
    border-radius: 3px;
    box-shadow: box_shadow_card;
  }

  h3 {
    font-size: 2.4rem;
    margin-bottom: 3rem;
  }

  .field {
    label {
      font-weight: 500;
    }
  }

  .text-muted {
    font-size: ${({theme:e})=>e.fontSizes.sm};
    color: ${({theme:e})=>e.colors.grey_primary};
    margin-bottom: 1.2rem;

    a {
      color: ${({theme:e})=>e.colors.grey_primary};
      cursor: pointer;
      border-bottom-style: solid;
      border-bottom-width: 1px;
      border-bottom-color: ${({theme:e})=>e.colors.grey_primary};
    }
  }

  .error-text {
    color: red_secondary;
  }

  &.ui.form {
    font-size: ${({theme:e})=>e.fontSizes.sm};

    .field {
      > label {
        font-size: input_text_size;
        font-weight: 500;
        color: ${({theme:e})=>e.colors.black_primary};
        margin-bottom: 0.6rem;
      }
    }

    .fields {
      margin-bottom: 1.2rem;

      @media only screen and (max-width: 767px) {
        margin-bottom: 1.25rem;
      }
    }

    input:not([type]),
    input[type='date'],
    input[type='datetime-local'],
    input[type='email'],
    input[type='file'],
    input[type='number'],
    input[type='password'],
    input[type='search'],
    input[type='tel'],
    input[type='text'],
    input[type='time'],
    input[type='url'] {
      font-family: font_default;
      font-size: input_text_size;
      color: ${({theme:e})=>e.colors.black_primary};
      border-style: solid;
      border-width: 1px;
      border-color: ${({theme:e})=>e.colors.grey_light};
      border-radius: input_border_radius;
      text-indent: 0rem;
      padding: 1rem;
      margin-bottom: 1.2rem;
      &:focus {
        font-family: font_default;
        font-size: input_text_size;
        color: ${({theme:e})=>e.colors.black_text};
        border-color: ${({theme:e})=>e.colors.grey_primary};
        border-radius: input_border_radius;
      }
      &:hover {
        border-color: ${({theme:e})=>e.colors.grey_secondary};
      }
    }

    input::selection,
    textarea::selection {
      color: ${({theme:e})=>e.colors.black_text};
      background-color: ${({theme:e})=>e.colors.grey_light};
    }

    input[type='checkbox'] {
      position: relative;
      bottom: 0.2rem;
      margin-right: 1rem;
      vertical-align: middle;
    }

    @media only screen and (max-width: 576px) {
      margin-top: 0rem;
      padding: 2rem;
    }
  }

  .ui.toggle.checkbox {
    label {
      font-size: ${({theme:e})=>e.fontSizes.sm};
      font-weight: 400;
      color: black_text !important;
    }

    input:checked ~ label:before {
      background-color: pink_primary !important;
    }
  }

  .ui.dropdown,
  .ui.selection.dropdown {
    font-size: ${({theme:e})=>e.fontSizes.sm};
    margin-bottom: 1.2rem;
    border-style: solid;
    border-width: 1px;
    border-color: ${({theme:e})=>e.colors.grey_light};
    border-radius: input_border_radius;

    .menu {
      border-color: ${({theme:e})=>e.colors.grey_light};
    }

    .menu .active.item {
      font-weight: 500;
    }

    .menu > .item {
      padding: 1rem !important;
    }

    .menu > .item:hover {
      background-color: ${({theme:e})=>e.colors.grey_light};
    }

    .visible.menu.transition {
      border-radius: input_border_radius;
    }
  }

  .ui.selection.dropdown:focus,
  .ui.selection.active.dropdown,
  .ui.selection.active.dropdown:hover,
  .ui.selection.active.dropdown .menu {
    border-color: ${({theme:e})=>e.colors.grey_light};
  }

  .ui.horizontal.divider {
    color: black_text !important;
    margin: 3rem 0;
    font-weight: 400;
  }
`;var ya=Object(L.b)((({className:e,children:t})=>Object($.jsx)("div",{className:e,children:t})))`
  background-color: white;
  padding: 2rem 3rem 2rem 3rem;
  border-radius: 3px;
  box-shadow: box_shadow_card;
  margin-bottom: 1rem;
  @media only screen and (max-width: 768px) {
    padding: 2rem;
  }

  font-size: ${({theme:e})=>e.fontSizes.sm};

  h5,
  h6 {
    font-size: 1.4rem;
  }

  .ui.divided.grid:not([class*='vertically divided']) > .column:not(.row),
  .ui.divided.grid:not([class*='vertically divided']) > .row > .column {
    box-shadow: none;
  }
`,fa=o(627);const xa=Object(fa.a)();var _a=()=>{switch(xa&&xa.name){case"chrome":case"firefox":return"https://chrome.google.com/webstore/detail/polkadot%7Bjs%7D-extension/mopnmbcafieddcagagdcbnhejhlodfdd?hl=en";default:return""}};var Oa=()=>Object($.jsxs)(ya,{children:[Object($.jsx)("div",{className:"text-muted",children:"Polkadot-js extension not detected."}),_a()?Object($.jsx)("div",{className:"text-muted",children:"No web 3 account integration could be found. To be able to vote on-chain, visit this page on a computer with polkadot-js entension."}):Object($.jsxs)("div",{className:"text-muted",children:["Please install ",Object($.jsx)("a",{href:"https://www.mozilla.org/en-US/firefox/",children:"Firefox"})," or"," ",Object($.jsx)("a",{href:"https://www.google.com/chrome/",children:"Chrome"})," browser to use this feature."]})]}),va=o(385);const wa={fontSize:"1.2rem",marginLeft:"-1rem"},Sa=Object(L.b)((({className:e})=>Object($.jsx)(J.a,{className:e,name:"question circle"})))`
  color: ${({theme:e})=>e.colors.grey_secondary};
  font-size: 1.3rem !important;
  margin-left: 0.2rem !important;
`;var Ca=({content:e})=>Object($.jsx)(kn.a,{trigger:Object($.jsx)("span",{children:Object($.jsx)(Sa,{})}),content:e,style:wa,hoverable:!0});var ka=Object(L.b)((({className:e,isPassing:t})=>{let o="",n=null;return null===t?o="-":(o=t?"Passing":"Failing",n=t?"check circle outline":"times circle outline"),Object($.jsxs)("div",{className:`${e} ${"-"===o?null:o.toLowerCase()}`,children:[n&&Object($.jsx)(J.a,{name:n}),o]})}))`
  background-color: ${({theme:e})=>e.colors.grey_secondary};
  padding: 2rem 3rem 2rem 3rem;
  border-radius: 3px;
  margin-bottom: 1rem;
  font-size: ${({theme:e})=>e.fontSizes.lg};
  color: white;
  text-align: center;
  transition-duration: 1s;
  box-shadow: ${({theme:e})=>e.colors.box_shadow_card};

  &.passing {
    background-color: ${({theme:e})=>e.colors.green_primary};
  }

  &.failing {
    background-color: ${({theme:e})=>e.colors.red_primary};
  }
`,$a=o(1296),Aa=function(e,t){const o=O(),n=_[o].tokenDecimals,a=e.toString();let s="",r="";a.length>n?(s=a.slice(-n),r=a.slice(0,a.length-n)):(r="0",s=a.padStart(n-1,"0"));let i=".";const{numberAfterComma:c,withThousandDelimitor:d=!0,withUnit:l}=t;c&&c<0||0===c?(i="",s=""):c&&c>0&&(s=s.slice(0,c)),d&&(r=r.replace(/\B(?=(\d{3})+(?!\d))/g," "));return`${r}${i}${s}${l?` ${_[o].tokenSymbol}`:""}`};const Na=function(e){return Number(Aa(e,{numberAfterComma:2,withThousandDelimitor:!1}))},Ea=function(e){return Aa(e,{numberAfterComma:2,withThousandDelimitor:!0})};var Da=Object(L.b)((({ayeVotes:e,className:t,isPassing:o,nayVotes:n,threshold:a})=>{const s=Na(a),r=Na(e),i=Na(e.add(n)),c=o?Na(e.add(a)):Na(n.add(a))||1,d=o?100*(1-s/c):s/c*100,l=r/i*100;return Object($.jsxs)("div",{className:t,children:[Object($.jsxs)("div",{className:"voteNumbers",children:["Aye: ",Ea(e)]}),Object($.jsxs)("div",{className:"voteNumbers nay",children:["Nay: ",Ea(n)]}),Object($.jsx)($a.a,{className:o?"passing":"",percent:l}),d>0&&Object($.jsxs)("div",{id:"passingThreshold",style:{left:d+"%"},children:[Object($.jsx)("hr",{}),Object($.jsxs)("div",{className:d<50?"threshold-left":"threshold-right",children:[">",o?"Failing":"Passing"," threshold: ",Ea(a)]})]})]})}))`
  position: relative;
  width: 100%;
  margin: 1rem 0 2.4rem 0;

  hr {
    width: 0.2rem;
    height: 2rem;
    border: none;
    background-color: ${({theme:e})=>e.colors.grey_secondary};
    margin: -0.2rem 0 0 0;
  }

  .voteNumbers {
    display: inline-block;
    color: ${({theme:e})=>e.colors.grey_primary};
    font-size: ${({theme:e})=>e.fontSizes.sm};
    margin-bottom: -1rem;
  }

  .nay {
    position: absolute;
    right: 0;
  }

  #passingThreshold {
    display: inline-block;
    position: absolute;
    white-space: nowrap;
    color: ${({theme:e})=>e.colors.grey_primary};
    font-size: ${({theme:e})=>e.fontSizes.sm};
    margin-top: -1rem;
  }

  .threshold-left {
    position: absolute;
    left: 0;
  }

  .threshold-right {
    position: absolute;
    right: 0;
  }

  .ui.progress {
    height: 1rem;
    margin: 0.2rem 0;
    background-color: ${({theme:e})=>e.colors.grey_light};
    .bar {
      height: 1rem;
    }
  }

  .passing {
    .bar {
      background-color: ${({theme:e})=>e.colors.green_primary};
    }
  }
`;const Ia=new Cn.a(0);var Pa=Object(L.b)((({className:e,referendumId:t,threshold:o})=>{const{api:a,apiReady:s}=Object(n.useContext)(Mo),[r,i]=Object(n.useState)(Ia),[c,d]=Object(n.useState)(Ia),[l,m]=Object(n.useState)(Ia),[u,h]=Object(n.useState)(Ia),[p,b]=Object(n.useState)(Ia),[g,j]=Object(n.useState)(Ia),[y,f]=Object(n.useState)(null),[x,_]=Object(n.useState)({isLoading:!0,message:"Loading votes"}),O=Object(n.useMemo)((()=>c.isZero()?0:r.muln(1e4).div(c).toNumber()/100),[r,c]),v=Object(n.useMemo)((()=>{if(!o||null===y)return Ia;if(y){const e=Object(va.getFailingThreshold)({ayes:l,ayesWithoutConviction:g,threshold:o,totalIssuance:c});return e.isValid&&e.failingThreshold?e.failingThreshold:Ia}{const e=Object(va.getPassingThreshold)({nays:u,naysWithoutConviction:p,threshold:o,totalIssuance:c});return e.isValid&&e.passingThreshold?e.passingThreshold:Ia}}),[l,g,y,u,p,o,c]);return Object(n.useEffect)((()=>{if(!a)return;if(!s)return;let e;return a.derive.democracy.referendums((e=>{const o=e.filter((e=>e.index.toNumber()===t))[0];if(o){f(o.isPassing);const e=o.allAye.reduce(((e,t)=>e.add(new Cn.a(t.balance))),Ia),t=o.allNay.reduce(((e,t)=>e.add(new Cn.a(t.balance))),Ia);b(t),j(e)}})).then((t=>{e=t})).catch(console.error),()=>e&&e()}),[a,s,t]),Object(n.useEffect)((()=>{if(!a)return;if(!s)return;let e;return a.query.democracy.referendumInfoOf(t,(e=>{const t=e.unwrapOr(null);(null===t||void 0===t?void 0:t.isOngoing)&&(m(null===t||void 0===t?void 0:t.asOngoing.tally.ayes),h(null===t||void 0===t?void 0:t.asOngoing.tally.nays),i(null===t||void 0===t?void 0:t.asOngoing.tally.turnout)),_({isLoading:!1,message:""})})).then((t=>{e=t})).catch(console.error),()=>e&&e()}),[a,s,t]),Object(n.useEffect)((()=>{if(!a)return;if(!s)return;let e;return a.query.balances.totalIssuance((e=>{d(e)})).then((t=>{e=t})).catch(console.error),()=>e&&e()}),[a,s]),Object($.jsxs)($.Fragment,{children:[Object($.jsx)(ka,{isPassing:y}),Object($.jsx)(ya,{className:x.isLoading?`LoaderWrapper ${e}`:e,children:x.isLoading?Object($.jsx)(oa,{text:x.message,timeout:3e4,timeoutText:"Api is unresponsive."}):Object($.jsxs)($.Fragment,{children:[null===y?Object($.jsx)(oa,{className:"progressLoader",text:"Loading vote progress",timeout:3e4,timeoutText:"Vote calculation failed"}):Object($.jsx)(Da,{ayeVotes:l,className:"vote-progress",isPassing:y,threshold:v,nayVotes:u}),Object($.jsx)(ia.a,{columns:3,divided:!0,children:Object($.jsxs)(ia.a.Row,{children:[Object($.jsxs)(ia.a.Column,{children:[Object($.jsxs)("h6",{children:["Turnout"," ",O>0&&Object($.jsxs)("span",{className:"turnoutPercentage",children:["(",O,"%)"]})]}),Object($.jsx)("div",{children:Aa(r,{numberAfterComma:2,withUnit:!0})})]}),Object($.jsxs)(ia.a.Column,{children:[Object($.jsxs)("h6",{children:["Aye ",Object($.jsx)(Ca,{content:"Aye votes without taking conviction into account"})]}),Object($.jsx)("div",{children:Aa(g,{numberAfterComma:2,withUnit:!0})})]}),Object($.jsxs)(ia.a.Column,{children:[Object($.jsxs)("h6",{children:["Nay ",Object($.jsx)(Ca,{content:"Nay votes without taking conviction into account"})]}),Object($.jsx)("div",{children:Aa(p,{numberAfterComma:2,withUnit:!0})})]})]})})]})})]})}))`
  margin-bottom: 1rem;

  .vote-progress {
    margin-bottom: 5rem;
  }

  .LoaderWrapper {
    height: 15rem;
    position: absolute;
    width: 100%;
  }

  .turnoutPercentage {
    font-weight: normal;
    font-size: ${({theme:e})=>e.fontSizes.sm};
  }

  .progressLoader {
    position: inherit;
    height: 10rem;
  }
`,Ta=o(1302),Ra=o(174),Fa=o(1288),qa=o(66),La=o.n(qa),za=o(1293),Ua=o(1295),Wa=o(219),Ma=o.n(Wa);const Ba=new Cn.a(0),Ga=new Cn.a(2),Va=new Cn.a(10),Ha=O(),Ya=_[Ha].tokenDecimals,Ka=new Cn.a(Ya);function Ja(e,t){const o=!t&&e.eq(Ba);return!(e.lt(Ba)||!e.lt(Ga.pow(new Cn.a(128)).subn(1))||o||e.bitLength()>128)}var Qa=Object(L.b)((({className:e,label:t="",helpText:o="",onChange:a,placeholder:s=""})=>{const[r,i]=Object(n.useState)(!0);return Object($.jsxs)(ga.Field,{className:e,width:16,children:[Object($.jsxs)("label",{children:[t,o&&Object($.jsx)(Ca,{content:o})]}),Object($.jsx)(ba,{className:"balanceInput",invalid:r,onChange:e=>{const[t,o]=function(e,t){const o=e.match(/^(\d+)\.(\d+)$/);let n;if(o){o[2].length<Ya&&(n=new Cn.a(-1));const e=new Cn.a(o[1]),t=o[2],a=new Cn.a(t);n=e.mul(Va.pow(Ka)).add(a.mul(Va.pow(new Cn.a(Ya-t.length))))}else n=new Cn.a(e.replace(/[^\d]/g,"")).mul(Va.pow(Ka));return[n,Ja(n,t)]}(e.currentTarget.value,!1);i(o),o&&a(t)},placeholder:s,type:"string"})]})}))`
  .ui.selection.dropdown {
    border-color: ${({theme:e})=>e.colors.grey_light};
  }
`;const Xa=[{address:"5FswncCyh3U5KauCfP69dMGrDFG1uMs65U1yJ9TE71CX63De",name:"Geode",url:"https://hackathon-geode.ata.network"}];var Za=Object(L.b)((({address:e,className:t})=>{const[o,a]=Object(n.useState)("0"),{api:s,apiReady:r}=Object(n.useContext)(Mo);return Object(n.useEffect)((()=>{if(!s)return;if(!r)return;if(!e)return;let t;return s.derive.balances.account(e,(e=>{var t;return a((null===(t=e.freeBalance)||void 0===t?void 0:t.toString())||"0")})).then((e=>{t=e})).catch((e=>console.error(e))),()=>t&&t()}),[e,s,r]),Object($.jsxs)("div",{className:t,children:[Object($.jsx)("span",{children:Aa(o,{numberAfterComma:2,withUnit:!0})})," available."]})}))`
  color: ${({theme:e})=>e.colors.black_text};

  span {
    color: ${({theme:e})=>e.colors.black_primary};
    font-weight: 500;
  }
`;var es=Object(L.b)((({accounts:e,className:t,defaultAddress:o,filterAccounts:a,onAccountChange:s})=>{const[r,i]=Object(n.useState)(o),c=a?e.filter((e=>a.includes(e.address))):e,d={},l=[];c.forEach((e=>{l.push({children:Object($.jsx)(Tn,{extensionName:e.meta.name,address:e.address}),value:e.address}),e.address&&e.meta.name&&(d[e.address]=e.meta.name)}));return Object($.jsx)(te.a,{className:t,pointing:"top",onChange:(e,t)=>{var o;i((null===(o=t.value)||void 0===o?void 0:o.toString())||""),s(e,t)},options:l,trigger:Object($.jsx)("div",{className:"address-wrapper",children:Object($.jsx)(Tn,{extensionName:d[r],address:o})}),value:r})}))`
  width: 100%;
  padding: 1.4rem 0.4rem 0.8rem 1.2rem;

  .address-wrapper {
    display: inline-block;
  }

  .visible.menu.transition {
    width: 100%;
    border-radius: 0;
    max-height: 20rem;
    overflow: auto;
  }

  .dropdown.icon {
    position: absolute;
    right: 0rem;
    top: -0.5rem;
    padding: 1.6rem 0.8rem;
    float: right;
  }
`;var ts=Object(L.b)((({accounts:e,address:t,className:o,onAccountChange:n,title:a,withBalance:s=!1})=>{var r;return Object($.jsxs)(ga.Field,{className:o,width:16,children:[Object($.jsxs)("label",{children:[a,Object($.jsx)(Ca,{content:"You can choose an account from the polkadot-js extension."})]}),Object($.jsx)(es,{accounts:e,defaultAddress:t||(null===(r=e[0])||void 0===r?void 0:r.address),onAccountChange:n}),s&&Object($.jsx)(Za,{address:t,className:"balance"})]})}))`
  .ui.selection.dropdown {
    border-radius: 0rem;
  }

  .ui.dropdown .menu .active.item {
    font-weight: 500;
  }

  .ui.dropdown .menu > .item:hover {
    background-color: ${({theme:e})=>e.colors.grey_light};
  }

  .ui.selection.dropdown:focus,
  .ui.selection.active.dropdown,
  .ui.selection.active.dropdown:hover,
  .ui.selection.active.dropdown .menu {
    border-color: ${({theme:e})=>e.colors.grey_light};
  }

  .balance {
    text-align: right;
  }
`;var os=Object(L.b)((({className:e,disabled:t,onClickAye:o,onClickNay:n})=>Object($.jsxs)(ga.Group,{className:e,children:[Object($.jsx)(ga.Field,{className:"button-container",width:8,children:Object($.jsxs)(nn,{fluid:!0,basic:!0,className:"primary negative",disabled:t,onClick:n,children:[Object($.jsx)(Ma.a,{name:"thumbs down"}),"Nay"]})}),Object($.jsx)(ga.Field,{className:"button-container",width:8,children:Object($.jsxs)(nn,{fluid:!0,className:"primary positive",disabled:t,onClick:o,children:[Object($.jsx)(Ma.a,{name:"thumbs up"}),"Aye"]})})]})))`
  @media only screen and (max-width: 768px) {
    .button-container {
      margin-bottom: 1rem !important;
    }
  }
`;var ns=Object(L.b)((({delegatees:e,className:t,defaultDelegatee:o,onDelegateeChange:a})=>{const[s,r]=Object(n.useState)(o),i={},c=[];e.forEach((e=>{c.push({children:Object($.jsx)(Tn,{extensionName:e.name,address:e.address}),value:e.address}),e.address&&e.name&&(i[e.address]=e.name)}));return Object($.jsx)(te.a,{className:t,pointing:"top",onChange:(t,o)=>{const{value:n}=o,s=Object.values(e);let i=0;for(const e of Object.keys(s))if(s[Number(e)].address===n){i=Number(e);break}r(e[i]),a(t,o)},options:c,trigger:Object($.jsx)("div",{className:"address-wrapper",children:Object($.jsx)(Tn,{extensionName:i[s.address],address:s.address})}),value:s.address})}))`
  width: 100%;
  padding: 1.4rem 0.4rem 0.8rem 1.2rem;

  .address-wrapper {
    display: inline-block;
  }

  .visible.menu.transition {
    width: 100%;
    border-radius: 0;
    max-height: 20rem;
    overflow: auto;
  }

  .dropdown.icon {
    position: absolute;
    right: 0;
    top: -0.5rem;
    padding: 1.6rem 0.8rem;
    float: right;
  }
`;var as=Object(L.b)((({delegatees:e,defaultDelegatee:t,className:o,onDelegateeChange:n,title:a,tooltipMessage:s})=>Object($.jsxs)(ga.Field,{className:o,width:16,children:[a&&Object($.jsxs)("label",{children:[a,s&&Object($.jsx)(Ca,{content:"You can choose an account from the polkadot-js extension."})]}),Object($.jsx)(ns,{delegatees:e,defaultDelegatee:t,onDelegateeChange:n})]})))`
  .ui.selection.dropdown {
    border-radius: 0;
  }

  .ui.dropdown .menu .active.item {
    font-weight: 500;
  }

  .ui.dropdown .menu > .item:hover {
    background-color: ${({theme:e})=>e.colors.grey_light};
  }

  .ui.selection.dropdown:focus,
  .ui.selection.active.dropdown,
  .ui.selection.active.dropdown:hover,
  .ui.selection.active.dropdown .menu {
    border-color: ${({theme:e})=>e.colors.grey_light};
  }

  .balance {
    text-align: right;
  }
`;const ss=e=>{const t=e.toString();return t.includes("0.1x")?0:Number(t.replaceAll(/locked|x/gi,""))};var rs=Object(L.b)((({className:e,referendumId:t,address:o,accounts:a,onAccountChange:s,getAccounts:r})=>{const{queueNotification:i}=Object(n.useContext)(dn),[c,d]=Object(n.useState)(void 0),{api:l,apiReady:m}=Object(n.useContext)(Mo),[u,h]=Object(n.useState)({isLoading:!1,message:""}),[p,b]=Object(n.useState)(Xa[0]),[g,j]=Object(n.useState)(!1),[y,f]=Object(n.useState)(!1),[x,_]=Object(n.useState)({}),O=[1,2,4,8,16,32].map(((e,t)=>[t+1,e])),v=Object(n.useMemo)((()=>[{text:"0.1x voting balance, no lockup period",value:0},...O.map((([e,t])=>({text:`${e}x voting balance, locked for ${t} enactment period(s)`,value:e})))]),[O]),[w,S]=Object(n.useState)(v[1].value);Object(n.useEffect)((()=>{l&&m&&0!==a.length&&(async()=>{h({isLoading:!0,message:"Get delegation status"});const e=a.reduce(((e,t)=>(e.push(l.query.democracy.votingOf(t.address)),e)),[]),t=(await Promise.all(e)).reduce(((e,t,o)=>{const n=!!t.toJSON().delegating;return{...e,[a[o].address]:{isDelegating:n,...t.toJSON()}}}),{});_(t),h({isLoading:!1,message:""})})()}),[a,l,m]),Object(n.useEffect)((()=>{if(La()(x))return;const{isDelegating:e,delegating:t}=x[o];if(j(e),e&&t){const{conviction:e,target:o}=t;S(ss(e)),b(Xa.filter((e=>e.address===o.toString()))[0]),f(!0)}}),[x,o]);const C=async e=>{if(!t&&0!==t)return void console.error("referendumId not set");if(!l)return;if(!m)return;h({isLoading:!0,message:"Waiting for signature"});l.tx.democracy.vote(t,{Standard:{balance:c,vote:{aye:e,conviction:w}}}).signAndSend(o,(({status:e})=>{e.isInBlock?(h({isLoading:!1,message:""}),i({header:"Success!",message:`Vote on referendum #${t} successful.`,status:hn.SUCCESS}),console.log(`Completed at block hash #${e.asInBlock.toString()}`)):(e.isBroadcast&&h({isLoading:!0,message:"Broadcasting the vote"}),console.log(`Current status: ${e.type}`))})).catch((e=>{h({isLoading:!1,message:""}),console.log(":( transaction failed"),console.error("ERROR:",e),i({header:"Failed!",message:e.message,status:hn.ERROR})}))},k=async e=>{if(!t&&0!==t)return void console.error("referendumId not set");if(!l||!m)return;h({isLoading:!0,message:"Waiting for signature"});const n=a.filter((e=>e.address===o))[0],{meta:{source:s}}=n,r=await Object(la.d)(s),{signRaw:c}=r.signer,d=(new Ta.a).addFromAddress(o),u=Object(Ra.a)(d.publicKey);if(c){const n={approve:e,index:t,sender:u},a=Object(Fa.a)(JSON.stringify(n));try{const{signature:e}=await c({address:o,data:a,type:"bytes"}),n={id:1,jsonrpc:"2.0",method:"submit_vote",params:{msg:a,signature:e}};console.log(n);const s={body:JSON.stringify(n),headers:{"Content-Type":"application/json"},method:"POST"},r=await fetch(p.url,s),{result:d}=await r.json();if(d!==gn.SUCCESS){if(d===gn.INVALID_SENDER)throw new Error("Sender account is invalid.");if(d===gn.INVALID_SIGNATURE)throw new Error("Transaction cannot be verified due to invalid signature.");if(d===gn.INVALID_INDEX)throw new Error("Transaction cannot be processed due to invalid referendum index.");if(d===gn.INVALID_MESSAGE)throw new Error("Transaction cannot be processed due to malformed message.");if(d===gn.REFERENDUM_FINISHED)throw new Error(`Transaction cannot be processed because referendum #${t} is finished`);if(d===gn.DEADLINE_EXCEEDED)throw new Error("Transaction cannot be processed due to exceeded deadline");if(d===gn.NOT_DELEGATED)throw new Error("Transaction cannot be processed due to delegated account is not available at this moment");throw new Error("Transaction failed. Geode is facing a trouble now :(, try again later.")}i({header:"Success!",message:`Vote using delegation on referendum #${t} successful.`,status:hn.SUCCESS})}catch(b){console.error("Geode Error",b),i({header:"Failed!",message:b.message,status:hn.ERROR})}finally{h({isLoading:!1,message:""})}}},A=()=>Object($.jsx)(ga.Group,{children:Object($.jsx)(ga.Field,{className:"button-container",children:Object($.jsx)(nn,{primary:!0,onClick:r,size:"large",children:"Vote"})})}),N=0===a.length,E=()=>Object($.jsxs)(ga.Field,{children:[Object($.jsx)("label",{children:"Vote using anonymous delegation"}),Object($.jsx)(za.a,{label:"Use delegation",disabled:!1,checked:g,toggle:!0,onChange:()=>{j(!g),g||f(!1)}})]});return Object($.jsx)("div",{className:e,children:N?Object($.jsx)(A,{}):u.isLoading?Object($.jsx)(ya,{className:"LoaderWrapper",children:Object($.jsx)(oa,{text:u.message})}):Object($.jsxs)(ya,{children:[Object($.jsx)(ts,{title:"Vote with account",accounts:a,address:o,withBalance:!0,onAccountChange:s}),Object($.jsx)(Qa,{label:"Lock balance",helpText:"Amount of you are willing to lock for this vote.",placeholder:"123",onChange:e=>d(e)}),Object($.jsxs)(ga.Field,{children:[Object($.jsxs)("label",{children:["Vote lock",Object($.jsx)(Ca,{content:"You can multiply your votes by locking your tokens for longer periods of time."})]}),Object($.jsx)(Ua.a,{onChange:(e,t)=>{const n=Number(t.value);S(n);const{isDelegating:a,delegating:s}=x[o];if(a&&s){const e=s.conviction;n!==ss(e)?f(!1):f(!0)}},options:v,pointing:"top",value:w})]}),Object($.jsx)(E,{}),g&&Object($.jsx)(as,{delegatees:Xa,defaultDelegatee:p,onDelegateeChange:(e,t)=>{const{value:o}=t,n=Object.values(Xa);let a=0;for(const s of Object.keys(n))if(n[Number(s)].address===o){a=Number(s);break}b(Xa[a]),f(!1)}}),g?y?Object($.jsx)(os,{disabled:!m,onClickAye:()=>k(!0),onClickNay:()=>k(!1)}):Object($.jsx)(ga.Field,{className:"button-container",children:Object($.jsxs)(nn,{fluid:!0,basic:!0,className:"primary",disabled:!m,onClick:()=>(()=>{if(!l||!m||!c)return;h({isLoading:!0,message:"Waiting for signature"}),l.tx.democracy.delegate(p.address,w,c).signAndSend(o,(({status:e})=>{e.isInBlock?(f(!0),h({isLoading:!1,message:""}),i({header:"Success!",message:`Vote on referendum #${t} will be delegated to ${p.name}.`,status:hn.SUCCESS}),console.log(`Completed at block hash #${e.asInBlock.toString()}`)):(e.isBroadcast&&h({isLoading:!0,message:"Broadcasting the delegation"}),console.log(`Current status: ${e.type}`))})).catch((e=>{f(!1),h({isLoading:!1,message:""}),console.log(":( transaction failed"),console.error("ERROR:",e),i({header:"Failed!",message:e.message,status:hn.ERROR})}))})(),children:[Object($.jsx)(Ma.a,{name:"user secret"}),"Delegate Anonymous Vote"]})}):Object($.jsx)(os,{disabled:!m,onClickAye:()=>C(!0),onClickNay:()=>C(!1)})]})})}))`
  .LoaderWrapper {
    height: 40rem;
    position: absolute;
    width: 100%;
  }
`;var is=Object(L.b)((({className:e,isReferendum:t,onchainId:o,onchainLink:a,status:s})=>{const[r,i]=Object(n.useState)(""),[c,d]=Object(n.useState)([]),[l,m]=Object(n.useState)(!1),[u,h]=Object(n.useState)(!1),{api:p,apiReady:b}=Object(n.useContext)(Mo),g=!!s&&!![Ln.PROPOSED,zn.STARTED,Un.PROPOSED,Wn.OPENED].includes(s);return l?Object($.jsx)("div",{className:e,children:Object($.jsx)("div",{className:"card",children:Object($.jsx)(Oa,{})})}):u?Object($.jsx)("div",{className:e,children:Object($.jsxs)("div",{className:"card",children:[Object($.jsx)("div",{className:"text-muted",children:"You need at least one account in Polkadot-js extenstion to use this feature."}),Object($.jsx)("div",{className:"text-muted",children:"Please reload this page after adding accounts."})]})}):Object($.jsx)($.Fragment,{children:g?Object($.jsx)("div",{className:e,children:Object($.jsx)(ga,{standalone:!1,children:t&&Object($.jsxs)($.Fragment,{children:[(o||0===o)&&Object($.jsx)(Pa,{referendumId:o,threshold:a.threshold}),g&&Object($.jsx)(rs,{accounts:c,address:r,getAccounts:async()=>{if(!p)return;if(!b)return;if(0===(await Object(la.b)(ma)).length)return void m(!0);m(!1);const e=await Object(la.a)();if(0!==e.length){if(h(!1),d(e),e.length>0){i(e[0].address);const t=await Object(la.d)(e[0].meta.source);p.setSigner(t.signer)}}else h(!0)},onAccountChange:(e,t)=>{const o=t.value;i(o)},referendumId:o})]})})}):null})}))`
  @media only screen and (max-width: 768px) {
    .ui.form {
      padding: 0rem;
    }
  }
`;const cs=L.b.div`
  font-size: xs;
  color: ${({theme:e})=>e.colors.black_text};
`;var ds=({blocks:e,className:t})=>{const{blocktime:o}=Yo();return Object($.jsx)(kn.a,{className:t,trigger:Object($.jsx)("div",{children:$n(e,o)}),content:Object($.jsx)(cs,{children:`${e} blocks`}),hoverable:!0,position:"top left"})};var ls=Object(L.b)((({children:e,className:t})=>Object($.jsx)("div",{className:t,children:e})))`
  background-color: white;
  padding: 2rem 3rem 2rem 3rem;
  border-style: solid;
  border-width: 5px;
  border-color: ${({theme:e})=>e.colors.grey_light};
  font-size: ${({theme:e})=>e.fontSizes.sm};
  overflow-wrap: break-word;
  margin-bottom: 1rem;
  font-family: ${({theme:e})=>e.fonts.font_mono};

  h6 {
    font-family: ${({theme:e})=>e.fonts.font_mono};
    font-size: ${({theme:e})=>e.fontSizes.sm};
  }

  h4 {
    font-size: ${({theme:e})=>e.fontSizes.lg};
    font-family: ${({theme:e})=>e.fonts.font_mono};
    margin-bottom: 2rem;
  }

  .methodArguments {
    display: inline-block;
    overflow-x: auto;
    overflow-y: auto;
    width: 100%;
    max-height: 20rem;
    word-wrap: normal;
  }

  .motion-sub-info {
    background-color: ${({theme:e})=>e.colors.grey_light};
    .row {
      width: 100%;
    }
  }

  @media only screen and (max-width: 576px) {
    padding: 2rem;
  }
`;const ms="polkascan",us="subscan";var hs=Object(L.b)((({className:e,isMotion:t,isProposal:o,isReferendum:n,isTreasuryProposal:a,isTechCommitteeProposal:s,onchainId:r})=>{const i=O(),c={[ms]:e=>{let i="";const c=`https://polkascan.io/${e}`;return n&&(i=`${c}/democracy/referendum/${r}`),o&&(i=`${c}/democracy/proposal/${r}`),t&&(i=`${c}/council/motion/${r}`),a&&(i=`${c}/treasury/proposal/${r}`),s&&(i=`${c}/techcomm/proposal/${r}`),i},[us]:e=>{let i="";const c=`https://${e}.subscan.io`;return n&&(i=`${c}/referenda/${r}`),o&&(i=`${c}/democracy_proposal/${r}`),t&&(i=`${c}/council/${r}`),a&&(i=`${c}/treasury/${r}`),s&&(i=`${c}/tech/${r}`),i}},d=e=>c[e](i);return Object($.jsxs)("div",{className:e,children:[Object($.jsx)("div",{children:Object($.jsx)("a",{href:d(ms),rel:"noopener noreferrer",target:"_blank",children:"-> Show in Polkascan"})}),Object($.jsx)("div",{children:Object($.jsx)("a",{href:d(us),rel:"noopener noreferrer",target:"_blank",children:"-> Show in Subscan"})})]})}))`
  a {
    color: ${({theme:e})=>e.colors.black_primary};
    font-weight: bold;
  }

  a:hover {
    text-decoration: underline;
  }
`;var ps=({onchainLink:e})=>{var t,o,n;if(!e)return null;const{image:a,index:s,status:r}=e,i=Number(s),c=Number(r.end),d=Number(r.delay),l=r.threshold.type,m=null===a||void 0===a||null===(t=a.proposal)||void 0===t?void 0:t.method,u=(null===a||void 0===a||null===(o=a.proposer)||void 0===o?void 0:o.toString())||"",h=null===a||void 0===a||null===(n=a.proposal)||void 0===n?void 0:n.toJSON(),p=h&&Object.entries(h.args);return Object($.jsxs)(ls,{children:[Object($.jsx)("h4",{children:"On-chain info"}),Object($.jsxs)(ia.a,{children:[Object($.jsxs)(ia.a.Column,{mobile:16,tablet:8,computer:8,children:[Object($.jsx)("h6",{children:"Proposer"}),Object($.jsx)(Tn,{address:u})]}),(d||0===d)&&Object($.jsxs)(ia.a.Column,{mobile:16,tablet:8,computer:8,children:[Object($.jsx)("h6",{children:"Delay"}),Object($.jsx)(ds,{blocks:d})]}),c&&Object($.jsxs)(ia.a.Column,{mobile:16,tablet:8,computer:8,children:[Object($.jsx)("h6",{children:"End"}),Object($.jsx)(Nn,{endBlock:c})]}),l&&Object($.jsxs)(ia.a.Column,{mobile:16,tablet:8,computer:8,children:[Object($.jsx)("h6",{children:"Vote threshold"}),l]}),m&&Object($.jsxs)(ia.a.Row,{children:[Object($.jsxs)(ia.a.Column,{mobile:16,tablet:8,computer:8,children:[Object($.jsx)("h6",{children:"Method"}),m]}),Object($.jsx)(ia.a.Column,{mobile:16,tablet:8,computer:8,children:p&&Array.isArray(p)&&p.length?Object($.jsxs)($.Fragment,{children:[Object($.jsx)("h6",{children:"Arguments"}),p.map(((e,t)=>{const[o,n]=e,a="account"===o;return Object($.jsx)("div",{className:a?"":"methodArguments",children:a?Object($.jsx)(Tn,{address:n.toString()},t):Object($.jsxs)("span",{children:[o,": ",JSON.stringify(n)]},t)},t)}))]}):null})]}),Object($.jsx)(ia.a.Column,{mobile:16,tablet:16,computer:16,children:Object($.jsx)(hs,{isReferendum:!0,onchainId:i})})]})]})};var bs=Object(L.b)((({className:e,data:t,isBounty:o=!1,isMotion:n=!1,isProposal:a=!1,isReferendum:s=!1,isTipProposal:r=!1,isTreasuryProposal:i=!1,isTechCommitteeProposal:c=!1})=>{const d=t;let l,m;if(d&&s&&(l=d,m={threshold:l.status.threshold},console.log(m)),!d)return Object($.jsx)(da,{isMotion:n,isProposal:a,isReferendum:s,isTreasuryProposal:i,isTipProposal:r,isBounty:o,isTechCommitteeProposal:c});const u=()=>Object($.jsx)($.Fragment,{children:Object($.jsx)(is,{isBounty:o,isMotion:n,isProposal:a,isReferendum:s,isTipProposal:r,isTreasuryProposal:i,isTechCommitteeProposal:c,onchainId:Number(d.index),onchainLink:m,status:"Started"})});return Object($.jsxs)(ia.a,{className:e,children:[Object($.jsxs)(ia.a.Column,{mobile:16,tablet:16,computer:10,largeScreen:10,children:[s&&Object($.jsx)($.Fragment,{children:Object($.jsx)(ps,{onchainLink:l})}),Object($.jsx)(Q.a,{maxWidth:Q.a.onlyTablet.maxWidth,children:Object($.jsx)(u,{})})]}),Object($.jsxs)(ia.a.Column,{mobile:16,tablet:16,computer:6,largeScreen:6,children:[Object($.jsx)(Q.a,{minWidth:Q.a.onlyComputer.minWidth,children:Object($.jsx)(u,{})}),Object($.jsx)(ca,{})]})]})}))`
  .post_content {
    background-color: white;
    border-radius: 3px;
    box-shadow: ${({theme:e})=>e.colors.box_shadow_card};
    padding: 3rem 3rem 0.8rem 3rem;
    margin-bottom: 1rem;
  }

  .actions-bar {
    display: flex;
    align-items: center;
  }

  .reactions {
    display: inline-flex;
    border: none;
    padding: 0.4rem 0;
    margin: 0rem;
  }

  .vl {
    display: inline-flex;
    border-left-style: solid;
    border-left-width: 1px;
    border-left-color: ${({theme:e})=>e.colors.grey_border};
    height: 2rem;
    margin: 0 1.2rem 0 0.8rem;
  }

  @media only screen and (max-width: 576px) {
    .post_content {
      padding: 2rem;
      border-radius: 0px;
    }
  }

  a.social {
    color: ${({theme:e})=>e.colors.grey_primary};
    font-size: 1.3rem;
    font-weight: 500;

    i {
      font-size: 1.5rem;
    }
  }

  .redirectionCard {
    color: ${({theme:e})=>e.colors.black_text};
    background-color: ${({theme:e})=>e.colors.grey_border};
    padding: 2rem 3rem 2rem 3rem;
    border-radius: 3px;
    font-size: ${({theme:e})=>e.fontSizes.md};
    margin-bottom: 1rem;
    text-align: center;

    @media only screen and (max-width: 768px) {
      padding: 2rem;
      font-size: ${({theme:e})=>e.fontSizes.sm};
    }

    .redirectionText {
      color: ${({theme:e})=>e.colors.pink_primary};

      &:hover {
        text-decoration: none;
        color: ${({theme:e})=>e.colors.pink_secondary};
      }
    }
  }

  .timelineCard {
    a {
      color: ${({theme:e})=>e.colors.pink_secondary};
      font-size: 1.3rem;

      i {
        font-size: 1.5rem;
      }
    }
  }
`,gs=()=>{const{query:e}=zo(),t=e.id,o=Number(t)||0,{data:n,error:a,refetch:s}=(r={variables:{id:o}},de.c(ro,r));var r;return(null===a||void 0===a?void 0:a.message)?Object($.jsx)(Zn,{text:a.message}):n?Object($.jsx)(bs,{data:n,isBounty:!0,refetch:s}):Object($.jsx)(oa,{})};var js=Object(L.b)((({className:e,data:t,prime:o})=>Object($.jsx)("ul",{className:`${e} proposals__list`,children:t.map(((e,t)=>Object($.jsx)("li",{className:"proposals__item",children:Object($.jsx)(c.b,{to:`/profile/${e}`,children:Object($.jsx)("div",{className:"member_card",children:Object($.jsxs)(wn.a.Group,{horizontal:!0,children:[Object($.jsx)(wn.a,{className:"index",children:Object($.jsxs)("h5",{children:["#",t+1]})}),Object($.jsxs)(wn.a,{children:[Object($.jsx)(Tn,{address:e,className:"address"}),o===e?Object($.jsx)(Vn,{className:"statusTag",status:"prime"}):null]})]})})})},e)))})))`
  margin-block-start: 0;
  margin-block-end: 0;

  li {
    list-style-type: none;
  }

  .proposals__item {
    margin: 0 0 1rem 0;
    a:hover {
      text-decoration: none;
    }
  }

  .member_card {
    padding: 2rem 3rem 1.5rem 3rem;
    background-color: white;
    border-radius: 3px;
    box-shadow: box_shadow_card;
    transition: box-shadow 0.1s ease-in-out;

    &.self {
      border-left-width: 4px;
      border-left-style: solid;
      border-left-color: pink_primary;
      padding: calc(2rem - 4px);
    }

    &:hover {
      box-shadow: box_shadow_card_hover;
      text-decoration: none;
    }

    overflow-wrap: break-word;

    .ui.horizontal.segments {
      box-shadow: none;
      border: none;
      margin: 0.5rem 0;
      background-color: rgba(0, 0, 0, 0);
    }
    .ui.segment {
      padding: 0;
    }
    .ui.horizontal.segments > .segment {
      border-left: none;
    }

    .index {
      min-width: 4rem !important;
      max-width: 6rem;
    }

    .statusTag {
      position: absolute;
      top: 0;
      right: 0;
    }

    h4,
    h5 {
      font-family: font_default;
      display: block;
      margin-bottom: 0.6rem;
    }

    h4 {
      font-size: lg;
      display: inline-flex;
      margin-right: 0.6rem;
      line-height: 1.2;
    }

    h5 {
      font-size: md;
      line-height: 1.4;
    }

    ul {
      color: ${({theme:e})=>e.colors.grey_secondary}
      font-size: xs;
      font-weight: 500;
      margin-top: 0.8rem;
      li {
        display: inline;
        margin-right: 1.5rem;
      }
    }

    @media only screen and (max-width: 576px) {
      & {
        padding: 1.2rem 1.5rem;
      }

      h4 {
        font-size: md;
      }

      h4.tipTitle {
        max-width: 100%;
      }

      h5 {
        font-size: ${({theme:e})=>e.fontSizes.sm};
        line-height: 1.2;
      }

      .statusTag {
        padding: 0.2rem 0.4rem !important;
        font-size: 1rem !important;
      }

      .title-wrapper {
        max-width: calc(100% - 9rem);
      }
    }
  }
`;var ys=Object(L.b)((({className:e,members:t,prime:o,runnersUp:n})=>Object($.jsxs)("div",{className:e,children:[Object($.jsx)("div",{children:t.length?Object($.jsx)(js,{data:t,prime:o}):Object($.jsx)(vn,{text:"There are currently no elected council members."})}),Object($.jsxs)("div",{className:"runnersUp",children:[Object($.jsx)("h1",{children:" Runners Up "}),n&&(null===n||void 0===n?void 0:n.length)?Object($.jsx)(js,{data:n,prime:o}):Object($.jsx)(vn,{text:"There are currently no runner ups."})]})]})))`
  margin-block-start: 0;
  margin-block-end: 0;

  .runnersUp {
    margin-top: 4rem;
  }
`;var fs=()=>{const{api:e,apiReady:t}=Object(n.useContext)(Mo),[o,a]=Object(n.useState)(null),[s,r]=Object(n.useState)([]),[i,c]=Object(n.useState)([]),[d,l]=Object(n.useState)("");return Object(n.useEffect)((()=>{e&&t&&(e.query.council.prime().then((e=>{l(e.unwrapOr("").toString())})).catch((e=>a(e))),e.query.council.members().then((e=>{r(e.map((e=>e.toString())))})).catch((e=>a(e))),e.derive.elections.info().then((e=>{c(e.runnersUp.map((e=>e.toString().split(",")[0])))})).catch((e=>a(e))))}),[e,t]),o?Object($.jsx)(Zn,{text:o.message}):s.length||i.length?Object($.jsx)(ys,{members:s,prime:d,runnersUp:i}):Object($.jsx)(oa,{})};var xs=Object(L.b)((({className:e})=>Object($.jsxs)("div",{className:e,children:[Object($.jsx)("h1",{children:"Council"}),Object($.jsxs)(xn.a,{stackable:!0,reversed:"mobile tablet",children:[Object($.jsx)(xn.a.Column,{mobile:16,tablet:16,computer:10,children:Object($.jsx)(fs,{})}),Object($.jsx)(xn.a.Column,{mobile:16,tablet:16,computer:6,children:Object($.jsx)(_n,{dismissable:!0,content:'Council is the body of elected members that consists of several on-chain accounts. The Council can act as a representative for "passive" (non-voting) stakeholders. Council members have two main tasks: proposing referenda for the overall stakeholder group to vote on and cancelling malicious referenda.',name:"onchainInfo",title:"About Council"})})]})]})))`
  h1 {
    @media only screen and (max-width: 576px) {
      margin: 3rem 1rem 1rem 1rem;
    }

    @media only screen and (max-width: 768px) and (min-width: 576px) {
      margin-left: 1rem;
    }

    @media only screen and (max-width: 991px) and (min-width: 768px) {
      margin-left: 1rem;
    }
  }

  @media only screen and (max-width: 991px) and (min-width: 768px) {
    .ui[class*='tablet reversed'].grid {
      flex-direction: column-reverse;
    }
  }
`,_s=o(1299);var Os=Object(L.b)((({accounts:e,className:t,onManageAddress:o})=>{const{queueNotification:a}=Object(n.useContext)(dn),{api:s,apiReady:r}=Object(n.useContext)(Mo),[i,c]=Object(n.useState)({}),[d,l]=Object(n.useState)({isLoading:!0,message:"Fetching accounts from extension"});Object(n.useEffect)((()=>{s&&r&&0!==e.length&&(async()=>{const t=e.reduce(((e,t)=>(e.push(s.query.democracy.votingOf(t.address)),e)),[]),o=(await Promise.all(t)).reduce(((t,o,n)=>{const a=!!o.toJSON().delegating;return{...t,[e[n].address]:{isDelegating:a,...o.toJSON()}}}),{});c(o),l({isLoading:!1,message:""})})()}),[e,s,r]);const m=async t=>{const n=e.filter((e=>e.address===t))[0];o(n)};return Object($.jsx)(ga,{className:t,standalone:!1,children:(({accounts:e})=>Object($.jsx)($.Fragment,{children:Object($.jsx)(ga.Group,{children:Object($.jsxs)(ga.Field,{width:16,children:[Object($.jsxs)(ia.a,{children:[Object($.jsx)(ia.a.Column,{width:5,children:Object($.jsx)("label",{className:"header",children:"Available addresses"})}),Object($.jsx)(ia.a.Column,{width:2}),Object($.jsx)(ia.a.Column,{width:5,children:Object($.jsx)("label",{className:"header",children:"Delegating to"})})]}),d.isLoading?Object($.jsx)(ya,{className:"LoaderWrapper",children:Object($.jsx)(oa,{text:d.message})}):Object($.jsx)("div",{className:"ui list",children:!La()(i)&&e.map((e=>{const t=e.address;if(!t)return Object($.jsx)($.Fragment,{});const o=i[e.address],{isDelegating:n}=o,d=n?Xa.filter((e=>{var t;return e.address===(null===o||void 0===o||null===(t=o.delegating)||void 0===t?void 0:t.target.toString())}))[0]:null;return t&&Object($.jsxs)(ia.a,{style:{alignItems:"center"},children:[Object($.jsx)(ia.a.Column,{width:5,children:Object($.jsx)("div",{className:"item",children:Object($.jsx)(Tn,{className:"item",address:t,extensionName:e.meta.name})})}),Object($.jsx)(ia.a.Column,{width:2,children:Object($.jsx)(J.a,{name:"arrow right"})}),Object($.jsx)(ia.a.Column,{width:5,children:n?Object($.jsx)($.Fragment,{children:Object($.jsx)(Tn,{className:"item",address:d.address,extensionName:d.name})}):Object($.jsxs)(nn,{className:"primary",onClick:()=>m(t),children:[Object($.jsx)(J.a,{name:"chain"}),"Set Delegation"]})}),Object($.jsx)(ia.a.Column,{width:4,children:n&&Object($.jsxs)(nn,{className:"secondary",onClick:()=>(async e=>{if(!s||!r)return;l({isLoading:!0,message:"Waiting for signature"});const t=await Object(la.c)(e),{signer:o}=t;s.tx.democracy.undelegate().signAndSend(e,{signer:o},(async({status:t})=>{if(t.isInBlock){console.log(`Completed at block hash #${t.asInBlock.toString()}`);const o=(await s.query.democracy.votingOf(e)).toJSON(),n=!!o.delegating;c((t=>({...t,[e]:{isDelegating:n,...o}}))),a({header:"Success!",message:"Account has been successfully undelegated.",status:hn.SUCCESS}),l({isLoading:!1,message:""})}else console.log(`Current status: ${t.type}`),t.isBroadcast&&l({isLoading:!0,message:"Broadcasting the delegation"})})).catch((e=>{console.log(":( transaction failed"),console.error("ERROR:",e),l({isLoading:!1,message:""}),a({header:"Failed!",message:e.message,status:hn.ERROR})}))})(t),children:[Object($.jsx)(J.a,{name:"broken chain"}),"Undelegate"]})})]},t)}))})]})})}))({accounts:e})})}))`
  .button-container {
    display: flex;
    align-items: center;
    height: 100%;
  }

  .default-label {
    display: flex;
    align-items: center;
    height: 100%;
    font-weight: 500;
    color: ${({theme:e})=>e.colors.green_primary};
    padding: 0.7rem;
    line-height: 1.6rem;
  }
`;const vs=[{text:"0.1x voting balance, no lockup period",value:0},...[1,2,4,8,16,32].map(((e,t)=>[t+1,e])).map((([e,t])=>({text:`${e}x voting balance, locked for ${t} enactment period(s)`,value:e})))];var ws=({onConvictionChange:e})=>{const[t,o]=Object(n.useState)(vs[1].value),a=Object(n.useCallback)(((t,n)=>{const a=Number(n.value);o(a),e(a)}),[e]);return Object($.jsxs)(ga.Field,{children:[Object($.jsxs)("label",{children:["Vote lock",Object($.jsx)(Ca,{content:"You can multiply your votes by locking your tokens for longer periods of time."})]}),Object($.jsx)(Ua.a,{onChange:a,options:vs,pointing:"top",value:t})]})};var Ss=({account:e,className:t,onCancelManage:o,onDelegationSaved:a})=>{const{api:s,apiReady:r}=Object(n.useContext)(Mo),{queueNotification:i}=Object(n.useContext)(dn),[c,d]=Object(n.useState)(void 0),[l,m]=Object(n.useState)(Xa[0]),[u,h]=Object(n.useState)(1),[p,b]=Object(n.useState)({isLoading:!1,message:""});return Object($.jsx)(ga,{className:t,standalone:!1,children:p.isLoading?Object($.jsx)(ga.Group,{children:Object($.jsx)(ga.Field,{width:16,children:Object($.jsx)(ya,{className:"LoaderWrapper",children:Object($.jsx)(oa,{text:p.message})})})}):Object($.jsx)($.Fragment,{children:e&&Object($.jsxs)($.Fragment,{children:[Object($.jsxs)(ga.Field,{width:6,children:[Object($.jsx)("label",{className:"header",children:"Voter account"}),Object($.jsx)(Tn,{className:"item",address:e.address,extensionName:e.meta.name})]}),Object($.jsx)(ga.Field,{width:8,children:Object($.jsx)(Qa,{label:"Lock balance",helpText:"Amount of you are willing to lock for the vote.",placeholder:"123",onChange:e=>d(e)})}),Object($.jsx)(ga.Field,{width:8,children:Object($.jsx)(ws,{onConvictionChange:e=>{h(e)}})}),Object($.jsxs)(ga.Field,{width:8,children:[Object($.jsx)("label",{className:"header",children:"Delegatee account"}),Object($.jsx)(as,{delegatees:Xa,defaultDelegatee:l,onDelegateeChange:(e,t)=>{const{value:o}=t,n=Object.values(Xa);let a=0;for(const s of Object.keys(n))if(n[Number(s)].address===o){a=Number(s);break}m(Xa[a])}})]}),Object($.jsxs)(ga.Group,{children:[Object($.jsx)(ga.Field,{width:4,children:Object($.jsx)(nn,{fluid:!0,className:"secondary",disabled:!1,onClick:o,children:"Cancel"})}),Object($.jsx)(ga.Field,{width:4,children:Object($.jsxs)(nn,{fluid:!0,basic:!0,className:"primary positive",disabled:!1,onClick:async()=>{if(!s||!r||!e||!c)return;b({isLoading:!0,message:"Waiting for signature"});const t=e.address,o=await Object(la.c)(t),{signer:n}=o,d=s.tx.democracy.delegate(l.address,u,c);console.log(l.address,u,c.toString()),d.signAndSend(t,{signer:n},(({status:e})=>{e.isInBlock?(console.log(`Completed at block hash #${e.asInBlock.toString()}`),i({header:"Success!",message:`Vote will be delegated to ${l.name}.`,status:hn.SUCCESS}),a()):(console.log(`Current status: ${e.type}`),e.isBroadcast&&b({isLoading:!0,message:"Broadcasting the delegation"}))})).catch((e=>{console.log(":( transaction failed"),console.error("ERROR:",e),b({isLoading:!1,message:""}),i({header:"Failed!",message:e.message,status:hn.ERROR})}))},children:[Object($.jsx)(J.a,{name:"check"}),"Save"]})})]})]})})})};var Cs=Object(L.b)((({className:e})=>{const[t,o]=Object(n.useState)([]),[a,s]=Object(n.useState)(null),[r,i]=Object(n.useState)(!1),[c,d]=Object(n.useState)(!1);Object(n.useEffect)((()=>{(async()=>{if(0===(await Object(la.b)(ma)).length)return void d(!0);d(!1);const e=await Object(la.a)();o(e)})()}),[]);return c?Object($.jsx)(ga,{className:e,standalone:!1,children:Object($.jsx)(ga.Group,{children:Object($.jsx)(ga.Field,{width:16,children:Object($.jsx)(Oa,{})})})}):Object($.jsxs)(ia.a,{children:[Object($.jsxs)(ia.a.Column,{className:e,mobile:16,tablet:12,computer:12,largeScreen:10,widescreen:10,children:[Object($.jsx)("h2",{children:"Manage Delegation"}),Object($.jsx)(_s.a,{}),r?Object($.jsx)(Ss,{account:a,onCancelManage:()=>{i(!1)},onDelegationSaved:()=>{i(!1)}}):Object($.jsx)(Os,{accounts:t,onManageAddress:e=>{s(e),i(!0)}})]}),Object($.jsx)(ia.a.Column,{only:"computer",computer:4,largeScreen:6,widescreen:6})]})}))`
  background-color: white;
  padding: 2rem 3rem 3rem 3rem !important;
  border-radius: 0.3rem;
  box-shadow: ${({theme:e})=>e.colors.box_shadow_card};

  .ui.divider,
  .ui.divider:not(.vertical):not(.horizontal) {
    margin: 3rem 0 2rem 0;
    border-top-style: solid;
    border-top-width: 1px;
    border-top-color: ${({theme:e})=>e.colors.grey_light};
    border-bottom: none;
  }

  .button {
    margin-top: 0.2rem;
  }

  .ui.form:not(.unstackable) .fields:not(.unstackable) > .ten.wide.field {
    @media only screen and (max-width: 767px) {
      width: 70% !important;
    }

    @media only screen and (max-width: 576px) {
      width: 60% !important;
    }
  }

  .ui.form:not(.unstackable) .fields:not(.unstackable) > .six.wide.field {
    @media only screen and (max-width: 767px) {
      width: 30% !important;
    }

    @media only screen and (max-width: 576px) {
      width: 40% !important;
    }
  }

  @media only screen and (max-width: 576px) {
    padding: 2rem !important;

    .ui.form {
      margin-top: 0;
      padding: 0;
    }

    button {
      padding: 0.8rem 1rem;
      border-radius: 0.5rem;
    }
  }
`,ks=o(637),$s=o.n(ks);var As=Object(L.b)((({className:e,data:t})=>t&&t.length?Object($.jsx)("ul",{className:`${e} referenda__list`,children:t.map((e=>{const{index:t,image:o,status:n}=e,a=t.toNumber(),s=o&&o.proposer.toString(),r=o&&o.proposal&&o.proposal.method,i=n&&Number(n.end);return s?Object($.jsx)("li",{className:"referenda__item",children:Object($.jsx)(c.b,{to:`/referendum/${a}`,children:Object($.jsx)(Hn,{address:s,method:r,onchainId:a,end:i})})},$s()("referendum")):null}))}):Object($.jsx)(vn,{className:e,text:"There are currently no active referenda."})))`
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
`;var Ns=({className:e})=>{const{api:t,apiReady:o}=Object(n.useContext)(Mo),[a,s]=Object(n.useState)(null),[r,i]=Object(n.useState)(null);return Object(n.useEffect)((()=>{if(!t||!o)return;let e;return t.derive.democracy.referendumsActive((e=>{s(e.slice(0,2))})).then((t=>{e=t})).catch((e=>{console.error(e),i(e)})),()=>e&&e()}),[t,o]),r&&(null===r||void 0===r?void 0:r.message)?Object($.jsx)(Zn,{text:r.message}):a?Object($.jsx)(As,{className:e,data:a}):Object($.jsx)(oa,{})};var Es=Object(L.b)((({className:e})=>Object($.jsxs)("div",{className:e,children:[Object($.jsx)("h1",{children:"Latest activity."}),Object($.jsxs)(ia.a,{stackable:!0,reversed:"mobile tablet",children:[Object($.jsxs)(ia.a.Column,{mobile:16,tablet:16,computer:10,children:[Object($.jsx)("h3",{children:"Current referenda"}),Object($.jsx)(Ns,{className:"referendumContainer"})]}),Object($.jsx)(ia.a.Column,{mobile:16,tablet:16,computer:6})]})]})))`
  .referendumContainer,
  .proposalContainer,
  .discussionContainer,
  .motionContainer,
  .treasuryContainer,
  .tipContainer,
  .bountyContainer,
  .techCommitteeProposalContainer {
    margin-bottom: 3rem;
  }

  h1 {
    @media only screen and (max-width: 576px) {
      margin: 3rem 1rem 1rem 1rem;
    }

    @media only screen and (max-width: 768px) and (min-width: 576px) {
      margin-left: 1rem;
    }

    @media only screen and (max-width: 991px) and (min-width: 768px) {
      margin-left: 1rem;
    }
  }

  @media only screen and (max-width: 992px) {
    .default-address-infobox {
      display: none;
    }
  }

  @media only screen and (max-width: 768px) {
    .mainButtonContainer {
      margin: 0rem;
    }
  }

  @media only screen and (max-width: 991px) and (min-width: 768px) {
    .ui[class*='tablet reversed'].grid {
      flex-direction: column-reverse;
    }

    .mainButtonContainer {
      margin-top: 1rem !important;
    }
  }

  @media only screen and (max-width: 576px) {
    .mainButtonContainer {
      align-items: stretch !important;
      margin: 1rem !important;

      .newPostButton {
        padding: 0.8rem 1rem;
        border-radius: 0.5rem;
      }
    }
  }

  li {
    list-style-type: none;
  }

  .mainButtonContainer {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 2rem;
  }
`;var Ds=`Polkassembly privacy notice\n====================\n\nPremiurly O\xdc (&quot; **Premiurly**&quot;, &quot; **we**&quot;, &quot; **us**&quot;) collects, uses, and handles your personal information when you use Polkassembly.\n\n## What does this notice cover?\n\nThis notice applies to Premiurly&#39;s online forum, Polkassembly at https://${O()}.polkassembly.io (the &quot;**Forum**&quot;). This notice describes how Premiurly will use data collected as part of the Forum.\n\nIt also describes your data protection rights, including a right to object to some of the processing which Premiurly carries out. More information about your rights, and how to exercise them, is set out in the &quot;What rights do I have?&quot; section.\n\nWhat information do we collect?\n\n## We collect and process the following information:\n\n- **Information you provide to us**.\n  -_Account and account preferences information._ We collect the information you provide when registering for the Forum including your username, name, email and password, profile information, including preferences and settings, e.g. subscription to a topic or post.  Where you choose to link your on-chain identity with your Polkassembly account, we will also store your verified Kusama / Polkadot address.\n  -_Post information_; information provided in your forum comments and posts, including drafts, as well as interaction with content on the forum and between users. This may also include any direct messaging to other users;\n  -_Support_: We collect information when you interact with us, such as to provide us with feedback or, contact us for user support. This may include name, email, the date, time and reason for contacting us, transcripts of any conversations, and if you call us, your phone number and call recordings.\n  - We store your marketing preferences, including any consent you have given us.\n  -_Device and browser information:_ We collect information about the browsers and devices you use to access the Forum. Such as access logs of IP address, user-agent string, browser type, browser extension, operating system, referral URLs, device information (e.g., device IDs), pages visited, links clicked, the requested URL and the time of page visits.\n  - Please see our Cookie Policy for more information: https://premiurly.in/policy/\n\n## How do we use this information?\n\nWe process this information for the following purposes:\n\nTo fulfil a contract, or take steps linked to a contract including:\n\n- To provide the Forum, including ancillary services such as customer support.\n- To verify user on-chain identity and enable users to use the voting feature;\n- To send you service, technical and other administrative emails relating to the Forum, messages and other types of communications.\n\nAs required by Premiurly to conduct our business and pursue our legitimate interests, in particular:\n\n- To ensure our Forum is working as intended, such as tracking outages or troubleshooting issues that you report to us.\n- To ensure the security of the Forum.\n- To make improvements to the Forum and help us develop new services.\n- To conduct surveys and other market research to ensure our services are relevant to your needs.\n\n## Where you give us consent:\n\n- Where required by law to send you direct marketing in relation to our relevant services;\n- We place cookies and use similar technologies. See our Cookie Policy; and\n- On other occasions where we ask you for consent, we will use the data for the purpose which we explain at that time.\n\nFor purposes which are required by law:\n\n- In response to requests by government or law enforcement authorities conducting an investigation.\n\n## Withdrawing consent or otherwise objecting to direct marketing\n\nWherever we rely on your consent, you will always be able to withdraw that consent, although we may have other legal grounds for processing your data for other purposes, such as those set out above.\n\nIn some cases, we are able to send you direct marketing without your consent, where we rely on our legitimate interests. You have an absolute right to opt-out of direct marketing, or profiling we carry out for direct marketing, at any time. You can do this by following the instructions in the communication within an electronic message, or by contacting us at contact@premiurly.in.\n\nWho will we share this data with, where and when\n\n- **Vendors and service providers**. We will share your personal data with third party service providers who support our business, who will process it on behalf of Premiurly for the purposes identified above. Such third parties include providers of hosting services and technical infrastructure including browser extension developers, blockchain infrastructure providers, third party account management services, customer support services, and marketing services.\n- **Third party direct communication and marketing services.** We will share your email address with third party service providers to send direct marketing emails on our behalf with your consent.\n- **Premiurly group companies**. We may share your information with our group of companies for the purposes of business administration, maintaining security and regulatory compliance, providing support services to end users (including IT support, where relevant), marketing and analytics.\n- **Legal reasons**. We will share personal information outside of Premiurly if we have a good-faith belief that access, use, preservation, or disclosure of the information is reasonably necessary to (i)  enforce applicable terms of service or other agreements, including investigation of potential violations and audits, (ii) detect, prevent, or otherwise address fraud, abuse, security risks, or technical issues, and (iii) protect against harm to the rights, property or safety of Premiurly, our users, or the public as required or permitted by law.\n- **Business transfers**. In the event that Premiurly undergoes any reorganisation, restructuring, merger, sale, or other transfer of assets your information will be disclosed to our advisers and any prospective purchaser&#39;s adviser and will be passed to any new owners of the business.\n\nIn connection with the purposes identified above, your personal data will be shared in the EEA, and may be transferred outside the EEA . Where information is transferred outside EEA that is not subject to an adequacy decision by the EU Commission, data is adequately protected by EU Commission approved standard contractual clauses, an appropriate Privacy Shield certification or a vendor&#39;s Processor Binding Corporate Rules.\n\n## What rights do I have?\n\nWhere required by applicable law or regulation, you have the right to **ask us for a copy** of your personal data; to **correct** , **delete** or **restrict** (stop any active) processing of your personal data; and to **obtain the personal data you provide to us for a contract or with your consent in a structured, machine readable format** , and to ask us to **share (port) this data to another controller.** If you are a registered user of the Forum, you may also review and change your personal information on your account profile page.\n\nIn addition, you can **object to the processing** of your personal data in some circumstances (in particular, where we don&#39;t have to process the data to meet a contractual or other legal requirement, or where we are using the data for direct marketing). These **rights may be limited** , for example if fulfilling your request would reveal personal data about another person, or if you ask us to delete information which we are required by law to keep or have compelling legitimate interests in keeping. We will inform you of relevant exemptions we rely upon when responding to any request you make.\n\nTo exercise any of these rights - or get a copy of our legitimate interest balancing tests -  you can get in touch with us using the details set out below. If you have unresolved concerns, you have the **right to complain** to a data protection authority where you live, work or where you believe a breach may have occurred.\n\nFor the provision of information marked as mandatory when you register to use the Forum, if such information is not provided, then you will not be able to use the Forum. All other provision of your information is optional. If you do not provide such information, our provision of certain services to you may be detracted from.\n\n## How long will you retain my data?\n\nWe store data for as long as necessary to provide our services. This is a case-by-case determination that depends on things such as the nature of the data, why it is collected and processed, and relevant legal or operational retention needs. Some personal data you can delete whenever you like, some data is deleted automatically, and some data we retain for longer periods of time. For example:\n\n- We will keep the account information you provide to us for as long as you remain an account holder.\n- We will keep a record of the fact that you have asked us not to send you direct marketing indefinitely, so that we can respect your request in future.\n- We will keep usage information and analytics data for a reasonable length of time that allows us to provide our services and to understand how people use the Forum.\n\nSometimes business and legal requirements oblige us to retain certain information, for specific purposes, for an extended period of time. Reasons we might retain some data for longer periods of time include security, fraud prevention, financial record-keeping, complying with legal or regulatory requirements, ensuring the continuity of our services, and when there have been direct communications with Premiurly.\n\n## How do I get in touch with you?\n\nIf you have any questions or concerns about how we process your data, please contact us at contact@premiurly.in.\n\n## Who is my data controller?\n\nAny personal information provided to or gathered by Premiurly is controlled by Premiurly O\xdc.For more information on who is considered the specific data controller in connection with the collection of your personal information please contact us at contact@premiurly.in.\n\n## Changes to our privacy notice\n\nWe reserve the right to change this privacy notice from time to time to reflect changes in the law or regulation, our information practices, our services, or our operational requirements. Depending on the type of change, we may notify you by updating this page or by email. We encourage you to periodically review this page to see any changes we have made.\n\nLast updated: 27th August 2021 version 1`;const Is=O();var Ps=`Polkassembly end user agreement\n====================\n\nPremiurly O\xdc is a company registered in Estonia under company number 16162207 with its registered office at Tornim\xe4e tn 7, Kesklinna linnaosa, Tallinn, Harju maakond, 10145 (the "**Company**"). The Company operates Polkassembly (the "**Forum**") on https://${Is}.polkassembly.io (the "**Website**").\n\n## 1. Understanding these terms\n  1.  This end user agreement (the "**Terms**") describes how you may access and use the Forum and any services made available through the Forum via the Website, any mobile applications made available by the Company and any other distribution channels made available by the Company (the "**Services**"). By accessing the Forum, these Terms will apply to you and you agree to the Terms. You should therefore read the terms carefully before using the forum.\n  2.  When certain words and phrases are used in these Terms, they have specific meanings (these are known as "**defined terms**"). You can identify these defined terms because they start with capital letters (even if they are not at the start of a sentence). Where a defined term is used, it has the meaning given to it in the section of these Terms where it was defined (you can find these meanings by looking at the sentence where the defined term is included in brackets and speech marks).\n  3.  In this document, when we refer to "we", "us" or "our", we mean the Company; and when we refer to "you" or "your" we mean the person accessing or using the person accessing or using the Forum.\n  4.  Please note that:\n    1.  your use of the Website is governed by our website terms of use (available https://${Is}.polkassembly.io/terms-and-conditions), in the case of any inconsistency between any provisions of those website terms of use and any of the clauses of this end user agreement, the clauses of this end user agreement shall prevail;\n    2.  the Website uses cookies, the use of which are governed by our cookies policy (available https://premiurly.in/policy/);\n    3.  we only use your personal information in accordance with our privacy notice (available https://${Is}.polkassembly.io/privacy).\n\n## 2.  The Forum\n\n  1.  The Forum is made available free of charge. We do not guarantee that the Forum, or any content on it, will always be available or be uninterrupted. Access to the Forum is permitted on a temporary basis. We may suspend, withdraw, discontinue or change all or any part of the Forum without notice. We will not be liable to you if for any reason the Forum is unavailable at any time or for any period. We may update the Forum and/or change the content on it at any time.\n  2.  You are responsible for making all arrangements necessary for you to have access to the Forum. You are also responsible for ensuring that all persons who access the Forum through your internet connection are aware of these Terms and that they comply with them.\n  3.  The Forum and the content on it are provided for general information purposes only. They are not intended to amount to advice on which you should rely.\n\n## 3.  Your account and password\n  1.  You will need to register an account with us on the Website in order to use the Services and gain access to the Forum ("**Account**"). You can register via our official website (at https://${Is}.polkassembly.io/signup). In order to register for an Account, you must be aged 18 or over. If you register an Account, you will be asked to provide certain information (such as your user name) and to create a password, as part of our security procedures. You must treat such password as confidential and you must not disclose it to any third party.\n  2.  We have the right to disable any Accounts and/or passwords, at any time, if in our reasonable opinion you have failed to comply with any of the provisions of these Terms.\n  3.  If you know or suspect that anyone other than you knows your Account login details, you must immediately notify us at contact@premiurly.in.\n  4.  You are responsible for any unauthorised use of your Account login details.\n  5.  If you are accepting these Terms on behalf of another legal entity, including a business or government, you represent that you have full legal authority to bind such entity to these Terms.\n\n## 4.  Acceptable use\n\n*General*\n\n1.  You agree:\n  1.  not to use the Forum in any unlawful manner, for any unlawful purpose or in any manner inconsistent with these Terms;\n  2.  not to infringe our intellectual property rights or those of any third party in relation to your use of the Forum (to the extent that such use if not licensed under these Terms);\n  3.  not to transmit any material that is defamatory, offensive or otherwise objectionable in relation to your use of the Forum;\n  4.  not to use the Forum by automated means or otherwise for the purposes of scraping, extracting or otherwise obtaining any material from the Forum for use within a third party website or application;\n  5.  not to collect or harvest any information or data from our systems or attempt to decipher any transmission to or from the servers running the Website ;\n  6.  not to copy, or otherwise reproduce or re-sell any part of the Forum unless expressly permitted to do so in these Terms;\n  7.  not to access, query or search the Forum with any automated system, other than through our published interfaces and pursuant to their applicable terms; and\n  8.  not to create multiple accounts to evade punishment or avoid restrictions.\n\n*User Generated Content*\n\n1.  If it is the case that you supply/upload any content to the Forum \u2013 whether it be pictures, text, sound recordings or whatever \u2013 the content you supply ("**User Generated Content**") must comply with the following rules:\n\n  1.  it must not be obscene, abusive, offensive or racist and it must not promote or propose hatred or physical harm against anyone;\n  2.  it must not harass, bully, insult or intimidate another person;\n  3.  it must be true and honest so far as you know;\n  4.  it must not constitute pornography or be sexual or sexually suggestive involving minors;\n  5.  it must not be defamatory of anyone;\n  6.  it must not use the material or content or infringe the rights or privacy of anyone else; for example you should not use images of well-known characters, footage or music (unless it is your own);\n  7.  it must not contain someone else\u2019s personal details or confidential information relating to other people;\n  8.  it must not promote discrimination, whether based on race, sex, religion, nationality, disability, sexual orientation or age\n  9.  it must not promote or condone terrorism, violence or illegal behaviour;\n  10. it must not be harmful to minors in any way;\n  11. it must not promote any illegal activity or otherwise be unlawful;\n  12. it must not impersonate any person, or misrepresent your identity or affiliation with any person; and\n  13. it must not give the impression that it emanates from or is endorsed by Premiurly, if this is not the case.\n\n2.  We reserve the right to refuse to accept or refuse or cease to use any User Generated Content supplied by any person that we think contravenes these Terms or otherwise may create liability for us.\n3.  We take no responsibility for, and we do not expressly or implicitly endorse, any User Generated Content. By submitting your User Generated Content, you represent and warrant that you have all rights, power and authority necessary to grant the rights to such User Generated Content as set out in these Terms. As you alone are responsible for your User Generated Content, you may expose yourself to liability if you post or share User Generated Content without all necessary rights.\n4.  We do not oversee, monitor or moderate any User Generated Content which is uploaded to the Forum. If you become aware of any User Generated Content that breaches clause 4.2 above, please use the report button or contact us on contact@premiurly.in, providing details of: (i) the date on which it was posted and where it can be found on the Forum; (ii) the name and surname of the author or, if the author is a legal person, the author's business name; (iii) reasons why the content should be deleted; and (vi) copies of any communication with the author (if any).\n\n*Viruses*\n\n1.  We do not guarantee that the Website will be totally secure or free from bugs or viruses. You are responsible for configuring your information technology, computer programmes and platform in order to access the Website and we recommend that you use your own virus protection software.\n2.  You must not misuse the Website by knowingly introducing viruses, trojans, worms, logic bombs or other material which is malicious or technologically harmful. You must not attempt to gain unauthorised access to the Website, the server on which the Website is stored or any server, computer or database connected to the Website. You must not attack the Website via a denial-of-service attack or a distributed denial-of service attack. By breaching this provision, you would commit criminal offences. We will report any such breach to the relevant law enforcement authorities and we will cooperate with those authorities by disclosing your identity to them. In the event of such a breach, your right to use the Website will cease immediately.\n\n\n\n## 5.  Intellectual property\n  1.  We grant to you a non-transferable, non-exclusive, revocable licence to use the Forum provided that you comply with these Terms and the documents referred to in it. We reserve all other rights.\n  2.  We are the owner or licensee of all intellectual property rights in the Forum and its content (other than the User Generated Content), including the Premiurly name and mark. Those works are protected by intellectual property laws and treaties around the world. All such rights are reserved.\n  3.  You are not granted any right to use, and may not use, any of our intellectual property rights other than as set out in these Terms. You must not commercially exploit the Forum (or any part of it or its content); however, you may download material from the Forum solely for internal, non-commercial, personal use by you.\n  4.  Save as required by applicable law, you shall not copy, reproduce, republish, upload, re-post, modify, transmit, distribute or otherwise use in any way for any non-personal, public or commercial purpose any part of the Forum including (without limitation) the text, designs, graphics, photographs, images and User Generated Content of other users without our prior written consent and (in the case of User Generated Content of a different user) the prior written consent of that user.\n  5.  You retain all ownership rights you have in the User Generated Content, but you hereby grant to us a perpetual, transferable, royalty-free license, irrevocable, worldwide, sub-licensable license to use, copy, modify, adapt, prepare derivative works from, distribute, perform and display your User Generated Content and any name, username, voice or likeness provided in connection with your User Generated Content in all media formats and channels now known or later developed. This license includes the right for us to make your User Generated Content available for syndication, broadcast, distribution or publication by other companies, organisations or individuals who partner with us. You also agree that we may remove metadata associated with your User Generated Content, and you irrevocable waive any claims and assertions of moral rights or attribution with respect to your User Generated Content.\n\n## 6.  Our liability\n\n  1.  Nothing in these Terms excludes or limits our liability for:\n      1.  death or personal injury caused by our negligence;\n      2.  fraud or fraudulent misrepresentation; and\n      3.  any matter in respect of which it would be unlawful for us to exclude or restrict our liability.\n\n  2.  We assume no responsibility for the content of websites, web applications or mobile applications linked to from the Forum (including links to any third party browser extensions providing voting functionality or notification facilities or links to our commercial sponsors and partners). Such links should not be interpreted as endorsement by us of those linked websites or mobile applications. We will not be liable for any loss or damage that may arise from your use of them.\n  3.  We make no representations about the reliability, availability, timeliness or accuracy of the content included on the Forum.\n\n**If you are a business**\n\n1.  If you are acting for purposes relating to your trade, business, craft or profession, then subject to clause 6.1:\n  1.  you agree to use the Forum for internal purposes only and in no event shall we be liable to you for any loss of profits, loss of revenue, loss of contracts, failure to realise anticipated savings or for any indirect or consequential loss, whether arising from negligence, breach of contract or otherwise; and\n  2.  our total liability to you for any loss or damage arising out of or in connection with these Terms, whether in contract (including under any indemnity), tort (including negligence) or otherwise shall be limited to EUR 100.\n\n2.  You shall indemnify and hold us harmless against any losses, costs, liabilities and expenses suffered or incurred by us and/or our affiliates as a result of any breach of these Terms.\n\n**If you are a consumer**\n\n1.  If you are acting for purposes that are wholly or mainly outside your trade, business, craft or profession then, save as set out in clause 6.1, the following sub-clauses apply.\n  1.  If we fail to comply with these Terms, we are responsible for loss or damage you suffer that is a foreseeable result of our breach of these Terms or our negligence, but we are not responsible for any loss or damage that is not foreseeable. Loss or damage is foreseeable if it was an obvious consequence of our breach or if it was contemplated by you and us at the time that you accessed the Forum.\n  2.  Our total liability to you for any loss or damage arising out of or in connection with these Terms, whether in contract (including under any indemnity), tort (including negligence) or otherwise shall be limited to EUR 100.\n  3.  Nothing in these Terms affects your statutory rights. Advice about your statutory rights is available from your local Citizens' Advice Bureau or Trading Standards Office.\n  4.  You agree not to use the Forum, or any content on the Forum, for any commercial or business purposes and we have no liability to you for any loss of profit, loss of business, business interruption, or loss of business opportunity.\n\n\n\n## 7.  Suspension and termination\n\n  1.  Either you or we may terminate these Terms (and your access to Forum) at any time for any reason.\n  2.  If you breach any of the terms of these Terms, we may immediately do any or all of the following (without limitation):\n      1.  issue a warning to you;\n      2.  temporarily or permanently remove any User Generated Content uploaded by you to the Forum;\n      3.  temporarily or permanently withdraw your right to use the Forum;\n      4.  suspend or terminate your Account;\n      5.  issue legal proceedings against you for reimbursement of all costs resulting from the breach (including, but not limited to, reasonable administrative and legal costs);\n      6.  take further legal action against you; and/or\n      7.  disclose such information to law enforcement authorities as we reasonably feel is necessary to do so.\n\n  3.  If we withdraw your right to use the Forum, then:\n      1.  all rights granted to you under these Terms shall cease; and\n      2.  you must immediately cease all activities authorised by these Terms, including your use of any services provided through the Forum.\n\n## 8.  Changes to these Terms\n\n  1.  We may make changes to these terms from time to time (if, for example, there is a change in the law that means we need to change these Terms). We will give you at least thirty days' advance notice of such changes. If you do not wish to continue using the Forum following the changes, you can cancel your agreement to these Terms by cancelling your Account. Your continued use of the Forum following the prior notification of the amended terms will be understood as your acceptance of the new terms.\n\n## 9.  Other important information\n  1.  Each of the clauses of these Terms operates separately. If any court or relevant authority decides that any of them are unlawful or unenforceable, the remaining clauses will remain in full force and effect.\n  2.  If we fail to insist that you perform any of your obligations under these Terms, or if we do not enforce our rights against you, or if we delay in doing so, that will not mean that we have waived our rights against you and will not mean that you do not have to comply with those obligations. If we do waive a default by you, we will only do so in writing, and that will not mean that we will automatically waive any later default by you.\n  3.  If you wish to have more information on online dispute resolution, please follow this link to the website of the European Commission: [http://ec.europa.eu/consumers/odr/]. This link is provided as required by Regulation (EU) No 524/2013 of the European Parliament and of the Council, for information purposes only. We are not obliged to participate in online dispute resolution.\n\n## 10.  Governing law and jurisdiction\n\n**If you are a business**\n\n1.  These Terms are governed by Estonian law. This means that your access to and use of the Forum, and any dispute or claim arising out of or in connection therewith will be governed by Estonian law.\n2.  The courts of Estonia will have non-exclusive jurisdiction over any disputes between us and you (including non-contractual disputes or claims).\n\n**If you are a consumer**\n\n1.  These Terms are governed by the laws of Estonia. This means that your access to and use of the Forum, and any dispute or claim arising out or in connection therewith (including non-contractual disputes or claims), will be governed by Estonian law.\n2.  You may bring any dispute which may arise under these Terms to \u2013 at your discretion - either the competent court of Estonia, or to the competent court of your country of habitual residence if this country of habitual residence is an EU Member State, which courts are \u2013 with the exclusion of any other court - competent to settle any of such a dispute. We shall bring any dispute which may arise under these Terms to the competent court of your country of habitual residence if this is in an EU Member State, or otherwise the competent court of Estonia.\n3.  As a consumer, if you are resident in the European Union and we direct the Forum to (and/or pursue our commercial or professional activities in relation to the Forum in) the EU Member State in which you are resident, you will benefit from any mandatory provisions of the law of the country in which you are resident. Nothing in these Terms, including clause 10.3, affects your rights as a consumer to rely on such mandatory provisions of local law.\n\n\n## 11.  Contacting us\n\n> Should you have any reasons for a complaint, we will endeavour to resolve the issue and avoid any re-occurrence in the future. You can always contact us by using the following details:\n>\n> Address: Tornim\xe4e tn 7, Kesklinna linnaosa, Tallinn, Harju maakond, 10145\n>\n> Email address: contact@premiurly.in\n\nThank you.\n\nTerms last updated 27th August 2020\n`,Ts=o(173);const Rs=Object(L.b)((({md:e,className:t})=>Object($.jsxs)(ia.a,{className:t,children:[Object($.jsx)(ia.a.Column,{tablet:4,computer:2,largeScreen:2,widescreen:2}),Object($.jsx)(ia.a.Column,{className:"md_box",mobile:16,tablet:12,computer:12,largeScreen:12,widescreen:12,children:Object($.jsx)(Ts.a,{className:"markdown",md:e})})]})))`
  .md_box {
    background-color: white;
    padding: 3rem !important;
    border-radius: 0.3rem;
    box-shadow: box_shadow_card;
  }
`,Fs=()=>Object($.jsx)(Rs,{md:Ps}),qs=()=>Object($.jsx)(Rs,{md:Ds}),Ls=()=>Object($.jsx)(Rs,{md:'Terms of Website Use\n====================\n\nPlease read these terms and conditions carefully before using this site\n\nThis terms of use (together with the documents referred to in it) tells you the terms of use on which you may make use of our website polkassembly.io (our site), whether as a guest or a registered user. Use of our site includes accessing, browsing, or registering to use our site.\n\nPlease read these terms of use carefully before you start to use our site, as these will apply to your use of our site. We recommend that you print a copy of this for future reference.\n\nBy using our site, you confirm that you accept these terms of use and that you agree to comply with them.\n\nIf you do not agree to these terms of use, you must not use our site.\n\n### Other applicable terms\n\nThese terms of use refer to the following additional terms, which also apply to your use of our site:\n\n-   Our Polkassembly Terms and Conditions, which set out the terms of your use of Polkassembly if you create an account and sign up.\n\n-   Our Privacy Notice which sets out information about how we use your personal information.\n\n-   Our Cookie Policy, which sets out information about the cookies on our site.\n\n### Information about us\n\npolkassembly.io is a site operated by Premiurly O\xdc ("We"). We are registered in Estonia under company number 16162207 and have our registered office at Tornim\xe4e tn 7, Kesklinna linnaosa, Tallinn, Harju maakond, 10145.\n\n### Changes to these terms\n\nWe may revise these terms of use at any time by amending this page. Please check this page from time to time to take notice of any changes we made, as they are binding on you.\n\n### Changes to our site\n\nWe may update our site from time to time, and may change the content at any time. However, please note that any of the content on our site may be out of date at any given time, and we are under no obligation to update it. We do not guarantee that our site, or any content on it, will be free from errors or omissions.\n\n### Accessing our site\n\nOur site is made available free of charge.\n\nWe do not guarantee that our site, or any content on it, will always be available or be uninterrupted. Access to our site is permitted on a temporary basis. We may suspend, withdraw, discontinue or change all or any part of our site without notice. We will not be liable to you if for any reason our site is unavailable at any time or for any period.\n\nYou are responsible for making all arrangements necessary for you to have access to our site.\n\nYou are also responsible for ensuring that all persons who access our site through your internet connection are aware of these terms of use and other applicable terms and conditions, and that they comply with them.\n\n### Intellectual property rights\n\nWe are the owner or licensee of all intellectual property rights in our site and its content including the Premiurly O\xdc name and mark. Those works are protected by intellectual property laws and treaties around the world. All such rights are reserved.\n\nYou are not granted any right to use, and may not use, any of our intellectual property rights other than as set out in these terms. You must not commercially exploit our site (or any part of it or its content); however, you may download material from our site solely for internal, non-commercial, personal use by you.\n\nSave as required by applicable law, you shall not copy, reproduce, republish, upload, re-post, modify, transmit, distribute or otherwise use in any way for any non-personal, public or commercial purpose any part of our site including (without limitation) the text, designs, graphics, photographs, images and content generated by users without our prior written consent and (in the case of content generated by a user) the prior written consent of that user.\n\nOur status (and that of any identified contributors) as the authors of content on our site must always be acknowledged.\n\nIf you use our site or any part of it or content on it in breach of these terms of use, your right to use our site will cease immediately and you must, at our option, return or destroy any copies of the materials you have made.\n\n### No reliance on information\n\nThe content on our site is provided for general information only. It is not intended to amount to advice on which you should rely. You must obtain professional or specialist advice before taking, or refraining from, any action on the basis of the content on our site.\n\nAlthough we make reasonable efforts to update the information on our site, we make no representations, warranties or guarantees, whether express or implied, that the content on our site is accurate, complete or up-to-date.\n\n### Limitation of our liability\n\nNothing in these terms of use excludes or limits our liability for death or personal injury arising from our negligence, or our fraud or fraudulent misrepresentation, or any other liability that cannot be excluded or limited by Estonian law.\n\nTo the extent permitted by law, we exclude all conditions, warranties, representations or other terms which may apply to our site or any content on it, whether express or implied.\n\nWe will not be liable to any user for any loss or damage, whether in contract, tort (including negligence), breach of statutory duty, or otherwise, even if foreseeable, arising under or in connection with:\n\n-   use of, or inability to use, our site; or\n\n-   use of or reliance on any content displayed on our site.\n\nIf you are a business user, please note that in particular, we will not be liable for:\n\n-   loss of profits, sales, business, or revenue;\n\n-   business interruption;\n\n-   loss of anticipated savings;\n\n-   loss of business opportunity, goodwill or reputation; or\n\n-   any indirect or consequential loss or damage.\n\nIf you are a consumer user, please note that we only provide our site for domestic and private use. You agree not to use our site for any commercial or business purposes, and we have no liability to you for any loss of profit, loss of business, business interruption, or loss of business opportunity.\n\nWe will not be liable for any loss or damage caused by a virus, distributed denial-of-service attack, or other technologically harmful material that may infect your computer equipment, computer programs, data or other proprietary material due to your use of our site or to your downloading of any content on it, or on any website linked to it.\n\nWe assume no responsibility for the content of websites linked on our site. Such links should not be interpreted as endorsement by us of those linked websites. We will not be liable for any loss or damage that may arise from your use of them.\n\n### Content uploaded to our site\n\nThe views expressed by other users on our site do not represent our views or values. We take no responsibility for, and we do not expressly or implicitly endorse, any content \u2013 whether it be pictures, text, sound recordings or whatever - supplied or uploaded by a User to our site (\u201cUser Generated Content\u201d).\n\nWe do not oversee, monitor or moderate any User Generated Content which is uploaded to our site. If you become aware of any User Generated Content that is:\n\n-   is obscene, abusive, offensive or racist and promotes or proposes hatred or physical harm against anyone;\n\n-   harasses, bullies, insult or intimidates another person;\n\n-   Is false or dishonest so far as you know;\n\n-   constitutes pornography or is sexual or sexually suggestive involving minors;\n\n-   is defamatory of anyone;\n\n-   uses the material or content or infringes the rights or privacy of anyone else;\n\n-   contains someone else\u2019s personal details or confidential information relating to other people;\n\n-   promotes discrimination, whether based on race, sex, religion, nationality, disability, sexual orientation or age;\n\n-   promotes or condones terrorism, violence or illegal behaviour;\n\n-   is harmful to minors in any way;\n\n-   promotes illegal activity or is otherwise unlawful;\n\n-   impersonates any person, or misrepresents your identity or affiliation with any person; and\n\n-   gives the impression that it emanates from or is endorsed by Premiurly O\xdc, if this is not the case,\n\nthen please contact us on contact@premiurly.in, providing details of: (i) the date on which it was posted and where it can be found on our site; (ii) the name and surname of the author or, if the author is a legal person, the author\'s business name; (iii) reasons why the content should be deleted; and (vi) copies of any communication with the author (if any).\n\n### Viruses\n\nWe do not guarantee that our site will be secure or free from bugs or viruses.\n\nYou are responsible for configuring your information technology, computer programmes and platform in order to access our site. You should use your own virus protection software.\n\nYou must not misuse our site by knowingly introducing viruses, trojans, worms, logic bombs or other material which is malicious or technologically harmful. You must not attempt to gain unauthorised access to our site, the server on which our site is stored or any server, computer or database connected to our site. You must not attack our site via a denial-of-service attack or a distributed denial-of service attack. By breaching this provision, you would commit a criminal offence under the Computer Misuse Act 1990. We will report any such breach to the relevant law enforcement authorities and we will co-operate with those authorities by disclosing your identity to them. In the event of such a breach, your right to use our site will cease immediately.\n\n### Linking to our site\n\nYou may link to our home page, provided you do so in a way that is fair and legal and does not damage our reputation or take advantage of it.\n\nYou must not establish a link in such a way as to suggest any form of association, approval or endorsement on our part where none exists.\n\nWe reserve the right to withdraw linking permission without notice.\n\nIf you wish to make any use of content on our site other than that set out above, please contact contact@premiurly.in.\n\n### Third party links and resources in our site\n\nWhere our site contains links to other sites and resources provided by third parties, these links are provided for your information only.\n\nWe have no control over the contents of those sites or resources.\n\n### Applicable law\n\nIf you are a consumer, please note that these terms of use, its subject matter and its formation, are governed by the law of Estonia. You and we both agree that the courts of Estonia will have non-exclusive jurisdiction.\n\nIf you are a business, these terms of use, its subject matter and its formation (and any non-contractual disputes or claims) are governed by the law of Estonia. We both agree to the exclusive jurisdiction of the courts of Estonia.\n\nTerms and conditions of use of materials\n========================================\n\nWe, Premiurly O\xdc (the "Company"), may provide publications, briefings, newsletters and presentations (the "Materials") on our site or via email and other channels. Access to the Materials is provided on the basis of the terms and conditions set out below. Please read these terms carefully before accessing the Materials.\n\nThe Materials are for general information only and are not intended to provide advice.\n\nWe do not accept responsibility or liability to users or any third parties in relation to the use of the Materials or their contents.\n\nAll copyright, trade marks and other intellectual property in or arising out of the Materials vest solely in us.\n\nYou agree not to modify, reproduce, copy, distribute, disclose to third parties or derive commercial use or benefit from the Materials without our prior written consent.\n\nYou agree not to use or permit the use of the Materials for any illegal purpose nor use the materials in such a manner as would bring us or our business into disrepute.\n\nNothing in these terms shall operate to exclude or restrict liability based on fraud or reckless disregard of professional obligations or any other liability that cannot be excluded or restricted by applicable laws or regulations.\n\nThese terms shall be construed in accordance with the laws of Estonia.\n\n### Contact us\n\nTo contact us, please email contact@premiurly.in.\n\nStatutory information\n---------------------\n\nStatutory information about Premiurly O\xdc:\n\n-   Registered in Estonia\n\n-   Registered Number: 16162207\n\n-   Registered Office: Tornim\xe4e tn 7, Kesklinna linnaosa, Tallinn, Harju maakond, 10145.\n\nThank you for visiting our site.\n'});var zs=()=>{const{query:e}=zo(),t=e.id,o=Number(t)||0,{data:n,error:a,refetch:s}=(r={variables:{id:o}},de.c(co,r));var r;return(null===a||void 0===a?void 0:a.message)?Object($.jsx)(Zn,{text:a.message}):n?Object($.jsx)(bs,{data:n,isMotion:!0,refetch:s}):Object($.jsx)(oa,{})};var Us=Object(L.b)((({className:e,data:t})=>{const o=!t.posts||!t.posts.length,n=t.posts.some((e=>{var t;return!!(null===(t=e.onchain_link)||void 0===t?void 0:t.onchain_motion.length)}));return o||!n?Object($.jsx)(vn,{className:e,text:"There are currently no active motions."}):Object($.jsx)("ul",{className:`${e} motions__list`,children:t.posts.map((e=>{var t,o,n,a,s,r,i,d;const l=null===(t=e.onchain_link)||void 0===t?void 0:t.onchain_motion_id;return!!(null===e||void 0===e||null===(o=e.author)||void 0===o?void 0:o.username)&&!!(null===(n=e.onchain_link)||void 0===n?void 0:n.onchain_motion.length)&&Object($.jsx)("li",{className:"motions__item",children:Object($.jsx)(c.b,{to:`/motion/${l}`,children:Object($.jsx)(Hn,{address:e.onchain_link.proposer_address,comments:(null===(a=e.comments_aggregate.aggregate)||void 0===a?void 0:a.count)?e.comments_aggregate.aggregate.count.toString():"no",method:null===(s=e.onchain_link.onchain_motion[0])||void 0===s||null===(r=s.preimage)||void 0===r?void 0:r.method,onchainId:l,status:null===(i=e.onchain_link.onchain_motion[0])||void 0===i||null===(d=i.motionStatus)||void 0===d?void 0:d[0].status,title:e.title,topic:e.topic.name})})},e.id)}))})}))`
  margin-block-start: 0;
  margin-block-end: 0;

  li {
    list-style-type: none;
  }

  .motions__item {
    margin: 0 0 1rem 0;
    a:hover {
      text-decoration: none;
    }
  }
`;var Ws=({className:e,limit:t})=>{const[o,a]=Object(n.useState)(1),{data:s,error:r,loading:i,refetch:c}=(d={variables:{limit:t*o,postType:Qn}},de.c(io,d));var d;Object(n.useEffect)((()=>{c()}),[c]);return(null===r||void 0===r?void 0:r.message)?Object($.jsx)(Zn,{text:r.message}):s?Object($.jsxs)($.Fragment,{children:[Object($.jsx)(Us,{className:e,data:s}),(i||s.posts.length===t*o)&&Object($.jsx)(aa,{onClick:()=>{a(o+1)},loading:i})]}):Object($.jsx)(oa,{})};var Ms=Object(L.b)((({className:e})=>Object($.jsxs)("div",{className:e,children:[Object($.jsx)("h1",{children:"On-chain motions"}),Object($.jsxs)(xn.a,{stackable:!0,reversed:"mobile tablet",children:[Object($.jsx)(xn.a.Column,{mobile:16,tablet:16,computer:10,children:Object($.jsx)(Ws,{limit:25})}),Object($.jsx)(xn.a.Column,{mobile:16,tablet:16,computer:6,children:Object($.jsx)(_n,{dismissable:!0,content:"This is the place to discuss on-chain motions. On-chain posts are automatically generated as soon as they are created on the chain. Only the proposer is able to edit them.",name:"onchainInfo",title:"About On-chain Motions"})})]})]})))`
  h1 {
    @media only screen and (max-width: 576px) {
      margin: 3rem 1rem 1rem 1rem;
    }

    @media only screen and (max-width: 768px) and (min-width: 576px) {
      margin-left: 1rem;
    }

    @media only screen and (max-width: 991px) and (min-width: 768px) {
      margin-left: 1rem;
    }
  }

  @media only screen and (max-width: 991px) and (min-width: 768px) {
    .ui[class*='tablet reversed'].grid {
      flex-direction: column-reverse;
    }
  }
`;var Bs=Object(L.b)((({className:e})=>{const{history:t}=zo();return Object($.jsx)(ia.a,{className:e,stackable:!0,reversed:"mobile tablet",children:Object($.jsxs)(ia.a.Column,{children:[Object($.jsx)("h1",{children:"You broke the chain"}),Object($.jsx)("br",{}),Object($.jsx)("br",{}),Object($.jsx)($.Fragment,{children:Object($.jsx)("img",{alt:"broken chain",width:100,src:"/broken-chain.png"})}),Object($.jsx)("br",{}),Object($.jsx)("br",{}),Object($.jsx)("h2",{children:"404 Not found!"}),Object($.jsx)("br",{}),Object($.jsx)("br",{}),Object($.jsx)($.Fragment,{children:Object($.jsx)(nn,{primary:!0,onClick:()=>{t.push("/")},children:"Go Back to Home!"})})]})})}))`
  text-align: center;
`;var Gs=Object(L.b)((({className:e})=>{const t=Object(n.useContext)(D),[o,a]=Object(n.useState)(!1),[s,r]=Object(n.useState)(!1),[i,d]=Object(n.useState)(!1),[l,m]=Object(n.useState)(!1),[u,h]=Object(n.useState)(!1),[p,{error:b}]=de.b(lo,g);var g;const{queueNotification:j}=Object(n.useContext)(dn),{notification:y,email_verified:f}=t;Object(n.useEffect)((()=>{r((null===y||void 0===y?void 0:y.postParticipated)||!1),d((null===y||void 0===y?void 0:y.postCreated)||!1),m((null===y||void 0===y?void 0:y.newProposal)||!1),h((null===y||void 0===y?void 0:y.ownProposal)||!1)}),[y]);return Object($.jsxs)(ia.a,{children:[Object($.jsxs)(ia.a.Column,{className:e,mobile:16,tablet:12,computer:12,largeScreen:10,widescreen:10,children:[Object($.jsx)("h2",{children:"Notification Preferences"}),!f&&Object($.jsxs)("div",{className:"errorText",children:["Please set and verify an email ",Object($.jsx)(c.b,{to:"/settings",children:"in your settings"})," to receive be able to set notifications."]}),Object($.jsxs)(ga,{standalone:!1,children:[Object($.jsx)(ga.Group,{children:Object($.jsx)(ga.Field,{children:Object($.jsx)(za.a,{label:"Subscribe to post you participate in",disabled:!f,checked:!!f&&s,toggle:!0,onChange:(e,t)=>{r(t.checked||!1),a(!0)}})})}),Object($.jsx)(ga.Group,{children:Object($.jsx)(ga.Field,{children:Object($.jsx)(za.a,{label:"Subscribe to post you created",disabled:!f,checked:!!f&&i,toggle:!0,onChange:(e,t)=>{d(t.checked||!1),a(!0)}})})}),Object($.jsx)(ga.Group,{children:Object($.jsx)(ga.Field,{children:Object($.jsx)(za.a,{label:"Notified for new proposal in council/motion/referendum",disabled:!f,checked:!!f&&l,toggle:!0,onChange:(e,t)=>{m(t.checked||!1),a(!0)}})})}),Object($.jsx)(ga.Group,{children:Object($.jsx)(ga.Field,{children:Object($.jsx)(za.a,{label:"Notified for your own proposals",disabled:!f,checked:!!f&&u,toggle:!0,onChange:(e,t)=>{h(t.checked||!1),a(!0)}})})}),o?Object($.jsx)(ga.Group,{children:Object($.jsxs)(ga.Field,{width:6,children:[(null===b||void 0===b?void 0:b.message)&&Object($.jsx)(Zn,{text:b.message}),Object($.jsx)(nn,{secondary:!0,onClick:()=>{p({variables:{newProposal:l,ownProposal:u,postCreated:i,postParticipated:s}}).then((({data:e})=>{var o;e&&e.changeNotificationPreference&&e.changeNotificationPreference.message&&(j({header:"Success!",message:e.changeNotificationPreference.message,status:hn.SUCCESS}),a(!1)),(null===e||void 0===e||null===(o=e.changeNotificationPreference)||void 0===o?void 0:o.token)&&C(e.changeNotificationPreference.token,t)})).catch((e=>{j({header:"Failed!",message:e.message,status:hn.ERROR}),console.error("change name error",e)}))},type:"submit",children:"Save"})]})}):null]})]}),Object($.jsx)(ia.a.Column,{only:"computer",computer:4,largeScreen:6,widescreen:6})]})}))`
  background-color: white;
  padding: 2rem 3rem 3rem 3rem !important;
  border-radius: 0.3rem;
  box-shadow: ${({theme:e})=>e.colors.box_shadow_card};

  .button {
    margin-top: 0.2rem;
  }

  .ui.form:not(.unstackable) .fields:not(.unstackable) > .ten.wide.field {
    @media only screen and (max-width: 767px) {
      width: 70% !important;
    }

    @media only screen and (max-width: 576px) {
      width: 60% !important;
    }
  }

  .ui.form:not(.unstackable) .fields:not(.unstackable) > .six.wide.field {
    @media only screen and (max-width: 767px) {
      width: 30% !important;
    }

    @media only screen and (max-width: 576px) {
      width: 40% !important;
    }
  }

  @media only screen and (max-width: 576px) {
    padding: 2rem !important;

    .ui.form {
      margin-top: 0rem;
      padding: 0rem;
    }

    button {
      padding: 0.8rem 1rem;
      border-radius: 0.5rem;
    }
  }

  .errorText {
    color: ${({theme:e})=>e.colors.red_secondary};
    a {
      color: ${({theme:e})=>e.colors.grey_primary};
      text-decoration: underline;
      &:hover {
        color: ${({theme:e})=>e.colors.grey_secondary};
        text-decoration: none;
      }
    }
  }
`;var Vs=({className:e,limit:t})=>{const{api:o,apiReady:a}=Object(n.useContext)(Mo),[s,r]=Object(n.useState)(null),[i,c]=Object(n.useState)(null);return Object(n.useEffect)((()=>{if(!o||!a)return;let e;return o.derive.democracy.referendumsActive((e=>{r(e.slice(0,t))})).then((t=>{e=t})).catch((e=>{console.error(e),c(e)})),()=>e&&e()}),[o,a,t]),(null===i||void 0===i?void 0:i.message)?Object($.jsx)(Zn,{text:i.message}):s?Object($.jsx)(As,{className:e,data:s}):Object($.jsx)(oa,{})};var Hs=Object(L.b)((({className:e})=>Object($.jsxs)("div",{className:e,children:[Object($.jsx)("h1",{children:"Latest on-chain activity"}),Object($.jsxs)(ia.a,{stackable:!0,reversed:"mobile tablet",children:[Object($.jsxs)(ia.a.Column,{mobile:16,tablet:16,computer:10,children:[Object($.jsx)("h3",{children:"Referenda"}),Object($.jsx)(Vs,{className:"referendaContainer",limit:10}),Object($.jsxs)(c.b,{className:"full-listing-link",to:"referenda",children:[Object($.jsx)(J.a,{name:"arrow right"}),"See all referenda"]})]}),Object($.jsx)(ia.a.Column,{mobile:16,tablet:16,computer:6,children:Object($.jsx)(_n,{dismissable:!0,content:"This is the place to discuss on-chain proposals, referenda, motions, tips, bounties, treasury proposals and technical committee proposals. On-chain posts are automatically generated as soon as they are created on the chain. Only the proposer is able to edit them.",name:"onchainInfo",title:"About on-chain posts"})})]})]})))`
  .referendaContainer,
  .proposalContainer,
  .motionContainer,
  .treasuryContainer,
  .tipContainer,
  .bountyContainer,
  .techCommitteeProposalsContainer {
    margin-bottom: 2rem;
  }

  h1 {
    @media only screen and (max-width: 576px) {
      margin: 3rem 1rem 1rem 1rem;
    }

    @media only screen and (max-width: 768px) and (min-width: 576px) {
      margin-left: 1rem;
    }

    @media only screen and (max-width: 991px) and (min-width: 768px) {
      margin-left: 1rem;
    }
  }

  @media only screen and (max-width: 991px) and (min-width: 768px) {
    .ui[class*='tablet reversed'].grid {
      flex-direction: column-reverse;
    }
  }

  .full-listing-link {
    display: flex;
    color: ${({theme:e})=>e.colors.black_text};
    font-weight: 500;
    margin-bottom: 4rem;
  }
`,Ys=o(103),Ks=o(1306),Js=o(639),Qs="Did you forget to add content?",Xs="You need to provide a valid email!",Zs="You need to specify a password with at least 6 characters!",er="Did you forget to add a title?",tr="Username cannot be larger than 30 characters.",or="Username should be at least 3 characters long.",nr="Invalid character found, you can use letters, numbers and the following characters ._-",ar="Username is mandatory.";var sr=Object(L.b)((({className:e,errorContent:t,height:o,onChange:n,value:a})=>Object($.jsxs)("div",{className:e,children:[Object($.jsx)(ga.Group,{className:t?"error":"",children:Object($.jsx)(Js.a,{className:t?"error":"",height:o,name:"content",onChange:n,value:a||""})}),t&&Object($.jsx)("div",{className:"errorText",children:Qs})]})))`
  .fields {
    padding: 0;

    &.error {
      margin-bottom: 0 !important;
    }
  }

  .errorText {
    color: ${({theme:e})=>e.colors.red_secondary};
    margin-bottom: 1rem;
    padding-left: 0.5rem;
  }

  textarea {
    font-size: 1.4rem;
  }

  .react-mde.error > .mde-textarea-wrapper > textarea {
    border-style: solid !important;
    border-width: 1px !important;
    border-color: ${({theme:e})=>e.colors.red_secondary} !important;
  }

  .container {
    max-width: 100%;
    min-width: 100%;
    padding: 0 0.5rem;
  }
`;var rr=Object(L.b)((({className:e,errorTitle:t,onChange:o,value:n=""})=>Object($.jsx)("div",{className:e,children:Object($.jsx)(ga.Group,{children:Object($.jsxs)(ga.Field,{width:16,children:[Object($.jsx)("label",{children:"Title"}),Object($.jsx)("input",{className:t?"error title":"title",name:"title",onChange:o,placeholder:"Your title...",type:"text",value:n}),t&&Object($.jsx)("span",{className:"errorText",children:er})]})})})))`
  .fields {
    padding: 0;
  }

  input.title {
    font-size: 1.4rem !important;
  }

  input.error {
    border-color: ${({theme:e})=>e.colors.red_secondary} !important;
  }

  .errorText {
    color: ${({theme:e})=>e.colors.red_secondary};
  }
`,ir=o(1321),cr=function(e){var t;const o=O(),n=null===_||void 0===_||null===(t=_[o])||void 0===t?void 0:t.ss58Format;if(!o||void 0===n)return null;try{return Object(ir.a)(e,n)}catch(a){return console.error("getEncodedAddress error",a),null}};const dr=()=>Object($.jsx)("span",{"aria-label":"council member",className:"councilMember",role:"img",children:"\ud83d\udc51"}),lr=O();var mr=Object(L.b)((({className:e})=>{var t,o,a,s,r,i,c,d,l,m;const u=zo(),h=u.query.address,p=(b={variables:{address:h,network:lr}},de.c(mo,b));var b;const g=null===p||void 0===p||null===(t=p.data)||void 0===t||null===(o=t.about)||void 0===o?void 0:o.description,j=null===p||void 0===p||null===(a=p.data)||void 0===a||null===(s=a.about)||void 0===s?void 0:s.title,{queueNotification:y}=Object(n.useContext)(dn),{api:f,apiReady:x}=Object(n.useContext)(Mo),[_,O]=Object(n.useState)(null),[v,w]=Object(n.useState)(void 0),[S,C]=Object(n.useState)(j||""),[k,A]=Object(n.useState)(g||""),[N,E]=Object(n.useState)(!1),[D,I]=Object(n.useState)(!1),{control:P,errors:T,handleSubmit:R,setValue:F}=Object(Ys.b)(),q=`This page belongs to address (${h}). Only this user can edit this description and the title. If you own this address, edit this page and tell us more about yourself.`,[L,{loading:z,error:U}]=function(e){return de.b(uo,e)}();Object(n.useEffect)((()=>{(async()=>{if(0===(await Object(la.b)(ma)).length)return;const e=await Object(la.a)();0!==e.length&&e.forEach((e=>{cr(e.address)===h&&E(!0)}))})()}),[h]),Object(n.useEffect)((()=>{if(!f)return;if(!x)return;let e;return f.derive.accounts.info(h,(e=>{O(e.identity)})).then((t=>{e=t})).catch((e=>console.error(e))),()=>e&&e()}),[h,f,x]),Object(n.useEffect)((()=>{if(!f)return;if(!x)return;if(!h)return;let e;return f.derive.accounts.flags(h,(e=>{w(e)})).then((t=>{e=t})).catch((e=>console.error(e))),()=>e&&e()}),[h,f,x]);const W=_?_.judgements.filter((([,e])=>!e.isFeePaid)):[],M=W.map((([,e])=>e.toString())).join(", "),B=W.some((([,e])=>e.isKnownGood||e.isReasonable)),G=W.some((([,e])=>e.isErroneous||e.isLowQuality)),V=B?"green":G?"brown":"grey",H=B?"check circle":"minus circle";return Object(n.useEffect)((()=>{D&&(F("description",g),F("title",j))}),[g,D,F,j]),x?Object($.jsxs)(ia.a,{className:e,children:[Object($.jsx)(ia.a.Column,{mobile:16,tablet:16,computer:10,largeScreen:10,widescreen:10,children:D?Object($.jsxs)(ga,{className:e,children:[Object($.jsx)("h3",{children:"Update Profile"}),Object($.jsx)(Ys.a,{as:Object($.jsx)(rr,{errorTitle:T.title}),control:P,name:"title",onChange:e=>(C(e[0].currentTarget.value),e[0].currentTarget.value),rules:{required:!0}}),Object($.jsx)(Ys.a,{as:Object($.jsx)(sr,{errorContent:T.content}),control:P,name:"description",onChange:e=>(A(e[0]),e[0].length?e[0]:null),rules:{required:!0}}),Object($.jsx)("div",{className:"mainButtonContainer",children:Object($.jsx)(nn,{primary:!0,onClick:R((async()=>{const e=await Object(la.b)(ma);if(!e||!e.length)return void y({header:"Failed",message:"No web 3 account integration could be found. To be able to vote on-chain, visit this page on a computer with polkadot-js entension.",status:hn.ERROR});const t=await Object(la.a)();if(0===t.length)return void y({header:"Failed",message:"You need at least one account in Polkadot-js extenstion to login.",status:hn.ERROR});let o;for(let r=0;r<t.length;r++)cr(t[r].address)===h&&(o=await Object(la.d)(t[r].meta.source));if(!o)return void y({header:"Failed",message:"Address not available.",status:hn.ERROR});const n=o&&o.signer&&o.signer.signRaw;if(!n)return void y({header:"Failed",message:"Signer not available.",status:hn.ERROR});const a=`<Bytes>about::network:${lr}|address:${h}|title:${S||""}|description:${k||""}|image:</Bytes>`;console.log(a);const{signature:s}=await n({address:h,data:Object(Fa.a)(a),type:"bytes"});L({variables:{address:h,description:k||"",image:"",network:lr,signature:s,title:S||""}}).then((({data:e})=>{var t;y({header:"SUCCESS.",message:(null===e||void 0===e||null===(t=e.changeAbout)||void 0===t?void 0:t.message)||"Profile Updated.",status:hn.SUCCESS}),I(!1),null===p||void 0===p||p.refetch()})).catch((e=>console.error(e)))})),disabled:z,type:"submit",children:z?Object($.jsxs)($.Fragment,{children:[Object($.jsx)(J.a,{name:"spinner"}),"Creating"]}):"Update"})}),(null===U||void 0===U?void 0:U.message)&&Object($.jsx)(Zn,{text:U.message})]}):Object($.jsxs)("div",{className:"profile_content",children:[(null===p||void 0===p?void 0:p.error)?Object($.jsx)(Zn,{className:"info",text:null===p||void 0===p||null===(r=p.error)||void 0===r?void 0:r.message}):null,(null===p||void 0===p?void 0:p.loading)?Object($.jsx)(oa,{text:"Fetching Profile"}):Object($.jsxs)($.Fragment,{children:[Object($.jsx)("h2",{children:(null===p||void 0===p||null===(i=p.data)||void 0===i||null===(c=i.about)||void 0===c?void 0:c.title)||"Title not edited"}),Object($.jsx)(Ts.a,{md:(null===p||void 0===p||null===(d=p.data)||void 0===d||null===(l=d.about)||void 0===l?void 0:l.description)||q}),N?Object($.jsx)("div",{className:"mainButtonContainer",children:Object($.jsx)(nn,{primary:!0,onClick:()=>{I(!0)},disabled:z,type:"submit",children:z?Object($.jsxs)($.Fragment,{children:[Object($.jsx)(J.a,{name:"spinner"}),"Creating"]}):"Update"})}):null]})]})}),Object($.jsx)(ia.a.Column,{mobile:16,tablet:16,computer:6,largeScreen:6,widescreen:6,children:Object($.jsxs)("div",{className:"info-box",children:[Object($.jsx)("h2",{children:u.query.username}),h?Object($.jsxs)($.Fragment,{children:[Object($.jsx)("div",{className:"address-container",children:Object($.jsx)(Tn,{address:h})}),Object($.jsx)(Za,{address:h,className:"balance"}),_&&Object($.jsx)(Ks.a,{basic:"very",celled:!0,collapsing:!0,children:Object($.jsxs)(Ks.a.Body,{children:[(null===_||void 0===_?void 0:_.legal)&&Object($.jsxs)(Ks.a.Row,{children:[Object($.jsx)(Ks.a.Cell,{className:"desc",children:"Legal:"}),Object($.jsx)(Ks.a.Cell,{children:_.legal})]}),(null===_||void 0===_?void 0:_.email)&&Object($.jsxs)(Ks.a.Row,{children:[Object($.jsx)(Ks.a.Cell,{className:"desc",children:"Email:"}),Object($.jsx)(Ks.a.Cell,{children:Object($.jsx)("a",{href:`mailto:${_.email}`,children:_.email})})]}),(null===_||void 0===_||null===(m=_.judgements)||void 0===m?void 0:m.length)>0&&Object($.jsxs)(Ks.a.Row,{children:[Object($.jsx)(Ks.a.Cell,{className:"desc",children:"Judgements:"}),Object($.jsxs)(Ks.a.Cell,{className:"judgments",children:[Object($.jsx)(J.a,{name:H,color:V})," ",M]})]}),(null===_||void 0===_?void 0:_.pgp)&&Object($.jsxs)(Ks.a.Row,{children:[Object($.jsx)(Ks.a.Cell,{className:"desc",children:"PGP:"}),Object($.jsx)(Ks.a.Cell,{children:_.pgp})]}),(null===_||void 0===_?void 0:_.riot)&&Object($.jsxs)(Ks.a.Row,{children:[Object($.jsx)(Ks.a.Cell,{className:"desc",children:"Riot:"}),Object($.jsx)(Ks.a.Cell,{children:_.riot})]}),(null===_||void 0===_?void 0:_.twitter)&&Object($.jsxs)(Ks.a.Row,{children:[Object($.jsx)(Ks.a.Cell,{className:"desc",children:"Twitter:"}),Object($.jsx)(Ks.a.Cell,{children:Object($.jsx)("a",{href:`https://twitter.com/${_.twitter.substring(1)}`,children:_.twitter})})]}),(null===_||void 0===_?void 0:_.web)&&Object($.jsxs)(Ks.a.Row,{children:[Object($.jsx)(Ks.a.Cell,{className:"desc",children:"Web:"}),Object($.jsx)(Ks.a.Cell,{children:_.web})]}),(null===v||void 0===v?void 0:v.isCouncil)&&Object($.jsxs)(Ks.a.Row,{children:[Object($.jsx)(Ks.a.Cell,{className:"desc",children:"Roles:"}),Object($.jsxs)(Ks.a.Cell,{children:["Council member ",Object($.jsx)(dr,{})]})]})]})})]}):Object($.jsx)("p",{children:"No address attached to this account"})]})})]}):Object($.jsx)(oa,{text:"Initializing Connection..."})}))`
  .profile_content {
    background-color: white;
    border-radius: 3px;
    box-shadow: ${({theme:e})=>e.colors.box_shadow_card};
    padding: 3rem 3rem 0.8rem 3rem;
    margin-bottom: 1rem;
  }

  .info-box {
    background-color: white;
    border-radius: 3px;
    box-shadow: ${({theme:e})=>e.colors.box_shadow_card};
    width: calc(100% - 60px);
    word-break: break-word;
    padding: 10px;
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;

    @media only screen and (max-width: 576px) {
      width: 100%;
      border-radius: 0px;
    }
  }

  .address-container {
    margin: 10px 0;
  }

  .desc {
    font-weight: bold;
  }

  .mainButtonContainer {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 3rem;
  }
`,ur=()=>{const{query:e}=zo(),t=e.id,o=Number(t)||0,{data:n,error:a,refetch:s}=(r={variables:{id:o}},de.c(ho,r));var r;return(null===a||void 0===a?void 0:a.message)?Object($.jsx)(Zn,{text:a.message}):n?Object($.jsx)(bs,{data:n,isProposal:!0,refetch:s}):Object($.jsx)(oa,{})};var hr=Object(L.b)((({className:e,data:t})=>{const o=!t.posts||!t.posts.length,n=t.posts.some((e=>{var t;return!!(null===(t=e.onchain_link)||void 0===t?void 0:t.onchain_proposal.length)}));return o||!n?Object($.jsx)(vn,{className:e,text:"There are currently no active proposals."}):Object($.jsx)("ul",{className:`${e} proposals__list`,children:t.posts.map((e=>{var t,o,n,a,s,r,i,d;const l=null===(t=e.onchain_link)||void 0===t?void 0:t.onchain_proposal_id;return!!(null===e||void 0===e||null===(o=e.author)||void 0===o?void 0:o.username)&&!!(null===(n=e.onchain_link)||void 0===n?void 0:n.onchain_proposal.length)&&Object($.jsx)("li",{className:"proposals__item",children:Object($.jsx)(c.b,{to:`/proposal/${l}`,children:Object($.jsx)(Hn,{address:e.onchain_link.proposer_address,comments:(null===(a=e.comments_aggregate.aggregate)||void 0===a?void 0:a.count)?e.comments_aggregate.aggregate.count.toString():"no",method:null===(s=e.onchain_link.onchain_proposal[0])||void 0===s||null===(r=s.preimage)||void 0===r?void 0:r.method,onchainId:l,status:null===(i=e.onchain_link.onchain_proposal[0])||void 0===i||null===(d=i.proposalStatus)||void 0===d?void 0:d[0].status,title:e.title,topic:e.topic.name})})},e.id)}))})}))`
  margin-block-start: 0;
  margin-block-end: 0;

  li {
    list-style-type: none;
  }

  .proposals__item {
    margin: 0 0 1rem 0;
    a:hover {
      text-decoration: none;
    }
  }
`;var pr=({className:e,limit:t})=>{const[o,a]=Object(n.useState)(1),{data:s,error:r,loading:i,refetch:c}=(d={variables:{limit:t*o,postTopic:Kn,postType:Qn}},de.c(po,d));var d;Object(n.useEffect)((()=>{c()}),[c]);return(null===r||void 0===r?void 0:r.message)?Object($.jsx)(Zn,{text:r.message}):s?Object($.jsxs)($.Fragment,{children:[Object($.jsx)(hr,{className:e,data:s}),(i||s.posts.length===t*o)&&Object($.jsx)(aa,{onClick:()=>{a(o+1)},loading:i})]}):Object($.jsx)(oa,{})};var br=Object(L.b)((({className:e})=>Object($.jsxs)("div",{className:e,children:[Object($.jsx)("h1",{children:"On-chain proposals"}),Object($.jsxs)(xn.a,{stackable:!0,reversed:"mobile tablet",children:[Object($.jsx)(xn.a.Column,{mobile:16,tablet:16,computer:10,children:Object($.jsx)(pr,{limit:25})}),Object($.jsx)(xn.a.Column,{mobile:16,tablet:16,computer:6,children:Object($.jsx)(_n,{dismissable:!0,content:"This is the place to discuss on-chain proposals. On-chain posts are automatically generated as soon as they are created on the chain. Only the proposer is able to edit them.",name:"onchainInfo",title:"About On-chain Proposals"})})]})]})))`
  h1 {
    @media only screen and (max-width: 576px) {
      margin: 3rem 1rem 1rem 1rem;
    }

    @media only screen and (max-width: 768px) and (min-width: 576px) {
      margin-left: 1rem;
    }

    @media only screen and (max-width: 991px) and (min-width: 768px) {
      margin-left: 1rem;
    }
  }

  @media only screen and (max-width: 991px) and (min-width: 768px) {
    .ui[class*='tablet reversed'].grid {
      flex-direction: column-reverse;
    }
  }
`;var gr=({className:e,limit:t})=>{const{api:o,apiReady:a}=Object(n.useContext)(Mo),[s,r]=Object(n.useState)(1),[i,c]=Object(n.useState)(!1),[d,l]=Object(n.useState)(null),[m,u]=Object(n.useState)(null);Object(n.useEffect)((()=>{if(!o||!a)return;let e;return o.derive.democracy.referendumsActive((e=>{l(e.slice(0,t*s)),c(!1)})).then((t=>{e=t})).catch((e=>{console.error(e),u(e)})),()=>e&&e()}),[o,a,t,s]);return(null===m||void 0===m?void 0:m.message)?Object($.jsx)(Zn,{text:m.message}):d?Object($.jsxs)($.Fragment,{children:[Object($.jsx)(As,{className:e,data:d}),(i||d.length===t*s)&&Object($.jsx)(aa,{onClick:()=>{c(!0),r(s+1)},loading:i})]}):Object($.jsx)(oa,{})};var jr=Object(L.b)((({className:e})=>Object($.jsxs)("div",{className:e,children:[Object($.jsx)("h1",{children:"On-chain referenda"}),Object($.jsxs)(xn.a,{stackable:!0,reversed:"mobile tablet",children:[Object($.jsx)(xn.a.Column,{mobile:16,tablet:16,computer:10,children:Object($.jsx)(gr,{limit:25})}),Object($.jsx)(xn.a.Column,{mobile:16,tablet:16,computer:6,children:Object($.jsx)(_n,{dismissable:!0,content:"This is the place to discuss on-chain referenda. On-chain posts are automatically generated as soon as they are created on the chain. Only the proposer is able to edit them.",name:"onchainInfo",title:"About On-chain Referenda"})})]})]})))`
  h1 {
    @media only screen and (max-width: 576px) {
      margin: 3rem 1rem 1rem 1rem;
    }

    @media only screen and (max-width: 768px) and (min-width: 576px) {
      margin-left: 1rem;
    }

    @media only screen and (max-width: 991px) and (min-width: 768px) {
      margin-left: 1rem;
    }
  }

  @media only screen and (max-width: 991px) and (min-width: 768px) {
    .ui[class*='tablet reversed'].grid {
      flex-direction: column-reverse;
    }
  }
`;var yr=()=>{const{query:e}=zo(),t=e.id,o=Number(t)||0,{api:a,apiReady:s}=Object(n.useContext)(Mo),[r,i]=Object(n.useState)(null),[c,d]=Object(n.useState)(null);return console.debug(c),Object(n.useEffect)((()=>{a&&s&&a.derive.democracy.referendumsInfo([new Cn.a(o)]).then((e=>{d(e[0])})).catch((e=>{console.error(e),i(e)}))}),[a,s,o]),(null===r||void 0===r?void 0:r.message)?Object($.jsx)(Zn,{text:r.message}):c?Object($.jsx)(bs,{data:c,isReferendum:!0,refetch:void 0}):Object($.jsx)(oa,{})};var fr=Object(L.b)((({className:e})=>{const[t,o]=Object(n.useState)(""),{history:a}=zo(),{setModal:s}=Object(n.useContext)(en),[r,{loading:i,error:c}]=de.b(bo,d);var d;return Object($.jsxs)(ia.a,{className:e,children:[Object($.jsx)(ia.a.Column,{only:"tablet computer",tablet:2,computer:4,largeScreen:5,widescreen:5}),Object($.jsx)(ia.a.Column,{mobile:16,tablet:12,computer:8,largeScreen:6,widescreen:6,children:Object($.jsxs)(ga,{children:[Object($.jsx)("h3",{children:"Request Password Reset"}),Object($.jsx)(ga.Group,{children:Object($.jsxs)(ga.Field,{width:16,children:[Object($.jsx)("label",{children:"Email"}),Object($.jsx)("input",{onChange:e=>o(e.currentTarget.value),placeholder:"email@example.com",type:"text"})]})}),Object($.jsxs)("div",{className:"mainButtonContainer",children:[Object($.jsx)(nn,{primary:!0,disabled:i,onClick:e=>{e.preventDefault(),e.stopPropagation(),t&&r({variables:{email:t}}).then((({data:e})=>{e&&e.requestResetPassword&&e.requestResetPassword.message&&(a.push("/"),s({content:e.requestResetPassword.message,title:"Check your emails"}))})).catch((e=>{console.error("Request password reset error",e)}))},type:"submit",children:"Request reset"}),(null===c||void 0===c?void 0:c.message)&&Object($.jsx)(Zn,{text:c.message})]})]})}),Object($.jsx)(ia.a.Column,{only:"tablet computer",tablet:2,computer:4,largeScreen:5,widescreen:5})]})}))`
  .mainButtonContainer {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`,xr=o(1315);var _r=Object(L.b)((({className:e})=>{const t=zo(),{token:o,userId:a}=t.query,[s,r]=Object(n.useState)(""),{queueNotification:i}=Object(n.useContext)(dn),[c,{loading:d,error:l}]=(m={variables:{newPassword:s,token:o,userId:Number(a)}},de.b(go,m));var m;return Object($.jsxs)(ia.a,{className:e,children:[Object($.jsx)(ia.a.Column,{only:"tablet computer",tablet:2,computer:4,largeScreen:5,widescreen:6}),Object($.jsxs)(ia.a.Column,{mobile:16,tablet:12,computer:8,largeScreen:6,widescreen:4,children:[o&&a?null:Object($.jsxs)(xr.a,{as:"h2",icon:!0,children:[Object($.jsx)(J.a,{name:"ambulance"}),"Password reset token and/or userId missing"]}),o&&a&&Object($.jsxs)(ga,{children:[Object($.jsx)("h3",{children:"Set new password"}),Object($.jsx)(ga.Group,{children:Object($.jsxs)(ga.Field,{width:16,children:[Object($.jsx)("label",{children:"New password"}),Object($.jsx)("input",{onChange:e=>r(e.currentTarget.value),type:"password"})]})}),Object($.jsxs)("div",{className:"mainButtonContainer",children:[Object($.jsx)(nn,{primary:!0,disabled:d,onClick:e=>{e.preventDefault(),e.stopPropagation(),s&&c({variables:{newPassword:s,token:o,userId:Number(a)}}).then((({data:e})=>{e&&e.resetPassword&&e.resetPassword.message&&(i({header:"Success!",message:e.resetPassword.message,status:hn.SUCCESS}),t.history.push("/login"))})).catch((e=>{console.error("Reset password error",e)}))},type:"submit",children:"Set new password"}),(null===l||void 0===l?void 0:l.message)&&Object($.jsx)(Zn,{text:l.message})]})]})]}),Object($.jsx)(ia.a.Column,{only:"tablet computer",tablet:2,computer:4,largeScreen:5,widescreen:6})]})}))`
  .mainButtonContainer {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`,Or=o(640),vr=o.n(Or),wr=o(1310);var Sr=Object(L.b)((e=>Object($.jsx)(Rn.a,{...e})))`
  &.ui.label {
    font-size: xs;
    font-weight: 500;
    background-color: ${({theme:e})=>e.colors.grey_light};
    color: ${({theme:e})=>e.colors.black_text};
    border-radius: 0.2rem;
    letter-spacing: 0.05rem;
    padding: 0.4rem 0.6rem;
    margin: 0 0.4rem;
  }
`;var Cr=Object(L.b)((({className:e,defaultAddress:t,username:o})=>Object($.jsx)("div",{className:e,children:Object($.jsx)("div",{className:"header inline",children:t?Object($.jsx)(Tn,{address:t,displayInline:!0,popupContent:o}):Object($.jsx)("span",{children:o})})})))`
  color: ${({theme:e})=>e.colors.grey_primary};
  font-weight: 400;
  font-size: ${({theme:e})=>e.fontSizes.sm};
  display: inline-flex;

  span {
    color: ${({theme:e})=>e.colors.black_text};
    font-weight: 500;
    margin-right: 0.3rem;
    line-height: 1.3rem;
  }
`;var kr=Object(L.b)((({className:e,children:t,created_at:o,defaultAddress:n,text:a="posted",username:s,topic:r})=>Object($.jsxs)("div",{className:e,children:[Object($.jsx)(Cr,{defaultAddress:n,username:s}),a,"\xa0",r&&Object($.jsxs)($.Fragment,{children:["in ",Object($.jsx)(Sr,{children:r})," "]}),o&&z.utc(o,"YYYY-MM-DDTHH:mm:ss.SSS").fromNow(),t]})))`
  color: ${({theme:e})=>e.colors.grey_primary};
  font-weight: 400;
  font-size: ${({theme:e})=>e.fontSizes.sm};
  display: inline-flex;
  align-items: center;
`;const $r=L.b.div`
  padding: 2rem 3rem 1.5rem 3rem;
  background-color: white;
  border-radius: 3px;
  box-shadow: box_shadow_card;
  transition: box-shadow 0.1s ease-in-out;

  &.own-post {
    border-left-width: 4px;
    border-left-style: solid;
    border-left-color: pink_primary;
    padding: calc(2rem - 4px);
  }
  &:hover {
    box-shadow: box_shadow_card_hover;
    text-decoration: none;
  }
  h4 {
    font-family: font_default;
    font-size: md;
    margin-bottom: 0.3rem;
  }
  ul {
    color: ${({theme:e})=>e.colors.grey_secondary}
    font-size: xs;
    font-family: font_default;
    font-weight: 500;
    li {
      display: inline;
      margin-right: 1.5rem;
    }
  }

  @media only screen and (max-width: 576px) {
    & {
      padding: 1.2rem 1.5rem;
    }
  }
`;function Ar({created_at:e,defaultAddress:t,comments:o,title:a,username:s,last_update:r}){const i=Object(n.useContext)(D).username===s;return Object($.jsxs)($r,{className:i?"own-post":"",children:[Object($.jsx)("h4",{children:a}),Object($.jsx)(kr,{created_at:e,defaultAddress:t,username:s}),Object($.jsxs)("ul",{children:[Object($.jsxs)("li",{children:[Object($.jsx)(J.a,{name:"comment"})," ",o," comments"]}),"no"!==o&&r&&Object($.jsxs)("li",{children:[Object($.jsx)(J.a,{name:"reply"}),"commented ",z.utc(r,"YYYY-MM-DDTHH:mm:ss.SSS").fromNow()]})]})]})}const Nr="kusama"===O()?"kusama_default_address":"polkadot_default_address",Er=e=>{var t,o;return Object($.jsx)(Ar,{defaultAddress:e.author[Nr],comments:(null===(t=e.comments_aggregate.aggregate)||void 0===t?void 0:t.count)?e.comments_aggregate.aggregate.count.toString():"no",created_at:e.created_at,last_update:null===(o=e.last_update)||void 0===o?void 0:o.last_update,title:e.title||"No title",username:e.author.username})};var Dr=({className:e})=>{const t=Object(d.f)(),[o,a]=Object(n.useState)([]),[s,r]=Object(n.useState)(""),[i,{data:c,loading:m}]=de.a(jo,u);var u;return Object($.jsx)(l.a,{className:e,children:Object($.jsx)(ia.a,{stackable:!0,reversed:"mobile tablet",children:Object($.jsxs)(ia.a.Column,{mobile:16,tablet:16,computer:16,children:[Object($.jsx)("h3",{children:"Search"}),Object($.jsx)(wr.a,{fluid:!0,loading:m,onResultSelect:(e,{result:o})=>{t.push(`/post/${o.id}`)},onSearchChange:vr()(((e,{value:t})=>{r(t||""),t&&(i({variables:{term:`%${t}%`}}),c&&c.posts&&c.posts.length>0&&a(c.posts))}),500,{leading:!0}),results:o,value:s,resultRenderer:Er})]})})})};const Ir=O();var Pr=Object(L.b)((({className:e})=>{var t;const o=Object(n.useContext)(D),[a,s]=Object(n.useState)([]),[r,i]=Object(n.useState)(!1),[c]=de.b(_o,d);var d;const[l]=function(e){return de.b(Oo,e)}(),[m]=function(e){return de.b(vo,e)}(),[u]=function(e){return de.b(So,e)}(),{queueNotification:h}=Object(n.useContext)(dn),p=async()=>{if(0===(await Object(la.b)(ma)).length)return void i(!0);i(!1);const e=await Object(la.a)();s(e)},b=Object($.jsxs)($.Fragment,{children:[Object($.jsx)(J.a,{name:"chain"}),"Link"]}),g=Object($.jsxs)($.Fragment,{children:[Object($.jsx)(J.a,{name:"broken chain"}),"Unlink"]});if(r)return Object($.jsx)(ga,{className:e,standalone:!1,children:Object($.jsx)(ga.Group,{children:Object($.jsx)(ga.Field,{width:16,children:Object($.jsx)(Oa,{})})})});const j=({address:e})=>{const t=({withClickHandler:t=!1})=>Object($.jsx)(nn,{className:"social",disabled:!t,negative:!0,onClick:()=>t?(async e=>{try{var t,n,a,s;const c=await m({variables:{address:e}});var r,i;(null===(t=c.data)||void 0===t||null===(n=t.addressUnlink)||void 0===n?void 0:n.token)&&C(null===(r=c.data)||void 0===r||null===(i=r.addressUnlink)||void 0===i?void 0:i.token,o),h({header:"Success!",message:(null===c||void 0===c||null===(a=c.data)||void 0===a||null===(s=a.addressUnlink)||void 0===s?void 0:s.message)||"",status:hn.SUCCESS})}catch(c){console.error(c),h({header:"Failed!",message:Xn(c.message),status:hn.ERROR})}})(e):null,children:g});return o.defaultAddress===e?Object($.jsx)(kn.a,{trigger:Object($.jsx)("span",{children:Object($.jsx)(t,{})}),content:"You can't unlink your default address",hoverable:!0,position:"top center"}):Object($.jsx)(t,{withClickHandler:!0})},y=({address:e})=>o.defaultAddress!==e?Object($.jsx)("div",{className:"button-container default-button",children:Object($.jsx)(nn,{className:"social",onClick:()=>(async e=>{try{var t,n,a,s;const c=await u({variables:{address:e}});var r,i;(null===(t=c.data)||void 0===t||null===(n=t.setDefaultAddress)||void 0===n?void 0:n.token)&&C(null===(r=c.data)||void 0===r||null===(i=r.setDefaultAddress)||void 0===i?void 0:i.token,o),h({header:"Success!",message:(null===(a=c.data)||void 0===a||null===(s=a.setDefaultAddress)||void 0===s?void 0:s.message)||"",status:hn.SUCCESS})}catch(c){console.error(c),h({header:"Failed!",message:Xn(c.message),status:hn.ERROR})}})(e),children:"Set default"})}):Object($.jsxs)("div",{className:"default-label",children:[Object($.jsx)(J.a,{name:"check"})," Default address"]}),f=({accounts:e,showAccounts:t,title:n})=>Object($.jsxs)($.Fragment,{children:[Object($.jsx)(ga.Group,{children:Object($.jsxs)(ga.Field,{width:16,children:[Object($.jsx)("label",{className:"header",children:n}),Object($.jsx)("div",{className:"ui list",children:e.map((e=>{var t;const n=cr(e.address),a=n&&(null===(t=o.addresses)||void 0===t?void 0:t.includes(n));return n&&Object($.jsxs)(ia.a,{children:[Object($.jsx)(ia.a.Column,{width:7,children:Object($.jsx)("div",{className:"item",children:Object($.jsx)(Tn,{className:"item",address:n,extensionName:e.meta.name})})}),Object($.jsx)(ia.a.Column,{width:3,children:Object($.jsx)("div",{className:"button-container",children:a?Object($.jsx)(j,{address:n}):Object($.jsx)(nn,{className:"social",onClick:()=>(async(e,t)=>{try{var n,a,s,r,i;const u=await Object(la.d)(t.meta.source),p=u&&u.signer&&u.signer.signRaw;if(!p)return console.error("Signer not available");const b=await c({variables:{address:e,network:Ir}});if(!(null===b||void 0===b||null===(n=b.data)||void 0===n?void 0:n.addressLinkStart))return console.error("Address link start mutaion failed");const{signature:g}=await p({address:e,data:Object(Fa.a)(b.data.addressLinkStart.sign_message||""),type:"bytes"}),j=await l({variables:{address_id:b.data.addressLinkStart.address_id||0,signature:g}});var d,m;(null===(a=j.data)||void 0===a||null===(s=a.addressLinkConfirm)||void 0===s?void 0:s.token)&&C(null===(d=j.data)||void 0===d||null===(m=d.addressLinkConfirm)||void 0===m?void 0:m.token,o),h({header:"Success!",message:(null===j||void 0===j||null===(r=j.data)||void 0===r||null===(i=r.addressLinkConfirm)||void 0===i?void 0:i.message)||"",status:hn.SUCCESS})}catch(u){console.error(u),h({header:"Failed!",message:Xn(u.message),status:hn.ERROR})}})(n,e),children:b})})}),Object($.jsx)(ia.a.Column,{width:6,children:a&&Object($.jsx)(y,{address:n})})]},n)}))})]})}),t&&Object($.jsx)(ga.Group,{children:Object($.jsxs)(ga.Field,{width:16,children:[Object($.jsxs)("div",{className:"text-muted",children:["Associate your account with an on-chain address using the"," ",Object($.jsx)("a",{href:_a(),children:"Polkadot-js extension"}),"."]}),Object($.jsx)("div",{className:"link-button-container",children:Object($.jsx)(nn,{primary:!0,onClick:p,children:"Show available accounts"})})]})})]});return Object($.jsx)(ga,{className:e,standalone:!1,children:a.length?f({accounts:a,showAccounts:!1,title:"Available addresses"}):f({accounts:(null===o||void 0===o||null===(t=o.addresses)||void 0===t?void 0:t.sort().map((e=>({address:e,meta:{source:""}}))))||[],showAccounts:!0,title:"Linked addresses"})})}))`
  .button-container {
    display: flex;
    align-items: center;
    height: 100%;
  }

  .default-label {
    display: flex;
    align-items: center;
    height: 100%;
    font-weight: 500;
    color: ${({theme:e})=>e.colors.green_primary};
    padding: 0.7rem;
    line-height: 1.6rem;
  }
`;var Tr=()=>{const e=Object(n.useContext)(D),[t,o]=Object(n.useState)(!1),[a,s]=Object(n.useState)(""),{queueNotification:r}=Object(n.useContext)(dn),[i,{loading:c,error:d}]=de.b($o,l);var l;const[m]=ao(),{setUserDetailsContextState:u}=e,{history:h}=zo(),p=async()=>{try{await m()}catch(d){console.error(d)}k(u),h.push("/")},b=()=>{o(!1)};return Object($.jsxs)($.Fragment,{children:[t?Object($.jsx)(sn,{buttons:Object($.jsxs)(ga.Group,{children:[Object($.jsx)(nn,{content:"Delete My Account",disabled:c,icon:"check",primary:!0,onClick:e=>{e.preventDefault(),e.stopPropagation(),a&&i({variables:{password:a}}).then(p).catch((e=>{r({header:"Failed!",message:Xn(e.message),status:hn.ERROR}),console.error("Delete account error",e)}))}}),Object($.jsx)(nn,{content:"Close",icon:"close",secondary:!0,onClick:b})]}),centered:!0,dimmer:"inverted",open:!0,onClose:b,size:"tiny",title:"Are you absolutely sure?",children:Object($.jsxs)(ga,{standalone:!1,children:[Object($.jsx)(ga.Group,{children:Object($.jsxs)(ga.Field,{width:16,children:[Object($.jsx)("label",{children:"Unexpected bad things will happen if you don\u2019t read this!"}),Object($.jsx)("div",{className:"text-muted",children:"This action cannot be undone. This will permanently delete your account. Please type your password to confirm."})]})}),Object($.jsx)(ga.Group,{children:Object($.jsxs)(ga.Field,{width:16,children:[Object($.jsx)("label",{children:"Password"}),Object($.jsx)("input",{value:a||"",onChange:e=>s(e.currentTarget.value),placeholder:"Password",type:"password"})]})}),(null===d||void 0===d?void 0:d.message)&&Object($.jsx)(Zn,{text:d.message})]})}):null,Object($.jsx)(ga,{standalone:!1,id:"deleteAccount",children:Object($.jsx)(ga.Group,{children:Object($.jsxs)(ga.Field,{width:16,children:[Object($.jsx)("label",{children:"Delete Account"}),Object($.jsx)("div",{className:"text-muted",children:"Once you delete your account, there is no going back. Please be certain."}),Object($.jsx)(nn,{primary:!0,negative:!0,disabled:c,onClick:()=>{o(!0)},type:"submit",children:"Delete My Account"})]})})})]})};var Rr=Object(L.b)((e=>Object($.jsx)("button",{...e})))`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: inline;
  margin: 0;
  padding: 0;
  text-decoration: underline;
`;var Fr=Object(L.b)((({className:e})=>Object($.jsx)("div",{className:e})))`
  font-size: 0;
  height: 25px;
  line-height: 0;
`;const qr={maxLength:30,minLength:3,pattern:/^[A-Za-z0-9._-]*$/,required:!0},Lr={pattern:/^[A-Z0-9_'%=+!`#~$*?^{}&|-]+([.][A-Z0-9_'%=+!`#~$*?^{}&|-]+)*@[A-Z0-9-]+(\.[A-Z0-9-]+)+$/i},zr={minLength:6,required:!0};var Ur=Object(L.b)((({className:e})=>{const[t,o]=Object(n.useState)(!1),[a,s]=Object(n.useState)(""),r=Object(n.useContext)(D),[i,{loading:c,error:d}]=de.b(fo,l);var l;const[m]=function(e){return de.b(wo,e)}(),{queueNotification:u}=Object(n.useContext)(dn),{errors:h,handleSubmit:p,register:b}=Object(Ys.b)();Object(n.useEffect)((()=>{s(r.email)}),[r.email]);return Object($.jsxs)(ga,{className:e,standalone:!1,onSubmit:p((e=>{const{email:t,password:n}=e;(t||""===t)&&n&&i({variables:{email:t,password:n}}).then((({data:e})=>{e&&e.changeEmail&&(e.changeEmail.message&&u({header:"Success!",message:e.changeEmail.message,status:hn.SUCCESS}),e.changeEmail.token&&C(e.changeEmail.token,r),o(!1))})).catch((e=>{u({header:"Failed!",message:Xn(e.message),status:hn.ERROR}),console.error("Change email error:",e)}))})),children:[Object($.jsxs)(ga.Group,{children:[Object($.jsxs)(ga.Field,{width:10,children:[Object($.jsx)("label",{children:"Email"}),t?Object($.jsx)("input",{className:h.email?"error":"",defaultValue:a||"",name:"email",placeholder:"mail@example.com",type:"email",ref:b(Lr)}):Object($.jsx)("div",{className:"current-email "+(a?"":"text-muted"),children:a||"No email linked."}),h.email&&Object($.jsx)("span",{className:"errorText",children:Xs})]}),!t&&Object($.jsxs)(ga.Field,{width:6,children:[Object($.jsx)(Fr,{}),Object($.jsx)(nn,{secondary:!0,disabled:c,onClick:e=>{e.preventDefault(),o(!0)},children:"Edit"})]})]}),t&&Object($.jsxs)(ga.Group,{children:[Object($.jsxs)(ga.Field,{width:10,children:[Object($.jsx)("label",{children:"Password"}),Object($.jsx)("input",{className:h.password?"error":"",name:"password",placeholder:"password",type:"password",ref:b({minLength:6,required:!0})}),(null===d||void 0===d?void 0:d.message)&&Object($.jsx)(Zn,{text:d.message}),h.password&&Object($.jsx)("span",{className:"errorText",children:Zs})]}),Object($.jsxs)(ga.Field,{width:6,children:[Object($.jsx)(Fr,{}),Object($.jsx)(nn,{secondary:!0,disabled:c,type:"submit",children:"Change"})]})]}),Object($.jsx)(ga.Group,{children:a&&!r.email_verified&&Object($.jsxs)("div",{className:"warning-text",children:[Object($.jsx)(J.a,{name:"warning circle"}),"Your email is not verified."," ",Object($.jsx)(Rr,{className:"text-muted",onClick:e=>{e.preventDefault(),m().then((({data:e})=>{e&&e.resendVerifyEmailToken&&e.resendVerifyEmailToken.message&&u({header:"Success!",message:e.resendVerifyEmailToken.message,status:hn.SUCCESS})})).catch((e=>{u({header:"Failed!",message:Xn(e.message),status:hn.ERROR})}))},children:"Resend verification email."})]})})]})}))`
  .current-email {
    padding-top: 1rem;
  }
  .warning-text {
    margin-top: 0.5rem;
    color: ${({theme:e})=>e.colors.red_secondary};
  }

  input.error {
    border-color: ${({theme:e})=>e.colors.red_secondary} !important;
  }

  .errorText {
    color: ${({theme:e})=>e.colors.red_secondary};
  }
`;var Wr=()=>{const[e,t]=Object(n.useState)(""),[o,a]=Object(n.useState)(""),{queueNotification:s}=Object(n.useContext)(dn),[r,{loading:i,error:c}]=de.b(xo,d);var d;return Object($.jsxs)(ga,{standalone:!1,children:[Object($.jsx)(ga.Group,{children:Object($.jsxs)(ga.Field,{width:10,children:[Object($.jsx)("label",{children:"Current Password"}),Object($.jsx)("input",{value:e||"",onChange:e=>t(e.currentTarget.value),placeholder:"Current Password",type:"password"})]})}),Object($.jsxs)(ga.Group,{children:[Object($.jsxs)(ga.Field,{width:10,children:[Object($.jsx)("label",{children:"New Password"}),Object($.jsx)("input",{value:o||"",onChange:e=>a(e.currentTarget.value),placeholder:"New Password",type:"password"}),(null===c||void 0===c?void 0:c.message)&&Object($.jsx)(Zn,{text:c.message})]}),Object($.jsxs)(ga.Field,{width:6,children:[Object($.jsx)(Fr,{}),Object($.jsx)(nn,{secondary:!0,disabled:i,onClick:t=>{t.preventDefault(),t.stopPropagation(),e&&o&&r({variables:{newPassword:o,oldPassword:e}}).then((({data:e})=>{e&&e.changePassword&&e.changePassword.message&&s({header:"Success!",message:e.changePassword.message,status:hn.SUCCESS})})).catch((e=>{s({header:"Failed!",message:Xn(e.message),status:hn.ERROR}),console.error("change password error",e)}))},type:"submit",children:"Change"})]})]})]})};var Mr=Object(L.b)((({className:e})=>{var t,o,a,s;const[r,i]=Object(n.useState)(null),[c,d]=Object(n.useState)(!1),[l,m]=Object(n.useState)(""),[u,h]=Object(n.useState)(!0),[p,b]=Object(n.useState)(!1),[g,j]=Object(n.useState)(!1),[y,f]=Object(n.useState)(""),{errors:x,handleSubmit:_,register:O}=Object(Ys.b)(),[v]=de.b(Co,w);var w;const[S,{loading:k}]=function(e){return de.b(ko,e)}(),{queueNotification:A}=Object(n.useContext)(dn),N=Object(n.useContext)(D),E=async e=>{const{email:t,username:o,password:n}=e;if(!l)return console.error("Default address not set");try{var a,s,c;const e=await Object(la.d)(y),r=e&&e.signer&&e.signer.signRaw;if(!r)throw new Error("Signer not available");const{data:i}=await v({variables:{address:l}}),m=null===i||void 0===i||null===(a=i.setCredentialsStart)||void 0===a?void 0:a.signMessage;if(!m)throw new Error("Challenge message not found");const{signature:u}=await r({address:l,data:Object(Fa.a)(m),type:"bytes"}),{data:h}=await S({variables:{address:l,email:t,password:n,signature:u,username:o}});var d;if(null===h||void 0===h||null===(s=h.setCredentialsConfirm)||void 0===s?void 0:s.token)C(null===h||void 0===h||null===(d=h.setCredentialsConfirm)||void 0===d?void 0:d.token,N);(null===h||void 0===h||null===(c=h.setCredentialsConfirm)||void 0===c?void 0:c.message)&&A({header:"Success!",message:h.setCredentialsConfirm.message,status:hn.SUCCESS})}catch(r){console.error(r),i(r)}},I=()=>{d(!1)},P=Object($.jsxs)("div",{className:"card",children:[Object($.jsx)("div",{className:"text-muted",children:"Default address account not found in Polkadot-js extenstion."}),Object($.jsx)("div",{className:"text-muted",children:"Please reload this page after adding default address."})]});return Object($.jsxs)($.Fragment,{children:[c?Object($.jsx)(sn,{buttons:Object($.jsxs)(ga.Group,{children:[Object($.jsx)(nn,{content:"Send",disabled:k,primary:!0,onClick:_(E)}),Object($.jsx)(nn,{content:"Close",secondary:!0,onClick:I})]}),className:e,centered:!0,dimmer:"inverted",open:!0,onClose:I,size:"tiny",title:"Set email, username and password",children:Object($.jsxs)(ga,{standalone:!1,onSubmit:_(E),children:[p?Object($.jsx)("div",{className:"card",children:Object($.jsx)(Oa,{})}):null,g?P:null,u?Object($.jsx)(oa,{text:"Requesting Web3 accounts"}):l?Object($.jsx)($.Fragment,{children:Object($.jsx)(ga.Group,{children:Object($.jsxs)(ga.Field,{width:16,children:[Object($.jsx)("label",{children:"Default address"}),Object($.jsx)(Tn,{address:l})]})})}):P,l?Object($.jsxs)($.Fragment,{children:[Object($.jsx)(ga.Group,{children:Object($.jsxs)(ga.Field,{width:16,children:[Object($.jsx)("label",{children:"Username"}),Object($.jsx)("input",{className:x.username?"error":"",name:"username",placeholder:"John",ref:O(qr),type:"text"}),"maxLength"===(null===(t=x.username)||void 0===t?void 0:t.type)&&Object($.jsx)("span",{className:"errorText",children:tr}),"minLength"===(null===(o=x.username)||void 0===o?void 0:o.type)&&Object($.jsx)("span",{className:"errorText",children:or}),"pattern"===(null===(a=x.username)||void 0===a?void 0:a.type)&&Object($.jsx)("span",{className:"errorText",children:nr}),"required"===(null===(s=x.username)||void 0===s?void 0:s.type)&&Object($.jsx)("span",{className:"errorText",children:ar})]})}),Object($.jsx)(ga.Group,{children:Object($.jsxs)(ga.Field,{width:16,children:[Object($.jsxs)("label",{children:["Email",Object($.jsx)(Ca,{content:"Your email is used for password recovery or discussion notifications."})]}),Object($.jsx)("input",{className:x.email?"error":"",name:"email",placeholder:"john@doe.com",ref:O(Lr),type:"text"}),x.email&&Object($.jsx)("span",{className:"errorText",children:Xs})]})}),Object($.jsx)(ga.Group,{children:Object($.jsxs)(ga.Field,{width:16,children:[Object($.jsx)("label",{children:"Password"}),Object($.jsx)("input",{className:x.password?"error":"",name:"password",placeholder:"Password",ref:O(zr),type:"password"}),x.password&&Object($.jsx)("span",{className:"errorText",children:Zs})]})})]}):null,(null===r||void 0===r?void 0:r.message)&&Object($.jsx)(Zn,{text:r.message})]})}):null,Object($.jsx)(ga,{standalone:!1,children:Object($.jsx)(ga.Group,{children:Object($.jsx)(ga.Field,{children:Object($.jsx)(nn,{primary:!0,onClick:async e=>{e.preventDefault(),e.stopPropagation(),await(async()=>{if(0===(await Object(la.b)(ma)).length)return b(!0),void h(!1);b(!1);const e=await Object(la.a)();if(0===e.length)return j(!0),void h(!1);j(!1),e.forEach((e=>{e.address=cr(e.address)||e.address,e.address===N.defaultAddress&&(m(N.defaultAddress),f(e.meta.source))})),h(!1)})(),d(!0)},children:"Set an email, username and password"})})})})]})}))`
  input.error {
    border-style: solid !important;
    border-width: 1px !important;
    border-color: ${({theme:e})=>e.colors.red_secondary} !important;
  }

  .errorText {
    color: ${({theme:e})=>e.colors.red_secondary};
  }
`;var Br=Object(L.b)((({className:e})=>{var t,o,a,s;const[r,i]=Object(n.useState)(!1),[c,d]=Object(n.useState)(""),l=Object(n.useContext)(D),[m,{loading:u,error:h}]=de.b(yo,p);var p;const{queueNotification:b}=Object(n.useContext)(dn),{errors:g,handleSubmit:j,register:y}=Object(Ys.b)();Object(n.useEffect)((()=>{d(l.username)}),[l.username]);return Object($.jsxs)(ga,{standalone:!1,className:e,onSubmit:j((e=>{const{username:t,password:o}=e;t&&o&&m({variables:{password:o,username:t}}).then((({data:e})=>{var t,o;(null===e||void 0===e||null===(t=e.changeUsername)||void 0===t?void 0:t.message)&&b({header:"Success!",message:e.changeUsername.message,status:hn.SUCCESS}),(null===e||void 0===e||null===(o=e.changeUsername)||void 0===o?void 0:o.token)&&C(e.changeUsername.token,l),i(!1)})).catch((e=>{b({header:"Failed!",message:Xn(e.message),status:hn.ERROR}),console.error("change username error",e)}))})),children:[Object($.jsxs)(ga.Group,{children:[Object($.jsxs)(ga.Field,{width:10,children:[Object($.jsx)("label",{children:"Username"}),r?Object($.jsx)("input",{className:g.username?"error":"",defaultValue:c||"",name:"username",placeholder:"username",ref:y(qr),type:"text"}):Object($.jsx)("div",{className:"current-username",children:c}),"maxLength"===(null===(t=g.username)||void 0===t?void 0:t.type)&&Object($.jsx)("span",{className:"errorText",children:tr}),"minLength"===(null===(o=g.username)||void 0===o?void 0:o.type)&&Object($.jsx)("span",{className:"errorText",children:or}),"pattern"===(null===(a=g.username)||void 0===a?void 0:a.type)&&Object($.jsx)("span",{className:"errorText",children:nr}),"required"===(null===(s=g.username)||void 0===s?void 0:s.type)&&Object($.jsx)("span",{className:"errorText",children:ar})]}),!r&&Object($.jsxs)(ga.Field,{width:6,children:[Object($.jsx)(Fr,{}),Object($.jsx)(nn,{secondary:!0,disabled:u,onClick:e=>{e.preventDefault(),i(!0)},children:"Edit"})]})]}),r&&Object($.jsxs)(ga.Group,{children:[Object($.jsxs)(ga.Field,{width:10,children:[Object($.jsx)("label",{children:"Password"}),Object($.jsx)("input",{className:g.password?"error":"",name:"password",placeholder:"password",type:"password",ref:y({minLength:6,required:!0})}),(null===h||void 0===h?void 0:h.message)&&Object($.jsx)(Zn,{text:h.message}),g.password&&Object($.jsx)("span",{className:"errorText",children:Zs})]}),Object($.jsxs)(ga.Field,{width:6,children:[Object($.jsx)(Fr,{}),Object($.jsx)(nn,{secondary:!0,disabled:u,type:"submit",children:"Change"})]})]})]})}))`
  .button {
    display: flex;
    flex-direction: column;
    justify-content: left;
  }

  .current-username {
    padding-top: 1rem;
  }

  input.error {
    border-color: ${({theme:e})=>e.colors.red_secondary} !important;
  }

  .errorText {
    color: ${({theme:e})=>e.colors.red_secondary};
  }
`;var Gr=Object(L.b)((({className:e})=>{const{web3signup:t}=Object(n.useContext)(D);return Object($.jsxs)(ia.a,{children:[Object($.jsxs)(ia.a.Column,{className:e,mobile:16,tablet:12,computer:12,largeScreen:10,widescreen:10,children:[Object($.jsx)("h2",{children:"Settings"}),Object($.jsx)(_s.a,{}),t?Object($.jsx)(Mr,{}):Object($.jsx)(Br,{}),Object($.jsx)(_s.a,{}),t?null:Object($.jsxs)($.Fragment,{children:[Object($.jsx)(Ur,{}),Object($.jsx)(_s.a,{})]}),t?null:Object($.jsxs)($.Fragment,{children:[Object($.jsx)(Wr,{}),Object($.jsx)(_s.a,{})]}),Object($.jsx)(Pr,{}),Object($.jsx)(_s.a,{}),Object($.jsx)(Tr,{})]}),Object($.jsx)(ia.a.Column,{only:"computer",computer:4,largeScreen:6,widescreen:6})]})}))`
  background-color: white;
  padding: 2rem 3rem 3rem 3rem !important;
  border-radius: 0.3rem;
  box-shadow: box_shadow_card;

  .ui.divider,
  .ui.divider:not(.vertical):not(.horizontal) {
    margin: 3rem 0 2rem 0;
    border-top-style: solid;
    border-top-width: 1px;
    border-top-color: ${({theme:e})=>e.colors.grey_light};
    border-bottom: none;
  }

  .button {
    margin-top: 0.2rem;
  }

  .ui.form:not(.unstackable) .fields:not(.unstackable) > .ten.wide.field {
    @media only screen and (max-width: 767px) {
      width: 70% !important;
    }

    @media only screen and (max-width: 576px) {
      width: 60% !important;
    }
  }

  .ui.form:not(.unstackable) .fields:not(.unstackable) > .six.wide.field {
    @media only screen and (max-width: 767px) {
      width: 30% !important;
    }

    @media only screen and (max-width: 576px) {
      width: 40% !important;
    }
  }

  @media only screen and (max-width: 576px) {
    padding: 2rem !important;

    .ui.form {
      margin-top: 0rem;
      padding: 0rem;
    }

    button {
      padding: 0.8rem 1rem;
      border-radius: 0.5rem;
    }
  }
`,Vr=()=>{const{query:e}=zo(),t=e.id,o=Number(t)||0,{data:n,error:a,refetch:s}=(r={variables:{id:o}},de.c(Ao,r));var r;return(null===a||void 0===a?void 0:a.message)?Object($.jsx)(Zn,{text:a.message}):n?Object($.jsx)(bs,{data:n,isTechCommitteeProposal:!0,refetch:s}):Object($.jsx)(oa,{})};var Hr=Object(L.b)((({className:e,data:t})=>{const o=!t.posts||!t.posts.length,n=t.posts.some((e=>{var t;return!!(null===(t=e.onchain_link)||void 0===t?void 0:t.onchain_tech_committee_proposal.length)}));return o||!n?Object($.jsx)(vn,{className:e,text:"There are currently no active tech committee proposals."}):Object($.jsx)("ul",{className:`${e} motions__list`,children:t.posts.map((e=>{var t,o,n,a,s,r,i,d;const l=null===(t=e.onchain_link)||void 0===t?void 0:t.onchain_tech_committee_proposal_id;return!!(null===e||void 0===e||null===(o=e.author)||void 0===o?void 0:o.username)&&!!(null===(n=e.onchain_link)||void 0===n?void 0:n.onchain_tech_committee_proposal.length)&&Object($.jsx)("li",{className:"tech_committee_proposals_item",children:Object($.jsx)(c.b,{to:`/tech/${l}`,children:Object($.jsx)(Hn,{address:e.onchain_link.proposer_address,comments:(null===(a=e.comments_aggregate.aggregate)||void 0===a?void 0:a.count)?e.comments_aggregate.aggregate.count.toString():"no",method:null===(s=e.onchain_link.onchain_tech_committee_proposal[0])||void 0===s||null===(r=s.preimage)||void 0===r?void 0:r.method,onchainId:l,status:null===(i=e.onchain_link.onchain_tech_committee_proposal[0])||void 0===i||null===(d=i.status)||void 0===d?void 0:d[0].status,title:e.title,topic:e.topic.name})})},e.id)}))})}))`
  margin-block-start: 0;
  margin-block-end: 0;

  li {
    list-style-type: none;
  }

  .tech_committee_proposals_item {
    margin: 0 0 1rem 0;
    a:hover {
      text-decoration: none;
    }
  }
`;var Yr=({className:e,limit:t})=>{const[o,a]=Object(n.useState)(1),{data:s,error:r,loading:i,refetch:c}=(d={variables:{limit:t*o,postType:Qn}},de.c(No,d));var d;Object(n.useEffect)((()=>{c()}),[c]);return(null===r||void 0===r?void 0:r.message)?Object($.jsx)(Zn,{text:r.message}):s?Object($.jsxs)($.Fragment,{children:[Object($.jsx)(Hr,{className:e,data:s}),(i||s.posts.length===t*o)&&Object($.jsx)(aa,{onClick:()=>{a(o+1)},loading:i})]}):Object($.jsx)(oa,{})};var Kr=Object(L.b)((({className:e})=>Object($.jsxs)("div",{className:e,children:[Object($.jsx)("h1",{children:"On-chain Technical Committee Proposals"}),Object($.jsxs)(xn.a,{stackable:!0,reversed:"mobile tablet",children:[Object($.jsx)(xn.a.Column,{mobile:16,tablet:16,computer:10,children:Object($.jsx)(Yr,{limit:25})}),Object($.jsx)(xn.a.Column,{mobile:16,tablet:16,computer:6,children:Object($.jsx)(_n,{dismissable:!0,content:"This is the place to discuss on-chain technical committee proposals. On-chain posts are automatically generated as soon as they are created on the chain. Only the proposer is able to edit them.",name:"onchainInfo",title:"About On-chain Technical Committee Proposals"})})]})]})))`
  h1 {
    @media only screen and (max-width: 576px) {
      margin: 3rem 1rem 1rem 1rem;
    }

    @media only screen and (max-width: 768px) and (min-width: 576px) {
      margin-left: 1rem;
    }

    @media only screen and (max-width: 991px) and (min-width: 768px) {
      margin-left: 1rem;
    }
  }

  @media only screen and (max-width: 991px) and (min-width: 768px) {
    .ui[class*='tablet reversed'].grid {
      flex-direction: column-reverse;
    }
  }
`,Jr=()=>{const{query:e}=zo(),t=e.hash,{data:o,error:n,refetch:a}=(s={variables:{hash:t}},de.c(Eo,s));var s;return(null===n||void 0===n?void 0:n.message)?Object($.jsx)(Zn,{text:n.message}):o?Object($.jsx)(bs,{data:o,isTipProposal:!0,refetch:a}):Object($.jsx)(oa,{})};var Qr=Object(L.b)((({className:e,data:t})=>{const o=!t.posts||!t.posts.length,n=t.posts.some((e=>{var t;return!!(null===(t=e.onchain_link)||void 0===t?void 0:t.onchain_tip.length)}));return o||!n?Object($.jsx)(vn,{className:e,text:"There are currently no active tips."}):Object($.jsx)("ul",{className:`${e} proposals__list`,children:t.posts.map((e=>{var t,o,n,a,s,r,i,d,l;const m=null===(t=e.onchain_link)||void 0===t?void 0:t.onchain_tip_id;return!!(null===e||void 0===e||null===(o=e.author)||void 0===o?void 0:o.username)&&!!(null===e||void 0===e||null===(n=e.onchain_link)||void 0===n?void 0:n.onchain_tip.length)&&Object($.jsx)("li",{className:"proposals__item",children:Object($.jsx)(c.b,{to:`/tip/${m}`,children:Object($.jsx)(Hn,{address:e.onchain_link.proposer_address,comments:(null===(a=e.comments_aggregate.aggregate)||void 0===a?void 0:a.count)?e.comments_aggregate.aggregate.count.toString():"no",tipReason:null===(s=e.onchain_link.onchain_tip)||void 0===s||null===(r=s[0])||void 0===r?void 0:r.reason,onchainId:m,status:null===(i=e.onchain_link.onchain_tip)||void 0===i||null===(d=i[0])||void 0===d||null===(l=d.tipStatus)||void 0===l?void 0:l[0].status,title:e.title,topic:e.topic.name})})},e.id)}))})}))`
  margin-block-start: 0;
  margin-block-end: 0;

  li {
    list-style-type: none;
  }

  .proposals__item {
    margin: 0 0 1rem 0;
    a:hover {
      text-decoration: none;
    }
  }
`;var Xr=({className:e,limit:t})=>{const[o,a]=Object(n.useState)(1),{data:s,error:r,loading:i,refetch:c}=(d={variables:{limit:t*o,postTopic:Jn,postType:Qn}},de.c(Do,d));var d;Object(n.useEffect)((()=>{c()}),[c]);return(null===r||void 0===r?void 0:r.message)?Object($.jsx)(Zn,{text:r.message}):s?Object($.jsxs)($.Fragment,{children:[Object($.jsx)(Qr,{className:e,data:s}),(i||s.posts.length===t*o)&&Object($.jsx)(aa,{onClick:()=>{a(o+1)},loading:i})]}):Object($.jsx)(oa,{})};var Zr=Object(L.b)((({className:e})=>Object($.jsxs)("div",{className:e,children:[Object($.jsx)("h1",{children:"On-chain tip"}),Object($.jsxs)(xn.a,{stackable:!0,reversed:"mobile tablet",children:[Object($.jsx)(xn.a.Column,{mobile:16,tablet:16,computer:10,children:Object($.jsx)(Xr,{limit:25})}),Object($.jsx)(xn.a.Column,{mobile:16,tablet:16,computer:6,children:Object($.jsx)(_n,{dismissable:!0,content:"This is the place to discuss on-chain tips. Tip posts are automatically generated as soon as they are created on-chain. Only the proposer is able to edit them.",name:"onchainInfo",title:"About On-chain tips"})})]})]})))`
  h1 {
    @media only screen and (max-width: 576px) {
      margin: 3rem 1rem 1rem 1rem;
    }

    @media only screen and (max-width: 768px) and (min-width: 576px) {
      margin-left: 1rem;
    }

    @media only screen and (max-width: 991px) and (min-width: 768px) {
      margin-left: 1rem;
    }
  }

  @media only screen and (max-width: 991px) and (min-width: 768px) {
    .ui[class*='tablet reversed'].grid {
      flex-direction: column-reverse;
    }
  }
`;var ei=Object(L.b)((({className:e,data:t})=>t.posts&&t.posts.length?Object($.jsx)("ul",{className:`${e} proposals__list`,children:t.posts.map((e=>{var t,o,n,a,s,r;const i=null===(t=e.onchain_link)||void 0===t?void 0:t.onchain_treasury_proposal_id;return!!(null===e||void 0===e||null===(o=e.author)||void 0===o?void 0:o.username)&&e.onchain_link&&Object($.jsx)("li",{className:"proposals__item",children:Object($.jsx)(c.b,{to:`/treasury/${i}`,children:Object($.jsx)(Hn,{address:e.onchain_link.proposer_address,comments:(null===(n=e.comments_aggregate.aggregate)||void 0===n?void 0:n.count)?e.comments_aggregate.aggregate.count.toString():"no",onchainId:i,status:null===(a=e.onchain_link.onchain_treasury_spend_proposal)||void 0===a||null===(s=a[0])||void 0===s||null===(r=s.treasuryStatus)||void 0===r?void 0:r[0].status,title:e.title,topic:e.topic.name})})},e.id)}))}):Object($.jsx)(vn,{className:e,text:"There are currently no active treasury proposals."})))`
  margin-block-start: 0;
  margin-block-end: 0;

  li {
    list-style-type: none;
  }

  .proposals__item {
    margin: 0 0 1rem 0;
    a:hover {
      text-decoration: none;
    }
  }
`;var ti=({className:e,limit:t})=>{const[o,a]=Object(n.useState)(1),{data:s,error:r,loading:i,refetch:c}=(d={variables:{limit:t*o,postTopic:Jn,postType:Qn}},de.c(Io,d));var d;Object(n.useEffect)((()=>{c()}),[c]);return(null===r||void 0===r?void 0:r.message)?Object($.jsx)(Zn,{text:r.message}):s?Object($.jsxs)($.Fragment,{children:[Object($.jsx)(ei,{className:e,data:s}),(i||s.posts.length===t*o)&&Object($.jsx)(aa,{onClick:()=>{a(o+1)},loading:i})]}):Object($.jsx)(oa,{})};var oi=Object(L.b)((({className:e})=>Object($.jsxs)("div",{className:e,children:[Object($.jsx)("h1",{children:"On-chain treasury proposals"}),Object($.jsxs)(xn.a,{stackable:!0,reversed:"mobile tablet",children:[Object($.jsx)(xn.a.Column,{mobile:16,tablet:16,computer:10,children:Object($.jsx)(ti,{limit:25})}),Object($.jsx)(xn.a.Column,{mobile:16,tablet:16,computer:6,children:Object($.jsx)(_n,{content:"This is the place to discuss on-chain treasury proposals. On-chain posts are automatically generated as soon as they are created on the chain. Only the proposer is able to edit them.",dismissable:!0,name:"onchainInfo",title:"About On-chain Treasury proposals"})})]})]})))`
  h1 {
    @media only screen and (max-width: 576px) {
      margin: 3rem 1rem 1rem 1rem;
    }

    @media only screen and (max-width: 768px) and (min-width: 576px) {
      margin-left: 1rem;
    }

    @media only screen and (max-width: 991px) and (min-width: 768px) {
      margin-left: 1rem;
    }
  }

  @media only screen and (max-width: 991px) and (min-width: 768px) {
    .ui[class*='tablet reversed'].grid {
      flex-direction: column-reverse;
    }
  }
`,ni=()=>{const{query:e}=zo(),t=e.id,o=Number(t)||0,{data:n,error:a,refetch:s}=(r={variables:{id:o}},de.c(Po,r));var r;return(null===a||void 0===a?void 0:a.message)?Object($.jsx)(Zn,{text:a.message}):n?Object($.jsx)(bs,{data:n,isTreasuryProposal:!0,refetch:s}):Object($.jsx)(oa,{})};var ai=Object(L.b)((({className:e})=>{const t=zo(),o=Object(n.useContext)(D),{queueNotification:a}=Object(n.useContext)(dn),[s,{error:r}]=(i={variables:{token:t.query.token}},de.b(To,i));var i;return Object(n.useEffect)((()=>{s().then((({data:e})=>{var n,s;(null===e||void 0===e||null===(n=e.undoEmailChange)||void 0===n?void 0:n.token)&&C(e.undoEmailChange.token,o),(null===e||void 0===e||null===(s=e.undoEmailChange)||void 0===s?void 0:s.message)&&a({header:"Success!",message:e.undoEmailChange.message,status:hn.SUCCESS}),t.history.push("/")})).catch((e=>{console.error("Undo email Change error",e)}))}),[o,a,t.history,s]),Object($.jsx)($.Fragment,{children:(null===r||void 0===r?void 0:r.message)?Object($.jsxs)(ia.a,{className:e,children:[Object($.jsx)(ia.a.Column,{only:"tablet computer",tablet:2,computer:4,largeScreen:5,widescreen:5}),Object($.jsx)(ia.a.Column,{mobile:16,tablet:12,computer:8,largeScreen:6,widescreen:6,children:Object($.jsx)(wn.a,{children:Object($.jsxs)(xr.a,{as:"h2",icon:!0,children:[Object($.jsx)(J.a,{name:"ambulance"}),Object($.jsx)(Zn,{text:r.message})]})})})]}):Object($.jsx)(oa,{})})}))`
  text-align: center;
`;const si=O(),ri=()=>Object($.jsx)("span",{"aria-label":"council member",className:"councilMember",role:"img",children:"\ud83d\udc51"});var ii=Object(L.b)((({className:e})=>{var t,o,a;const s=zo(),{api:r,apiReady:i}=Object(n.useContext)(Mo),[c,d]=Object(n.useState)(null),[l,m]=Object(n.useState)(void 0),{data:u,error:h}=(p={variables:{username:s.query.username}},de.c(Ro,p));var p;const b=si===x.POLKADOT?null===u||void 0===u||null===(t=u.profile)||void 0===t?void 0:t.polkadot_default_address:null===u||void 0===u||null===(o=u.profile)||void 0===o?void 0:o.kusama_default_address;if(Object(n.useEffect)((()=>{if(!r)return;if(!i)return;if(!b)return;let e;return r.derive.accounts.info(b,(e=>{d(e.identity)})).then((t=>{e=t})).catch((e=>console.error(e))),()=>e&&e()}),[b,r,i]),Object(n.useEffect)((()=>{if(!r)return;if(!i)return;if(!b)return;let e;return r.derive.accounts.flags(b,(e=>{m(e)})).then((t=>{e=t})).catch((e=>console.error(e))),()=>e&&e()}),[b,r,i]),null===h||void 0===h?void 0:h.message)return Object($.jsx)(Zn,{text:h.message});const g=c?c.judgements.filter((([,e])=>!e.isFeePaid)):[],j=g.map((([,e])=>e.toString())).join(", "),y=g.some((([,e])=>e.isKnownGood||e.isReasonable)),f=g.some((([,e])=>e.isErroneous||e.isLowQuality)),_=y?"green":f?"brown":"grey",O=y?"check circle":"minus circle";return Object($.jsx)(ia.a,{className:e,children:Object($.jsx)(ia.a.Column,{mobile:16,tablet:16,computer:10,largeScreen:10,children:Object($.jsxs)("div",{className:"info-box",children:[Object($.jsx)("h2",{children:s.query.username}),b?Object($.jsxs)($.Fragment,{children:[Object($.jsx)("div",{className:"address-container",children:Object($.jsx)(Tn,{address:b})}),Object($.jsx)(Za,{address:b,className:"balance"}),c&&Object($.jsx)(Ks.a,{basic:"very",celled:!0,collapsing:!0,children:Object($.jsxs)(Ks.a.Body,{children:[(null===c||void 0===c?void 0:c.legal)&&Object($.jsxs)(Ks.a.Row,{children:[Object($.jsx)(Ks.a.Cell,{className:"desc",children:"Legal:"}),Object($.jsx)(Ks.a.Cell,{children:c.legal})]}),(null===c||void 0===c?void 0:c.email)&&Object($.jsxs)(Ks.a.Row,{children:[Object($.jsx)(Ks.a.Cell,{className:"desc",children:"Email:"}),Object($.jsx)(Ks.a.Cell,{children:Object($.jsx)("a",{href:`mailto:${c.email}`,children:c.email})})]}),(null===c||void 0===c||null===(a=c.judgements)||void 0===a?void 0:a.length)>0&&Object($.jsxs)(Ks.a.Row,{children:[Object($.jsx)(Ks.a.Cell,{className:"desc",children:"Judgements:"}),Object($.jsxs)(Ks.a.Cell,{className:"judgments",children:[Object($.jsx)(J.a,{name:O,color:_})," ",j]})]}),(null===c||void 0===c?void 0:c.pgp)&&Object($.jsxs)(Ks.a.Row,{children:[Object($.jsx)(Ks.a.Cell,{className:"desc",children:"PGP:"}),Object($.jsx)(Ks.a.Cell,{children:c.pgp})]}),(null===c||void 0===c?void 0:c.riot)&&Object($.jsxs)(Ks.a.Row,{children:[Object($.jsx)(Ks.a.Cell,{className:"desc",children:"Riot:"}),Object($.jsx)(Ks.a.Cell,{children:c.riot})]}),(null===c||void 0===c?void 0:c.twitter)&&Object($.jsxs)(Ks.a.Row,{children:[Object($.jsx)(Ks.a.Cell,{className:"desc",children:"Twitter:"}),Object($.jsx)(Ks.a.Cell,{children:Object($.jsx)("a",{href:`https://twitter.com/${c.twitter.substring(1)}`,children:c.twitter})})]}),(null===c||void 0===c?void 0:c.web)&&Object($.jsxs)(Ks.a.Row,{children:[Object($.jsx)(Ks.a.Cell,{className:"desc",children:"Web:"}),Object($.jsx)(Ks.a.Cell,{children:c.web})]}),(null===l||void 0===l?void 0:l.isCouncil)&&Object($.jsxs)(Ks.a.Row,{children:[Object($.jsx)(Ks.a.Cell,{className:"desc",children:"Roles:"}),Object($.jsxs)(Ks.a.Cell,{children:["Council member ",Object($.jsx)(ri,{})]})]})]})})]}):Object($.jsx)("p",{children:"No address attached to this account"})]})})})}))`
  display: flex;
  justify-content: center;

  .info-box {
    background-color: white;
    border-radius: 3px;
    box-shadow: ${({theme:e})=>e.colors.box_shadow_card};
    margin: 1rem;
    width: calc(100% - 60px);
    word-break: break-word;
    padding: 10px;
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;

    @media only screen and (max-width: 576px) {
      width: 100%;
      border-radius: 0px;
    }
  }

  .address-container {
    margin: 10px 0;
  }

  .desc {
    font-weight: bold;
  }
`;var ci=Object(L.b)((({className:e})=>{const t=zo(),o=Object(n.useContext)(D),{queueNotification:a}=Object(n.useContext)(dn),[s,{error:r}]=(i={variables:{token:t.query.token}},de.b(Fo,i));var i;return Object(n.useEffect)((()=>{s().then((({data:e})=>{var n,s;(null===e||void 0===e||null===(n=e.verifyEmail)||void 0===n?void 0:n.token)&&C(e.verifyEmail.token,o),(null===e||void 0===e||null===(s=e.verifyEmail)||void 0===s?void 0:s.message)&&a({header:"Success!",message:e.verifyEmail.message,status:hn.SUCCESS}),t.history.push("/")})).catch((e=>{console.error("Email verification error",e)}))}),[]),Object($.jsx)($.Fragment,{children:(null===r||void 0===r?void 0:r.message)?Object($.jsxs)(ia.a,{className:e,children:[Object($.jsx)(ia.a.Column,{only:"tablet computer",tablet:2,computer:4,largeScreen:5,widescreen:5}),Object($.jsx)(ia.a.Column,{mobile:16,tablet:12,computer:8,largeScreen:6,widescreen:6,children:Object($.jsx)(wn.a,{children:Object($.jsxs)(xr.a,{as:"h2",icon:!0,children:[Object($.jsx)(J.a,{name:"ambulance"}),Object($.jsx)(Zn,{text:r.message})]})})})]}):Object($.jsx)(oa,{})})}))`
  text-align: center;
`;const di={colors:{black_full:"#000",black_primary:"#2E2F30",black_text:"#53595C",blue_primary:"#4D9999",blue_secondary:"#EBF0F5",green_primary:"#4DD18F",green_secondary:"#399969",grey_app_background:"#F7F9FA",grey_border:"#DDE4ED",grey_light:"#EBF0F5",grey_primary:"#777B80",grey_secondary:"#A6ACB3",pink_primary:"#E5007A",pink_secondary:"#C40061",red_light:"#FFF1F0",red_primary:"#FF5A47",red_secondary:"#D94C3D",white:"#FFF",white_transparent:"rgba(255, 255, 255, 0.2)"},fontSizes:{input_text_size:"1.4rem",lg:"1.8rem",md:"1.5rem",sm:"1.3rem",xl:"2.4rem",xs:"1.2rem",xxl:"3rem"},fonts:{font_default:"Roboto",font_mono:"Roboto Mono",font_secondary:"Work Sans"},radii:{button_radius:"0.3rem",input_border_radius:"0.3rem"},shadows:{box_shadow_card:"0 0.2rem 0.4rem rgba(83, 89, 92, 0.15)",box_shadow_card_hover:"0 0.4rem 1.6rem rgba(83, 89, 92, 0.2)",box_shadow_sec_btn:"0 0 0 1px #706D6D inset",box_shadow_sec_btn_neg:"0 0 0 1px #D94C3D inset"}};o(1244),o(1245);const li=L.a`
  html {
    font-size: 62.5%;
  }

  body {
    margin: 0;
    font-family: font_default, 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({theme:e})=>e.colors.grey_app_background};
    color: ${({theme:e})=>e.colors.black_text};
  }

  pre {
    display: inline-block;
    max-width: 100%;
    white-space: pre-wrap;
    background-color: ${({theme:e})=>e.colors.grey_light};
  }

  code {
    display: inline-block;
    max-width: 100%;
    font-family: font_mono, source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
    background-color: ${({theme:e})=>e.colors.grey_light};
    color: ${({theme:e})=>e.colors.black_primary};
    font-size: ${({theme:e})=>e.fontSizes.sm};
  }

  ul {
    padding: 0;
  }

  p {
    a {
      color: ${({theme:e})=>e.colors.pink_primary};
      &:hover {
        color: ${({theme:e})=>e.colors.pink_secondary};
      }
    }
  }

  a:hover {
    text-decoration: none;
  }

  .container-fluid {
    max-width: 1200px;
    padding: 0 2.5rem 0 2.5rem;
    margin: 3.75rem auto 0 auto;

    @media (max-width: 1299px) {
      padding: 0 2.5rem 0 2.5rem;
    }
  }

  #page-container {
    position: relative;
    min-height: 100vh;
  }

  .ui.container {
    margin: 4rem auto 0 auto;
    padding-bottom: 8rem;

    @media only screen and (max-width: 1299px) and (min-width: 992px) {
      width: calc(100% - 6rem);
    }

    @media only screen and (min-width: 1299px) {
      width: 1238px;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${({theme:e})=>e.colors.black_primary};
    font-family: ${({theme:e})=>e.fonts.font_default};
    line-height: 100%;
    margin-top: 0;
  }

  h1, h2, h3 {
    font-weight: 400;
    font-size: ${({theme:e})=>e.fontSizes.xxl};
  }

  h3 {
    font-weight: 400;
  }

  h4, h5, h6 {
    font-weight: 500;
  }

  h1 {
    margin-bottom: 3rem;
  }

  h2 {
    margin-bottom: 1.2rem;
  }

  h3, h4 {
    font-size: ${({theme:e})=>e.fontSizes.lg};
    margin-bottom: 1.2rem;
  }

  h5, h6 {
    font-size: ${({theme:e})=>e.fontSizes.md};
    margin-bottom: 0.4rem;
  }

  strong {
    font-weight: 500;
  }

  ::selection {
    background-color: ${({theme:e})=>e.colors.black_primary};
    color: white;
  }

  .ui.dropdown .menu, .ui.dropdown .menu>.item {
    font-size: ${({theme:e})=>e.fontSizes.sm};
  }

  @media only screen and (max-width: 768px) {
    .container-fluid {
      margin: 2.5rem auto 0 auto;
      padding: 0 1.25rem 0 1.25rem;
    }

    .ui.container, .ui.grid>.column:not(.row) {
      padding-left: 0;
      padding-right: 0;
    }
  }

  @media only screen and (max-width: 576px) {
    .container-fluid {
      padding:0;
    }

    .ui.grid, .ui.container {
      margin-top: 0rem!important;
      margin-left: 0!important;
      margin-right: 0!important;
    }

    h3 {
      font-size: 2.1rem;
    }
  }
`;var mi=()=>Object($.jsx)($.Fragment,{children:Object($.jsx)(c.a,{basename:"/polkadot-hackathon",children:Object($.jsx)(i.b,{theme:di,children:Object($.jsx)(ln,{children:Object($.jsx)(tn,{children:Object($.jsx)(I,{children:Object($.jsx)(H,{children:Object($.jsxs)(q,{children:[Object($.jsx)(Y,{}),Object($.jsx)(li,{}),Object($.jsx)(yn,{}),Object($.jsx)(rn,{}),Object($.jsx)(Bo,{children:Object($.jsxs)("div",{id:"page-container",children:[Object($.jsx)(Xo,{}),Object($.jsx)(l.a,{children:Object($.jsxs)(d.c,{children:[Object($.jsx)(d.a,{exact:!0,path:"/",children:Object($.jsx)(Es,{})}),Object($.jsx)(d.a,{path:"/reset-password",children:Object($.jsx)(_r,{})}),Object($.jsx)(d.a,{exact:!0,path:"/bounty/:id",children:Object($.jsx)(gs,{})}),Object($.jsx)(d.a,{exact:!0,path:"/motion/:id",children:Object($.jsx)(zs,{})}),Object($.jsx)(d.a,{exact:!0,path:"/proposal/:id",children:Object($.jsx)(ur,{})}),Object($.jsx)(d.a,{exact:!0,path:"/referendum/:id",children:Object($.jsx)(yr,{})}),Object($.jsx)(d.a,{exact:!0,path:"/treasury/:id",children:Object($.jsx)(ni,{})}),Object($.jsx)(d.a,{exact:!0,path:"/tech/:id",children:Object($.jsx)(Vr,{})}),Object($.jsx)(d.a,{exact:!0,path:"/tip/:hash",children:Object($.jsx)(Jr,{})}),Object($.jsx)(d.a,{path:"/onchain",children:Object($.jsx)(Hs,{})}),Object($.jsx)(d.a,{path:"/delegation",children:Object($.jsx)(Cs,{})}),Object($.jsx)(d.a,{path:"/bounties",children:Object($.jsx)(ra,{})}),Object($.jsx)(d.a,{path:"/referenda",children:Object($.jsx)(jr,{})}),Object($.jsx)(d.a,{path:"/proposals",children:Object($.jsx)(br,{})}),Object($.jsx)(d.a,{path:"/motions",children:Object($.jsx)(Ms,{})}),Object($.jsx)(d.a,{path:"/treasury-proposals",children:Object($.jsx)(oi,{})}),Object($.jsx)(d.a,{path:"/tech-comm-proposals",children:Object($.jsx)(Kr,{})}),Object($.jsx)(d.a,{path:"/tips",children:Object($.jsx)(Zr,{})}),Object($.jsx)(d.a,{path:"/request-reset-password",children:Object($.jsx)(fr,{})}),Object($.jsx)(d.a,{path:"/verify-email/:token",children:Object($.jsx)(ci,{})}),Object($.jsx)(d.a,{path:"/undo-email-change/:token",children:Object($.jsx)(ai,{})}),Object($.jsx)(d.a,{path:"/settings",children:Object($.jsx)(Gr,{})}),Object($.jsx)(d.a,{path:"/notification-settings",children:Object($.jsx)(Gs,{})}),Object($.jsx)(d.a,{path:"/terms-and-conditions",children:Object($.jsx)(Fs,{})}),Object($.jsx)(d.a,{path:"/terms-of-website",children:Object($.jsx)(Ls,{})}),Object($.jsx)(d.a,{path:"/privacy",children:Object($.jsx)(qs,{})}),Object($.jsx)(d.a,{path:"/user/:username",children:Object($.jsx)(ii,{})}),Object($.jsx)(d.a,{path:"/search",children:Object($.jsx)(Dr,{})}),Object($.jsx)(d.a,{path:"/council",children:Object($.jsx)(xs,{})}),Object($.jsx)(d.a,{path:"/profile/:address",children:Object($.jsx)(mr,{})}),Object($.jsx)(d.a,{path:"*",children:Object($.jsx)(Bs,{})})]})}),Object($.jsx)(W,{})]})})]})})})})})})})});r.a.render(Object($.jsx)(mi,{}),document.getElementById("root"))},173:function(e,t,o){"use strict";var n=o(7),a=(o(2),o(638)),s=o.n(a),r=o(1);t.a=Object(n.b)((({className:e,isPreview:t=!1,md:o})=>Object(r.jsx)(s.a,{className:t?`${e} mde-preview-content`:e,source:o,linkTarget:"_blank"})))`
  &,
  &.mde-preview-content {
    font-size: md;
    margin-bottom: 2rem;
    overflow-wrap: break-word;

    p,
    blockquote,
    ul,
    ol,
    dl,
    table {
      line-height: 150%;
      margin: 0 0 1.5rem 0;
    }

    h1 {
      font-size: 3rem;
      margin-bottom: 3rem;
    }

    h2 {
      font-size: 2.4rem;
      margin: 3rem 0 2rem 0;
    }

    h3,
    h4 {
      font-size: lg;
      margin-bottom: 0.8rem;
    }

    ul,
    ol {
      padding-left: 2rem;

      li {
        padding-left: 0.8rem;
        margin-bottom: 1.2rem;
      }

      li > input {
        display: none;
      }
    }

    a {
      color: pink_primary;

      &:hover {
        text-decoration: none;
        color: ${({theme:e})=>e.colors.pink_secondary};
      }
    }

    blockquote {
      margin-left: 0;
      padding: 0 1em;
      color: ${({theme:e})=>e.colors.grey_primary};
      border-left-style: solid;
      border-left-width: 0.25rem;
      border-left-color: ${({theme:e})=>e.colors.grey_primary};
      font-size: 1.6rem;
      & > :first-child {
        margin-top: 0;
      }
      & > :last-child {
        margin-bottom: 0;
      }
    }

    img {
      max-width: 100%;
      margin: 2rem 0;
    }

    pre {
      background-color: ${({theme:e})=>e.colors.grey_light};
      padding: 1.6rem;
      overflow: auto;
      border-radius: 0.3rem;
    }

    code {
      margin: 0;
      font-size: ${({theme:e})=>e.fontSizes.sm};
      border-radius: 3px;
      color: ${({theme:e})=>e.colors.black_text};
      white-space: pre;
      &::before,
      &::after {
        letter-spacing: -0.2em;
      }
      overflow: overlay;
    }
  }

  &.mde-preview-content {
    h1,
    h2,
    h3,
    h4 {
      border-bottom: none;
    }

    h1,
    h2 {
      font-size: lg;
      font-weight: 400;
    }

    h3,
    h4 {
      font-size: md;
      font-weight: 500;
    }

    h3 {
      font-family: font_default !important;
    }
  }
`},222:function(e,t){},639:function(e,t,o){"use strict";(function(e){o.d(t,"a",(function(){return m}));o(1221);var n=o(7),a=o(2),s=o.n(a),r=o(374),i=o.n(r),c=o(173),d=o(1);const l=n.b.div`
  textarea {
    border-radius: 0rem;
    border: none !important;
    color: black_text !important;
    padding: 1rem 1.2rem !important;
    line-height: 1.4 !important;
  }

  @media only screen and (max-width: 768px) {
    .react-mde {
      .mde-header {
        .mde-header-group {
          margin-left: 0 !important;
          padding: 1rem 0.5rem;
          background-color: white;
          width: 100%;

          &.hidden {
            visibility: hidden;
            display: none;
          }

          .mde-header-item {
            button {
              font-size: 1.3rem !important;
            }
          }
        }

        .mde-tabs {
          margin: 0rem 0rem !important;
          width: 100%;

          button {
            margin: 0 auto;
            width: 48%;
            border-bottom-right-radius: 0 !important;
            border-bottom-left-radius: 0 !important;

            &.selected {
              border-bottom-color: white !important;
              z-index: 1;
            }
          }
        }
      }
    }
  }

  .react-mde {
    border-color: ${({theme:e})=>e.colors.grey_light};
    font-size: 1.4rem;

    .grip {
      border-top: none;
      color: ${({theme:e})=>e.colors.grey_secondary} .icon {
        margin-bottom: 1rem;
      }
    }

    .mde-header {
      background-color: grey_app_background;
      border-bottom-style: solid;
      border-bottom-width: 1px;
      border-bottom-color: ${({theme:e})=>e.colors.grey_light};

      .mde-tabs {
        margin: 0rem 0.5rem;

        button {
          font-family: font_default;
          font-size: ${({theme:e})=>e.fontSizes.sm};
          font-weight: 500;
          padding: 0.8rem 1.6rem;
          color: ${({theme:e})=>e.colors.black_text};
          background: grey_app_background;
          border-radius: 0.3em;
          border-bottom-color: ${({theme:e})=>e.colors.grey_light};
          margin-bottom: -1px;
          margin-top: 1rem;

          &.selected,
          &:focus {
            background: white;
            color: ${({theme:e})=>e.colors.black_primary};
            border-style: solid;
            border-width: 1px;
            border-color: ${({theme:e})=>e.colors.grey_light};
            outline: none;
            border-bottom-color: white;
            margin-bottom: -1px;
            border-bottom-right-radius: 0;
            border-bottom-left-radius: 0;
            margin-top: 1rem;
          }

          &:hover {
            color: ${({theme:e})=>e.colors.black_primary};
          }
        }
      }

      .mde-header-group {
        margin-left: auto;

        .mde-header-item {
          button {
            color: ${({theme:e})=>e.colors.grey_primary};
            font-size: 1.4rem;

            &:hover,
            &:active,
            &:focus {
              color: ${({theme:e})=>e.colors.black_primary};
            }
          }

          .react-mde-dropdown {
            border-style: solid;
            border-width: 1px;
            border-color: ${({theme:e})=>e.colors.grey_light};
            border-radius: 0.5rem;

            .mde-header-item {
              button {
                p {
                  color: ${({theme:e})=>e.colors.grey_primary};
                }

                p:hover {
                  color: ${({theme:e})=>e.colors.black_primary};
                }
              }
            }
          }
        }
      }
    }
  }
`;function m(t){const[o,n]=s.a.useState("write");return Object(d.jsx)(l,{className:"container",children:Object(d.jsx)(i.a,{generateMarkdownPreview:e=>Promise.resolve(Object(d.jsx)(c.a,{isPreview:!0,md:e})),minEditorHeight:t.height,minPreviewHeight:t.height,name:t.name,onTabChange:n,selectedTab:o,loadSuggestions:async t=>new Promise((o=>{const n=e.window.localStorage.getItem("users");o((n?n.split(","):[]).map((t=>({preview:t,value:`[@${t}](${e.window.location.origin}/user/${t})`}))).filter((e=>e.preview.toLowerCase().includes(t.toLowerCase()))))})),toolbarCommands:[["bold","header","link","quote","strikethrough","code","image","ordered-list","unordered-list"]],...t})})}}).call(this,o(39))},701:function(e,t){},703:function(e,t){},716:function(e,t){},718:function(e,t){},746:function(e,t){},748:function(e,t){},749:function(e,t){},754:function(e,t){},756:function(e,t){},762:function(e,t){},764:function(e,t){},783:function(e,t){},795:function(e,t){},798:function(e,t){},920:function(e,t){}},[[1246,1,2]]]);
//# sourceMappingURL=main.18ca07b4.chunk.js.map